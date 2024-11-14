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
      <div className="bg-gray-600 mt-[92px] flex flex-col md:flex-row relative">
        <div
          ref={textRef}
          className={`text-white flex flex-col absolute md:static md:left-auto md:top-auto left-1/2 top-1/3 transform -translate-x-1/2 md:translate-x-0 md:pl-8 lg:pl-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left">
            Zenith Tulips
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left">
            Menghadirkan keindahan dalam setiap momen berharga di hidup Anda
          </p>
        </div>
        <Image
          src={"/home/HeroSection.jpeg"}
          alt="tulip's image"
          width={700}
          height={700}
          className="w-full md:w-[50%] h-auto"
        />
      </div>

      <div className="bg-gray-600 mt-20 flex flex-col md:flex-row items-center px-4 md:px-16">
        <p className="text-white text-base md:text-lg mb-6 md:mb-0 md:pr-8">
          Setiap susunan bunga adalah cerita yang disulam dengan penuh perhatian, di mana warna dan
          wangi saling berpelukan, menciptakan harmoni yang mampu menenangkan jiwa. Zenith Tulips
          bukan sekadar bisnis, ia adalah cerminan dari cinta kami terhadap keindahan yang
          disampaikan oleh setiap helai bunga.
        </p>
        <Image
          src={"/home/CompanyOverView.jpeg"}
          alt="Tulip's image"
          width={600}
          height={600}
          className="w-full md:w-[50%] h-auto"
        />
      </div>

      <div className="bg-gray-600 pt-10 pb-20 rounded-t-xl">
        <h1 className="text-white text-center font-bold text-3xl md:text-5xl mb-10">Our Products</h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 px-4 md:px-16">
          <div className="bg-gray-700 flex flex-col items-center rounded-t-full text-white w-full md:w-[350px] rounded-b-md p-4">
            <Image
              src={"/home/product2.jpeg"}
              alt="Fresh tulips"
              width={250}
              height={200}
              className="rounded-t-full w-full h-auto"
            />
            <h2 className="mt-4 font-bold text-xl mb-2">Fresh Tulips</h2>
            <p className="text-center">Menghadirkan Tulip dengan kualitas terbaik</p>
            <button className="bg-black w-28 rounded-lg mb-5 mt-5 h-9 hover:underline">
              <Link href="/products">See more</Link>
            </button>
          </div>
          <div className="bg-gray-700 flex flex-col items-center rounded-t-full text-white w-full md:w-[350px] rounded-b-md p-4">
            <Image
              src={"/home/product3.jpeg"}
              alt="Tulips Bouquet"
              width={250}
              height={200}
              className="rounded-t-full w-full h-auto"
            />
            <h3 className="mt-4 font-bold text-xl mb-2">Tulips Bouquet</h3>
            <p className="text-center">Pilihan Terbaik untuk Moment indahmu</p>
            <button className="bg-black w-28 rounded-lg mb-5 mt-5 h-9 hover:underline">
              <Link href="/products">See more</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ReviewSection />
      </div>
    </div>
  );
}
