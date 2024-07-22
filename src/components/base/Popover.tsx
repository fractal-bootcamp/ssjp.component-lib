import React from "react";
import { PopoverProps } from "../TextInput/types";

type Popover = {
  popover: PopoverProps;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popover = ({ popover, active, setActive }: Popover) => {
  const popoverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  if (!active) {
    return (
      <div
        className="text-blue-500 cursor-pointer top-0 right-0 absolute"
        onClick={() => (popover.active ? setActive(false) : setActive(true))}
      >
        {popover.icon}
      </div>
    );
  } else {
    return (
      <div
        ref={popoverRef}
        className="z-10 absolute bg-gray-600 text-white rounded-md p-4"
      >
        {popover.content}
      </div>
    );
  }
};
export default Popover;
