import { MouseEventHandler } from "react";

function RoomListItem({
  index,
  className,
  displayText,
  mouseDown,
  mouseUp,
}: RoomListItemStruct) {
  return (
    <li key={index} className={className}>
      <button onMouseDown={mouseDown} onMouseUp={mouseUp}>
        {displayText}
      </button>
    </li>
  );
}

interface RoomListItemStruct {
  index: number;
  className: string;
  displayText: string;
  mouseDown: MouseEventHandler;
  mouseUp: MouseEventHandler;
}

export default RoomListItem;
