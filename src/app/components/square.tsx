type Color = "yellow" | "blue" | "green" | "red" | "white";

type SquareProps = {
  number: number;
  color?: Color;
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
  const colorClass = squareColor(props.color || "white");
  const classNameBase =
    "rounded-xl size-32 p-4 m-2 grid grid-cols-1 content-center justify-items-center";
  const className = [classNameBase, colorClass].join(" ");
  return (
    <div className={className}>
      <span className="text-white font-bold text-6xl drop-shadow-xl">
        {props.number}
      </span>
    </div>
  );
}
