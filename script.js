/* Represent a vehicle */
class Vehicle{
    constructor(owner,model,price){
        this.owner=owner;
        this.model=model;
        this.price=price;
    }
}

/* Handle ui task */
class UI{
    static displayVehicle(){

const storeVehicles=[
    {
        owner:"Rachitha",
        model:"Maruti",
        price:23000,
    },
    {
        owner:"Rangana",
        model:"CH-R",
        price:30000
    }
]
const vehicles=storeVehicles;
vehicles.forEach((vehicle)=>
    UI.addVehicleToList(vehicle))
    }

static addVehicleToList(vehicle){
    const list=document.querySelector('#vehicle-list');
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${vehicle.owner}</td>
    <td>${vehicle.model}</td>
    <td>${vehicle.price}</td>
    <td><a href="#" class="btn btn-sm btn-danger delete">X</a></td>
    `
    list.appendChild(row);
}
static clearFields(){
    document.querySelector("#owner").value='';
    document.querySelector("#model").value='';
    document.querySelector("#price").value='';
}

static deleteBook(el){
    if(el.classList.contains('delete')){
        console.log(el.parentElement.parentElement.remove());
    }
}

static showAlert(message,className){
    const div=document.createElement('div');
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.container');
    const form=document.querySelector("#vehicle-form");
    container.insertBefore(div,form);
    setTimeout(()=>{
     document.querySelector('.alert').remove();
    },3000)
}

}
/* Store class */

/*Event= Display Vehile */
document.addEventListener('DOMContentLoaded',UI.displayVehicle);
/* Add a vehicle */

document.querySelector('#vehicle-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const owner=document.querySelector("#owner").value;
    const model=document.querySelector("#model").value;
    const number=document.querySelector("#price").value;

    const vehicle=new Vehicle(owner,model,number);
if(owner===''||model===""||number===""){
    UI.showAlert("Please fill the all fields ","danger");
}else{
//adding vehicle
UI.addVehicleToList(vehicle);

UI.showAlert("Added successfully","success");
//clear fields
UI.clearFields();
}


})



/* Remove a vehicle */

document.querySelector('#vehicle-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target);
    UI.showAlert("Book deleted","success");
})