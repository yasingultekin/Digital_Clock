const clock = document.querySelector(".clock");

function showTime() {
    let dateTime = new Date();
    //   console.log(dateTime);

    let time = dateTime.toLocaleTimeString();
    //   console.log(time);

    clock.innerHTML = time;

    let hours = dateTime.getHours();
    //   console.log(hours);

    if (0 > hours < 13 && hours < 13) {
        clock.innerHTML += `<span class="span">AM</span>`;
    } else {
        clock.innerHTML += `<span class="span">PM</span>`;
    }
}

setInterval(showTime, 1000);