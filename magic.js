var acc = document.getElementsByClassName("accordian");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    let x = this.lastChild
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      x.setAttribute("src","assets/images/icon-plus.svg");
    } else {
      panel.style.display = "block";
      x.setAttribute("src","assets/images/icon-minus.svg");
    }
  });
}
