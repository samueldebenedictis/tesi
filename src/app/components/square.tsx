type SquareProps = {
  number: number;
};

export default function Square(props: SquareProps) {
  return (
    <div className="rounded-xl size-32 border-8 p-4 text-xl">
      {props.number}
    </div>
  );
}
