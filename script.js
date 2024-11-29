document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const boxes = document.querySelectorAll('.box');
    const lowerBoxes = document.querySelectorAll('.lower-box');

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            boxes.forEach((box, boxIndex) => {
                if (index === boxIndex) {
                    box.classList.add('highlighted');
                    lowerBoxes[boxIndex].style.display = 'flex';
                } else {
                    box.classList.remove('highlighted');
                    lowerBoxes[boxIndex].style.display = 'none';
                }
            });
        });
    });
});

