export async function renderOfFices(pincode){

    const Url =`https://api.postalpincode.in/pincode/${pincode}`
    let feetching = await fetch(Url);
    let response = await feetching.json();
    // console.log(response[0].PostOffice);
    document.getElementById('message').innerText=response[0].Message
    locateOffice(response[0].PostOffice)
}
function locateOffice(array){
    const parentElement = document.getElementById("info-offices")
    array.map((data)=>{
        // console.log(data.Name)
        let Office_Container =document.createElement('div')
        Office_Container.classList.add('office-container')
        let PElement1 = document.createElement("p")
        let PElement2 = document.createElement("p")
        let PElement3 = document.createElement("p")
        let PElement4 = document.createElement("p")
        let PElement5 = document.createElement("p")
        PElement1.textContent = `Name : ${data.Name}`
        PElement2.textContent = `Branch Type : ${data.BranchType}`
        PElement3.textContent = `Delivery Status : ${data.DeliveryStatus}`
        PElement4.textContent = `District : ${data.District}`
        PElement5.textContent = `Divison : ${data.Division}`
        Office_Container.appendChild(PElement1)
        Office_Container.appendChild(PElement2)
        Office_Container.appendChild(PElement3)
        Office_Container.appendChild(PElement4)
        Office_Container.appendChild(PElement5)
        parentElement.appendChild(Office_Container)
    })

}