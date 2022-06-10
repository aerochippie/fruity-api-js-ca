const fruitUrl = "https://fruityvice.com/api/fruit/"; //api endpoint
const corsUrl = 'https://noroffcors.herokuapp.com/' + fruitUrl

const resultContainer = document.querySelector(".data")

async function getFruits(){

    try {

        const response = await fetch(`${corsUrl}all`);
        const results = await response.json();
        const fruits = results;
       
        resultContainer.innerHTML="";
        fruits.forEach(function(fruits){
            resultContainer.innerHTML += 
                                        `<div class="fruits"> <a href="details.html?id=${fruits.id}"> 
                                        Name: ${fruits.name} <br>
                                        Protein: ${fruits.nutritions.protein} <br>
                                        Genus: ${fruits.genus} </a></div>`;
   
        })
    
    }

    catch(error){
            console.error(error)
            console.log('An error occured!')
            resultContainer.innerHTML="Something went wrong :(";

        }
    }
getFruits();

