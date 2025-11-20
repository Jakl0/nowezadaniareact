import React from "react"; 

 

function Cart({ cartItems, onClear,handleDel,handleUpdate }) { 

  return ( 

    <div> 

      <h2>Koszyk</h2> 

      <ul> 

        {cartItems.map((item, index) => ( 
            <div>
                <li key={index}>{item}</li>
                <button onClick={()=>handleDel(item)}>Usuń</button>
            </div>
           

        ))} 

      </ul> 

      <button onClick={onClear}>Wyczyść koszyk</button> 

    </div> 

  ); 

} 
export default Cart;