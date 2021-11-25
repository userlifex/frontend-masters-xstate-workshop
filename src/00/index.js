import { createMachine, interpret } from "xstate";

const elOutput = document.querySelector("#output");

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

const feedbackMachine = createMachine({
  initial: "question",
  states: {
    question: {
      on: {
        CLICK_GOOD: {
          target: "thanks",
        },
      },
    },
    form: {},
    thanks: {},
    closed: {},
  },
});

const feedBackService = interpret(feedbackMachine);

feedBackService.onTransition((state) => {
  console.info(state);
});

feedBackService.start();

window.send = feedBackService.send;
//const clickGoodEvent = {
//type: "CLICK_GOOD",
//};

//const initialState = feedbackMachine.initialState;
//const nextState = feedbackMachine.transition(
//feedbackMachine.initialState,
//clickGoodEvent
//);

//console.log(initialState.value);
//console.log("vs.");
//console.log(nextState.value);

//console.log("Welcome to the XState workshop!");

//const machine = {
//initial: "idle",
//states: {
//idle: {
//on: {
//FETCH: "pending",
//},
//},
//pending: {
//on: {
//RESOLVE: "resolved",
//REJECT: "rejected",
//},
//},
//resolved: {},
//rejected: {},
//},
//};

//const transition = (state, event) => {
//return machine.states[state]?.on?.[event] || state;
//};

//const user = {
//name: "David Khourshid",
//company: "Microsoft",
//interests: ["piano", "state machines"],
//};

//output(transition("pending", "FETCH"));
