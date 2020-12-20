const puppeteer = require("puppeteer");
const firebase = require("firebase");
const request = require("request");
const cheerio = require("cheerio");
var config = {
    apiKey: "AIzaSyC_zg-7N_LpvkhLAymvksM7Y9lrcA0AkjY",
    authDomain: "dogtag-e36b1.firebaseapp.com",
    databaseURL: "https://dogtag-e36b1.firebaseio.com/"
};
var Names=[]
var browser;
var json=[]
var books=[]
var nextPage='True';
var url = 'https://www.pdfdrive.com/category/19';
var app = firebase.initializeApp(config)
function readNames(callback){
    firebase.database().ref('Names').on('value',function(snapshot){
    var data="";
    snapshot.forEach(function(childSnapshot){
           data = childSnapshot.val();
           Names.push(data.name);
         })
        });
}
async function launch (callback){
  browser = await puppeteer.launch({headless:true})
  callback(json,-1,finder)
}  
//Delay
function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}
//Finder Normal Links function with cheerio
function finder(json,ind,callback) {
  try{
    if(nextPage!='None'){  
    var count = ind;
    if(nextPage!='True'){
    url=nextPage 
    }
    request(url,(error,response,html)=> {
        if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('.file-right').find('a').each(function (i, elem) {
        // Range Name
        if($(this).attr('href').trim()!=''){
          json.push({});
          count=count+1;
          json[count].name = $(this).text().trim();         
          json[count].link = 'https://www.pdfdrive.com'+$(this).attr('href').trim();          
        }
        });
        $('body > div.dialog > div.dialog-main > div.dialog-left > div.pagination > div > ul > li:nth-last-child(1)').find('a').each(async function (i, elem) {
        // Range Name
        if($(this).attr('href')!='javascript:void(0)' ){
          nextPage="https://www.pdfdrive.com"+$(this).attr('href');
        }else{
          nextPage='None';
        }
        });
        console.log("next")
        console.log(nextPage)
        if(nextPage!='None' && nextPage!='True'){
        callback(json,count,finder);
        }else{
            callback(json,count,dlinks)
        }
      }
    });
      
  }else{
      callback(json,0,dlinks)
  }
}catch (error) {
    return {"error":"error"}

  }
}
var count = 0;  
async function dlinks(json,count,callback) {
  try{
    if(count<json.length){
        console.log(json[count].link)
        request(json[count].link,(error,response,html)=> {
      if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('#download-button-link').each(function () {
        json[count].dlink="https://www.pdfdrive.com"+$(this).attr('href').trim()     
      });
       $('.ebook-left').find('img').each(function (i, elem) {
        // Range Name
        if($(this).attr('src').trim()!=''){
          json[count].image = $(this).attr('src').trim();
        }
        });
      }
      if(count+1==json.length){
    callback(json,count+1,downloadLink)
  }else{
  callback(json,count+1,dlinks)
  }
    });
  }else{
    callback(0,json.length,downloadLink)
  }
}catch (error) {
    console.log("error")
  }
}
//Puppeteer Function for D Link
async function downloadLink(index,size,callback){
    if(index<size){
    try{
    dUrl = json[index].dlink
    console.log(dUrl);
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); 
    await page.setRequestInterception(true);  
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet')
            request.abort();
        else
            request.continue();
        });            
    await page.goto(dUrl,{waitUntil:"networkidle0"})
    console.log("loading wait")
    await delay(10000);
    
    var download;
    try{
    download = await page.$eval("#alternatives > div.text-center > a",(elm) => elm.href);
    }catch(error){
      console.log("eror")
    download = await page.$eval("#alternatives > div.text-center > div > a",(elm) => elm.href);
    if (!(download.endsWith("pdf"))){
      download = await page.$eval("#alternatives > div.text-center > div > div > a:nth-child(1)",(elm) => elm.href);
      if (!(download.endsWith("pdf"))){
      download = await page.$eval("#alternatives > div.text-center > div > div > a:nth-child(2)",(elm) => elm.href);
      }
    }
    
  }

    json[index].file=download;
    await page.close()
    console.log(json[index])
    callback(index+1,size,downloadLink)
  }catch(err){if(json[index].dlink==undefined){
    console.log("D url undefined")  }else{console.log("err")}
    callback(index+1,size,downloadLink)}}else{
    //display(json)  
    books=json
     goodReadsSearch(0,goodReadInformation)
    //writeUserData(0,writeUserData)
  }
  }
  //Good Reads 
function goodReadsSearch(index, callback){
if(index<books.length){
    console.log("callin")
    var name = books[index].name.trim().replace(/ /g,'+')
var url="https://www.goodreads.com/search?q="+name+"&search_type=books";
console.log(url)
var book = "https://www.goodreads.com"
request(url,(error,response,html)=> {
    if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('body > div.content > div.mainContentContainer > div.mainContent > div.mainContentFloat > div.leftContainer > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').each(async function (i, elem) {
        console.log($(this).attr('href').trim())
        book=book+$(this).attr('href').trim()
        });
        counter=0
        $('body > div.content > div.mainContentContainer > div.mainContent > div.mainContentFloat > div.leftContainer > table > tbody > tr:nth-child(1) > td:nth-child(2) > span:nth-child(4) > div > a > span').each(async function (i, elem) {
      if(counter<1)
          books[index].author = $(this).text().trim()
          counter++;
      });
      console.log("call")
        callback(index,book,goodReadsSearch)
      }else{
          console.log("error search")
          writeBookDataHalf(Math.round((Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10))).toString(36).slice(1),books[index]);
        display(books[index]);
        console.log("out")
        goodReadsSearch(index+1,goodReadInformation)
    }
    });
}else{
    console.log("Doni bro")
}  
}

function goodReadInformation(index,book,callback){
  console.log("in")
    request(book,(error,response,html)=> {
    if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        counter = 0;
        $('#description').find('span').each(async function (i, elem) {
          if(counter<1){
          books[index].description=$(this).text().trim()
        counter++;  
        }
        });
        var cat = ""
        counter=0;
        $('.elementList').find('a').each(async function (i, elem) {
        if(($(this).attr('href').trim().startsWith("/genres"))&&counter<4){
          cat=cat+$(this).text().trim()+","
          counter++;
        }
        books[index].categories=cat
        
      });
      console.log("writing")
      //writeUserData(Math.round((Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10))).toString(36).slice(1),books[index]);
      display(books[index]);
      console.log("info Out")
      callback(index+1,goodReadInformation)
    }else{console.log("error info")
    goodReadInformation(index,book,goodReadsSearch)
}
    });
}
//Display
function display(cat){
console.log(cat);
console.log(cat.length)
}
        
function writeUserData(id,obj) {
  firebase.database().ref('Books/'+id).set(obj);
 Names.push({});
 Names[Names.length-1].name = obj.name;
 Names[Names.length-1].id = id;
firebase.database().ref('Names/').set(Names);
}

launch(finder)