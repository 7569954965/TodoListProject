import React, { useState } from 'react'

const PavanTodo = () => {

    const[input,setInput]=useState("");
    const[add,setAdd]=useState([]);


    function handleChange(e){
        setInput(e.target.value);
    }

    function handleClick(){
        setAdd((prevData)=>{
            return[...prevData,input]

        });

        setInput("");
    };
    





  return (
    <div className='bg-gradient-to-b from-slate-950 to-amber-100 w-full h-screen flex flex-col justify-center items-center md:bg-gradient-to-t md:from-red-400 md:to-amber-100'>
        <h1 className='m-3 font-bold text-white text-3xl md:text-black md:text-4xl'>TODO LIST ITEMS </h1>
        <div className='w-3/5 h-80 bg-slate-200 text-center p-5 rounded-md shadow-xl shadow-slate-700'>
            <input onChange={handleChange} className='border bg-gray-300 p-2 rounded-md hover:border-yellow-300' type="text"placeholder='Add Anything' value={input}/>
            <button onClick={handleClick} className='bg-black p-2 px-3 rounded-md m-2 text-white hover:text-black hover:bg-sky-600 font-medium ' value={add}>ADD</button>

            <div className='font-serif m-5 p-2'>
                <ul>
                    {add.map((addingValues)=>{
                       return <li className='font-medium'>{addingValues}</li>
                    })}
                </ul>
            </div>
        </div>
        

    </div>
  )
}

export default PavanTodo
