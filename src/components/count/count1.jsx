import {useState} from "react";


function Count1({value = 0 , plusShow = true, minusShow = true, resetShow = true}) {

    const [num, setNum] = useState(value)

    const clickPlus = () => {
        setNum(num + 1)
    }

    const clickMinus = () => {
        setNum(num - 1)
    }

    const clickReset = () => {
        setNum(value)
    }


    return (
        <div>
            <h1>{num}</h1>

            {plusShow &&
            <div>
                <button onClick={clickPlus} >+</button>
            </div>
            }

            {minusShow &&
            <div>
                <button onClick={clickMinus}>-</button>
            </div>
            }

            {resetShow &&
            <div>
                <button onClick={clickReset}>R</button>
            </div>
            }
        </div>
    );
}

export default Count1;