export const getLastActivity = async () => {
  return await fetch(
    `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.NEXT_PUBLIC_STEAM_API}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}&format=json`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getGamesDetails = async (gameId) => {
  return await fetch(
    `http://store.steampowered.com/api/appdetails?appids=${gameId}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res[gameId].data)
    .catch((err) => console.error(err));
};

export const getSteamStats = async (gameId) => {
  return await fetch(
    `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameId}&key=${process.env.NEXT_PUBLIC_STEAM_API}&steamid=${process.env.NEXT_PUBLIC_STEAM_ID}&format=json`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};