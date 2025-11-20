import React,{useState} from 'react';

const ReviewBox = ({revs}) => {
    const [isExpanded,setIsExpanded] = useState(false)
    const text= isExpanded?revs: revs.slice(0,3);

    return(
        <div>
            <ul>
            {text.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
            </ul>
            {revs.length > 3&& (
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded?"Pokaż mniej":"Pokaż więcej"}
                </button>
            )}
            {(text.length>3)}
        </div>
    );
}
export default ReviewBox;