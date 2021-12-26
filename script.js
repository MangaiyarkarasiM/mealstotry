
const searchbtn=document.getElementById("search");
const searchinput=document.getElementById("lettersearch");
const div=document.createElement("div");
div.setAttribute("class","dishes");

function displayDishes(data){
    div.innerHTML="";
    if(data!==null)
    {
        data.forEach((dish)=>{
            div.innerHTML+=`<div class="card" style="width: 18rem;">
            <img src="${dish.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dish.strMeal}</h5>
              <p class="card-text">Area: ${dish.strArea}</p>
              <p class="card-text">Category: ${dish.strCategory}</p>
              <a href="${dish.strYoutube}" target="_blank" class="btn btn-info">Link to Youtube</a>
            </div>
          </div>`;
    
        })
    }
    else{
        alert("No results found for the entered letter");   
    }
    document.body.appendChild(div);
}

async function getData(){
    let searchValue=String(searchinput.value).trim().toLowerCase();
    if(searchValue===''){
        alert("Please enter the first letter");
    }
    else{
        try {
            const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue[0]}`);
            const data=await res.json();
            //console.log(data.meals);
            displayDishes(data.meals);
        } catch (error) {
            console.log(error);
        }
    }
}

searchbtn.addEventListener("click",getData);