const endDate = new Date("2026-04-28T15:16:00").getTime();
const startDate=new Date().getTime();


let x= setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now-startDate;
    const distancePending = endDate-now;

    //calculate days min hours sec
    // 1 day= 24*60*60*1000
    const oneDayInMillis=(24*60*60*1000);
    const onehourInMillis=(60*60*1000);
    const oneMinInMillis=(60*1000);
    const oneSecInMillis=(1000);
    const days=Math.floor (distancePending/(oneDayInMillis));
    const hrs=Math.floor((distancePending % (oneDayInMillis)/(onehourInMillis))); 
    const mins=Math.floor((distancePending % (onehourInMillis))/(oneMinInMillis));
    const secs=Math.floor((distancePending % (oneMinInMillis))/(oneSecInMillis));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;


    const totaldistance=endDate-startDate;
    const percentagediatance=(distanceCovered/totaldistance)*100;

    document.getElementById("progress-bar").style.width=percentagediatance+"%"
    

    if(distancePending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";
    }

},1000);
