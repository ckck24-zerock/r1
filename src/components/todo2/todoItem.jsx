
function TodoItem({todo, showModal}) {

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
                    <button onClick={() => showModal(todo)}>MOD/DEL</button>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;