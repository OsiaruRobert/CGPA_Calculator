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
    specificStyle(sideNav, "right", "-50vw");
    // Hide the menu
  }
});




document.getElementById("exitTips").addEventListener('click', () => {
  document.querySelectorAll('.AuxPage').forEach((p) => {
    p.style.display = "none";
  })
});

function closeChoose() {
  Id('beforeChoose').style.display = "none";
}
function openChoose() {
  Id('beforeChoose').style.display = "block";
}
Id('calculate').addEventListener('click', () => { openChoose(); });



Id('closeChoose').addEventListener('click', () => { closeChoose(); });
Id('CGPA_Button').addEventListener('click', () => { closeChoose(); });
Id('GPA_Button').addEventListener('click', () => { closeChoose(); })