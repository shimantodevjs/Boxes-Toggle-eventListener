import { useState } from 'react'
import boxesData from './assets/boxesData'
import Box from './assets/box'

function App() {
       const [squares,setSquares]= useState(boxesData)

       function toggle(id){
          setSquares(prevSquare=>{
              return prevSquare.map(square=>{
               return square.id===id? {...square,on:!square.on}: square
              })
          })
       }
       
       const boxElements = squares.map(square=>{
          
        return(
           <Box 
           key={square.id}
           id={square.id} 
           on={square.on}
           handleClick={toggle}
           />
        )
       })

  return (
       <main>
        {boxElements}
       </main>
  )
}

export default App
