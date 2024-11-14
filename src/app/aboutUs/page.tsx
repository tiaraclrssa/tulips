"use client" 
import { useEffect, useRef, useState } from "react";
import Image from "next/image"

export default function AboutUsPage(){
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

    return(
        <div className="bg-gray-300">
            <div className="bg-gray-600 mt-[92px] flex flex-col md:flex-row">
            <Image
            src={'/aboutUs/HeroSection.jpeg'}
            alt={'hero section'}
            height={500}
            width={520}
            className="w-full md:w-auto"
            />
            <div ref={textRef}
            className={`flex flex-col text-white mt-10 px-8 md:px-40 mb-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "}`}>
            <h1 className="font-bold mb-5 text-3xl">Zenith Tulips</h1>
            <p className="text-md">
            Didirikan pada tahun 2005, di Jambi,Indonesia 
            Zenith Tulips berawal dari sebuah toko bunga kecil 
            yang didirikan oleh seorang pengusaha, M. Farhan As-Shafa,Ph.D . 
            toko itu didirikan sebagai salah satu bentuk cinta 
            kepada pasangannya yaitu Nazeera Clarisse,Ph.D 
            yang sangat mengagumi bunga, terlebih bunga tulip.
            zeenith tulips pada awal mula nya pun  
            hanya melayani beberapa pelanggan lokal di Jambi.  
            Namun Seiring berjalan nya waktu, kami berkembang 
            menjadi salah satu penyedia rangkaian bunga yang terkenal, 
            dengan misi untuk menghadirkan kedamaian dan kebahagiaan 
            melalui setiap kelopak yang kami rangkai. 
            Perjalanan kami dipenuhi dengan dedikasi dan inovasi,  
            membawa kami dari pasar lokal hingga menjadi 
            brand yang dikenal luas dalam industri florist. 
            </p>
            </div>
            </div>

            <div className="bg-gray-600 flex flex-col md:flex-row mt-20 items-center ">
            <p className=" text-white text-md px-8 md:px-28">
            <span className="font-bold text-gray-950">Dalam beberapa tahun pertama</span>, kami berhasil mendapat penghargaan  dari asosiasi tulip nasional
            untuk produk dan layanan bunga kami, hal ini memastikan bahwa setiap rangkaian memenuhi standar tertinggi.
            kemudian dengan terjadi nya beberapa kemajuan, Kami berhasil menyelenggarakan beberapa program sosial 
            termasuk kerja sama dengan yayasan lokal untuk mendonasikan bunga dan  sebagian hasil penjualan 
            bagi panti asuhan dan rumah sakit, sebagai wujud kepedulian kami terhadap masyarakat sekitar.
            <span className="font-bold text-gray-950"> Lalu Pada tahun 2015</span>, Tulip Flowers kembali menerima penghargaan untuk yang kedua kali nya  
            sebagai Penyedia Layanan Bunga Terbaik dari asosiasi florist nasional 
            yang menandakan pengakuan terhadap kualitas dan dedikasi kami.
            <span className="font-bold text-gray-950"> Pada tahun 2018</span>, Zenith Tulips resmi berdiri sebagai sebuah perusahaan  
            yang bergerak di bidang industri florist bukan lagi sekedar toko bunga biasa. 
            di tahun ini pula kami meluncurkan platform e-commerce Zenith Tulips,  
            sehingga memungkinkan pelanggan untuk membeli rangkaian bunga dan mengatur pengiriman secara online 
            memperluas jangkauan kami ke pelanggan di luar kota.
            <span className="font-bold text-gray-950"> pada awal tahuh 2022</span> Kami menjadi pionir dalam memperkenalkan desain bunga modern dengan sentuhan lokal 
            menggabungkan elemen budaya Indonesia dengan gaya bunga internasional 
            hal ini lah yang menghantarkan kami untuk menjadi perwakilan indonesia di festival bunga internasional .  
            <span className="font-bold text-gray-950"> beberapa pencapaian ini</span> mencerminkan komitmen zenith tulips untuk terus berkembang dan  
            memberikan layanan yang terbaik kepada pelanggan , serta menunjukkan bahwa kami terus berinovasi   
            dan memberikan kontribusi positif, baik dalam dunia bisnis maupun dalam komunitas yang lebih luas.
            </p>
            <Image
            src={'/aboutUs/History.jpeg'}
            alt={'History perusahaan'}
            width={450}
            height={450}
            className="w-full md:w-auto"
            />
            </div>

            <div className="flex flex-col md:flex-row mt-20 bg-gray-600 items-center">
            <Image
            src={'/aboutUs/Culture.jpeg'}
            alt={'culture perusahaan'}
            width={500}
            height={500}
            className="w-full md:w-auto"
            />
            <div className="px-8 md:px-12 text-white ">
            <h2 className="font-bold text-3xl mb-3">Culture</h2>
            <p className="text-md ">
            Di Zenith Tulips budaya perusahaan kami berfokus pada kerjasama, kreativitas, dan 
            penghargaan terhadap keindahan dalam setiap aspek pekerjaan. Kami menciptakan lingkungan yang inklusif dan terbuka,
            di mana setiap ide dihargai dan setiap individu merasa dihormati. Kami percaya bahwa bunga adalah simbol 
            kedamaian dan kebahagiaan, dan kami ingin membawa energi positif ini ke dalam budaya kerja kami.
            Tim kami terdiri dari orang-orang yang penuh semangat, bekerja dengan cinta dan dedikasi 
            untuk menghasilkan karya terbaik. Budaya kami mendukung pengembangan pribadi dan profesional, 
            memberikan ruang bagi setiap anggota tim untuk belajar, tumbuh, dan berinovasi.
            Kami percaya bahwa setiap rangkaian bunga adalah karya seni yang unik. 
            Kreativitas adalah inti dari apa yang kami lakukan, dan kami mendorong anggota tim 
            untuk berpikir di luar kotak dan membawa ide-ide baru.
            Kami bekerja bersama dengan saling mendukung untuk mencapai tujuan bersama, 
            berbagi pengetahuan dan pengalaman untuk menciptakan hasil yang terbaik.
            Kami selalu berusaha memberikan produk dan layanan terbaik kepada pelanggan. 
            Setiap detail, dari pemilihan bunga hingga rangkaian terakhir, 
            dipastikan sesuai dengan standar tinggi yang kami tetapkan.
            Kami merayakan keberagaman di tempat kerja dan menghargai perbedaan. 
            Kami percaya bahwa lingkungan yang inklusif menciptakan ide-ide yang lebih kaya dan solusi yang lebih inovatif.
            </p>
            </div>
            </div>
        </div>
    )
}
