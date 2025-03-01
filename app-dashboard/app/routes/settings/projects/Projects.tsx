import type { Route } from ".react-router/types/app/+types/root"
import { Link } from "react-router";
import { writeToDynamoDB } from "~/.server/dynamo";
import { AddProjectForm } from "~/components/forms/ProjectForms";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { projectSchema } from "~/utils/schema";

type Project = {
    name: string;
    archived: boolean;
}

const PROJECTS = [
    { name: "Project 1 ddddddddd", archived: false },
    { name: "Project 2", archived: false },
    { name: "Project 3", archived: false },
    { name: "Project 4", archived: false },
    { name: "Project 5", archived: false },
    { name: "Project 6", archived: false },
    { name: "Project 7", archived: false },
    { name: "Project 8", archived: false },
    { name: "Project 9", archived: false },
    { name: "Project 10", archived: false },
    { name: "Project 11", archived: false },
    { name: "Project 12", archived: false },
    { name: "Project 13", archived: false }
]

export function loader({ params }: Route.LoaderArgs) {
    /*     try {
            writeToDynamoDB("nilaya-app-database", {
                "ProjectName": "Test Project 1",
                "section": "Project Section 1",
                test: { "test": "test" }
            });
        } catch (error) {
            console.error(error);
        } */

    return PROJECTS;
}

export async function action({ request }: Route.ActionArgs) {
    try {
        const formData = await request.formData();
        const project = projectSchema.parse(Object.fromEntries(formData.entries()));
      //  project.section = "";
        writeToDynamoDB("nilaya-app-database", project)
    } catch (error) {
        console.error(error);
    } 
}

export default function Projects({ loaderData }: Route.ComponentProps) {

    const projects = loaderData as unknown as Project[];
    return (
        <div>
            <div className="flex flex-row items-center w-full p-5">
                <div className="flex-[3_0_0%]">
                    <h1 className="text-2xl font-bold text-center">Projects</h1>
                </div>
                <div className="flex-[1_0_0%] flex justify-end">
                    <NewProjectDialogue />
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4">
                {projects && projects.map((project) => (
                    <Link to={`/settings/projects/${project.name}`} key={project.name}>
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card key={project.name} className="max-w-2xs">
            <CardHeader>
                <CardTitle className="truncate">
                    {project.name}
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                {project.name}
            </CardContent>
            <CardFooter>
                <p>client name</p>
            </CardFooter>
        </Card>
    )
}


export function NewProjectDialogue() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>What is the name of your new project ?</DialogTitle>
                    <DialogDescription>
                        Create a new project here.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    {/*    <div className="grid flex-1 gap-2">
                        <Label htmlFor="project-name" className="sr-only">
                            Name of the project
                        </Label>
                        <Input
                            id="project-name"
                            name="project-name"
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                        Create
                    </Button> */}
                    <AddProjectForm />
                </div>
            </DialogContent>
        </Dialog>
    )
}
