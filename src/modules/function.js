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
  const needs = createElement(null, "div", "needs");

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
              <div id="ndHEnergy" class="needGood"></div>`;
  needs.appendChild(energyDis);
}

/*------------------- updateNeedsControl function ------------------- */

function updateNeedsControl(needStatus, needName) {
  //const need = document.getElementById(needName); // implementation of createNeedsControl not working
  switch (needStatus) {
    case 0:
      console.log("ok");
      //need.classList.add("needOk");
      //need.classList.remove("needBad");
      //need.classList.remove("needGood");
      break;
    case 1:
      console.log("bad");
      //need.classList.add("needBad");
      //need.classList.remove("needOk");
      //need.classList.remove("needGood");
      break;
    case 2:
      console.log("good");
      //need.classList.add("needGood");
      //need.classList.remove("needOk");
      //need.classList.remove("needBad");
      break;
  }
}

export { createElement, createNeedsControl, updateNeedsControl };
