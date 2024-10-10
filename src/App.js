import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  console.log(data);
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="App">
      {data.getTodos.map((item) => {
        return (
          <>
            <div style={{ backgroundColor: "red" }}>{item?.title}</div>
            <div style={{ backgroundColor: "green" }}>{item?.id}</div>
          </>
        );
      })}
    </div>
  );
}

export default App;
