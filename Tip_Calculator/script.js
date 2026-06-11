const billEl = document.getElementById("bill-amount");
const tipEl = document.getElementById("tip-percentage");
const calEl = document.getElementById("calculate");
const ansEl = document.getElementById("answer");

calEl.addEventListener("click", () => {
    const bill = Number(billEl.value);
    const tip = Number(tipEl.value);

    const tipAmt = bill * (tip / 100);
    const total = bill + tipAmt;

    ansEl.textContent = total.toFixed(2);
})
