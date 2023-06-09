"use client";

import { useRouter } from "next/navigation";
import styles from "../app/styles.module.css";
import { useState } from "react";
import ExpandMoreIcon from "./icons/ExpandMoreIcon";

export default function SearchField() {
  const regionOptions = [
    "BR1",
    "EUN1",
    "EUW1",
    "JP1",
    "KR",
    "LA1",
    "LA2",
    "NA1",
    "OC1",
    "PH2",
    "RU",
    "SG2",
    "TH2",
    "TR1",
    "TW2",
    "VN2",
  ];
  const [region, setRegion] = useState("NA1");
  const router = useRouter();

  const searchSummoner = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const region = document.getElementById("region") as HTMLSelectElement;

    if (name.value.length === 0) {
      alert("Please enter a summoner name.");
      return;
    }

    router.push(`/summoner/${region.value}/${name.value}`);
  };

  const openDropdown = () => {
    <div className={styles.dropdownOverlay}>
      <button>Close</button>
      {regionOptions.map((region) => (
        <button onClick={() => setRegion(region)} key={region}>
          {region}
        </button>
      ))}
    </div>;
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <button className={styles.dropdown} id="region" onClick={openDropdown}>
          {region}
          <ExpandMoreIcon />
        </button>
        <input id="name" type="text" placeholder="Summoner Name" />
        <button
          className={styles.searchButton}
          id="search"
          onClick={searchSummoner}
        >
          Search
        </button>
      </div>
    </div>
  );
}
