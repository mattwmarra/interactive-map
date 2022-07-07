function RoomListItem({ index, className, displayText, mouseDown, mouseUp }) {
  return (
    <li key={index} className={className}>
      <button onMouseDown={mouseDown} onMouseUp={mouseUp}>
        {displayText}
      </button>
    </li>
  );
}

export default RoomListItem;
