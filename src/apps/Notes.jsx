import usePersistentState from "../persiststate"

function Notes({ language }) {
    const [notes, setNotes] = usePersistentState("notes", "");

    return (
        <>
            <textarea
                value={notes}
                cols={30}
                rows={20}
                onChange={(ev) => setNotes(ev.target.value)}
                style={{ background: "#ffffe0" }}
            />
        </>
    )
}

export default Notes;