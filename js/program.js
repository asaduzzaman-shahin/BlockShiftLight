const navIcon = document.querySelector(".navIcon i");
const navIcons = document.querySelector(".navIcon");
const navMobile = document.querySelector(".navMenu ul");

const docu = document.querySelector(".docu");

const menuShow = () => {
    navMobile.classList.toggle("menuHide");
    navIcon.classList.toggle("fa-bars");
    navIcon.classList.toggle("fa-times");
    navIcons.classList.toggle("shadowChange")
    
}

navIcon.addEventListener("click", menuShow);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu ul li a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset =sec.offsetTop- 170;;
        let height =sec.offsetHeight;
        let id = sec.getAttribute("id");
        console.log("top="+ top+"!!!!!!"+"offset="+ offset+"!!!!!!"+"height="+ height+"!!!!!!"+"id="+ id+"!!!!!!");

        if(top >=offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector('ul li a[href*=' + id + ']').classList.add("active");
                // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    this.childNodes[1].classList.toggle("iconActive")

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
