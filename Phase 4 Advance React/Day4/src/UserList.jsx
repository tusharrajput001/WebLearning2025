import { useEffect, useState } from "react";
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        setUsers(res.data);
        setLoading(false);
    })
    .catch((err) => {
        setError('Failed to fetch data');
        setLoading(false);
    })
  },[]);

  if(loading) return <p>Loading users....</p>
  if(error) return <p>{error}</p>

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">User List</h2>
      <ul className="list-disc pl-4">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;