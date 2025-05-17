import { useEffect } from "react";
import { useApi } from "./hooks/useApi";
import toast from "react-hot-toast";

const UserManager = () => {
  const { data: users, fetchAll, create, update, remove } = useApi("users");

  useEffect(() => {
    fetchAll().catch(() => toast.error("Failed to load users"));
  }, [fetchAll]);

  const handleCreate = () => {
    const newUser = { name: "Tushar Rajput", email: "tusharr0491@gmail.com" };
    create(newUser)
      .then(() => toast.success("User Created"))
      .catch(() => toast.error("Create Failed"));
  };

  const handleUpdate = (id) => {
    update(id, { name: "Mr. Tushar Rajput" })
      .then(() => toast.success("Updated Successfully"))
      .catch(() => toast.error("Update Failed"));
  };

  const handleDelete = (id) => {
    remove(id)
      .then(() => toast.success("Deleted User"))
      .catch(() => toast.error("Failed Deleting User"));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <button
        onClick={handleCreate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      <ul>
        {users.map((u) => (
          <li key={u.id} className="mb-2">
            {u.name} - {u.email}
            <button
              onClick={() => handleUpdate(u.id)}
              className="ml-2 text-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(u.id)}
              className="ml-2 text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManager;
