import React, { useRef, useState } from "react"; 

 

function FormComponent() { 

    const passRef = useRef(null);
    const mailRef = useRef(null);  
    const [list , setList] = useState();

    function handleSubmit(e){
      e.preventDefault()
      if(passRef.current && mailRef.current){
      console.log(`${passRef.current.value}, ${mailRef.current.value}`);
      }
    }
  return ( 

    <form onSubmit={handleSubmit}> 

      


    <div className="mb-3"> 

        <label htmlFor="pass" className="form-label">Hasło </label> 

        <input type="password" id="pass" className="form-control" ref={passRef} /> 

      </div>


      <div className="mb-3"> 

        <label htmlFor="mail" className="form-label">adres e-mail </label> 

        <input type="email" id="mail" className="form-control" ref={mailRef}/> 

      </div>

      


      <button type="submit" className="btn btn-primary">Zaloguj</button> 

    </form> 

  ); 

} 

 

export default FormComponent; 