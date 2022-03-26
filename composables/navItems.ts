
export const useNavItems = () => useState('navItems', () => [
    {
        id: 0,
        name: "Home",
        href: "/",
        active: false
    },
    {
        id: 1,
        name: "TV Show search",
        href: "/shows",
        active: false
    },
    {
        id: 2,
        name: "People search",
        href: "/people",
        active: false
    }
])