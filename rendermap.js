import{GetIpInfo} from "./ipinfo.js";

const map_container= document.getElementById("map-container")
export function rendermap(lat,long){
    const iframeElement= document.createElement('iframe');
    iframeElement.width ="100%";
    iframeElement.height ="300rem";
    iframeElement.src =`//maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
    // iframeElement.scrolling ='no';
    map_container.appendChild(iframeElement)
}