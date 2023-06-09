import store from "./store";
import { addTask, completedTask, fetchToDo, removeTask } from "./action";

const unsubscribe = store.subscribe(() => {
  console.log("Updated",store.getState());
});

store.dispatch(addTask("Task 1"));

store.dispatch(addTask("Task 2"));

// unsubscribe();
store.dispatch(removeTask(1));

store.dispatch(completedTask(2));
store.dispatch(fetchToDo())
console.log(store.getState());
