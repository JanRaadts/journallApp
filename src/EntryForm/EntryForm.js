import "./EntryForm.css";
import { nanoid } from "nanoid";

export default function EingabeFormular({ dataExport }) {
  function saveInArray(event) {
    event.preventDefault();
    let inputData = {
      id: nanoid(),
      motto: event.target.elements.motto.value,
      notes: event.target.elements.notes.value,
      date: "23.11.2022",
      favorite: false,
    };
    event.target.elements.motto.value = null;
    event.target.elements.notes.value = null;
    event.target.elements.motto.focus();

    dataExport(inputData);
  }

  return (
    <>
      <form onSubmit={saveInArray}>
        <fieldset className="form">
          <h2>NEW ENTRY - TODAY, 29.11.2022</h2>

          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" className="input" />
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" className="input" />
          <label htmlFor="submit" />
          <button type="submit" name="submit" id="submit">
            Create
          </button>
        </fieldset>
      </form>
    </>
  );
}
