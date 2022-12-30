import { rendermap } from "./rendermap.js"
import { renderOfFices } from "./postoffice.js"
const fetchBTN = document.getElementById('fetchbtn')
const ip_content_div = document.getElementById('ip-content')
const contetntdiv =document.getElementById('content')
const postofficediv= document.querySelector('.post-office-container')
export async function GetIpInfo(){
        
    const url=`https://api.ipify.org/?format=json`
    const response= await fetch(url)
    const  data = await response.json()
    fetchBTN.style.display="none"
    ipaddress = data.ip
    GetIpDetails(ipaddress )
    ip_content_div.removeAttribute('style')
    contetntdiv.removeAttribute('style')
    postofficediv.removeAttribute('style')
}


async function GetIpDetails(IP_Address){
    try {
            const URL1=`https://api.ipgeolocation.io/ipgeo?apiKey=1380354d60d7468f924ba39afd290fb8&ip=${IP_Address}`
            const URL2=`https://ipinfo.io/${IP_Address}/geo`
            let Response = await fetch(URL1)
            const data = await Response.json()
            console.log(data)
            var lattiude = data.latitude,
            longitude = data.longitude,
            city= data.city,
            organization= data.organization,
            hostname= data.continent_name,
            region= data.state_prov,
            postalCode=data.zipcode,
            timeZone =data.time_zone.name,
            cureenttime=data.time_zone.current_time.split(" "),
            date = cureenttime[0],
            Actualtime = cureenttime[1].split("."),
            time= Actualtime[0];
            console.log(time)
            RenderinfoDetails(lattiude,longitude,city,organization,hostname,region,timeZone,time,date,postalCode)
            rendermap(lattiude,longitude)
            renderOfFices(postalCode)
    }
    catch(err){
            alert(err);
    }
}

// function  createipinfoItem(content,inforElement){

//     // ip_content_div.appendChild=div
//     content.map((item)=>{
//         console.log(item)
//         let div2 = document.createElement("div")
//         let labelName= document.createElement("label");
//         let spanName= document.createElement("span");
//         console.log(item.label)
//         console.log(item.data)
//         labelName.textContent= item.label;
//         spanName.textContent=item.data;
//         inforElement.appendChild=labelName
//         inforElement.appendChild=spanName;
//     })

//     ip_content_div.appendChild=inforElement
// }
function RenderinfoDetails(lattiude,longitude,city,organization,hostname,region,timezone,date,time,postalCode){
    
    // let content =[
    //     {
    //         label : "Lattitude :",
    //         data : lattiude
    //     },
    //     {
    //         label : "Longitude:",
    //         data : longitude
    //     },
    //     {
    //         label : "City :",
    //         data : city
    //     },
    //     {
    //         label : "Region :",
    //         data : region
    //     },
    //     {
    //         label : "Organisation :",
    //         data : organization
    //     },
    //     {
    //         label : "Hostname :",
    //         data : hostname
    //     },
        
    // ]
    // let inforElement= document.createElement("div");
    // ip_content_div.appendChild=inforElement
    // createipinfoItem(content,inforElement)
    document.getElementById('lat').innerText=lattiude;
    document.getElementById('long').innerText=longitude;
    document.getElementById('city').innerText=city;
    document.getElementById('organization').innerText=organization;
    document.getElementById('hostname').innerText=hostname;
    document.getElementById('region').innerText=region;
    document.getElementById('timezone').innerText=time;
    document.getElementById('time').innerText=`${date} & ${time} `
    document.getElementById('pincode').innerText=postalCode;

}

let dive= document.createElement("div")
ip_content_div.appendChild=dive



