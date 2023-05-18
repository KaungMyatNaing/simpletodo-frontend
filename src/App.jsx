import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const ToDoItem = (props) => {
  const [hover, setHover] = useState(false);
  const style = {
    hover: {
      color: "red",
      cursor: "pointer"
    },
    nothover: {
      color: "black",
      cursor: "pointer"
    }
  }

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }
  return (
    <li style={hover ? style.hover : style.nothover} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{props.taskname}</li>
  )
}

function App() {
  

  return (
    <>
      <div style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h1>Simple ToDoList with React/Express</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <input placeholder='Please Enter ToDo Name' style={{paddingVertical: 10}} />
          <button style={{marginLeft: 15}}>Create</button>
        </div>
        <ul style={{ width: 500 }}>
          <h2>Undone List</h2>
          <ToDoItem taskname="Sample Task"/>
        </ul>

        <ul style={{ width: 500 }}>
          <h2>Done List</h2>
          <ToDoItem taskname="Sample Task"/>
        </ul>
      </div>
    </>
  )
}



export default App
