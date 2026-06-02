// Lightweight AniList GraphQL helper
// Usage: await AniList.fetchByTitle('Call of the Night')
// Returns the `Media` object from AniList or throws on error.

async function fetchAniListByTitle(searchTitle) {
    if (!searchTitle) return null;
    const query = `query ($search: String) {
        Media(search: $search, type: ANIME) {
            id
            idMal
            title { romaji english native }
            coverImage { large medium }
            bannerImage
            description
            episodes
            season
            seasonYear
            format
            status
            averageScore
            meanScore
            genres
            siteUrl
        }
    }`;

    const variables = { search: searchTitle };

    const res = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ query, variables })
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error('AniList API error: ' + res.status + ' ' + text);
    }

    const payload = await res.json();
    if (payload.errors) {
        throw new Error('AniList GraphQL error: ' + JSON.stringify(payload.errors));
    }

    return payload.data && payload.data.Media ? payload.data.Media : null;
}

async function fetchAniListById(id) {
    if (!id) return null;
    const query = `query ($id: Int) {
        Media(id: $id, type: ANIME) {
            id
            idMal
            title { romaji english native }
            coverImage { large medium }
            bannerImage
            description
            episodes
            season
            seasonYear
            format
            status
            averageScore
            meanScore
            genres
            siteUrl
        }
    }`;

    const variables = { id: Number(id) };

    const res = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ query, variables })
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error('AniList API error: ' + res.status + ' ' + text);
    }

    const payload = await res.json();
    if (payload.errors) {
        throw new Error('AniList GraphQL error: ' + JSON.stringify(payload.errors));
    }

    return payload.data && payload.data.Media ? payload.data.Media : null;
}

function cleanDescription(html) {
    if (!html) return '';
    // Very small sanitizer: strip tags and decode basic entities
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.replace(/\s+/g, ' ').trim();
}

window.AniList = {
    fetchByTitle: fetchAniListByTitle,
    fetchById: fetchAniListById,
    cleanDescription
};
