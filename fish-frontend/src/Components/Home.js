import React, { useRef, useState, Suspense } from 'react'
import Scene from './Scene'
import Loading from './Loading'

function Home() {
    return (    
      // <Suspense fallback = {<Loading />}>
      //   <Scene />
      // </Suspense>)
      <Loading />
    )
}

export default Home