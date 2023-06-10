"use client";

function Cards({ gender, name, email, value,nat, currentIndex, active }) {
  return (
    <div
      className={` md:w-[282px] py-[6px] md:py-[12px] px-[8px] md:px-[16px] rounded-[4px] shadow-md cursor-pointer ${active == value ? "bg-[#A259FF] text-white ": "bg-white"}`}
      onClick={() => currentIndex(value)}
    >
      <div className="mb-[4px]">
        <p className={` text-[10px] capitalize md:text-[14px] text-left font-[400] ${active == value ? 'text-white': "text-black/60"}  md:leading-[21px] `}>
          {gender}
          <span className="mx-[4px]">·</span>{nat}
        </p>
      </div>

      <div className="mb-[8px]">
        <p className={`text-[16px] md:text-[22px] text-left font-bold ${active == value ? 'text-white': "text-black"} md:leading-[29.7px] `}>
          {name}
        </p>
      </div>
      <div>
        <p className={`text-[8px] md:text-[15px]  text-left font-[400] ${active == value ? 'text-white': "text-[#E16259]"} md:leading-[22.5px] `}>
          {email}
        </p>
      </div>
    </div>
  );
}

export default Cards;
