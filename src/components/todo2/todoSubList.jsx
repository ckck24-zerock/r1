

function TodoSubList({arr}) {



    return (
        <div className={'p-3 bg-amber-200 h-full'}>
            <div>Todo Sub List</div>
            <ul>
                {arr.map( (e, idx) => <li key={idx}>{e}</li>)

                }
            </ul>
        </div>
    );
}

export default TodoSubList;