const time =document.querySelector(".hedr-time");
console.log(time);

var counter = setInterval(function(){
let date=new Date();
 time.innerHTML = date.getHours()+ ":" + date.getMinutes() + ":"+ date.getSeconds();
},1000);

const dateobj = document.querySelector(".hedr-date");
const date = new Date()
dateobj.innerHTML = date.getDate() + "/"+ (Number (date.getMonth()) +1) + "/" + date.getFullYear();
