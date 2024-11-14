import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="bg-gray-700 flex flex-wrap justify-between items-center px-5 sm:px-10 md:px-14 shadow-md">
        <Image
          src={"/LogoCom.png"}
          alt={"LogoCompany"}
          width={80}
          height={80}
          className="mb-2"
        />
        <div className="flex flex-wrap gap-3 sm:gap-5 text-white text-sm sm:text-base">
          <Link href={"/"}>Home</Link>
          <Link href={"/aboutUs"}>About Us</Link>
          <Link href={"/teams"}>Teams</Link>
          <Link href={"/products"}>Products</Link>
        </div>
      </div>
    </nav>
  );
}
