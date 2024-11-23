
// fetch pizza api
 async function getPizza(){
    const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data=await response.json();
    const result =data.recipes;
    console.log(result);
    const display=result.map(ele=>{
        return`<div class="card mb-3" style="width:18rem;height:300px;">
  <img src="${ele.image_url}" class="card-img-top" alt="pizza" style="display:block;width:100%;height:200px;">
  <div class="card-body">
    <p class="card-text">${ele.title}</p>
  </div>
</div>`
    }).join('');
    document.querySelector(".container .section").innerHTML =display;
}
getPizza();