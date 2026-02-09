import React, { useState } from "react";
import "../Style/accordion.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionProps {
  title: any;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
  open = false,
}) => {
  const [checked, setChecked] = useState(open);
  return (
    <div
      className={
        "accordion bg-white rounded-lg  border border-gray-300 mb-4 shadow-bottom " +
        className
      }
    >
      <input
        type="checkbox"
        checked={checked}
        name="panel"
        id="panel-1"
        className="hidden"
        readOnly
      />
      <label
        htmlFor="panel-1"
        className="relative block rounded-2xl cursor-pointer"
        onClick={() => setChecked((prev) => !prev)}
      >
        <div className="flex items-center justify-between p-4">
          {title}
          <div className="text-black text-3xl w-8 font-extrabold">
            {checked ? <BiChevronUp /> : <BiChevronDown />}
          </div>
        </div>
      </label>
      <div className="accordion__content overflow-hidden bg-grey-lighter">
        {children}
      </div>
    </div>
  );
};

export default Accordion;
