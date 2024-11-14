"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReviewSection from "@/components/review";

export default function Home() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);


  return (
    <div className="bg-gray-300">
      <div className="bg-gray-600 mt-[92px] flex flex-row relative">

        <div  ref={textRef}
          className={`text-white flex flex-col absolute left-[530px] top-[220px] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 "
          }`}>
          <h1 className="text-6xl font-bold mb-2">Zenith Tulips</h1>
          <p className="text-xl">menghadirkan keindahan dalam setiap momen berharga di hidup anda</p>
        </div>
        <Image
          src={"/home/HeroSection.jpeg"}
          alt="tulip's image"
          width={700}
          height={700}
          className="w-[800px]"
        />
      </div>
      <div className="bg-gray-600 mt-20 flex flex-row items-center">
        <p className="text-white text-[17px] px-32">
          Setiap susunan bunga adalah cerita yang disulam dengan penuh perhatian,
          di mana warna dan wangi saling berpelukan, menciptakan harmoni yang
          mampu menenangkan jiwa. Zenith tulips bukan sekadar bisnis,
          ia adalah cerminan dari cinta kami terhadap keindahan yang disampaikan
          oleh setiap helai bunga. Berdiri sejak tahun 2005, membawa keindahan di
          setiap momen spesial dalam hidup Anda. Layaknya embun pagi yang
          menyejukkan, bunga hadir untuk membawa ketenangan bagi siapa pun yang
          memandang dan menyentuhnya. Setiap rangkaian merupakan sebentuk kisah
          yang berbisik tentang ketulusan, keindahan, dan kedamaian yang
          tersembunyi di setiap kelopaknya. Inilah perjalanan kami, bukan semata
          demi keuntungan, Zenith Tulips adalah ungkapan hati, 
          di mana setiap kuntum bunga adalah cerita yang penuh
          arti, dan setiap rangkaiannya adalah karya seni untuk merangkul
          ketenangan dalam hidup.
        </p>
        <Image
          src={"/home/CompanyOverView.jpeg"}
          alt={"Tulip's image"}
          width={600}
          height={600}
          className="h-[600px]"
        />
      </div>
      <div className="bg-gray-600 h-[1050px] rounded-t-xl">
        <h1 className="text-white flex flex-row justify-center mt-20 font-bold text-5xl pt-5">Our Products</h1>
      <div className="flex flex-row justify-between pl-[200px] pt-10">
          <div className="bg-gray-600 flex flex-col items-center  rounded-t-full text-gray-300 w-[350px] rounded-b-md">
          <Image
            src={"/home/product2.jpeg"}
            alt={"Fresh tulips"}
            width={250}
            height={200}
            className="rounded-t-full mt-12"
          />
          <h2 className="mt-4 font-bold text-xl mb-2">Fresh Tulips</h2>
          <p>Menghadirkan Tulip dengan kualitas terbaik</p>
          <button className="bg-black w-28 rounded-lg mb-5 mt-5 h-9 hover:underline">
          <Link href="/products">Shop Now</Link>
          </button>
        </div>
        <div  className="mr-[200px] bg-gray-600 flex flex-col items-center  rounded-t-full text-gray-300 w-[350px] rounded-b-md">
          <Image
            src={"/home/product3.jpeg"}
            alt={'tulips bouquet'}
            width={250}
            height={200}
            className="rounded-t-full mt-12 h-[330px]"
          />
          <h3 className="mt-4 font-bold text-xl mb-2">Tulips Bouquet</h3>
          <p>Pilihan Terbaik untuk Moment indahmu</p>
          <button className="bg-black w-28 rounded-lg mb-5 mt-5 h-9 hover:underline">
          <Link href="/products">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className="mt-16">
      <ReviewSection/>
      </div>
      </div>
    </div>
  );
}

