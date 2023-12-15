document.addEventListener('DOMContentLoaded', function () {
    const counterValueElement = document.getElementById('counter-value');
    const increaseButton = document.getElementById('increase-btn');
    const decreaseButton = document.getElementById('decrease-btn');
    const resetButton = document.getElementById('reset-btn');

    let counterValue = 0;

    increaseButton.addEventListener('click', function () {
        counterValue++;
        updateCounter();
    });

    decreaseButton.addEventListener('click', function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });

    resetButton.addEventListener('click', function () {
        counterValue = 0;
        updateCounter();
    });

    function updateCounter() {
        counterValueElement.textContent = counterValue;
    }
});
