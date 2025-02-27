import TodoItem from "./todoItem.jsx";


function TodoSubList({arr}) {

    return (
        <div className={'p-3 bg-amber-200 h-full'}>
            <div>Todo Sub List</div>
            <ul>
                {arr.map( todo => <TodoItem key={todo.tid} todo={todo}></TodoItem>)

                }
            </ul>
        </div>
    );
}

export default TodoSubList;