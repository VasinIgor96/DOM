const magicBtn = document.querySelector('.js-magic-btn');
console.log(magicBtn);
const imageEl = document.querySelector('.hero__image')
console.dir(imageEl);
const heroTitle = document.querySelector('.hero__title');
console.log(heroTitle);



magicBtn.addEventListener('click', ()=>{
    imageEl.src = 'https://img.static-rmg.be/a/view/q75/w1600/h836/f50.00,50.00/1975848/shutterstock-235089946-jpg.jpg'
    imageEl.alt = 'New cat';
    imageEl.width = 360;
});
console.dir(heroTitle);
heroTitle.textContent = "Я новий кіт";

const inputEl = document.querySelector('#input_1');

const actions = document.querySelector('.js-action button');
console.log(actions);

console.log(actions);
console.log(actions[2].dataset.action);
console.log();
inputEl.value = "Hello";