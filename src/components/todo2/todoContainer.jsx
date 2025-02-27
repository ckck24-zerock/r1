import TodoInput from "./todoInput.jsx";
import TodoSubList from "./todoSubList.jsx";
import {useState} from "react";

//컨테이너
//공유데이터 //매니저
function TodoContainer() {


    const [arr, setArr] = useState([])

    //기능
    const addText = (text) => {
        setArr([...arr,text])
    }


    return (
        <div className={'w-full bg-blue-300 p-5'}>
            <div>Todo Container</div>

            <TodoInput addText = {addText} ></TodoInput>
            <TodoSubList arr={arr}></TodoSubList>
        </div>
    );
}

export default TodoContainer;