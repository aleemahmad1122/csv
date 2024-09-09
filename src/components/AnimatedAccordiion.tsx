"use client"
import { useState } from 'react';

const AnimatedAccordion = () => {
  const [activeOption, setActiveOption] = useState<number>(0);

  const handleOption = (index: number) => {
    setActiveOption(index);
  };

  return ( 

      <div className="options">
        {["Blonkisoaz", "Oretemauw", "Oretemauw", "Oretemauw", "Oretemauw"].map((label, index) => (
          <div
            key={index}
            className={`option bg-[url('/homeT.png')] bg-no-repeat bg-cover ${index === activeOption && 'active'} duration-300 transition-all`}
            onMouseEnter={() => { handleOption(index) }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="info">
                <div className="main">{label}</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
        ))}
      </div> 
  );
};

export default AnimatedAccordion;
