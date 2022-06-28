import React from 'react'
import classes from './style/allproducts.module.css'
import CardsRow from '../components/CardsRow'
import products from './dummyData'
const Allproducts = () => {
    



  return (
    <div className={classes.allproductContainer}>
        <h1>
            products
        </h1>

        <div >
        <CardsRow title='' products={products.slice(0,4)}/>
        <CardsRow title='' products={products.slice(4,8)}/>
        <CardsRow title='' products={products.slice(8,12)}/>
        <CardsRow title='' products={products.slice(0,4)}/>
        <CardsRow title='' products={products.slice(4,8)}/>
        <CardsRow title='' products={products.slice(8,12)}/>
        </div>
    </div>
  )
}

export default Allproducts