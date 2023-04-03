import React, { useState } from 'react';

function ReadUser() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("your mom");
    fetch(`http://64.227.2.223:4000/read/${name}`,)
    .then(res => {
        console.log(res); // log the response object
        return res.text();
    })
    .then(data => {
        console.log(data); // This will log the value returned by the server
        setValue(data); // This will update the state variable 'value' with the data returned by the server
    });
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <button type="submit" onClick={handleSubmit}>Read User</button>

      {value != "" ? 
        <div>
          {value}
        </div> : <div></div>}
    </div>
  );
}

export default ReadUser; 
