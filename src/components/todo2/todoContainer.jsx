import TodoInput from "./todoInput.jsx";
import TodoSubList from "./todoSubList.jsx";

function TodoContainer() {
    return (
        <div className={'w-full bg-blue-300 p-5'}>
            <div>Todo Container</div>

            <TodoInput></TodoInput>
            <TodoSubList></TodoSubList>
        </div>
    );
}

export default TodoContainer;