import { useState } from "react";
import { deleteUser, getUser } from "../services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getUser();
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res.status === 200) {
        alert("deleted");
        fetchData()
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit${id}`);
  };
  console.log(User);
  const handleAdd = () => {
    navigate("/");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {User.map((User) => (
            <tr key={User.id}>
              <td>{User.username}</td>
              <td>{User.password}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(User.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(User.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAdd} className="edit-btn">
        Add user
      </button>
    </>
  );
};

export default Users;
