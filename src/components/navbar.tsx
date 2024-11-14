import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
    <div className="bg-gray-700 flex flex-row justify-between items-center px-14 shadow-md">
        <Image
          src={"/LogoCom.png"}
          alt={"LogoCompany"}
          width={80}
          height={80}
          className="mb-2"
        />
      <div className="flex gap-5 text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/aboutUs"}>About Us</Link>
        <Link href={"/teams"}>Teams</Link>
        <Link href={"/products"}>Products</Link>
      </div>
    </div>
    </nav>
  );
}
