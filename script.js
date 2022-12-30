import {  GetIpInfo } from "./ipinfo.js";
const IP_Address = document.getElementById('ipaddress')




export async function getipaddress(){
        
                const url=`https://api.ipify.org/?format=json`
                const response= await fetch(url)
                const  data = await response.json()
                var ipaddress = data.ip
                IP_Address.textContent=ipaddress
}
const fetchBTN = document.getElementById('fetchbtn')
fetchBTN.addEventListener('click', GetIpInfo)
document.addEventListener('DOMContentLoaded',getipaddress)
