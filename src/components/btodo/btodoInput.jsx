import {useState} from "react";

function BtodoInput({addTodo}) {

    const [title, setTitle] = useState()

    return (
        <div>
            B Todo Input
            <div>
                <input type={'text'} value={title}
                       onChange={ e => { setTitle(e.target.value) }}/>
                <button onClick={ () => {
                    addTodo(title)
                    setTitle('')
                }}>SAVE</button>
            </div>
        </div>
    );
}

export default BtodoInput;