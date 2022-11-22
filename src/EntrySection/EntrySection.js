import EntryList from "../EntryList/EntryList";
import NavigationTabs from "../NavigationTabs/NavigationTabs";
import "./EntrySection.css";

export default function AusgabeEinträge() {
  return (
    <>
      <NavigationTabs />
      <EntryList />
    </>
  );
}
