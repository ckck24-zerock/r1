
function TodoItem({todo,removeTodo}) {

    const {tid,title} = todo

    return (
        <li className={'bg-cyan-200 border-1 p-3'}>
            <div>
                <div>
                    {tid}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    <button onClick={() => {
                        removeTodo(tid)
                    }} >
                        REMOVE
                    </button>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;