interface Person {
    id: number,
    url: string,
    name: string,
    country: {
        name: string,
        code: string,
        timezone: string
    },
    birthday: Date,
    deathday: Date,
    gender: string,
    image: {
        medium: string,
        original: string
    },
    updated: number,
    _links: {
        self: {
            href: string
        }
    }
}

export default Person
