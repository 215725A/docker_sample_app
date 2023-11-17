// App.js

import React, { useState, useEffect } from 'react';

function AgeGroups() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // バックエンドAPIからデータを取得
    fetch('http://localhost:8000/groups')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  return (
    <div>
      <h1>User Data by Age Group</h1>

      {Object.entries(userData).map(([ageGroup, users]) => (
        <div key={ageGroup}>
          <h2>{ageGroup}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.uname}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AgeGroups;
