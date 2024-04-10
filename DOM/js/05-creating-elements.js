const titleEl = document.createElement('h1');
console.log(titleEl);

titleEl.classList.add('page_title');
console.log(titleEl);
titleEl.textContent = "Це заголовок сторінки";

document.body.appendChild(titleEl);