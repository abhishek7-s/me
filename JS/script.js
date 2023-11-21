

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






function reveal(className) {
  
  var reveals = document.querySelectorAll("."+className);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", function(){ reveal("abtme") });
  window.addEventListener("scroll", function(){ reveal("pcpic") });
  window.addEventListener("scroll", function(){ reveal("skillH1") });
  window.addEventListener("scroll", function(){ reveal("ls") });
  window.addEventListener("scroll", function(){ reveal("projectH1") });
  window.addEventListener("scroll", function(){ reveal("project") });
