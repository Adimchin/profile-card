const timeElement = document.getElementById("time")

function updateTime() {
  timeElement.textContent = Date.now().toString()
}

updateTime();
setInterval(updateTime, 1000);