import { sleep, randomMSDelay as randomMillisecondValue } from "./sleep";
import { createTextContainer } from "./elements";

class TypingSimulator {
  static second: number = 1000;
  sentenceDelay: number;
  initialDelay: number;
  target: HTMLElement;
  text: string[];

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
  }

  async print() {
    await sleep(this.initialDelay);
    await this.printMessage();
  }

  async printMessage() {
    for (let i: number = 0; i < this.text.length; i++) {
      let textContainer: HTMLDivElement = createTextContainer(this.target);

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

export { TypingSimulator };
