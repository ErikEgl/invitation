
function clock() {
    let currentTime = new Date();
  
    let wYear = 2022;
    let wMonth = 1;
    let wDay = 26;
    let wHour = 12;
    let weddingDay
     = new Date(wYear, wMonth, wDay, wHour);


    
  
    function msCount(msEvent, $mo, $d, $h, $mi, $s) {
      let millisecondsTillComing = msEvent - currentTime;
      let months = parseInt(
        (millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12
      );
      let days = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30);
      let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
      let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
      let seconds = parseInt((millisecondsTillComing / 1000) % 60);
  
      //add zero, if <10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      //declension of numerical values
      function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) {
          return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
          return text_forms[1];
        }
        if (n1 == 1) {
          return text_forms[0];
        }
        return text_forms[2];
      }
  
      $mo.textContent =
        months + declOfNum(months, [' месяц', ' месяца', ' месяцев']);
      $d.textContent = days + declOfNum(days, [' день', ' дня', ' дней']);
      $h.textContent = hours + declOfNum(hours, [' час', ' часа', ' часов']);
      $mi.textContent =
        minutes + declOfNum(minutes, [' минута', ' минуты', ' минут']);
      $s.textContent =
        seconds + declOfNum(seconds, [' секунда', ' секунды', ' секунд']);
    }
    msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds);
  }
  clock();
  setInterval(clock, 1000);
  


  