import Link from "next/link";
import ContactUs from "./contact";

export default function Footer() {
  return (
    <div className="bg-gray-800 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-gray-200 text-xs sm:text-sm px-5">
        <div className="flex flex-col items-start mb-5 md:mb-0">
          <img
            src="/LogoCom.png"
            alt="logocompany"
            className="h-20 w-20 md:h-28 md:w-28"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 sm:gap-20 lg:gap-32 justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md mb-2">BANTUAN</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutUs"}>About Us</Link>
            <Link href={"/teams"}>Teams</Link>
            <Link href={"/products"}>Products</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-md">CONTACT US</p>
            <div className="mt-3">
              <button>
                <ContactUs />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center md:justify-end mt-5">
        <h1 className="text-sm text-gray-200">
          © 2024 Zenith Tulips. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
