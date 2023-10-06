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

export { createElement };
