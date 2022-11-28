import EntryList from "../EntryList/EntryList";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

export default function EntrySection({
  entries,
  onFavorite,
  onChangeEntriesView,
  entriesLength,
  favEntriesLength,
}) {
  return (
    <>
      <NavigationTabs
        entriesLength={entriesLength}
        favEntriesLength={favEntriesLength}
        onChangeEntriesView={onChangeEntriesView}
      />
      <EntryList entries={entries} onFavorite={onFavorite} />
    </>
  );
}
