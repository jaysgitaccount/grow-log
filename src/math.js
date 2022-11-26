const fertiliser = document.querySelector('#fertiliser-ratio');
const water = document.querySelector('#water-ratio');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let fertiliser = formData.get("fertiliser-ratio");
    let water = formData.get("water-ratio");
    let myWater = formData.get("my-water");

    document.querySelector('.result').textContent = 'Use ' + 
                         ( fertiliser * ( myWater / water ) ) + 
                         'ml fertiliser for ' +
                         myWater +
                         ' ml water.'
})