import react,{useState, useEffect} from 'react'

function StopWatch(){
    const [elapsed,setelapsed] = useState(0);
    const [isRunning,setisRunning] = useState(false);
    useEffect(() => {
        if (!isRunning) return;
        
        const id = setInterval(() => {
        setelapsed((e) => e + 10);
        }, 10);
        return ()=>clearInterval(id);
    },[isRunning])
    function start(){
        setisRunning(true);
    }
    function stop(){
        setisRunning(false);
    }
    function reset(){
        setelapsed(0);
        setisRunning(false);
    }
    const formatedtime = (elapsed) => {
        const totalSeconds = Math.floor(elapsed / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const milliseconds = String(Math.floor((elapsed % 1000) / 10)).padStart(2, '0');
    return `${minutes} : ${seconds} : ${milliseconds}`;
        }
    return <div className= 'Container'>
        <h1>Stop Watch</h1>
        <h1>{formatedtime(elapsed)}</h1>
        <button className='start' onClick={start}>start</button>
        <button className='stop' onClick={stop}>stop</button>
        <button className='reset' onClick={reset}>reset</button>
    </div>
}

export default StopWatch;