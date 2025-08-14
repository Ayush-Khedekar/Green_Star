import React from "react";

const SliderControles = ({
  onChange,
  size,
  className,
  active,
}: {
  size: number;
  onChange: (id: number) => void;
  className?: string;
  active: number;
}) => {
  return (
    <div className={className || "flex gap-1 items-center justify-center"}>
      {Array(size)
        .fill(1)
        .map((_button, ind) => (
          <div
            onClick={() => {
              onChange(ind);
            }}
            key={ind}
            className={`w-[5px]  cursor-pointer rounded-full duration-300 transition-all ease-in-out h-[5px] ${
              active == ind
                ? " bg-brand-secondary w-[30px] "
                : " bg-[#f4f4f4]/20 hover:scale-[1.4]"
            }`}
          />
        ))}
    </div>
  );
};

export default SliderControles;
