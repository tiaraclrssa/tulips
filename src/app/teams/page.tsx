"use client";

import { useEffect, useState } from "react";
import { fetchRandomUsers } from "@/utils/fetcher";
import Image from "next/image";

interface User {
  name: { first: string; last: string };
  picture: { thumbnail: string };
  email: string;
}

const TeamsPage = () => {
  const [designers, setDesigners] = useState<User[]>([]);
  const [staff, setStaff] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchRandomUsers(30);
      setDesigners(data.slice(0, 10));
      setStaff(data.slice(10, 30));
    };
    getUsers();
  }, []);

  const UserCard = ({ user }: { user: User }) => (
    <div className="bg-gray-300 shadow-lg rounded-lg p-5 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
      <img
        src={user.picture.thumbnail}
        alt={user.name.first}
        className="w-20 h-20 rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {user.name.first} {user.name.last}
      </h3>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>
  );

  const UsersGrid = ({ users }: { users: User[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );

  return (
    <div className="p-5 bg-gray-600 mt-[92px]">
      <div className="flex flex-col justify-center items-center mb-16 px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
          Zenith Tulips Teams
        </h1>
        <Image
          src={"/teams/ourTeams.jpeg"}
          alt={"pict teams"}
          width={700}
          height={400}
          className="rounded-xl shadow-md w-full max-w-4xl h-auto"
        />
      </div>
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-center">
        Desainer Flowers
      </h2>
      <div className="px-4">
        <UsersGrid users={designers} />
      </div>
      <h2 className="text-white text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">
        Staff
      </h2>
      <div className="px-4">
        <UsersGrid users={staff} />
      </div>
    </div>
  );
};

export default TeamsPage;



