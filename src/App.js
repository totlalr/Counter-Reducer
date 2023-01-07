import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;
    default:
      return state;
  }
};
function App() {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>
        Increament
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECREAMENT" })}>
        Decreament
      </button>

      <hr />
      {number}
    </div>
  );
}

export default App;
