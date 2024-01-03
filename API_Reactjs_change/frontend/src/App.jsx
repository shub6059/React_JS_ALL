import React, { useState, useEffect } from 'react';

const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/user' , {mode:'cors'});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>API Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}, Email: {item.email}
          </li>
        ))}
      </ul> */}
      <h2>Table Display</h2>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Button</th>
           </tr>
           </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td align='left'>  {item.name}</td>
              <td align='left'>{item.age}</td>
              <td align='center'>{item.email}</td>
           
              <td align='center'><button>I</button><button>U</button><button>D</button></td>
              {/* Add more cells for each column */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Component;


