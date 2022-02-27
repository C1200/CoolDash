import React from "react";
import strFormat from "string-format";
import usePersistentState from "../persiststate";

strFormat.extend(String.prototype, {});

function Clock({ language }) {
    const dayNames = [
        language["day.sun"],
        language["day.mon"],
        language["day.tue"],
        language["day.wed"],
        language["day.thu"],
        language["day.fri"],
        language["day.sat"]
    ];
        
    const monthNames = [
        language["month.jan"],
        language["month.feb"],
        language["month.mar"],
        language["month.apr"],
        language["month.may"],
        language["month.jun"],
        language["month.jul"],
        language["month.aug"],
        language["month.sep"],
        language["month.oct"],
        language["month.nov"],
        language["month.dec"]
    ];
    
    const [name] = usePersistentState("name", "");
    const [pref24h] = usePersistentState("24h", "no");
    const [date, setDate] = React.useState(new Date());
    
    React.useEffect(() => {
        var id = setInterval(() => {
            setDate(new Date());
        }, 1000);
        
        return () => clearInterval(id);
    }, [date]);
            
    var use24h = language.force24h || pref24h === "yes";
    var pm = date.getHours() >= 12;
    var AorP = pm ? language["time.pm"] : language["time.am"];
    var greeting = (pm ? language["greeting.pm"] : language["greeting.am"]).format({ name });
    var time = !use24h ?
        language["time.12h"].format({
            hr: date.getHours() % 12 || 12,
            min: `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`,
            AorP
        }) :
        language["time.24h"].format({
            hr: date.getHours(),
            min: `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`
        });
    var dow = dayNames[date.getDay()];
    var dom = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var fullDate = language["date"].format({ dow, dom, month, year });
            
    return (
        <>
            <p className="greeting">{greeting}</p>
            <p className="time">{time}</p>
            <p className="date">{fullDate}</p>
        </>
    );
}

export default Clock;