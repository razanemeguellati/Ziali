import web from "../images/web.png"
import phone from "../images/phone.png"
import fb from "../images/fb.png"
import insta from "../images/insta.png"
import li from "../images/linkedin.png"
const footer = () => {
    return ( 
    
    <div className=" bg-black w-full h-[400px] text-white pt-4">
<section className="flex flex-col justify-center space-y-4 items-center m-6">
<h1 className="text-4xl"> Ziali </h1>
<p className="text-xs"> <center>
    Notre site Web a pour but d'aider les gens à signaler les problèmes liés aux fuites d'eau, aux incendies et à d'autres catastrophes naturelles, afin de les traiter et d'éviter autant de pertes que possible.</center> </p>
</section>

<section className=" flex flex-col m-5 justify-center items-center">
    <div className="flex flex-col justify-center items-center lg:flex-col space-y-2">
        <div className="flex flex-row space-x-4">
        <img src={phone} className="w-6" alt="phone number" />
        <p className="">+213 44 02 30 22</p>
        </div>

        <div className="flex flex-row space-x-4 ">
        <img src={web} className="w-8" alt="website" />
        <p className="">    www.alcomnet.com</p>
        </div>  
    </div>

     <section>
    <div className="flex flex-row justify-center items-center space-x-10 p-10">
        <img src={fb} className="w-8" alt="facebook" />
        <img src={insta} className="w-8" alt="instagram" />
        <img src={li} className="w-8" alt="linkedin" />
     </div>
    </section>

</section>
   
    </div> );
}
 
export default footer;