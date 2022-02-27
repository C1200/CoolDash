import Clock from "./apps/Clock";
import Notes from "./apps/Notes"
import Settings from "./apps/Settings";

const apps = [
    {
        id: "clock",
        name: "Clock",
        icon: "/assets/clock.svg",
        func: Clock
    },
    {
        id: "notes",
        name: "Notes",
        icon: "/assets/notes.svg",
        func: Notes
    },
    {
        id: "settings",
        name: "Settings",
        icon: "/assets/settings.svg",
        func: Settings
    }
];

export default apps;