import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function NavbarLink (){
    return(
        <div className="bg-gray-800 h-[200px] ">
            <div className="flex flex-row text-gray-200 text-[12px] justify-between">
            <img src="/LogoCom.png" alt="logocompany" className="h-28 w-28 ml-10 mt-5" />
            <div className="flex flex-row justify-center mt-8 gap-32 mr-[650px]">
            <div className="flex flex-col  gap-2">
            <h1 className="font-bold text-md mb-2">BANTUAN</h1>
            <Link href={'/'}>Home</Link>
            <Link href={'/aboutUs'}>AboutUs</Link>
            <Link href={'/teams'}>Teams</Link>
            <Link href={'/products'}>Products</Link>
            </div>
            <div className=" flex flex-col">
            <p className="font-bold text-md">CONTACT US</p>
            <div className="text-xl flex flex-row items center gap-10 mt-10">
            <AiFillInstagram/>
            <IoLogoWhatsapp/>
            </div>
            </div> 
            </div>
            </div>
           <h1 className="text-sm mr-10 text-gray-200 flex flex-row justify-end">© 2024 Zenith Tulips. All rights reserved.</h1> 
        </div>
    )
}