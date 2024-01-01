import {useState} from 'react'
function Header(){
    const [isOpen, setIsOpen]= useState(false)
    const handleIsOpen =()=>{
    setIsOpen(true)
    }
    const handleIsClose =()=>{
        setIsOpen(false)
    }
    return <div className="bg-primaryColor flex justify-between text-white p-5">
       
        <h1 className="font-bold text-4xl "> E-comerce </h1>
        <i style={{display: isOpen === true? "none" : "" }}onClick ={handleIsOpen}class="fa-solid absolute right-2 text-4xl sm:hidden fa-bars"></i>
        <i style={{display: isOpen === true? "block" : "none"}}onClick={handleIsClose} class="fa-solid absolute right-2 text-4xl fa-xmark"></i>
        <ul style={{display: isOpen === true? "block" : "" }}className="hidden sm:spaceye-y-6 spaceye-y-6 sm:flex flex flex-col sm:flex-row mt-10 sm:mt-0 text-2xl gap-5 sm:gap-20 sm:text-4xl">
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
            </ul>
            <ol>
                <li className="text-4xl"> <i class="fa-solid mr-10 fa-cart-shopping"></i> </li>
                    
                </ol>
    </div>
}
export default Header