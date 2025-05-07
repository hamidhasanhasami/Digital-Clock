const hours = document.querySelector('#hrs');
const minutes= document.querySelector('#min');
const seceonds = document.querySelector('#sec');

setInterval(()=>{ 
    const currentTime = new Date();
    hours.innerText = currentTime.getHours()<10?'0':'' + currentTime.getHours();
    minutes.innerText = currentTime.getMinutes()<10?'0':'' + currentTime.getMinutes();
    seceonds.innerText = currentTime.getSeconds()<10?'0':'' + currentTime.getSeconds();
},1000)

