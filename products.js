const server = new XMLHttpRequest();
let data;
server.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      data = JSON.parse(this.responseText);
     console.log(data)
     
     data.map((val) => {
        document.querySelector('#result').innerHTML +=`
        <div class="border w-[18rem] rounded-md shadow-md h-[50vh] overflow-scroll">
        <img src="${val.image}" class="h-[40vh]">
        </div>
        <div class="p-2">
        <h2>${val.title}</h2>
        <p>${val.description}</p>
        <h3>${val.price}/- Rs</h3>
        <button class= "text-white bg-black shadow w-full p-2">Buy Now</button>
        </div>
        `
     })
    }
}

server.open('GET', 'https://fakestoreapi.com/products', true);
server.send();

function filterData(){
    // alert('Helo')
    const newData = data.filter((product) => {
        return product.price >= 0 && product.price <= 100;
    })
    

    document.querySelector('#result').innerHTML="";

    newData.map((val) => {
        document.querySelector('#result').innerHTML +=`
        <div class="border w-[18rem] rounded-md shadow-md h-[50vh] overflow-scroll">
        <img src="${val.image}" class="h-[40vh]">
        </div>
        <div class="p-2">
        <h2>${val.title}</h2>
        <p>${val.description}</p>
        <h3>${val.price}/- Rs</h3>
        <button class= "text-white bg-black shadow w-full p-2">Buy Now</button>
        </div>
        `
     })

     
}

const filterData1=()=>{

    const newData2 = data.filter((product) => {
        return product.price >= 100 && product.price <= 200;
    })

    console.log(newData2)
    document.querySelector('#result').innerHTML="";

    newData2.map((val) => {
        document.querySelector('#result').innerHTML +=`
        <div class="border w-[18rem] rounded-md shadow-md h-[50vh] overflow-scroll">
        <img src="${val.image}" class="h-[40vh]">
        </div>
        <div class="p-2">
        <h2>${val.title}</h2>
        <p>${val.description}</p>
        <h3>${val.price}/- Rs</h3>
        <button class= "text-white bg-black shadow w-full p-2">Buy Now</button>
        </div>
        `
     })
}


const filterData2=()=>{

    const newData3 = data.filter((product) => {
        return product.price >= 200 && product.price <= 500;
    })

    console.log(newData3)
    document.querySelector('#result').innerHTML="";

    newData3.map((val) => {
        document.querySelector('#result').innerHTML +=`
        <div class="border w-[18rem] rounded-md shadow-md h-[50vh] overflow-scroll">
        <img src="${val.image}" class="h-[40vh]">
        </div>
        <div class="p-2">
        <h2>${val.title}</h2>
        <p>${val.description}</p>
        <h3>${val.price}/- Rs</h3>
        <button class= "text-white bg-black shadow w-full p-2">Buy Now</button>
        </div>
        `
     })
}