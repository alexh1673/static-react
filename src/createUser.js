import React, { useState } from 'react';

function CreateUser() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(bio);
    fetch(`http://64.227.2.223:4000/create/${name}`, {
        method: 'post',
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            bio: bio
          })
    })
      .then(res => res.text())
      .then(message => alert(message))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <label htmlFor="bio">Bio:</label>
      <textarea id="bio" value={bio} onChange={event => setBio(event.target.value)} />

      <button type="submit" onClick={handleSubmit}>Create User</button>
    </div>
  );
}

export default CreateUser;