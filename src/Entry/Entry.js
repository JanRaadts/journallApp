import "./Entry.css";
import favIcon from "./pictures/star.svg";
import favIconFilled from "./pictures/star-filled.svg";
import { useState } from "react";

export default function Entry({ date, title, text }) {
  const [icon, setIcon] = useState(false);

  function eventHandler() {
    setIcon(!icon);
  }

  return (
    <>
      <section className="Entry">
        <section className="date">
          <p>{date}</p>
        </section>
        <p className="title">"{title}"</p>
        <p>{text}</p>
        <img
          alt="favorite__icon"
          src={icon ? favIconFilled : favIcon}
          onClick={eventHandler}
        />
      </section>
    </>
  );
}
