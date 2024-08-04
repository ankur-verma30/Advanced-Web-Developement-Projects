import './style.css'
import shopData from './data.js'


let shop = document.getElementById('shop')

let generateShop = () => {
return(shop.innerHTML=shopData.map((x)=>{     //map function 
    let {id,name,price,desc,img}=x           //destructuring of object
return `
<div class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$${price}</h2>
          <div class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div class="quantity">0</div>
            <i class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`
}).join('')                                 //convert array to the string 
)
}

generateShop();
