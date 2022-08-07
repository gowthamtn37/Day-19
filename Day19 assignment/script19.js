var result =  fetch("https://jsonplaceholder.typicode.com/posts")
result.then((data)=>(data.json())).then((data1)=>foo(data1));

function foo(data1){
    for(let i =0; i<=10; i++ ){
        
        var div =document.createElement("div");
        div.style.margin="10px"
        div.innerHTML=`<div class="card" style="width: 18rem; ba">
        <div class="card-body">
          <h5 class="card-title" style="color:red;">${data1[i].userId}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data1[i].id}</h6>
          <h5 class="card-title">${data1[i].title}</h5>
          <p class="card-text" style="color:green">${data1[i].body}</p>
          
        </div>
      </div> `
        document.body.append(div);
    }
}