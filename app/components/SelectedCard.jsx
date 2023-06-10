"use client";

import Image from "next/image";

function SelectedCard({ data, index }) {
  return (
    <div className="w-[300px] md:w-[996px] bg-white p-[30px] md:p-[64px] rounded-[16px] flex flex-col md:flex-row shadow-lg ">
      <div className="flex items-center justify-center md:justify-normal md:mr-[64px] ">
        <Image
          src={data.results[index].picture.large}
          alt="proifle"
          height={100}
          width={100}
          className="rounded-full w-[70px] md:w-[128px] "
        />
      </div>
      <div className="" >
        <p className=" tracking-[-1.5px] underline text-[30px] text-center md:text-left md:text-[64px] md:leading-[64px] text-[#E16259] font-bold ">
          {data.results[index].name.first}
        </p>
        <p className=" pt-[14px] text-[14px] md:text-[20px] text-center md:text-left md:leading-[29px] text-black md:max-w-[570px] font-[400] ">
          {" "}
          <span className="text-[#a259ff] ">
            {data.results[index].location.street.number},{" "}
          </span>
          {data.results[index].location.street.name},{" "}
          {data.results[index].location.city},{" "}
          {data.results[index].location.state},{" "}
          <strong>{data.results[index].location.country},{" "}</strong>
          {data.results[index].location.postcode}{" "}
          {data.results[index].location.timezone.offset}
          {" - "}
          {data.results[index].location.timezone.description} <br />
          <span className="text-[#8a8a8a] capitalize "> {data.results[index].gender}</span>
        </p>
      </div>
    </div>
  );
}

export default SelectedCard;
