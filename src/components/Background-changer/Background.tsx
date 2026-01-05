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
          onClick={()=>{
            console.log("red button clicked")
            setcolor("red")}}>
            red
        </button>
        <button 
          className={styles.buttonclass} 
          style={{backgroundColor:"green" }} 
          onClick={()=>{
            console.log("green button clicked")
            setcolor("green")
          }}>
            green
        </button>
        <button 
          className={styles.buttonclass} 
          style={{backgroundColor: "blue"}}
          onClick={()=>{
            console.log("blue button clicked")
            setcolor("blue")}}>
            blue
        </button>
        
      </div>
    </div>
  )
}

export default Background








// Notes
//The instructor explains how to change the background color when a button is clicked (14:00). Initially, the idea is to use an onClick handler
//  on each button to update the color state using setColor.

// He then clarifies an important concept: the onClick event in React expects a function as its value, not the result of a function call.

// If you write onClick={setColor("red")} (14:17), you are immediately executing setColor("red") when the component renders,
//  and onClick receives whatever setColor returns (which might be undefined or something else, not a function). This is a
//  syntax problem, not a React or JavaScript problem (15:10).
// However, sometimes you need to pass a parameter to the function (like "red", "green", "blue"). In such cases, you can't 
// just pass the function reference directly if it needs arguments (15:04).
// The solution is to wrap your setColor call in an anonymous callback function (16:19). For example, onClick={() => setColor("red")}.

// Here, onClick receives a function (the () => { ... } part).
// This function is only executed when the button is actually clicked.
// Inside this callback function, you can then call setColor("red"), passing the desired color as a parameter (16:35-16:41).
// He demonstrates this with "Red," "Green," and "Blue" buttons (16:42-17:05). The instructor also poses a question to the
//  audience: why does the background revert to olive (the default) on refresh, even if a different color was set before refreshing (17:08)?

// Finally, he encourages beginners to add the remaining colors (like Grey, Yellow, Pink, Purple) as a practice exercise
//  (17:37-17:43), emphasizing that even simple projects like this help solidify core React concepts and build confidence (17:47-17:59).