export const getBookmark = async access_token => {
    return await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_ID}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            next: {
                revalidate: 10
            }
        }
    )
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const getGameBookmark = async access_token => {
    return await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/${process.env.GAME_RAINDROP_ID}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            next: {
                revalidate: 10
            }
        }
    )
        .then(res => res.json())
        .catch(err => console.error(err));
};
