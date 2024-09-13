
const server = new XMLHttpRequest();

server.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
       const data = JSON.parse(this.responseText);
       console.log(data);
    data.map((val) =>{
        document.querySelector('#result').innerHTML+=`
        <tr>
            <td style="border: 2px solid gray">${val.id}</td>
            <td style="border: 2px solid gray">${val.username}</td>
            <td style="border: 2px solid gray">${val.email}</td>
            <td  style="border: 2px solid gray">${val.address.street}, ${val.address.city}, ${val.address.zipcode}</td>
        </tr>
        `
    })

    }

}

    server.open('GET','https://jsonplaceholder.typicode.com/users', 'true');
    server.send()

    // <script src="https://cdn.tailwindcss.com"></script>