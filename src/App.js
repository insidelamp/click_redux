import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import styled from "styled-components";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{count}</div>
        <ButtonSpace>
          <Button
            aria-label="increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <Button
            aria-label="decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </ButtonSpace>
      </header>
    </div>
  );
}

const ButtonSpace = styled.div`
  margin: 30px 30px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  font-size: 30px;
  background-color: rgb(97, 218, 251);
  color: black;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export default App;
