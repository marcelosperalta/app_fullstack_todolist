import { Response, Request } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "../../models/todo"

// GET
// To fetch data. It receives a req and res parameter and returns a promise.
// With the help of the Todo model created earlier, 
// we can now get data from MongoDB and return a response with the array of todos.
const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

// POST
// To receive the body object that contains data entered by the user.
const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<ITodo, "name" | "description" | "status">
  
      const todo: ITodo = new Todo({
        name: body.name,
        description: body.description,
        status: body.status,
      })
  
      const newTodo: ITodo = await todo.save()
      const allTodos: ITodo[] = await Todo.find()
  
      res
        .status(201)
        .json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
      throw error
    }
  }

// PUT
// Using typecasting to avoid typos and restrict the body variable 
// to match ITodo and then create a new Todo based on the model.
// We can now save the Todo in the DB and return a response 
// that contains the todo created and the updated todos array.
const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allTodos: ITodo[] = await Todo.find()
      res.status(200).json({
        message: "Todo updated",
        todo: updateTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
  }

// DELETE
// Allows you to delete a Todo from the database. 
// Here, we pull out the id from req and pass it as an argument to findByIdAndRemove()
// to access the corresponding Todo and delete it from the DB.
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }