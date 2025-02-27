
function BtodoList({showMod,arr}) {


    return (
        <div>
            B Todo List
            <ul>
                {arr.map(todo =>
                    <li key={todo.tid}>
                        {todo.title}
                        <button onClick={() => showMod(todo.tid)} >MOD/DEL</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default BtodoList;