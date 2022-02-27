import React from "react";

function AppTray({ apps=[], switchApp }) {
    return (
        <div className="apps">
            {apps.map((app) => (
                <div key={app.id} className="app" onClick={() => switchApp(app.id)}>
                    <img src={app.icon} alt="" />
                    <p>{app.name}</p>
                </div>
            ))}
        </div>
    );
}

export default AppTray;