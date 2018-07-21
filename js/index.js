window.onload = function() {

const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    const clock = document.querySelector('.clock');
    const audio = document.querySelector('.audio');
    const alerk = document.querySelector('.alerk');
    function setDate(){
        const today = new Date();
        
        const second = today.getSeconds();
        const secondDeg = ((second / 60) * 360) + 360; 
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
        if(second < 10)
            var second0 = "0"+second.toString();
        else var second0 = second.toString();
      
        //audio.play();
        
        const minute = today.getMinutes();
        const minuteDeg = ((minute / 60) * 360); 
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        if(minute < 10)
            var minute0 = "0"+minute.toString();
        else var minute0 = minute.toString();

        const hour = today.getHours();
        const hourDeg = ((hour / 12 ) * 360 ); 
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        if(hour < 10)
            var hour0 = "0"+hour.toString();
        else var hour0 = hour.toString();
        if((hour == 8 && minute == 30 && second == 0) || (hour == 11 && minute == 30 && second == 0) || (hour == 15 && minute == 30 && second == 0) || (hour == 17 && minute == 30 && second == 0) || (hour == 19 && minute == 0 && second == 0) || (hour == 21 && minute == 30 && second == 0) || (hour == 23 && minute == 0 && second == 0))
        {
            alerk.play();
        }
        time.innerHTML = '<span>' + '<strong>' + hour0 + '</strong>' + ' : ' + minute0 + ' : ' + '<small>' + second0 +'</small>'+ '</span>';

        }
  
    setInterval(setDate, 1000);
 
}