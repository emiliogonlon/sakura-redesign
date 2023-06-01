
document.querySelector('#top').scrollIntoView({
    behavior: 'smooth'
});
document.getElementById('about.html').style.backgroundColor = "var(--nav-bg-current)";
document.getElementById('about.html').firstChild.style.color = "var(--nav-currentwhite)";

const expander = document.getElementById("expanderarea");
const rulesList = document.getElementById("ruleslist");
const rulesFrame = document.getElementById("rulesframe");
const expanderArrow = document.getElementById("exparrow");

function expandRules() {
    rulesList.classList.toggle("ruleslist");
    rulesFrame.classList.toggle("rulesframeextent");
    expanderArrow.classList.toggle("arrowmirror");
    expander.classList.toggle("bottom")
};

rulesFrame.addEventListener("click", expandRules)
