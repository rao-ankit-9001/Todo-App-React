import { nanoid } from "nanoid";
import { createContext, useState } from "react";


export const todoContext = createContext();

function Context(props){

  const [todos, setTodos] = useState([{
    id:nanoid(), "title" : 'Kuch kaam kr le bhai'
  }])
 
    return(
        <todoContext.Provider value={{todos, setTodos}}>
            {props.children}
        </todoContext.Provider>
    )

}

export default Context;