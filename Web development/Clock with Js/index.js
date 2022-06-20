const sec=document.getElementById('sec');
const min=document.getElementById('min');
const hour=document.getElementById('hour');


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    sec.style.transform=`rotate(${secondsDegree}deg)`;

    const minutes=now.getMinutes();
    const minsDegrees=((minutes/60)*360)+((seconds/60)*6)+90;
    min.style.transform=`rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees =((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate,1000);
setDate();