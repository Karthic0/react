import {useState} from 'react'

function counter(){
    const [val,changeval] = useState(0);
    const increment = () => changeval(val+1);
    const decrement = () => changeval(val-1);
    const reset = () => changeval(0);
    return (<div className = "counterblock">
        <p className="value">{val}</p>
        <button onClick={increment}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={decrement}>-</button>
        
    </div>);
}
export default counter