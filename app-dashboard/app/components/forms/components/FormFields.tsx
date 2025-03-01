import type { FieldError, UseFormRegister } from "react-hook-form";
import { Input } from "~/components/ui/input";

export default function FormField({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}: {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}) {
    return (
        <>
            <Input
                type={type}
                placeholder={placeholder}
                {...register(name, { valueAsNumber })}
            />
            {error && <span className="error-message">{error.message}</span>}
        </>
    );
}
