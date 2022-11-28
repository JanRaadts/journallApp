import EntryForm from "../EntryForm/EntryForm";
import EntrySection from "../EntrySection/EntrySection";
import "./Main.css";
import { useState } from "react";
import styled from "styled-components";

export default function Main() {
  const [entries, setEntries] = useState([]);
  const [entriesToShow, setEntriesToShow] = useState("all");

  const favoriteEntries = entries.filter((entry) => entry.favorite);

  function handleData(newData) {
    setEntries([...entries, newData]);
  }

  function favStatus(favId) {
    setEntries(
      entries.map((entry) => {
        if (favId === entry.id) {
          return { ...entry, favorite: !entry.favorite };
        }

        return entry;
      })
    );
  }
  let amountFavEntries = favoriteEntries.length;
  let amountEntries = entries.length;

  return (
    <StyledMain className="main">
      <EntryForm dataExport={handleData} />
      <EntrySection
        entries={entriesToShow === "all" ? entries : favoriteEntries}
        onChangeEntriesView={setEntriesToShow}
        onFavorite={favStatus}
        entriesLength={amountEntries}
        favEntriesLength={amountFavEntries}
      />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  margin-bottom: 30px;
  background-color: #d99ace;
`;
