const bdEl = document.getElementById("birth-date");
const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
    const today = new Date();
    const birthDate = new Date(bdEl.value);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const lastMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += lastMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    yearEl.textContent = years;
    monthEl.textContent = months;
    dayEl.textContent = days;
})

