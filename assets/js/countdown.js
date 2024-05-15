// Select all elements and get current year
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const currentYear = new Date().getFullYear();

// Set the date of the next Olympic Games
const nextOlympicGames = new Date(2024, 6, 26); // July is the 7th month

function updateCountdown() {
  const currentTime = new Date();
  const diff = nextOlympicGames - currentTime;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Display the values
  daysElement.textContent = days;
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);