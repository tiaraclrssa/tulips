import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function ContactUs() {
  return (
    <div>
      <div className="flex flex-row text-gray-200 text-2xl gap-10">
        <a
          href="https://wa.me/6285269727950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp />
        </a>
        
        <a
          href="https://instagram.com/tiaraclrssaa_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
}

