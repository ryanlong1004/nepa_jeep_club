const createTextContainer = function (parent: Node): HTMLDivElement {
  const target: HTMLDivElement = document.createElement("div");
  target.classList.add("typed-line");
  target.style.display = "inline";

  const blinker: HTMLElement | null = document.getElementById("blinker");
  parent.insertBefore(target, blinker);

  return target;
};

export { createTextContainer };
