import { Pet } from "./pet";
import { Background } from "./background";
import { Food } from "./food";
import {
  createElement,
  createNeedsControl,
  updateNeedsControl,
} from "./function";

function createStartPage() {
  const heading = createElement(
    null,
    "h1",
    null,
    "heading",
    "Choose a name for your pet:"
  );
  const petName = createElement(null, "input");
  petName.setAttribute("type", "text");
  const btnStart = createElement(
    null,
    "button",
    "btnStart",
    null,
    "Let's Start!"
  );

  btnStart.addEventListener("click", () => {
    let name = petName.value;
    if (name === "") {
      name = "Bo";
    }
    const pet = new Pet(name);
    heading.innerText = `${pet.getName()}`;
    petName.remove();
    btnStart.remove();

    return pet;
  });
}

export { createStartPage };
