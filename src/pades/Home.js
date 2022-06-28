import React from 'react'
import About from '../components/About'
import CardsRow from '../components/CardsRow'
import Layout from '../components/Layout'
import Shots from '../components/Shots'
import Video from '../components/Video'
import products from './dummyData'
const Home = () => {
 
  return (
    <div>
        <Layout/>
        <CardsRow title='' products={products.slice(0,4)}/>
        <CardsRow title = 'Montu COLLECTION' products={products.slice(4,8)}/>
        <About/>
        <Video/>
        <Shots/>
    </div>
  )
}

export default Home