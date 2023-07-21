let test=document;
let sec=test.getElementById('sec')
let min=test.getElementById('min')
let hour=test.getElementById('hour')
let dc=test.getElementById('digital')
setInterval(()=>{
    let date = new Date();
    let sectodeg=date.getSeconds()*6;
    sec.style.transform=`rotate(${sectodeg}deg)`;
    let mintodeg=date.getMinutes()*6;
    min.style.transform=`rotate(${mintodeg}deg)`;
    let hrtodeg=date.getHours()*30 +mintodeg/12;
    hour.style.transform=`rotate(${hrtodeg}deg)`;
    dc.innerHTML =date.getHours()+ ":"+ date.getMinutes()+":"+date.getSeconds()
})