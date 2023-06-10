"use client";
import { useState } from "react";
import Cards from "./Cards";
import SelectedCard from "./SelectedCard";

function Container({ data }) {
  const [active, setActive] = useState(0);

  const getIndex = (index) => {
    setActive(index);
  };
 
  return (
    <>
      <div className="flex  justify-center pt-[40px] md:pt-[70px]" >
        <SelectedCard data={data} index={active} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-[10px] md:gap-[24px] py-[60px] md:py-[120px] px-[20px] md:px-0 ">
        {data.results.map((el, i) => (
          <Cards
            key={i}
            gender={el.gender}
            nat={el.nat}
            name={el.name.first}
            email={el.email}
            value={i}
            currentIndex={getIndex}
            active={active}
          />
        ))}
      </div>
    </>
  );
}

export default Container;
