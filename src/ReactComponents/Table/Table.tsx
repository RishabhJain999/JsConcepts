import React from 'react';
import ReactDOM from 'react-dom/client';
import './Table.css';
interface CounterFormProps {
  dispatch: React.Dispatch<any>;
  valueToAdd?: number;
}

interface CountProps extends CounterFormProps {
  count: number;
}

type State = {
  count: number;
  valueToAdd: number;
};

type Action = {
  type: string;
  payload?: number;
};

const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';
const VALUE_TO_ADD = 'Value_To_Add';
const ADD_VALUE_TO_COUNT = 'Add_Value_To_Count';
const RESET = 'Reset';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload || 0,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const CounterForm = ({ valueToAdd = 0, dispatch }: CounterFormProps) => {
  // const [value, setValue] = React.useState<number>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setCount((prev: number) => prev + value!);
    // setValue(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='add'>Add a Lot </label>
      <input
        id='add'
        type='number'
        value={valueToAdd || ''}
        onChange={(e) => {
          dispatch({
            type: VALUE_TO_ADD,
            payload: +e.target.value,
          });
        }}
      />
      <input type='submit' value='Add' />
    </form>
  );
};

const Count = ({ count, dispatch }: CountProps) => {
  const handleIncrement = () => {
    // setCount((prev: number) => prev + 1);
    dispatch({
      type: INCREMENT,
    });
  };
  return (
    <>
      <h1>Current count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() =>
          dispatch({
            type: DECREMENT,
          })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: RESET,
          })
        }
      >
        Reset
      </button>
    </>
  );
};

const Counter = () => {
  // const [count, setCount] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  console.log(state);
  return (
    <div style={{ textAlign: 'center' }}>
      <Count count={state.count} dispatch={dispatch} />
      <CounterForm valueToAdd={state.valueToAdd} dispatch={dispatch} />
    </div>
  );
};

export const App = () => {
  return (
    <>
      {/* <Table data={data} config={config} /> */}
      <Counter />
    </>
  );
};

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
