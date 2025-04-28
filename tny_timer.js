"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Justin McClure
   Date: 2025-03-15

   Filename: tny_timer.js
*/

/*
   Call the showClock() function immediately to display the clock,
   then update it every second.
*/
showClock();
setInterval(showClock, 1000);

/*
   showClock Function:
   - Gets the current date and time.
   - Displays that date and time using local conventions.
   - Calculates the time remaining until 9 p.m. on the next July 4.
   - Updates the countdown clock on the page.
*/
function showClock() {
   // Step 1: Declare a variable 'thisDay' with the current date and time.
   var thisDay = new Date();
   // For testing with a fixed date, you could use:
   // var thisDay = new Date("May 19, 2021 09:31:27");

   // Step 2: Get local date and time strings from thisDay.
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   // Step 3: Display the current date and time in the element with id 'currentTime'.
   document.getElementById("currentTime").innerHTML =
      "<span>" + localDate + "</span><span>" + localTime + "</span>";

   // Step 4: Get the next July 4 date using the supplied nextJuly4() function.
   var j4Date = nextJuly4(thisDay);

   // Step 5: Set the countdown target time to 9 p.m. (21:00 in 24-hour time).
   j4Date.setHours(21, 0, 0);

   // Step 6: Calculate the time difference (in milliseconds) between j4Date and thisDay.
   var diff = j4Date - thisDay;

   // Calculate days, hours, minutes, and seconds remaining (rounded down).
   var days = Math.floor(diff / (1000 * 60 * 60 * 24));
   var remainder = diff % (1000 * 60 * 60 * 24);
   var hrs = Math.floor(remainder / (1000 * 60 * 60));
   remainder %= (1000 * 60 * 60);
   var mins = Math.floor(remainder / (1000 * 60));
   remainder %= (1000 * 60);
   var secs = Math.floor(remainder / 1000);

   // Step 7: Update the countdown clock elements with the calculated values.
   document.getElementById("dLeft").textContent = days;
   document.getElementById("hLeft").textContent = hrs;
   document.getElementById("mLeft").textContent = mins;
   document.getElementById("sLeft").textContent = secs;
}

/*
   nextJuly4 Function:
   Returns a Date object representing the next occurrence of July 4th
   based on the provided current date.
*/
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
