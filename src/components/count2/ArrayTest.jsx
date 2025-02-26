import {useState} from "react";


function ArrayTest() {

    const [arr, setArr] = useState([1,2,3])

    const handleClick = () => {

        arr.push('A')

        console.log(arr)

        setArr(arr)
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