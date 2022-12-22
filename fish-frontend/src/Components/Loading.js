import React, { useRef, useState, Suspense } from 'react'
import '../css/Loading.css'
function Loading() {
    return(
        <div className='loading'>
            <div className='bar'>
            </div>
        </div>
    )
}

export default Loading;