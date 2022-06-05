import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components/macro"
import InputComponent from "./component/InputComponent"
import UserList from "./component/UserList"
import { addExpense } from "./redux/action/action"

const  AppWrapper = styled.div `
width: 370px;
height: 350px;
background-color: #f2f2f2;
text-align: center;
margin: auto;
`
  
function App() {
const dispatch = useDispatch()
const expenses = useSelector((state)=>state.expenses)
const [data, setData]= useState({
	title: '',
	price: '',
	date: '',
})

const inputHandler=(e)=>{
	const value = e.target.value
	setData({
		...data,
		[e.target.name]: value,
	})
	}

let validation = false
if(data.title.match(/[0-9]/)){
	validation=true
}else{
	validation = false
}

let isTitle=false
if(data.title && data.price && data.date ){
	isTitle=true
}else{
isTitle=false
}

const submitHandler=(e)=>{
	dispatch(addExpense(data))
    e.preventDefault()
	setData({
		title: '',
		price: '',
		date: '',
	})
}

const titleClasses = validation ? 'control red' : "control"
console.log(validation);
	return(
<AppWrapper>
		<section>
			<h1>Redux practice</h1>
			<form onSubmit={submitHandler} className=''>
				<div className={titleClasses}>
				  <label>title</label>
				  <InputComponent plase={'do not write number '} type={'text'} name={'title'} value={data.title} func={inputHandler}/>
				  {validation && <p>don't write number</p>}
				</div>
				<div className="control">
				  <label>Price</label>
				  <InputComponent value={data.price} type={'number'} name={"price"} func={inputHandler}/>
				</div>
				<div className="control">
				  <label>Date</label>
				  <InputComponent value={data.date} type={'date'} name={"date"} func={inputHandler}/>
				</div>
				<button className="btn" disabled={!isTitle}>Add</button>
			</form>
			<ul> {expenses.map((el)=>{
				return <UserList 
				 title={el.title}
				 price={el.price}
				 date={el.date} 
				 id={el.id} 
				 /> 
			})} </ul>
		</section>
  </AppWrapper>
	
	)
}

export default App



























// import './App.css'
// import React, { useState } from 'react'
// import ToDo from './ToDo'
// import ToDoForm from './ToDoForm'

// function App() {
// const [todos, settodos] = useState([])

// const addTask = (userInput) => {
// if(userInput){
// 	const newItem = {
// 		id: Math.random().toString(36).substring(2,9),
// 		task: userInput,
// 		complete: false
// 	}
// 	settodos([...todos, newItem])
// }
// }

// const removeTask = (id) => {
//   settodos([...todos.filter((todo)=> todo.id !== id)])
// }

//  const  handleToggle = (id) => {
// settodos([
// 	...todos.map((todo)=>
// 	todo.id === id ? {...todo, complete :!todo.complete } : {...todo}
// 	)
// ])
//  }

//       return(
// 	   <div className='App'>
// 		   <header>
// 			   <h1>Список Задач: {todos.length}</h1>
// 		   </header>
// 		   <ToDoForm addTask={addTask}/>
// 		   {todos.map((todo)=>{
// 			   return(
// 				   <ToDo 
// 				   todo={todo}
// 				   key={todo.id}
// 				   toggleTask={handleToggle}
// 				   removeTask={removeTask}   />
// 			   )
// 		   })}

// 	</div>
// )}

// export default App
