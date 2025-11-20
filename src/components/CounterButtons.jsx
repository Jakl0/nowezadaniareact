import react from 'react';

const CounterButtons = ({handleAdd,handleSub}) => {

    return(
        <>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </>
    );
}
export default CounterButtons;