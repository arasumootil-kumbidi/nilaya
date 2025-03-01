
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type FieldValues } from "react-hook-form"
import { useSubmit } from "react-router";
import type { Route } from "../../+types/root";
import FormField from "./components/FormFields";
import { Button } from "../ui/button";
import { projectSchema } from "~/utils/schema";


export function AddProjectForm() {
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(projectSchema),
    });
    const submit = useSubmit();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        submit(data, {
            method: "post",
            action: "/settings/projects",
            encType: "multipart/form-data",
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField type="text" placeholder="Project Name" name="projectName" register={register} error={formState.errors.projectName} />
            <Button type="submit" variant={"default"}> Add </Button>
        </form>
    );
}