import Note from "./Note"
import "../css/Notes.css"
import CreateNotes from "./CreateNotes"
import { useEffect, useState } from "react"
import {v4 as uuid} from 'uuid'

export default function Notes(){
    const [notes,setNotes] = useState([])
    const [inputValue,setInputValue] = useState('')

    const changeInputValue =(e)=>{
        setInputValue(e.target.value)
    }

    const changeNotes = ()=>{
        setNotes((preObj)=>[...preObj,{id: uuid(),noteValue: inputValue}])
    }

    const deleteNotes=(id)=>{
        const afterDeleteNotes= notes.filter((note)=>note.id!==id)
        setNotes(afterDeleteNotes)
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Notes"))
        console.log(data)
        if(data.length>0){
            console.log(data)
            setNotes(data)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("Notes",JSON.stringify(notes))
    },[notes])

    return(
        <div className="notes"> <CreateNotes inputValue={inputValue} setInputValue={changeInputValue} changeNotes={changeNotes}/> {notes.map((note) =><Note deleteNotes={deleteNotes} id={note.id} key={note.id} noteValue={note.noteValue}/>)}</div>
    )
}