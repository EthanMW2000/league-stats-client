"use client";

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

  const searchSummoner = async () => {
    const summonerName = document.getElementById("name") as HTMLInputElement;
    const region = document.getElementById("region") as HTMLSelectElement;
    const url = `https://${region.value}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName.value}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_API_TOKEN as string,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
        <select id="region" defaultValue={"NA1"} name="regions">
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <input id="name" type="text" placeholder="Summoner Name" />
        <button onClick={searchSummoner}>Search</button>
    </div>
  );
}
