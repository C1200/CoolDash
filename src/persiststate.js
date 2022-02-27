import React from "react";

function usePersistentState(key, value=null, storage=window.localStorage) {
    const [state, setState] = React.useState(() => {
        return storage.getItem(key) ?? value;
    });

    React.useEffect(() => {
        storage.setItem(key, state);
    }, [state, key, storage]);
    
    return [state, setState];
}

export default usePersistentState;