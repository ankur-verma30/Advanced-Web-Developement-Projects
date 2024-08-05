import './style.css'
import shopData from './data.js'

let shop = document.getElementById('shop')



let generateShop = () => {
  
return(shop.innerHTML=shopData.map((x)=>{     //map function 
    let {id,name,price,desc,img}=x           //destructuring of object
return `
<div  id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$${price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>`
}).join('')                                 //convert array to the string 
)
}

generateShop();

let basket=[
  {}
]

window.increment=(id)=>{
  let selectedItem=
  console.log('Increment',id);
  }
  
  window.decrement=(id)=>{
    console.log('Decrement',id);
  }
  
  window.updateQuantity=()=>{}
  

