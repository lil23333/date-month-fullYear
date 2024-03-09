let btn = document.querySelector('#btn');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');

btn.addEventListener('click', ()=> {
let curDate = new Date();
day.textContent = curDate.getDate();
month.textContent =curDate.toLocaleDateString('default', {month : 'long'});
year.textContent = curDate.getFullYear();
});









