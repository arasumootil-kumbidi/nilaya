export type Contact = {
    name: string;
    email: string;
    phone: string;
};

export type Project = {
    name: string;
    contact: Contact;
    archived: boolean;
};