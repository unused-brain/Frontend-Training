import './App.css';
import USERS from './mock-users';
import { useEffect, useState } from 'react';
import RadioButton from './RadioButton';

function App() {

  const [users, setUsers] = useState(USERS)

  useEffect(() => {

  }, [users])


  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {users.map(user => (
            <tr key={user.age}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>))}
        </tbody>
      </table>

      <br></br>
      <br></br>

      <RadioButton users={users} onUsersChange={setUsers} />

    </div>
  );
};
export default App;
