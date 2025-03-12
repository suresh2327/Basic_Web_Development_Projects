function updateTime(){
    const now=new Date();
    let hours =now.getHours();
    const ampm = hours >= 12? 'PM' : 'AM';
    hours =hours %12 || 12;
    hours = hours.toString().padStart(2,0)
    const min =now.getMinutes().toString().padStart(2,0);
    const sec =now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${min}:${sec}  ${ampm}`
    document.getElementById("myclock").textContent=timestring;


} 
setInterval(updateTime,1000);
updateTime();