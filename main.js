// Set the date of the anniversary
const anniversaryDate = new Date('2022-01-01');

// Set the date of the next meeting
const nextMeetingDate = new Date('2024-12-25');

function updateDaysTogether() {
    const today = new Date();
    const differenceInTime = today.getTime() - anniversaryDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    document.getElementById('days-together').textContent = differenceInDays;
}

function updateCountdown() {
    const today = new Date();
    const differenceInTime = nextMeetingDate.getTime() - today.getTime();

    if (differenceInTime > 0) {
        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown-timer').textContent = "We've met!";
    }
}

// Update the counters when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateDaysTogether();
    updateCountdown();

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});