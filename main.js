(function () {
    // Constants for time units in milliseconds
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    // Retrieve the countdown value from local storage
    let countDown = localStorage.getItem("timeLeft");
  
    // If the countdown value is not available in local storage, set it to a future date
    if (!countDown) {
      countDown = new Date().getTime() + 10 * day;
      localStorage.setItem("timeLeft", countDown);
    }
  
    // Set an interval to update the countdown every second
    const x = setInterval(function () {
      // Calculate the remaining time
  
      const now = new Date().getTime(),
        distance = countDown - now;
  
      // Update the countdown display
      (document.getElementById("days").innerText = Math.floor(distance / day)),
        // display the countdown on the writeup
        (document.getElementById("display_days").innerText = Math.floor(
          distance / day
        )),
        
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
  
      // When the countdown ends, Restart countdown
      if (distance < 0) {
        // Restart the countdown to 9 days in the future
        countDown = new Date().getTime() + 10 * day;
        localStorage.setItem("timeLeft", countDown);
      }
    }, 0);
  })();
  