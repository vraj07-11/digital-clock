
setInterval (async function() {
    let a = new Date()
    let hour = a.getHours()
    let min = a.getMinutes()
    let sec = a.getSeconds()
document.getElementById("hours").innerText = String(hour).padStart(2, '0');
document.getElementById("minutes").innerText = String(min).padStart(2, '0');
document.getElementById("seconds").innerText = String(sec).padStart(2, '0');
}, 1000)
