import React, { useState } from "react";

 

function UserForm() { 

  const [person, setPerson] = useState({ mail: "", pass: "" }); 

 

  function handleChange(event) { 

    const { id, value } = event.target; 
    console.log(event.target);

    setPerson(prevPerson => ({ ...prevPerson, [id]: value })); 

  } 

 

  function handleSubmit(event) { 

    event.preventDefault(); 

    console.log("Dane użytkownika:", person); 

  } 

 

  return ( 

    <form onSubmit={handleSubmit}> 

      <div className="mb-3"> 

        <label htmlFor="mail" className="form-label">Adres e-mail:</label> 

        <input type="email" id="mail" className="form-control" value={person.name} onChange={handleChange} /> 

      </div> 

       

      <div className="mb-3"> 

        <label htmlFor="pass" className="form-label">Hasło:</label> 

        <input type="password" id="pass" className="form-control" value={person.age} onChange={handleChange} /> 

      </div> 

 

      <button type="submit" className="btn btn-primary">Wyślij</button> 

    </form> 

  ); 

} 

 

export default UserForm;