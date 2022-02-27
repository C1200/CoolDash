import usePersistentState from "../persiststate";

function Settings({ language }) {
    const [name, setName] = usePersistentState("name", "");
    const [use24h, set24h] = usePersistentState("24h", "no");

    return (
        <div style={{ textAlign: "initial" }}>
            <label htmlFor="namebox">{language["settings.name"]}<br /></label>
            <input type="text" id="namebox" value={name} onChange={(ev) => setName(ev.target.value)} />
            {!language.force24h ? (
                <>
                    <br /><br />
                    <label htmlFor="24h">{language["settings.24h"]}<br /></label>
                    <div className="select">
                        <select id="24h" style={{ width: "100%" }} onChange={(ev) => set24h(ev.target.value)}>
                            <option value="yes" selected={use24h === "yes"}>{language["settings.yes"]}</option>
                            <option value="no" selected={use24h === "no"}>{language["settings.no"]}</option>
                        </select>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default Settings;