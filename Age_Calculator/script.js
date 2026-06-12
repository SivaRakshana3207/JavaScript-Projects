const bdEl = document.getElementById("birth-date");
const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth()+1;
    const currDay = new Date().getDate();

    const bd = bdEl.value;
    const [year,month,day] = bd.split("-");

    const ageYear = currYear-year;
    const ageMonth = currMonth-month;
    const ageDays = currDay-day;

    yearEl.textContent = ageYear;
    monthEl.textContent = ageMonth;
    dayEl.textContent = ageDays;
})

