let goToTop = document.getElementById("go-to-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
const wMonths = document.querySelector("span[data-wMonths]");
const wDays = document.querySelector("span[data-wDays]");
const wHours = document.querySelector("span[data-wHours]");
const wMinutes = document.querySelector("span[data-wMinutes]");
const wSeconds = document.querySelector("span[data-wSeconds]");

const cMonths = document.querySelector("span[data-cMonths]");
const cDays = document.querySelector("span[data-cDays]");
const cHours = document.querySelector("span[data-cHours]");
const cMinutes = document.querySelector("span[data-cMinutes]");
const cSeconds = document.querySelector("span[data-cSeconds]");

const wordEndMonthsW = document.querySelector("span[data-wordEnd-wmonth]");
const wordEndDaysW = document.querySelector("span[data-wordEnd-wday]");
const wordEndHoursW = document.querySelector("span[data-wordEnd-whour]");
const wordEndMinutesW = document.querySelector("span[data-wordEnd-wminute]");
const wordEndSecondsW = document.querySelector("span[data-wordEnd-wsecond]");

const wordEndMonthsC = document.querySelector("span[data-wordEnd-cmonth]");
const wordEndDaysC = document.querySelector("span[data-wordEnd-cday]");
const wordEndHoursC = document.querySelector("span[data-wordEnd-chour]");
const wordEndMinutesC = document.querySelector("span[data-wordEnd-cminute]");
const wordEndSecondsC = document.querySelector("span[data-wordEnd-csecond]");

const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");

const images = [
  "bride-bouquet.svg",
  "bride-dress-wedding.svg",
  "gift.svg",
  "heart-balloons.svg",
  "stars-balloons.svg",
  "heart2.svg",
  "heart.svg",
  "time.svg",
  "wedding-day.svg",
  "wedding-building.svg",
  "wedding-cake.svg",
  "wedding-arch.svg",
  "wedding-suit.svg",
  "ring-heart.svg",
  "wedding.svg",
  "bride-dress-wedding.svg",
  "bride-bouquet.svg",
  "wedding-ring.svg",
  "ice-skate.svg",
];

function clock() {
  let currentTime = new Date();

  let wYear = 2022;
  let wMonth = 1;
  let wDay = 26;
  let wHour = 13;
  let weddingDay = new Date(wYear, wMonth, wDay, wHour);

  function msCount(msEvent, $mo, $d, $h, $mi, $s) {
    let millisecondsTillComing = currentTime - msEvent;
    let months = parseInt(
      (millisecondsTillComing / (1000 * 60 * 60 * 24 * 30)) % 12
    );
    let days = parseInt((millisecondsTillComing / (1000 * 60 * 60 * 24)) % 30);
    let hours = parseInt((millisecondsTillComing / (1000 * 60 * 60)) % 24);
    let minutes = parseInt((millisecondsTillComing / (1000 * 60)) % 60);
    let seconds = parseInt((millisecondsTillComing / 1000) % 60);

    //add zero, if <10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

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
      months + declOfNum(months, [" ??????????", " ????????????", " ??????????????"]);
    $d.textContent = days + declOfNum(days, [" ????????", " ??????", " ????????"]);
    $h.textContent = hours + declOfNum(hours, [" ??????", " ????????", " ??????????"]);
    $mi.textContent =
      minutes + declOfNum(minutes, [" ????????????", " ????????????", " ??????????"]);
    $s.textContent =
      seconds + declOfNum(seconds, [" ??????????????", " ??????????????", " ????????????"]);
  }
  msCount(weddingDay, wMonths, wDays, wHours, wMinutes, wSeconds);
}
clock();
setInterval(clock, 1000);

const video = document.querySelector("video");
const videoStartBtn = document.querySelector(".video-container-anchor");
const videoStartBtn1 = document.querySelector(".video-container-anchor1");

videoStartBtn.addEventListener("click", () => {
  setTimeout(() => {
    video.play();
  }, 100);
});
videoStartBtn1.addEventListener("click", () => {
  setTimeout(() => {
    video.play();
  }, 300);
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("???????????? ????????????????????!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

