import {useState} from "react";

function TodoInput() {

    const [text, setText] = useState('ABC')

    return (
        <div className={'p-3 bg-amber-300 h-1/2'}>
            <div>Todo Input</div>
            <div className={'p-2 font-bold m-2 p-2'}>
                <input type={'text'}
                       className={'bg-white p-2 w-2/3'}
                       value={text}
                />
                <button className={'border-1 ml-3 p-3 bg-blue-300'}>SAVE</button>
            </div>
        </div>
    );
}

export default TodoInput;