const card = document.getElementById("card-container");
const postWarToPresent = document.querySelectorAll('#Post')
const postWarToPresentRead = document.querySelector('#Present')
const postWarToPresentReturn = document.querySelectorAll('#present_return')
const main = document.querySelector('.main');

const COUNTRIES = [
          {
               name:"PRE",
               container: document.getElementById("Pre")
          },
          {
               name:"SPAIN",
               container: document.getElementById("Spa")
          },
          {
               name:"AMERICA",
               container: document.getElementById("Ame")
          },
          {
               name:"JAPAN",
               container: document.getElementById("Jap")
          }
]
//helper function sleep
function sleep(ms) {  return new Promise(resolve => setTimeout(resolve, ms));}
//close function
function close(container){
  let isAnimationFinished = async()=>{
          container.style.animation = "close 2s linear";      
          await sleep(2000);
          return true;
     }
     isAnimationFinished().then(()=>{
          container.style.display = "none";
          card.style.display ="flex";
          main.style.animation = "reloadBody 2s linear";
     })
}
//open function
function open(container){
     card.style.display ="none";
     container.style.display = "flex";
     container.style.animation = "open 2s linear";
}
//return function
function returnToMain(name){
     COUNTRIES.forEach((country)=>{
          if(country.name === name){
               close(country.container)
          }
          if(name === "PRESENT"){
           postWarToPresent.forEach((containerElement)=>{
               close(containerElement)
          }) 
          }
     })
 }
 //read function
 function readArticle(name){
      COUNTRIES.forEach((country)=>{
           if(country.name === name){
                open(country.container)
           }
           if(name === 'PRESENT'){
               postWarToPresent.forEach((containerElement)=>{
               open(containerElement)
               }) 
           }
      })
 }
