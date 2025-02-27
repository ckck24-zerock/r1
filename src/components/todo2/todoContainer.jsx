import TodoInput from "./todoInput.jsx";

function TodoContainer() {
    return (
        <div className={'w-full bg-blue-300 p-5'}>
            <div>Todo Container</div>

            <TodoInput></TodoInput>
        </div>
    );
}

export default TodoContainer;