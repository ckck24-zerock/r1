import {useState} from "react";

function TodoInput({addText}) {

    const [text, setText] = useState('')

    //input태그에 사용자가 입력을 해서 내용물이 바꿀때마다 호출
    const changeText = (e) => {
        setText(e.target.value)
    }

    const clickSave = () => {

        addText(text)

        setText('')
    }

    return (
        <div className={'p-3 bg-amber-300 h-1/2'}>
            <div>Todo Input</div>
            <div className={'p-2 font-bold m-2 p-2'}>
                <input type={'text'}
                       className={'bg-white p-2 w-2/3'}
                       value={text}
                       onChange={ e => changeText(e) }
                />
                <button
                    className={'border-1 ml-3 p-3 bg-blue-300'}
                    onClick={clickSave}
                >SAVE</button>
            </div>
        </div>
    );
}

export default TodoInput;