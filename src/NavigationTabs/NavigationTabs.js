import Tab from "../Tab/Tab";
import "./NavigationTabs.css";

export default function NavigationTabs() {
  return (
    <>
      <section className="NavigationTabs">
        <Tab name="All Entries" />
        <Tab name="Favorites" />
      </section>
    </>
  );
}
