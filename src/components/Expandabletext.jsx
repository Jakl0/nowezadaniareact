import React, { useState } from "react"; 

 

function ExpandableText({ children, maxChars = 100 }) { 

  const [isExpanded, setIsExpanded] = useState(false); 

 

  const text = isExpanded ? children : children.substring(0, maxChars) + (children.length > maxChars ? "..." : ""); 

 

  return ( 

    <div> 

      <p>{text}</p> 

      {children.length > maxChars && ( 

        <button onClick={() => setIsExpanded(!isExpanded)}> 

          {isExpanded ? "Mniej" : "Więcej"} 

        </button> 

      )} 

    </div> 

  ); 

} 

 

export default ExpandableText; 

 