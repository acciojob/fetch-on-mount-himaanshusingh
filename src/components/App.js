import React from "react";
import "./../styles/App.css";

const App = () => {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.title}</h1>
            <p>{user.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
