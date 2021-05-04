import CSS from "csstype";
import { sleep, randomMSDelay as randomMillisecondValue } from "./sleep";

class TypingSimulator {
  static second: number = 1000;
  sentenceDelay: number;
  initialDelay: number;
  target: HTMLElement;
  text: string[];
  blinker: HTMLElement;

  constructor(
    target: HTMLElement,
    text: string[],
    sentenceDelay: number = 2 * TypingSimulator.second,
    initialDelay: number = 2 * TypingSimulator.second
  ) {
    this.text = text;
    this.target = target;
    this.sentenceDelay = sentenceDelay;
    this.initialDelay = initialDelay;
    this.blinker = new Blinker();
    this.target.appendChild(this.blinker);
  }

  async print() {
    await sleep(this.initialDelay);
    await this.printMessage();
  }

  async printMessage() {
    for (let i: number = 0; i < this.text.length; i++) {
      let textContainer: TextContainer = new TextContainer();
      textContainer.addClass("typed-line");
      textContainer.setDisplay("inline");

      textContainer.focus(); // you can also use input.focus()
      textContainer.textContent = "";

      let sentence: string = this.text[i];
      await this.printLine(sentence, textContainer);
    }
    return;
  }

  async printLine(sentence: string, target: HTMLElement) {
    for (let y: number = 0; y < sentence.length + 1; y++) {
      let currentText: string = sentence.substr(0, y + 1);
      y++;
      target.textContent = currentText;
      await sleep(randomMillisecondValue());
    }
    await sleep(this.sentenceDelay);
    target.style.display = "block";
  }
}

class TextContainer extends HTMLElement {
  textContainer: HTMLElement = document.createElement("div");

  addClass(className: string) {
    this.textContainer.classList.add(className);
    return this;
  }

  setDisplay(displayType: "inline" | "block") {
    this.textContainer.style.display = displayType;
    return this;
  }
}

class Blinker extends HTMLElement {
  blinker: HTMLElement = document.createElement("div");

  blinkerStyle: CSS.Properties = {
    animation: "blinker 1s linear infinite",
    display: "inline",
    textAlign: "left",
  };

  constructor() {
    super();
    this.blinker.style.animation = "blinker 1s linear infinate";
    this.blinker.style.display = "inline";
    this.blinker.style.textAlign = "left";
    this.blinker.classList.add("blink");
    this.blinker.textContent = "&#9646";
  }

  createBlinkerKeyFrames() {
    const cssAnimation = document.createElement("style");
    cssAnimation.type = "text/css";
    const rules = document.createTextNode(`
      @keyframes blinker { 50% {color: black} }
    `);
    cssAnimation.appendChild(rules);
    document.getElementsByTagName("head")[0].appendChild(cssAnimation);
  }
}

export { TypingSimulator };
