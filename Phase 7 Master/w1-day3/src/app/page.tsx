"use client";
import { useEffect, useState } from "react";


export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (err: any) {
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if(loading) return <p>Loading.....</p>
  if(error) return <p>Error: {error}</p>
  
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // // useEffect(() => {
  // //   const fetchUsers = async () => {
  // //     try {
  // //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // //       if (!res.ok) {
  // //         throw new Error("Failed to fetch users");
  // //       }
  // //       const data = await res.json();
  // //       setUsers(data);
  // //     } catch (err: any) {
  // //       setError(err.message);
  // //     } finally {
  // //       setLoading(false);
  // //     }
  // //   };

  // //   fetchUsers();
  // // }, []);

  // // if (loading) return <p>Loading users..... </p>;
  // // if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div>
        <ul>
          {users.map((user: any) => 
            <li key={user.id}>
              <strong>{user.firstName}</strong> ({user.email}) <span style={{color:"red"}}>{user.gender}</span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
