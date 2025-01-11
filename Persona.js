import { useState } from "react"

const Persona=()=>{
    const[name,setName]=useState('')
    const[age, setAge]=useState('')


    const handleNameChange=(event)=>{
        console.log("name changed")
        setName(event.target.value)
    }
    const handleAgeChange=(event)=>{
        console.log("age changed")
        setAge(event.target.value)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("submit is clicked!!")
        alert("submit clicked")
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange}></input>
              </label>
            </div>
            <div>
              <label>
                Age:
                <input type="text" value={age} onChange={handleAgeChange}></input>
              </label>
            </div>
                <button type="submit">Submit</button>   
            </form>
            Welcome :{name} <br>
            </br>
            your age:{age}
        </>
    )
}
export default Persona;