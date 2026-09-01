import {useState} from 'react'


function T(){
    const [arr,setarr] = useState(["hello","abcd"]);
    const [name,setname] = useState("");
    function namechanger(event){
        setname(event.target.value);
    }
    function addclick(){
        if (name.trim() !=""){
            setarr([...arr,name]);
        setname("");
        }
        
    }
    function removefun(index){
        setarr(arr.filter((e,i)=> i!=index));
    }
    function upfun(i){
        if (i!=0){
            const a =[...arr];
            [a[i-1],a[i]] = [a[i],a[i-1]];
            setarr(a);
        }
    }
    function downfun(i){
        if (i<arr.length-1){
            const a =[...arr];
            [a[i+1],a[i]] = [a[i],a[i+1]];
            setarr(a);
        }

    }
    return <>
    <div>
        <h1>To do list</h1>
        <div>
            <input placeholder="Enter task..." onChange={namechanger} value={name}></input>
            <button className="add" onClick={addclick}>Add</button>
        </div>
        <ul>
            {arr.map((e,i) =><div>
                 <li key={i}>{e}</li>
                 <button className="remove" onClick={()=>removefun(i)}>remove</button>
                 <button className="up" onClick={()=>upfun(i)}>up</button>
                 <button className="down" onClick={()=>downfun(i)}>down</button>
                 </div>
                 ,arr)}
        </ul>
    </div>
    </>
}
export default T;