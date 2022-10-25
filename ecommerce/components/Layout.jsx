import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar'
import { useStateContext } from '../context/StateContext'; 


const Layout = ( {children} ) => {
  const {progress, setProgress} = useStateContext()

  return (
    <div className='layout'>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
        <title>Paras's Store</title>
      </Head>
      <header>
        <LoadingBar
            color='#f9060f'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout