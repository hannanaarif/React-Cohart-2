import { useState } from "react";

function App() {
  const [todos,settodos]=useState([{
    title:"Go to Gym",
    description:"Go to gym 7-9",
    completed:false
  },

{
  title:"study DSA",
  description:"Study DSA from 9-12",
  completed:true
}]);

function addtodo(){
  settodos([...todos,{
  title:"new todo",
  description:"added a new todo"
  }])
};

return (
    <div>
      <button onClick={addtodo}>Add random todo</button>
      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  );

}

function Todo(props){
  return<div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
  </div>
}
export default App
