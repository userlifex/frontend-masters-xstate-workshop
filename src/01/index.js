const elBox = document.querySelector("#box");

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  switch (state) {
    // Add your state/event transitions here
    // to determine and return the next state
    case "ACTIVE":
      return "inactive";
    case "INACTIVE":
      return "active";
    default:
      return "inactive";
  }
}

// Keep track of your current state
let currentState = undefined;

function send(event) {
  // Determine the next value of `currentState`

  elBox.dataset.state = currentState;
}

elBox.addEventListener("click", () => {
  // send a click event
  //

  currentState = transition(currentState, event);
  const attribute = elBox.getAttribute("data-state");
  if (!attribute) {
    elBox.setAttribute("data-state", "active");
  }

  console.log(attribute);
  elBox.setAttribute("data-state", value);
});

const toggleState = (state) => {
  if (state === "active") {
    return "inactive";
  }

  return "active";
};
