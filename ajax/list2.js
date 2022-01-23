function Click(ab, id) {
    console.log('log')
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "https://jsonplaceholder.typicode.com/users/id", true );
    xhttp.send();
    xhttp.onload = function() {
        if(this.status === 200) {
            ab.parentElement.remove()
        }
    }

} 
function fn(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onload = function(){
        if(this.status === 200){
            var interchange = JSON.parse(this.responseText);
            var str = ""
            interchange.forEach((data,index) =>{
                str += `
                     <li class="list-group-item">
                     <h5 class="card-title">${data.name}</h5>
                     <p class="card-text">${data.email}</p>
                     <p class="card-text">${data.phone}</p>
                     <p class="card-text">${data.website}</p>
                     <a class="btn bg btn-success  float-right" onclick="Click(this,'${data.id}')">DELETE</a>
                     </li>`;
            })

        }
        document.getElementById("display").innerHTML=str;
    }
    xhttp.send();
}
fn();

