import { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {users &&
        users.map((user, index) => (
          <div key={user.id}>
            <h2>{`${index + 1}. ${user.title}`}</h2>
            <p>{user.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
