import type {IncomingMessage, ServerResponse} from "http";
import Person from "~~/types/Person";
export default async (req: IncomingMessage, res: ServerResponse) => {
    let data = await $fetch(`https://api.tvmaze.com/people`) as Person[]
    res.writeHead(200, {"Content-Type": "application/json"})
    // shuffle and get only 10 people (no need to display all of them)
    res.write(JSON.stringify(data.sort(() => 0.5 - Math.random()).slice(0, 10)))
    res.end()
};