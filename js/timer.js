const months = [
    "January",
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November",
    "December"  
  ]
  
  const weekdays = [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday" 
  ]
  
  const startYear = document.querySelector(".countdown-timer span");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  
  let futureDate = new Date(2028, 4, 20, 7, 0, 0);
  //let futureDate = new Date();

  let weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  let month = months[futureDate.getMonth()];
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  startYear.innerHTML = year;
  
  //future time in ms
  const futureTime = futureDate.getTime();
  
  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 100ms
    // 1s = 60s
    // 1hr = 60min
    // 1d = 24hr
    
    //values in ms 
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    //calculate all values 
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = (t % oneDay) / oneHour;
    hours = Math.floor(hours);
    let minutes = (t % oneHour) / oneMinute;
    minutes = Math.floor(minutes);
    let seconds = (t % oneMinute) / 1000;
    seconds = Math.floor(seconds);
    
    //set values array
    const values = [days, hours, minutes, seconds];
    
    function format(item){
      if (item < 10){
        return (item = `0${item}`);
      }
      return item;
    }
    
    items.forEach(
      function(item, index){
        item.innerHTML = format(values[index]);
      }
    );
    
    if (t < 0){
      clearInterval(countdown)
      deadline.innerHTML = `<p class="expired">BBSF ${year} Started</p>`;
    }
  
  };
  
  
  //countdown timer
  let countdown = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();   
  
  
  
  
  