import "./EntryForm.css";

export default function EingabeFormular() {
  return (
    <>
      <fieldset className="form">
        <h2>NEW ENTRY - TODAY, FEB 28, 2028</h2>

        <label htmlFor="motto">Motto</label>
        <input type="text" name="motto" id="motto" className="input" />
        <label htmlFor="notes">Notes</label>
        <textarea name="notes" id="notes" className="input" />
        <label htmlFor="submit" />
        <button name="submit" id="submit">
          Create
        </button>
      </fieldset>
    </>
  );
}
