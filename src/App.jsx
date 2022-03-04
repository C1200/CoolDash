import React from "react";
import lang from "./lang";
import Setup from "./Setup";
import AppTray from "./AppTray";
import apps from "./Apps";
import usePersistentState from "./persiststate";
import "./App.css";

var language = lang();

function App() {
    const [name, setName] = usePersistentState("name", "");
    const [app, setApp] = React.useState("clock");

    if (!name)
        return <Setup
                   lang={language}
                   step="name"
                   done={(name) => setName(name)}
                />;

    var AppComponent = (apps.find(el => el.id === app) ||
                        { func: () => null }).func;
    
    return (
        <main>
            <AppComponent language={language} />
            <AppTray apps={apps} switchApp={to => setApp(to)} />
        </main>
    );
}

export default App;