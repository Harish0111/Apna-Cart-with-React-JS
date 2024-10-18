//import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React,{useState} from 'react';


function App() {
  const products = [
    {
      price: 11999,
      name : "Redmi Note 9",
      quantity : 0,
    },
    {
      price: 14999,
      name : "Redmi Note 9 pro",
      quantity : 0,
    },
    {
      price: 25999,
      name : "Google pixel 5",
      quantity : 0,
    }
  ]
  let [productList , setProductList] = useState(products)
  let [totalAmount , setTotalAmount] = useState(0)

    const increamentQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
        newProductList[index].quantity-- ;
        newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity=()=>{
    let newProductList = [...productList];
    newProductList.map((products) =>{
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  }

  // const removeItem = (index) =>{
  //   let newProductList = [...productList];
  //   let newTotalAmount = totalAmount;
  //   newTotalAmount -= newProductList[index].quantity * newProductList[index].price
  //   newProductList.slice(index, 1);
  //   setProductList(newProductList);
  //   setTotalAmount(newTotalAmount);
  // }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList = {productList}
    increamentQuantity = {increamentQuantity} 
    decreamentQuantity= {decreamentQuantity} 
    //removeItem = {removeItem}
    />
    </main>
    
    <Footer totalAmount= {totalAmount} resetQuantity={resetQuantity}/>

    </>
  );
}

export default App;
