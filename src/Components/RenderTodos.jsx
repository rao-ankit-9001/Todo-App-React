// Importing required libraries and context
import { useContext } from "react";
import { todoContext } from "../TodoContext";
import { toast } from "react-toastify";


function RenderTodos() {

    // Accessing todos and setter from context
    const {todos, setTodos} = useContext(todoContext);

    // Handler to delete a todo by ID
    const handleDelete = (id) => {

        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        toast.error('Todo delete successfully')

    }


    // Mapping todos to render all todos
    const RenderAllTodos = todos.map((todo) => {

        return <li key={todo.id} className=" bg-black px-4 py-2 rounded-lg flex items-center justify-between font-thin my-1">

            <h1 className="text-2xl">{todo.title}</h1>
            <span className="text-red-500 active:scale-95 cursor-pointer" onClick={() => handleDelete(todo.id)}>delete</span>

        </li>



    });

    return (


        /* Display todos section */

        <div className="w-1/2 flex flex-col text-center px-10">
            <h1 className="text-7xl font-thin mb-10"><span className="text-red-600">Pending </span>Todos</h1>

            {Array.isArray(todos) && todos.length > 0 ? (
                <ol>{RenderAllTodos}</ol>
            ) : (
                <p className="text-gray-400 text-xl">No todos available</p>
            )

            }

        </div>

    )
}

export default RenderTodos;