interface Show {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: Date,
    ended: Date,
    officialSite: string,
    schedule: {
        time: string,
        days: string[]
    },
    rating: {
        average: number
    },
    weight: number,
    network: {
        id: number,
        name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        }
    },
    webChannel: {
        id: number,
        name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        }
    },
    dvdCountry: { 
        name: string,
        code: string,
        timezone: string
    },
    externals: {
        tvrage: number,
        thetvdb: number,
        imdb: string
    },
    image: {
        medium: string,
        original: string
    },
    summary: string,
    updated: number,
    _links: {
       self: {
           href: string
       },
       previousepisode: {
           href: string
       }
    }
}

export default Show
