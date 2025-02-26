import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/defaultLayout.tsx",[
        index("./routes/home.tsx"),
        route("settings/projects","./routes/settings/projects/Projects.tsx"),
    ]),
] satisfies RouteConfig;
