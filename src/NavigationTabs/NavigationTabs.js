import Tab from "../Tab/Tab";
import "./NavigationTabs.css";

export default function NavigationTabs({
  onChangeEntriesView,
  entriesLength,
  favEntriesLength,
}) {
  return (
    <>
      <section className="NavigationTabs">
        <Tab
          name="All Entries"
          showLength={entriesLength}
          handleClick={() => onChangeEntriesView("all")}
        />
        <Tab
          showLength={favEntriesLength}
          name="Favorites"
          handleClick={() => onChangeEntriesView("favorites")}
        />
      </section>
    </>
  );
}
