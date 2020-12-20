const firebase = require("firebase");
const request = require("request");
const cheerio = require("cheerio");
const url="https://snewd.com/ebooks/";
var fs = require('fs');
var cat = []
var books = []
var Names = []
// Configuration for Fire Base
var config = {
    apiKey: "AIzaSyC_zg-7N_LpvkhLAymvksM7Y9lrcA0AkjY",
    authDomain: "dogtag-e36b1.firebaseapp.com",
    databaseURL: "https://dogtag-e36b1.firebaseio.com/"
  };
//Write Data to firebase
function writeUserData(id,obj) {
  firebase.database().ref('Books/'+id).set(obj);
 Names.push({});
 Names[Names.length-1].name = obj.name;
 Names[Names.length-1].id = id;
firebase.database().ref('Names/').set(Names);
}

//Write Data to firebase
function writeBookDataHalf(id,obj) {
  firebase.database().ref('Books/'+id).set({
        name: obj.name,
        author : "Unknown",
        file: obj.file,
        image: obj.image

    });
 Names.push({});
 Names[Names.length-1].name = obj.name;
 Names[Names.length-1].id = id;
firebase.database().ref('Names/').set(Names);
}
//Getting categories function
async function getCategories(callback){
    try{
    index=-1;
    request(url,(error,response,html)=> {
    if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('.elementor-heading-title').find('a').each(async function (i, elem) {
        // Range Name
        if($(this).attr('href').trim()!=''){
            index++;
            cat.push({});
            cat[index].name=$(this).text().trim();         
            cat[index].page=$(this).attr('href').trim();
        }
        });        
        //Calling Get Pages Function
        callback(0,-1,getBooksPages);
    }
    });
  }catch(error){
        callback(0,-1,getBooksPages);
  }
}
  //Getting page books list function
async function getBooksPages(pg,ind,callback){
    if(pg<cat.length){
    try{
    var TempIndex = ind;
    var index=ind;
    var url=cat[pg].page;
    console.log(url)
    request(url,(error,response,html)=> {
    if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('.elementor-icon-list-items').find('a').each(async function (i, elem) {
        // Range Name
        if($(this).attr('href').trim()!=''){
            index++;
            books.push({});
            books[index].book=$(this).attr('href').trim();
        }
    });
    console.log("books"+index+"temp"+TempIndex)
    const max = index;
    index=TempIndex;
    $('.elementor-icon-list-items').find('span').each(async function (i, elem) {
        try{
        if(!($(this).text().startsWith("\n")) && index<max){    
        index++;
        books[index].name=$(this).text();
        }
    }catch(error){console.log("Error")}
    });
    }else{
        console.log("error");
    }
    callback(pg+1,index,getBooksPages);
    });}catch(error){
        callback(pg+1,index,getBooksPages);
    }
    }else{
        //Calling Get Download Links For Each books
        getBooksDownload(0,getBooksDownload);        
    }
  }
//Getting page download book function
async function getBooksDownload(index,callback){
    if(index<books.length){
    try{
    var bUrl = books[index].book;
    console.log(bUrl)
    request(bUrl,(error,response,html)=> {
    if(!error && response.statusCode == 200 ){
        const $ =  cheerio.load(html);
        $('.elementor-image').find('img').each(async function (i, elem) {
            if(books[index].image==undefined){
            books[index].image='https://snewd.com/'+$(this).attr('src').trim();
        }
    });
    $('.elementor-button-wrapper').find('a').each(async function (i, elem) {
            if(books[index].file==undefined){
            books[index].file=$(this).attr('href').trim();
        }
    });
    }
    
    setTimeout(() => {  
        callback(index+1,getBooksDownload)
      }, 3000);
    });
    }catch(error){
        setTimeout(() => {  
        callback(index+1,getBooksDownload)
      }, 3000);
    }}else{
        goodReadsSearch(0,goodReadInformation)
    }
}
//Good Reads 
function goodReadsSearch(index, callback){
if(index<books.length){
    console.log("callin")
    var name = books[index].name.split("-")[0].trim().replace(/ /g,'+')
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
      writeUserData(Math.round((Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10))).toString(36).slice(1),books[index]);
      display(books[index]);
      console.log("info Out")
      callback(index+1,goodReadInformation)
    }else{console.log("error info")
    goodReadInformation(index,book,goodReadsSearch)
}
    });
}

//Display Function
function display(obj){
    console.log(obj);
}
//Initialize Firebase
firebase.initializeApp(config);
//Get Categories
getCategories(getBooksPages)

  
