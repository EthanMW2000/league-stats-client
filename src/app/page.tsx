import SearchField from "@/components/SearchField";
import styles from "./styles.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.searchSection}>
        <h1>Analyze a summomer.</h1>
        <SearchField />
      </div>
    </main>
  );
}
