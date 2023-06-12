'use client';

import { useState } from "react";

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

  const [summonerId, setSummonerId] = useState("");

  return (
    <div>
      <form>
      <select defaultValue={"NA1"} name="regions">
        {regionOptions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Summoner Name" />
      <button type="submit">Search</button>
      </form>
    </div>
  );
}
