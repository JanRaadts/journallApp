// import { useState } from "react";
import Entry from "../Entry/Entry";
import "./EntryList";
import styled from "styled-components";
// import { entries } from "../DB/DB";

export default function EntryList({ entries, onFavorite }) {
  // const [onEntries, setOnEntries] = useState([]);
  // setOnEntries(entries);

  return (
    <StyledEntrie>
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          id={entry.id}
          date={entry.date}
          title={entry.motto}
          text={entry.notes}
          favorite={entry.favorite}
          onFavorite={onFavorite}
        />
      ))}
    </StyledEntrie>
  );
}

const StyledEntrie = styled.div`
  background-color: white;
  margin: 10px;
  border-radius: 10px;
`;
