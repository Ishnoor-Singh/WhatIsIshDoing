import { serverUrl } from "@/constants"
import CreateIdea from "./CreateIdea";

async function getIdeas() {
    // fectch ideas from pocketbase
    const res = await fetch(`http://${serverUrl}/api/collections/ideas/records?page=1&perPage=20`,
        { cache: "no-store" }
    )
    const data = await res.json();
    return data?.items as any[];
}



export default async function IdeasPage() {
    const ideas = await getIdeas();

    return (
        <div>
            <h1>Ideas</h1>
            {ideas.map((idea) => <Idea key={idea.ideastring} idea={idea} />)}
            <CreateIdea />
        </div>
    )
}

//idea component that takes in an idea object and renders it
function Idea({ idea }: { idea: any }) {
    return (
        <div>
            <h2>{idea.ideaString}</h2>
            <p>{idea.details}</p>
        </div>
    )
}
