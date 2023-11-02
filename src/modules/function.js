/*------------------- createElement function ------------------- */

function createElement(parent, type, id_name, class_name, content) {
  const tag = document.createElement(type);
  const parentElement = document.getElementById(parent);

  if (parent != null) {
    parentElement.append(tag);
  } else {
    const start = document.querySelector(".content");
    start.append(tag);
  }

  if (id_name != null) {
    tag.id = id_name;
  }

  if (class_name != null) {
    tag.className = class_name;
  }

  if (content != null) {
    tag.innerHTML = content;
  }

  return tag;
}

/*------------------- createNeedControl function ------------------- */

function createNeedsControl() {
  // not working!!!!!!!!
  const needs = createElement(null, "div", "needs", "needs");

  // hunger display
  let hungerDis = document.createElement("div");
  hungerDis.innerHTML = `
              <h3>Hunger:</h3>
              <div id="ndHunger" class="needGood"></div>`;
  needs.appendChild(hungerDis);

  // hygiene display
  let hygieneDis = document.createElement("div");
  hygieneDis.innerHTML = `
              <h3>Hygiene:</h3>
              <div id="ndHygiene" class="needGood"></div>`;
  needs.appendChild(hygieneDis);

  // energy display
  let energyDis = document.createElement("div");
  energyDis.innerHTML = `
              <h3>Energy:</h3>
              <div id="ndEnergy" class="needGood"></div>`;
  needs.appendChild(energyDis);
}

/*------------------- updateNeedsControl function ------------------- */

function updateNeedsControl(needStatus, needElement) {
  const need = document.getElementById(needElement); // implementation of createNeedsControl not working

  if (needStatus <= 6 && needStatus > 3) {
    console.log("ok");
    need.classList.add("needOk");
    need.classList.remove("needBad");
    need.classList.remove("needGood");
  } else if (needStatus < 3) {
    console.log("bad");
    need.classList.add("needBad");
    need.classList.remove("needOk");
    need.classList.remove("needGood");
  } else {
    console.log("good");
    need.classList.add("needGood");
    need.classList.remove("needOk");
    need.classList.remove("needBad");
  }
}

export { createElement, createNeedsControl, updateNeedsControl };
