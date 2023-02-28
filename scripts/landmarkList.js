import { getLandmarks } from "./main.js";

export const siteList = () => {
    const places = getLandmarks()

    let htmlString = ''

    for (const singleLandmark of places) {
        htmlString += `<div class="location card">
        <div class ="site_name"`
    }
}