
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const numberBankOutput = document.querySelector('#numberBank output');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');
    let numberBank = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const number = parseInt(form.number.value, 10);
        if (!isNaN(number)) {
            numberBank.push(number);
            updateNumberBankDisplay();
        }
    });

    document.getElementById('sortOne').addEventListener('click', () => {
        if (numberBank.length > 0) {
            sortNumber(numberBank.shift());
            updateNumberBankDisplay();
        }
    });

    document.getElementById('sortAll').addEventListener('click', () => {
        numberBank.forEach(sortNumber);
        numberBank = [];
        updateNumberBankDisplay();
    });

    function sortNumber(number) {
        if (number % 2 === 0) {
            evensOutput.textContent += number + ' ';
        } else {
            oddsOutput.textContent += number + ' ';
        }
    }

    function updateNumberBankDisplay() {
        numberBankOutput.textContent = numberBank.join(' ');
    }
});