import "./Entry.css";
import favIcon from "./pictures/star.svg";
import favIconFilled from "./pictures/star-filled.svg";

export default function Entry({ date, title, text, onFavorite, favorite, id }) {
  function eventHandler() {
    onFavorite(id);
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
          src={favorite ? favIconFilled : favIcon}
          onClick={eventHandler}
        />
      </section>
    </>
  );
}
