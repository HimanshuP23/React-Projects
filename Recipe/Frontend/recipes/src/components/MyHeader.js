import React from 'react'
import './MyHeader.css';
export default function MyHeader() {
    console.log("in header component function")
  return (
    <div>
        <h1 style={{'borderRadius':'20px'}}>Recipe Book</h1>
    </div>
  )
}
