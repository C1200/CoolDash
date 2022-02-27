import React from "react";

function Setup({ lang, step, done }) {
    const [name, setName] = React.useState("");
    if (step === "name") {
        return (
            <div className="setup">
                <h2>{lang["setup.name.title"]}</h2>
                <label htmlFor="namebox">{lang["setup.name.before"]}</label>
                <input
                    type="text"
                    id="namebox"
                    placeholder={lang["setup.name.world"]}
                    onChange={(ev) => setName(ev.target.value)}
                />{lang["setup.name.after"]}
                <br /><br />
                <button
                    disabled={name.length === 0}
                    onClick={() => done(name)}
                >{lang["setup.submit"]}</button>
            </div>
        );
    }
}

export default Setup;