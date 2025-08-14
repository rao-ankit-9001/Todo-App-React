// Importing required libraries and context
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import {useForm} from 'react-hook-form';
import { todoContext } from '../TodoContext';
import { toast } from 'react-toastify';

function CreateTodo() {

    // Accessing todos and setter form context
    const {todos, setTodos} = useContext(todoContext);

    // Initializing react-hook-form
    const {
        register, 
        handleSubmit, 
        reset, 
        formState:{errors}} = useForm();

    // Form submit handler
    const onSubmit = (data)=>{

        const newTodo = {
            id :  nanoid(), // unique ID for each toodo
            title : data.title
        }

        setTodos([...todos,newTodo]); // Updating context state
        toast.success('Todo create successfully'); // success notification
        reset(); // Reset form after submission
              
    }
    
    return (
        
            <div className="w-1/2">
                {/* Heading Section */}
                <h1 className="text-7xl font-thin mb-10">Set <span className="text-red-600">remainder</span> for <span className="text-red-600">Task</span></h1>

                {/* Todo form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="">
                        <input
                            {...register('title', { required: "Title can not be empty" })}
                            className="border-b-1 outline-none w-full text-xl"
                            type="text"
                            placeholder="title" />
                        <small className="text-red-600">{errors?.title?.message}</small>
                    </div>


                    <button
                        className="my-4 px-6 py-0.5 bg-black rounded-sm text-xl font-thin active:scale-95"
                    >Create</button>

                </form>
            </div>
        
    )
}


export default CreateTodo;