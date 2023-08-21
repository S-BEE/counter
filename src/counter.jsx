import {useState} from 'react'

const Counter = ()=>{
    const [count, setCount] = useState(0)
    function Add (){
        setCount(count + 1)

    }
    function Minus (){
        
        if (count>=1){
            setCount(count-1)
           
        }
        else {
            return 0
        }
    }
    function refresh(){
        setCount(count-count)
    }


    return(
        <div>
            <div className="h-screen flex flex-col justify-center gap-8 ">
                <div className="flex items-center justify-center gap-12 ">
                    <div className="w-[5rem] h-[5rem] border border-black p-4 flex items-center justify-center text-4xl " onClick={Add}>+</div>
                    <div className="w-[20rem] h-[20rem] border rounded-full border-red flex items-center justify-center text-8xl">{count}</div>
                    <div className="w-[5rem] h-[5rem] border border-black p-4 flex items-center justify-center text-4xl " onClick={Minus}>-</div>
                </div>
                <div className="flex justify-center text-2xl" ><span className='border p-2'onClick={refresh}  >Reset</span></div>
            </div>
        </div>
    )
}

export default Counter