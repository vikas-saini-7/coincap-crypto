import { IconChevronDown } from '@tabler/icons-react';
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-700 border-opacity-10 rounded-md transition-all duration-1000 max-w-[900px] mx-auto">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium font-primary">{title}</h2>
        <IconChevronDown className={`${isOpen ? 'transform rotate-180' : ''}  transition-all duration-300`}/>
      </div>
        <div className={`${isOpen ? 'static' : 'hidden'} p-4 border-t border-gray-700 border-opacity-10 text-gray-500`}>
            {children}
        </div>
    </div>
  );
};

export default Accordion;
