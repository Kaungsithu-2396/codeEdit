/* Skill-text */
const ai = document.getElementById("ai");
const ai_text = document.getElementById("ai-txt");
const ps = document.getElementById("ps");
const ps_text = document.getElementById("ps-txt");
const html = document.getElementById("html");
const html_text = document.getElementById("html-txt");
const css = document.getElementById("css");
const css_text = document.getElementById("css-txt");
const js = document.getElementById("js");
const js_text = document.getElementById("js-txt");
const containerEl = document.querySelectorAll(".skill-meter img"); //so that no duplication occur
const skillText = document.querySelectorAll(".skill-text p");
console.log(skillText);

containerEl.forEach((el, idx) => {
    el.addEventListener("mouseover", (e) => {
        el.classList.add("scaleIcon");
        if (skillText[idx].id === el.id + "-txt") {
            skillText[idx].style.diplay = "block";
        }
    });
});
containerEl.forEach((el, idx) => {
    el.addEventListener("mouseleave", () => {
        el.classList.remove("scaleIcon");
        if (skillText[idx].id === el.id + "-txt") {
            skillText[idx].style.display = "none";
        }
    });
});

var changeclass = function () {
    ai_text.classList.toggle("hide");
};

window.onload = function () {
    var firstDiv = document.getElementsById("ai-text")[0];
    firstDiv.addEventListener("mouseover", changeclass, false);
};
