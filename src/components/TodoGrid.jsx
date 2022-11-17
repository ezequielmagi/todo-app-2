import { useState } from "react"

export default function TodoGrid(){
  
  const [ todo , setTodo ] = useState([{title: 'cocinar' , completed: false}])
  
  return(
    <article>
      {
        todo.map( ( { title } ) => (
          <li key={title}> { title } </li>
        ))
      }
    </article>
  )
}