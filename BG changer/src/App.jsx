import {useState} from 'react';
// import BgChangerBar from './Bg-changer-bar'


function App() {
  const [color,setColor]=useState("Olive")

  return (
    <div className='w-screen h-screen duration-200' 
    style={{backgroundColor:color}}>
    
    <div className="flex flex-wrap  justify-center px-2 inset-x-0 items-center  fixed bottom-12 py-2 gap-3">
      <div className='flex flex-wrap justify-center bg-white gap-3 px-3 py-2 rounded-3xl '>
            <button className=' border-none text-white bg-red-600 rounded-3xl' onClick={()=>{setColor("red")}}>Red</button>
            <button className=' border-none text-white bg-green-600 rounded-3xl' onClick={()=>{setColor("green")}}>Green</button>
            <button className=' border-none text-white bg-blue-600 rounded-3xl' onClick={()=>{setColor("blue")}}>Blue</button>
            <button className=' border-none text-white bg-yellow-600 rounded-3xl' onClick={()=>{setColor("yellow")}}>Yellow</button>
            <button className=' border-none text-white bg-[#EE82EE] rounded-3xl' onClick={()=>{setColor("violet")}}>Violet</button>
            <button className=' border-none text-white bg-gray-600 rounded-3xl' onClick={()=>{setColor("gray")}}>Gray</button>
            <button className=' border-none text-white bg-purple-600 rounded-3xl' onClick={()=>{setColor("purple")}}>Purple</button>
            <button className=' border-none text-white bg-pink-300 rounded-3xl' onClick={()=>{setColor("pink")}}>Pink</button>
            <button className=' border-none text-white bg-amber-300 rounded-3xl' onClick={()=>{setColor("oklch(87.9% 0.169 91.605)")}}>Amber</button>
            <button className=' border-none text-white bg-emerald-500 rounded-3xl' onClick={()=>{setColor("oklch(69.6% 0.17 162.48)")}}>Emerald</button>
      </div>
    </div>

    </div>
  );
}

export default App

