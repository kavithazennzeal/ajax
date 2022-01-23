function get(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onload = function(){
        if(this.status === 200){
            var interchange = JSON.parse(this.responseText);
            var str = ""
            interchange.map((data,index) =>{
                str += `
                     <tr>
                     <td>${data.name}</td>
                     <td>${data.email}</td>
                     <td>${data.phone}</td>
                     <td>${data.website}</td>
                     <td><a class="btn btn bg-danger" onclick="FN()">DELETE</a></td>
                     </tr>`;
            })

        }
        document.getElementById("display").innerHTML=str;
    }
    xhttp.send();
}
get();

function FN(){
    document.getElementById("display").deleteRow(0);
}