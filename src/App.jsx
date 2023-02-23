import { useSelector, useDispatch } from "react-redux";
import { fetchtodo,clearAllTodos } from "./redux/slices/todoslice";

export default function App() {
  const Dispatch = useDispatch();
  const state = useSelector((state) => state);


  const fetchdata = () => {
    Dispatch(fetchtodo());
  };

const ClearTodos=()=>{
  Dispatch(clearAllTodos())
}

  if (state.todo.isLoading) {
   return <h1>Loading....</h1>;
  }

  return (
    <>
      <div style={{ display: "flex", marginBottom: "2rem" }}>
        {" "}
        <button
          onClick={() => {
            fetchdata();
          }}
          style={{}}
        >
          {" "}
          Fetch todos
        </button>
        <button onClick={() => {ClearTodos()}} style={{ marginLeft: "2rem" }}>
          {" "}
          Clear Todo
        </button>
      </div>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </>
  );
}
