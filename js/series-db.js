const seriesDatabase = [
    {
        id: 'call-of-the-night',
        title: 'Yofukashi no Uta',
        subtitle: 'Call of the Night',
        year: '2022',
        cover: 'images/call-of-the-night.svg',
        description: 'A moody supernatural romance about a boy who becomes drawn into the night and vampire world. He meets a mysterious girl who only comes alive after sunset and discovers a new life under Tokyo’s neon midnight sky.',
        season: {
            title: 'Season 1',
            episodeCount: 13,
            episodes: [
                'Call of the Night S01E01',
                'Call of the Night S01E02',
                'Call of the Night S01E03',
                'Call of the Night S01E04',
                'Call of the Night S01E05',
                'Call of the Night S01E06',
                'Call of the Night S01E07',
                'Call of the Night S01E08',
                'Call of the Night S01E09',
                'Call of the Night S01E10',
                'Call of the Night S01E11',
                'Call of the Night S01E12',
                'Call of the Night S01E13'
            ]
            ,
            // actual filenames (without extension). English files have an extra " (1)" suffix.
            fileNames: [
                'Call of the Night - S01E01 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E02 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E03 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E04 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E05 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E06 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E07 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E08 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E09 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E10 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E11 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E12 1080p WEBRip Dual-Audio AV1-DBMS',
                'Call of the Night - S01E13 1080p WEBRip Dual-Audio AV1-DBMS'
            ]
        },
        seasonFolder: 'Anime/Yofukashi-no-uta/Call of the Night - S01 1080p WEBRip Dual-Audio AV1-DBMS',
        playerPage: 'player.html',
        seasonPage: 'season1.html'
        ,
        anilistTitle: 'Yofukashi no Uta'
    }
];

// Season 2 entry
seriesDatabase.push({
    id: 'call-of-the-night-s02',
    title: 'Yofukashi no Uta',
    subtitle: 'Call of the Night',
    year: '2024',
    cover: 'images/call-of-the-night-s2.svg',
    description: 'Season 2 of Yofukashi no Uta.',
    season: {
        title: 'Season 2',
        episodeCount: 12,
        episodes: [
            'Call of the Night S02E01',
            'Call of the Night S02E02',
            'Call of the Night S02E03',
            'Call of the Night S02E04',
            'Call of the Night S02E05',
            'Call of the Night S02E06',
            'Call of the Night S02E07',
            'Call of the Night S02E08',
            'Call of the Night S02E09',
            'Call of the Night S02E10',
            'Call of the Night S02E11',
            'Call of the Night S02E12'
        ],
        // actual filenames (without extension)
        fileNames: [
            '[DB]Yofukashi no Uta Season 2_-_01_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_02_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_03_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_04_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_05_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_06_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_07_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_08_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_09_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_10_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_11_(Dual Audio_10bit_BD1080p_x265)',
            '[DB]Yofukashi no Uta Season 2_-_12_(Dual Audio_10bit_BD1080p_x265)'
        ]
    },
    seasonFolder: 'Anime/Yofukashi-no-uta/Yofukashi no Uta Season 2',
    playerPage: 'player.html',
    seasonPage: 'season1.html',
    anilistTitle: 'Yofukashi no Uta Season 2'
});

function getAllSeries() {
    return seriesDatabase;
}

function getSeriesById(id) {
    return seriesDatabase.find(series => series.id === id);
}
