import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

const langs = {en, fr};

function lang() {
    var pref = (navigator.language ?? "en").split("-")[0].toLowerCase();

    if (Object.keys(langs).some(el => el === pref)) {
        return langs[pref];
    } else {
        return langs["en"];
    }
}

export default lang;