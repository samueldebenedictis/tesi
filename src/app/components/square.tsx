import Image from "next/image";
import { buildings } from "./assets/buildings";

type Color = "yellow" | "blue" | "green" | "red" | "white";

type SquareProps = {
  number: number;
  bgGradientColor?: Color;
  buildingIndex: number;
};

const squareColor = (color: Color) => {
  switch (color) {
    case "yellow":
      return `bg-linear-to-b from-amber-500 to-yellow-300 text-white outline-2 -outline-offset-4`;
    case "blue":
      return `bg-linear-to-b from-sky-500 to-blue-300 text-white outline-2 -outline-offset-4`;
    case "green":
      return `bg-linear-to-b from-green-500 to-emerald-300 text-white outline-2 -outline-offset-4`;
    case "red":
      return `bg-linear-to-b from-red-500 to-orange-300 text-white outline-2 -outline-offset-4`;
    default:
      return "bg-white";
  }
};

export default function Square(props: SquareProps) {
  const image = buildings[props.buildingIndex];
  const colorClass = squareColor(props.bgGradientColor || "white");
  const classNameBase =
    "rounded-xl size-48 p-4 m-2 grid content-center justify-items-center h-full";
  const className = [classNameBase, colorClass].join(" ");
  return (
    <div className={className}>
      <div className="relative text-center">
        <Image
          className="pt-12 pr-6 pl-6"
          src={image}
          width={500}
          height={500}
          alt=""
        />
        <div className="w-full absolute top-0">
          <span className="text-white font-extrabold text-6xl">
            {props.number}
          </span>
        </div>
      </div>
    </div>
  );
}
