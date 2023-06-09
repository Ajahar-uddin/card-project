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
      <SelectedCard data={data} index={active} />
      <div className="grid grid-cols-4 gap-[24px] py-[120px] ">
        {data.results.map((el, i) => (
          <Cards
            key={i}
            gender={el.gender}
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
