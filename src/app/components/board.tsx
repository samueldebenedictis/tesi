import type { Square } from "@/model/square";

type BoardProps = {
  boardsize: number;
  squares: Square[];
};

export default function Board(props: BoardProps) {
  return (
    <div className="rounded-xl size-32 border-8 p-4 text-xl">
      {props.boardsize}
    </div>
  );
}
