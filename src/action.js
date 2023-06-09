import * as actionTypes from "./actionTypes"


export const addTask = (task) => {
  return { type: actionTypes.ADD_TASK, payload: { task: task } };
};

export const removeTask = (id) =>{
    return {type:actionTypes.REMOVE_TASK,payload:{id:id}}
}

export const completedTask = (id) =>{
  return {type:actionTypes.COMPLETED_TASK,payload:{id:id}}
}

export const fetchToDo = ()=> async (dispatch)=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const task = await response.json();
  dispatch(addTask(task.title))
}