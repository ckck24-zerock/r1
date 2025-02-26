import {useState} from "react";

function Count2() {

    //number였을때는 문제가 없었다.
    const [count, setCount] = useState({num:0})

    const plus = () => {
        count.num += 1

        console.log(count)

        setCount({...count})
    }


    return (
        <div className={'border-2 p-2'}>
            <div className={'text-4xl'}>
                {count.num}
            </div>
            <button onClick={plus}>PLUS</button>
        </div>
    );
}

export default Count2;