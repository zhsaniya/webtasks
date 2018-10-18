let cars = [{brand:'Mersedes',model:'Benz','year':1999,'price':20000,image_url:"download.jpg"},{brand:'BMW',model:'X2',year:2014,price:25000,image_url:"bmw.jpg"},{brand:'Ferari',model:'Enzo',year:2007,price:15000,image_url:"ferarijpg.jpg"}];

let sum = document.getElementById("sum");
let items = document.getElementById("items");
let carsElement = document.getElementById("cars");
for(let i=0;i<cars.length;i++){
    carsElement.innerHTML += '  <div class="card"><div class="basket"><img src="images.png"></div><img src="'+cars[i]["image_url"]+'" alt=""><h4>'+cars[i]["brand"]+ ' ' + cars[i]["model"] +'</h4></div>';
}
let baskets = document.getElementsByClassName("basket");
for(let j=0;j<baskets.length;j++){
    baskets[j].addEventListener("click",function(){
        if(this.classList.contains("in_basket")){
            items.innerHTML = parseInt(items.innerHTML) - 1;
            this.className= "basket";
            this.children[0].setAttribute("src","images.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) - parseInt(cars[j]["price"]);    
        }
        else{
            items.innerHTML = parseInt(items.innerHTML) + 1;    
            this.className= "basket in_basket";
            this.children[0].setAttribute("src","image.jpg"); 
            sum.innerHTML = parseInt(sum.innerHTML) + parseInt(cars[j]["price"]);    
        }
        
    });
    
}