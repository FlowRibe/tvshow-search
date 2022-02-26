import type {IncomingMessage, ServerResponse} from "http";
import Show from "~~/types/Show";
export default async (req: IncomingMessage, res: ServerResponse) => {
    let data = await $fetch(`https://api.tvmaze.com/shows`) as Show[]
    res.writeHead(200, {"Content-Type": "application/json"})
    // shuffle and get only 10 shows (no need to display all of them)
    res.write(JSON.stringify(data.sort(() => 0.5 - Math.random()).slice(0, 10)))
    res.end()
};