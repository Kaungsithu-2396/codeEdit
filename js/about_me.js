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

containerEl.forEach((el, idx) => {
    el.addEventListener("mouseover", (e) => {
        el.classList.add("scaleIcon");
        if (skillText[idx].id === el.id + "-txt") {
            skillText[idx].style.opacity = 100;
           
        }
    });
});
containerEl.forEach((el, idx) => {
    el.addEventListener("mouseleave", () => {
        el.classList.remove("scaleIcon");
        if (skillText[idx].id === el.id + "-txt") {
            skillText[idx].style.opacity = 0;
           
        }
    });
});
