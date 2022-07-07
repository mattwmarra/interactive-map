import { useState } from "react";
import { dining, conferenceRooms, offices, services } from "./rooms.json";
import RoomListItem from "./RoomListItem";
export const StateList = () => {
  const diningArray: string[] = Object.keys(dining);
  const conferenceRoomArray: string[] = Object.keys(conferenceRooms);
  const officeArray: string[] = Object.keys(offices);
  const servicesArray: string[] = Object.keys(services);

  const [selectedState, setSelectedState] = useState<Element>();

  const findState = (stateID: string) => {
    const selectedStateNode = document.querySelector(`#${stateID}`);
    if (selectedStateNode != null) {
      setSelectedState(selectedStateNode);
    }
    selectedStateNode?.classList.add("active");
  };

  const deselectState = () => {
    selectedState?.classList.remove("active");
    const emptyElement = document.createElement("div");
    setSelectedState(emptyElement);
  };

  return (
    <section className="room-list">
      <h2>Locations</h2>
      <h3>Offices</h3>
      <ul className="room-list">
        {officeArray.map((item: string, index: number) => {
          return (
            <RoomListItem
              index={index}
              className={"li-dining"}
              mouseDown={() => findState(item)}
              mouseUp={deselectState}
              displayText={offices[item]}
            />
          );
        })}
      </ul>
      <h3>Conference Rooms</h3>
      <ul className="room-list">
        {conferenceRoomArray.map((item: string, index: number) => {
          return (
            <RoomListItem
              index={index}
              className={"li-dining"}
              mouseDown={() => findState(item)}
              mouseUp={deselectState}
              displayText={conferenceRooms[item]}
            />
          );
        })}
      </ul>
      <h3>Services</h3>
      <ul className="room-list">
        {servicesArray.map((item: string, index: number) => {
          return (
            <RoomListItem
              index={index}
              className={"li-dining"}
              mouseDown={() => findState(item)}
              mouseUp={deselectState}
              displayText={services[item]}
            />
          );
        })}
      </ul>
      <h3>Dining</h3>
      <ul className="room-list">
        {diningArray.map((item: string, index: number) => {
          return (
            <RoomListItem
              index={index}
              className={"li-dining"}
              mouseDown={() => findState(item)}
              mouseUp={deselectState}
              displayText={dining[item]}
            />
          );
        })}
      </ul>
    </section>
  );
};
