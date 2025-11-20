import React from "react"; 

 

function NavBar({ cartCount }) { 

  return ( 

    <nav> 

      <h1>Sklep</h1> 

      <p>Liczba przedmiotów w koszyku: {cartCount}</p> 

    </nav> 

  ); 

} 

 

export default NavBar; 