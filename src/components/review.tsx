"use client";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "toni raditya",
    image: "/reviews/customer1.jpg",
    comment: "Bunga yang sangat segar dan pelayanan yang ramah!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael antonio",
    image: "/reviews/customer2.jpg",
    comment: "Sangat puas dengan rangkaian bunga untuk acara pernikahan saya.",
    rating: 4,
  },
  {
    id: 3,
    name: "Siti",
    image: "/reviews/customer3.jpg",
    comment: "Kualitas bunga sangat bagus, dan pengiriman cepat, nyesel banget cma beli satu",
    rating: 5,
  },
  {
    id: 4,
    name: "renata avika",
    image: "/reviews/customer4.jpg",
    comment: "ga nyesel banget beli bunga disinii!!",
    rating: 5,
  },
  {
    id: 5,
    name: "Selita",
    image: "/reviews/customer5.jpg",
    comment: "suka bangettt, kualitas baik",
    rating: 5,
  },
];

export default function ReviewSection() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Image
                src={review.image}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
