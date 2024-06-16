import {
  ClockIcon,
  GiftIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Clients() {
  return (
    <div className="w-full bg-[#FF000000] text-white py-6">
      <div className="max-w-4xl mx-auto py-6 px-2">
        <div className="flex justify-around items-center gap-10 flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <ClockIcon className="h-10 w-10" />

            <p className="text-5xl font-semibold text-white">8760</p>
            <p className="text-xl font-semibold text-white">Working Hours</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <GiftIcon className="h-10 w-10" />

            <p className="text-5xl font-semibold text-white">100+</p>
            <p className="text-xl font-semibold text-white">
              Completed Projects
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <UserGroupIcon className="h-10 w-10" />

            <p className="text-5xl font-semibold text-white">50+</p>
            <p className="text-xl font-semibold text-white">Happy Clients</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <TrophyIcon className="h-10 w-10" />

            <p className="text-5xl font-semibold text-white">50+</p>
            <p className="text-xl font-semibold text-white">Awards Received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
