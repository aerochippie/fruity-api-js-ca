const detailContainer = document.querySelector(".fruitdata");

const queryString= document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const url = corsUrl + id;

async function getFruit(){
    try{
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        displayFruit(details);
    }
    catch(error){
        console.error(error)
        console.log("An error occured")
        detailContainer.innerHTML="Something went wrong :(";
    }
   
}

getFruit()

function displayFruit(details){
    detailContainer.innerHTML = `
    <h1 class="fruitname">${details.name}<h1>
    <p> This fruit is from family ${details.family} <br>
    It has the following nutrition:<br><br>
    Carbohydrates:${details.nutritions.carbohydrates}<br>
    Protein:${details.nutritions.protein}<br>
    Fat:${details.nutritions.fat}<br>
    Calories:${details.nutritions.calories}<br>
    Sugar:${details.nutritions.sugar}</p>`

}
