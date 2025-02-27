
function TodoInput() {
    return (
        <div className={'p-3 bg-amber-300 h-1/2'}>
            <div>Todo Input</div>
            <div className={'p-2 font-bold m-2 p-2'}>
                <input type={'text'} className={'bg-white p-2 w-2/3'}/>
                <button>SAVE</button>
            </div>
        </div>
    );
}

export default TodoInput;