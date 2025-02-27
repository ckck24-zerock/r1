import {useState} from "react";
import BtodoList from "./btodoList.jsx";
import BtodoInput from "./btodoInput.jsx";
import BtodoMod from "./btodoMod.jsx";
import {v4 as uuidv4} from "uuid";

function BtodoContainer() {

    const [oper, setOper] = useState('L')

    const [arr, setArr] = useState([])

    function addTodo(title) {

        const newTodo = {tid: uuidv4(), title:title}

        setArr([...arr, newTodo])
    }

    function showMod(tid) {
        setOper('M')
    }

    return (
        <div className={'w-full h-full bg-cyan-200 min-h-full'}>
            B Todo Containner

            {oper === 'L' &&
                <BtodoList showMod={showMod}></BtodoList>
            }
            {oper === 'I' &&
                <BtodoInput></BtodoInput>
            }
            {oper === 'M' &&
                <BtodoMod></BtodoMod>
            }
        </div>
    );
}

export default BtodoContainer;