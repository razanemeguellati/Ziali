import { useState } from "react";
import msg from "../images/msg.png" ; 


const Contact= () => {
   
    const[email , setEmail] = useState('') ; 
    const[message, setMessage] = useState('') ; 
    const[isPending , setIsPending]= useState(false) ; 


    const handleSubmit =(e) =>
    {
        e.preventDefault() ; 
        const user = {email,message} ; 
        setIsPending(true) ; 
    }

    const handleClick = () =>
    {
           
    }

    return ( 
    <div id="Contact" className="createform flex flex-col lg:flex-row h-[500px] lg:h-screen w-full justify-center items-center ">
       
   
       <div id="form" className="lg:order-2" >
   
        
       <form onSubmit={handleSubmit}>
    
            

        <label for="email" > Email : </label>
            <input 
            id="email"
            type="text" 
            placeholder="Email"
            value={email}
            className= "shadow-md lg:w-[500px] "
            onChange ={(e)=> setEmail(e.target.value)}  
            />

        <label for="msg" > Message : </label>
            <input 
            id="msg"
            type="textarea" 
            placeholder="Message"
            value={message}
            className= " shadow-md h-[70px] lg:h-[150px]   "
            onChange ={(e)=> setMessage(e.target.value)}  
            />


            <div className="bg-white mt-[10px]  relative ">
                <button onClick={handleClick} className="btn1 cursor-pointer bg-green text-black font-semibold w-[100%] p-[8px] border-0 rounded-full"> send your message  </button>
            
            </div>

            </form>
      </div>

            <img src={msg} className="lg:order-1 lg:w-[30%]" alt="message panel " />

 </div> );
}
 
export default Contact;