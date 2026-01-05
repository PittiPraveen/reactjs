import { useState } from "react"
import styles from "./Background.module.css"

function Background() {
  const [color,setcolor]=useState("black")
  return (
    <div 
      className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
      <div className={styles.container}>
        <button 
          className={styles.buttonclass}  
          style={{backgroundColor: "red"}}
          onClick={()=>setcolor("red")}>
            red
        </button>
        <button 
          className={styles.buttonclass} 
          style={{backgroundColor:"green" }} 
          onClick={()=>setcolor("green")}>
            green Lorem ipsum dolor sit, amet consectetur adipisicing elit. In qui quaerat animi sit aliquam, dicta libero! Necessitatibus, recusandae assumenda porro nisi obcaecati ad eos dolore nemo saepe cupiditate quaerat praesentium?
        </button>
        <button 
          className={styles.buttonclass} 
          style={{backgroundColor: "blue"}}
          onClick={()=>setcolor("blue")}>
            blue
        </button>
        
      </div>
    </div>
  )
}

export default Background