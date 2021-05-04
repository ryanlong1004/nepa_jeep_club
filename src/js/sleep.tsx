import { Resolver } from "dns";

const sleep = function (ms: number): Promise<Resolver> {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const randomMSDelay = function (): number {
  return Math.random() * 250;
};

export { sleep, randomMSDelay };
