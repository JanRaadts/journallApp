import Entry from "../Entry/Entry";
import "./EntryList";
import { entries } from "../DB/DB";

export default function EntryList() {
  return (
    <>
      {entries.map((entrie) => (
        <Entry
          key={entrie.id}
          date={entrie.date}
          title={entrie.motto}
          text={entrie.notes}
        />
      ))}
    </>
  );
}
