import EntryForm from "../EntryForm/EntryForm";
import EntrySection from "../EntrySection/EntrySection";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <EntryForm />
      <EntrySection />
    </div>
  );
}
