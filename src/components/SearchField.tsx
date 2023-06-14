"use client";

import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const searchSummoner = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const region = document.getElementById("region") as HTMLSelectElement;

    router.push(`/summoner/${region.value}/${name.value}`);
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
