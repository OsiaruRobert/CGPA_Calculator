/*UI*/
//our nav section
const sideNav = Id('sideNav');
//memu button
const menuButton = Id('menuButton');

//funtion that gets Element By Id
function Id(id) {
  return document.getElementById(id);
}
//Make it easy to modify different style properties
function specificStyle(ele, myStyle, myStyleValue) {
  ele.style[myStyle] = myStyleValue;
} //show nav when clicking on menu button
menuButton.addEventListener('click', () => specificStyle(sideNav, "right", "4vw"));
// Hide nav when clicking outside of it
document.addEventListener('click', (event) => {
  let isClickInsideNav = sideNav.contains(event.target);
  let isClickOnmenuButton = menuButton.contains(event.target);
  // Check if the click was outside of the nav and the toggle button
  if (!isClickInsideNav && !isClickOnmenuButton) {
    specificStyle(sideNav, "right", "-40vw");
    // Hide the menu
  }
});

//Page navigation
let navs = ["tips", "about",
    "manual"];
let NavPages = [];

function navigatePages(prefix) {
  window[prefix + "Button"] = Id(`${prefix}Button`);
  window[prefix + "Page"] = Id(`${prefix}Page`);
  NavPages.push(window[prefix + "Page"]);
  window[prefix + "Button"].addEventListener("click",
    () => {
      specificStyle(window[prefix + "Page"], "display", "block");
      setTimeout(function() {
        specificStyle(sideNav, "right", "-40vw");
      }, 100);
    })
};
navs.forEach((item) => {
  navigatePages(item);
});
//display none or block
function SeeOrHide(ele, visi) {
  Id(ele).style.display = visi;
}

document.querySelectorAll('.close_Aux').forEach((C) => {
  C.addEventListener('click', () => {
    document.querySelectorAll('.AuxPage').forEach((p) => {
      p.style.display = "none";
    })
  })
})


document.getElementById("exitTips").addEventListener('click', () => {
  document.querySelectorAll('.AuxPage').forEach((p) => {
    p.style.display = "none";
  })
})