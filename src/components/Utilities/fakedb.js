

const addToDb = (id) => {
  let shoppingCart;

  const storeCart = localStorage.getItem('shopping-cart');
  if(storeCart){
    shoppingCart = JSON.parse(storeCart);

  }else{
    shoppingCart = {}
  }
  const quentity = shoppingCart[id];
  if(quentity){
    const newQuantity = quentity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
export {addToDb};

//loaclStorage ===================


// const addToDb = (id) => {

//     const quentity = localStorage.getItem(id);
//     if(quentity){
//         const newQuentity = +quentity + 1;
//         localStorage.setItem(id,newQuentity);
//         console.log('exit');
//     }else{
//         console.log('new');
//     localStorage.setItem(id,1)
//     }
// }
// export {addToDb};


//loaclStorage ===================