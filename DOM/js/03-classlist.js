const btn = document.querySelector('.js-magic-btn');

// classList - Інтерфейс

// add(class)
// remove(class)
// toogle(class)
// replace(class)
// contains(class)

// const navEl = document.querySelector('.site-nav');
// console.dir(navEl.classList);
// navEl.classList.add('super-nav')
btn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    console.dir(navEl.classList);
    // navEl.classList.add('super-nav', 'add')
    // navEl.classList.remove('add')
    // navEl.classList.toggle('super-nav')
    // navEl.classList.replace('super-nav', 'new-super-nav')
    console.log(navEl.classList.contains('super-nav'));
});
