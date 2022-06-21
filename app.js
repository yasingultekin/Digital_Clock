const clock = document.querySelector(".clock");

function showTime() {
    let dateTime = new Date();
    //   console.log(dateTime);

    let time = dateTime.toLocaleTimeString();
    //   console.log(time);

    clock.innerHTML = time;

    let hours = dateTime.getHours();
    //   console.log(hours);
}

setInterval(showTime, 1000);