import {useState} from "react";

let value = 100;

function ArrayTest() {


    //상태를 변경해서 다시 렌더링 유도하려면 새로운 상태 객체로 만들어야 한다.
    const [arr, setArr] = useState([1,2,3])

    const handleClick = () => {

        value++;

        arr.push( value )

        console.log(arr)

        setArr([...arr])
    }

    return (
        <div>
            <div className={'border-2'}>
                <button
                    onClick={handleClick}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md transition
                 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400
                 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500">CLICK</button>
            </div>

            <div className={'bg-amber-300'}>
                <ul>
                    {arr.map( (e,idx) => <li key={idx}>{e}</li> )}
                </ul>
            </div>

        </div>
    );
}

export default ArrayTest;