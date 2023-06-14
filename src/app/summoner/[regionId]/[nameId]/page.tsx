import { ISummonerInfo } from "./interfaces";

async function getSummonerInfo(
  regionId: string,
  nameId: string
): Promise<ISummonerInfo> {
  const res = await fetch(
    `https://${regionId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nameId}`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.API_KEY as string,
      },
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch summoner data: ${res.status} - ${res.statusText}`
    );
  }
  const data: ISummonerInfo = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { regionId: string; nameId: string };
}) {
  const summonerInfo = await getSummonerInfo(params.regionId, params.nameId);

  return (
    <div>
      My Post: {params.regionId}, {params.nameId} 
      <p>{summonerInfo.puuid}</p>
    </div>
  );
}
