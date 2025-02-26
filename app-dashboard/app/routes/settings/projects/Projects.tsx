import type { Route } from ".react-router/types/app/+types/root"

type Project = {
    name: string;
    archived: boolean;
}

const PROJECTS = [
    { name: "Project 1", archived: false },
    { name: "Project 2", archived: false },
    { name: "Project 3", archived: false },
]

export async function loader({ params }: Route.LoaderArgs) {

    return PROJECTS;
}

export default function Projects({loaderData}: Route.ComponentProps) {

    const  projects = loaderData as unknown as Project[];
    return (
        <div>
            <h1>All Projects</h1>
            <ul>
                {projects && projects.map((project) => (
                    <li key={project.name}>
                        {project.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}