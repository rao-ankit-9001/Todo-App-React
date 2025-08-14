import CreateTodo from "./CreateTodo";
import RenderTodos from "./RenderTodos";


function Home(){
     
    return(
        <div className="flex justify-center mt-8 mx-5">

          <CreateTodo/>
          <RenderTodos/>

        </div>
    )
}


export default Home;