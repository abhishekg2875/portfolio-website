var navLinks = document.getElementById("navLinks");
function showmenu(){
       navLinks.style.right="0";
    }
function hidemenu(){
        navLinks.style.right="-200px";
   }
const text = document.querySelector(".second-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "FullStack Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    },2000);
    setTimeout(() => {
      text.textContent = "FreeLancer";
    },4000);
}
textLoad();
setInterval
(textLoad,  6000);