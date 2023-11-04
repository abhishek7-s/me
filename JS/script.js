

var togglebtn = document.getElementById("toggle-btn");
var navList = document.getElementById("navItem");

togglebtn.addEventListener('click',() => {
    navList.classList.toggle('active');
})


var darkbtn = document.getElementById("checkbox");
var main = document.getElementById("main");

darkbtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    navList.classList.toggle('darknav');
})