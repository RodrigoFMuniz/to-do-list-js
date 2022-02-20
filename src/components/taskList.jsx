import {useState} from 'react'
import Task from './task'
export default function TaskList(){
  const [task, setTask] = useState("")
  return (
    <Task onChange={(e)=>setTask(e.target.value)} />
  )
}