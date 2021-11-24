import { createMachine } from "xstate";

const elOutput = document.querySelector("#output");

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

console.log("Welcome to the XState workshop!");

const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "pending",
      },
    },
    pending: {
      on: {
        RESOLVE: "resolved",
        REJECT: "rejected",
      },
    },
    resolved: {},
    rejected: {},
  },
};

const transition = (state, event) => {
  return machine.states[state]?.on?.[event] || state;
};

const user = {
  name: "David Khourshid",
  company: "Microsoft",
  interests: ["piano", "state machines"],
};

output(transition('pending','FETCH'));
