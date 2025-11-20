import React, { useState } from "react";

 

function ProductForm() { 

  const [product, setProduct] = useState({ name: "", price: "",category:"" }); 

 

  function handleChange(event) { 

    const { id, value } = event.target; 
    console.log(event.target);

    setProduct(prev => ({ ...prev, [id]: value })); 

  } 

 

  function handleSubmit(event) { 

    event.preventDefault(); 
    const a = product.name;
    const b = product.price;
    const c =product.category;

    alert(`Nazwa: ${a} Cena: ${b}zł Kategoria: ${c}`); 

  } 

 

  return ( 

    <form onSubmit={handleSubmit}> 

      <div className="mb-3"> 

        <label htmlFor="name" className="form-label">Nazwa:</label> 

        <input type="text" id="name" className="form-control" value={product.name} onChange={handleChange} /> 

      </div> 

       

      <div className="mb-3"> 

        <label htmlFor="price" className="form-label">cena (zł):</label> 

        <input type="number" id="price" className="form-control" value={product.price} onChange={handleChange} /> 

      </div>

      <div className="mb-3"> 

        <label htmlFor="category" className="form-label">Kategoria:</label> 

        <input type="text" id="category" className="form-control" value={product.category} onChange={handleChange} /> 

      </div> 

 

      <button type="submit" className="btn btn-primary">Wyślij</button> 

    </form> 

  ); 

} 

 

export default ProductForm;