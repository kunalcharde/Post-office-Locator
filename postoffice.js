export async function renderOfFices(pincode){
const parentElement = document.getElementById("info-offices")
    const Url =`https://api.postalpincode.in/pincode/${pincode}`
    let feetching = await fetch(Url);
    let response = await feetching.json();
    console.log(response[0].PostOffice);
    document.getElementById('message').innerText=response[0].Message
    locateOffice(response[0].PostOffice)
}
function locateOffice(array){
    array.map((data)=>{
        console.log(data.Name)
        let Office_Container =document.createElement('div')
        Office_Container.classList.add('office-container')
        let PElement1 = document.createElement("p")
        let PElement2 = document.createElement("p")
        let PElement3 = document.createElement("p")
        let PElement4 = document.createElement("p")
        let PElement5 = document.createElement("p")
        
    })

}