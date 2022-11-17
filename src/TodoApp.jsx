import AddNewTodo from './components/AddNewTodo'
import Header from './components/Header'
import TodoGrid from './components/TodoGrid'

export default function TodoApp(){
  return(
    <article className="bg-gray-100 h-screen w-screen">
      <Header />
      <AddNewTodo />
      <TodoGrid />
    </article>
  )
}