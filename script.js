var nestedElementOne = document.querySelector('.selected-one');
var nestedElementTwo = document.querySelector('.selected-two');
var nestedElementThree = document.querySelector('.selected-three');
var nestedElementFour = document.querySelector('.selected-four');
var nestedElementFive = document.querySelector('.selected-five');

document.getElementById('rate-one-btn').addEventListener('change', function() {
    if (this.checked) {
        nestedElementOne.style.display = 'block';
        nestedElementTwo.style.display = 'none';
        nestedElementThree.style.display = 'none';
        nestedElementFour.style.display = 'none';
        nestedElementFive.style.display = 'none';
    }
});

document.getElementById('rate-two-btn').addEventListener('change', function() {
    if (this.checked) {
        nestedElementOne.style.display = 'none';
        nestedElementTwo.style.display = 'block';
        nestedElementThree.style.display = 'none';
        nestedElementFour.style.display = 'none';
        nestedElementFive.style.display = 'none';
    }
});

document.getElementById('rate-three-btn').addEventListener('change', function() {
    if (this.checked) {
        nestedElementOne.style.display = 'none';
        nestedElementTwo.style.display = 'none';
        nestedElementThree.style.display = 'block';
        nestedElementFour.style.display = 'none';
        nestedElementFive.style.display = 'none';
    }
});

document.getElementById('rate-four-btn').addEventListener('change', function() {
    if (this.checked) {
        nestedElementOne.style.display = 'none';
        nestedElementTwo.style.display = 'none';
        nestedElementThree.style.display = 'none';
        nestedElementFour.style.display = 'block';
        nestedElementFive.style.display = 'none';
    }
});

document.getElementById('rate-five-btn').addEventListener('change', function() {
    if (this.checked) {
        nestedElementOne.style.display = 'none';
        nestedElementTwo.style.display = 'none';
        nestedElementThree.style.display = 'none';
        nestedElementFour.style.display = 'none';
        nestedElementFive.style.display = 'block';
    }
});

