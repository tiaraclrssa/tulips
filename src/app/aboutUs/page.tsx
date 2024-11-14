"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutUsPage() {
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
      <div className="bg-gray-600 mt-[92px] flex flex-col md:flex-row items-center">
        <Image
          src="/aboutUs/HeroSection.jpeg"
          alt="hero section"
          height={500}
          width={520}
          className="w-full md:w-1/2 h-auto"
        />
        <div
          ref={textRef}
          className={`flex flex-col text-white mt-10 md:mt-0 md:px-16 px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="font-bold mb-5 text-3xl md:text-4xl">Zenith Tulips</h1>
          <p className="text-sm md:text-md">
            Didirikan pada tahun 2005, di Jambi, Indonesia, Zenith Tulips berawal dari toko bunga
            kecil yang didirikan oleh seorang pengusaha, M. Farhan As-Shafa, Ph.D., sebagai bentuk
            cinta kepada pasangannya Nazeera Clarisse, Ph.D., yang sangat mengagumi bunga tulip.
            Zenith Tulips berkembang menjadi penyedia rangkaian bunga terkenal dengan misi
            menghadirkan kedamaian dan kebahagiaan melalui setiap kelopak yang kami rangkai.
          </p>
        </div>
      </div>

      <div className="bg-gray-600 flex flex-col md:flex-row mt-10 items-center px-6 md:px-12">
        <p className="text-white text-sm md:text-md md:w-1/2 md:pr-8">
          Dalam beberapa tahun pertama, kami mendapat penghargaan dari asosiasi tulip nasional
          untuk produk dan layanan bunga kami. Kami juga mengadakan program sosial, termasuk
          kerja sama dengan yayasan lokal untuk mendonasikan bunga. Pada tahun 2015, kami menerima
          penghargaan sebagai Penyedia Layanan Bunga Terbaik. Pada tahun 2018, Zenith Tulips resmi
          berdiri sebagai perusahaan di industri florist dan meluncurkan platform e-commerce
          Zenith Tulips. Di awal tahun 2022, kami menjadi pionir dalam memperkenalkan desain bunga
          modern dengan sentuhan lokal, menggabungkan elemen budaya Indonesia.
        </p>
        <Image
          src="/aboutUs/History.jpeg"
          alt="History perusahaan"
          width={450}
          height={450}
          className="w-full md:w-[40%] h-auto mt-6 md:mt-0"
        />
      </div>

      <div className="flex flex-col md:flex-row mt-10 bg-gray-600 items-center px-6 md:px-12">
        <Image
          src="/aboutUs/Culture.jpeg"
          alt="culture perusahaan"
          width={500}
          height={500}
          className="w-full md:w-1/2 h-auto"
        />
        <div className="md:px-12 text-white mt-6 md:mt-0">
          <h2 className="font-bold text-2xl md:text-3xl mb-3">Culture</h2>
          <p className="text-sm md:text-md">
            Di Zenith Tulips, budaya perusahaan kami berfokus pada kerjasama, kreativitas, dan
            penghargaan terhadap keindahan. Kami menciptakan lingkungan inklusif di mana setiap ide
            dihargai. Kami percaya bahwa bunga adalah simbol kedamaian, dan kami membawa energi ini
            ke dalam budaya kerja kami. Tim kami terdiri dari individu yang bekerja dengan cinta
            dan dedikasi untuk menghasilkan karya terbaik, mendukung perkembangan pribadi dan
            profesional, serta mempromosikan kreativitas. Kami berkomitmen memberikan produk dan
            layanan terbaik kepada pelanggan dengan standar tinggi, merayakan keberagaman di tempat
            kerja untuk solusi yang inovatif.
          </p>
        </div>
      </div>
    </div>
  );
}
