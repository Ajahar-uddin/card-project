"use client";

function Cards({ gender, name, email, value, currentIndex, active }) {
  return (
    <div
      className={`w-[282px] py-[12px] px-[16px] rounded-[4px] shadow-md cursor-pointer ${active == value ? "bg-green-300": "bg-white"}`}
      onClick={() => currentIndex(value)}
    >
      <div className="mb-[4px]">
        <p className="text-[14px] text-left font-[400] text-black/60 leading-[21px] ">
          {gender}
          <span className="mx-[4px]">·</span>NL
        </p>
      </div>

      <div className="mb-[8px]">
        <p className="text-[22px] text-left font-bold text-black leading-[29.7px] ">
          {name}
        </p>
      </div>
      <div>
        <p className="text-[15px]  text-left font-[400] text-[#E16259] leading-[22.5px] ">
          {email}
        </p>
      </div>
    </div>
  );
}

export default Cards;
