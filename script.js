// 1. Countdown Timer System
const countdown = () => {
    // Setting target date explicitly for August 2026 Bootcamp launch
    const countDate = new Date("August 1, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap <= 0) {
        document.getElementById("countdown").innerHTML = "<p class='text-gold text-xl font-bold'>Bootcamp is Live!</p>";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = textDay < 10 ? "0" + textDay : textDay;
    document.getElementById("hours").innerText = textHour < 10 ? "0" + textHour : textHour;
    document.getElementById("minutes").innerText = textMinute < 10 ? "0" + textMinute : textMinute;
    document.getElementById("seconds").innerText = textSecond < 10 ? "0" + textSecond : textSecond;
};
setInterval(countdown, 1000);

// 2. Animated Numerical Counters (Triggered when scrolled into view)
const counters = document.querySelectorAll('.stat-counter');
const speed = 100;

const runCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Simple IntersectionObserver to run stats animation gracefully when visible
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        runCounters();
        observer.disconnect();
    }
}, { threshold: 0.5 });

if(counters.length > 0) {
    observer.observe(counters[0].parentElement.parentElement);
}
