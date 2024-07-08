// const axios = require("axios");
import axios from "axios";

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  name: string;
}

interface TodoDetails {
  owner: string;
  title: string;
  completed: boolean;
}
/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number):Promise<TodoDetails |string> => {
  try {
    const todoResponse = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const userResponse = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${todoResponse.data.userId}`);
    
    return {
      owner: userResponse.data.name,
      title: todoResponse.data.title,
      completed: todoResponse.data.completed,
    };
  } catch (error) {
  return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
