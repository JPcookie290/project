import { Pet } from "./pet";
import { Background } from "./background";
import { Food } from "./food";
import {
  createElement,
  createNeedsControl,
  updateNeedsControl,
} from "./function";

function createStartPage() {
  const browserPet = createElement(null, "div", "browserPet", "browserPet");
  browserPet.classList.add("hidden");
  /*const heading = createElement(
    null,
    "h1",
    null,
    "heading",
    "Choose a name for your pet:"
  );
  const petName = createElement(null, "input");
  petName.setAttribute("type", "text");*/
  const btnStart = createElement(
    null,
    "button",
    "btnStart",
    null,
    "Let's Start!"
  );
  const overlay = createElement(null, "div", null, "overlay");

  btnStart.addEventListener("click", () => {
    /*let name = petName.value;
    if (name === "") {
      name = "Bo";
    }
    heading.innerText = `${name}`;
    petName.remove();*/
    btnStart.remove();
    browserPet.classList.remove("hidden");

    return name;
  });
}

export { createStartPage };
