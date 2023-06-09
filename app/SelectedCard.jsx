"use client";

import Image from "next/image";

function SelectedCard({ data, index }) {
  return (
    <div className="w-[996px] bg-white p-[64px] rounded-[16px] flex shadow-lg ">
      <div className="flex items-center mr-[64px] ">
        <Image
          src={data.results[index].picture.large}
          alt="proiflePic"
          height={100}
          width={100}
          className="rounded-full w-[128px] "
        />
      </div>
      <div>
        <p className=" tracking-[-1.5px] underline text-[64px] leading-[64px] text-[#E16259] font-bold ">
          {data.results[index].name.first}
        </p>
        <p className="pt-[12px] text-[20px] leading-[29px] text-black max-w-[550px] font-[400] ">
          {" "}
          <span className="text-[#a259ff] ">775</span>, Heindertweg, Born,
          Zeeland, <strong>Netherlands</strong>, 18818 +6:00 - Almaty, Dhaka,{" "}
          <i>Colombo</i>
          <br />
          <span className="text-[#8a8a8a]"> {data.results[index].gender}</span>
        </p>
      </div>
    </div>
  );
}

export default SelectedCard;
