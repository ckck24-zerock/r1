
function ForEx2() {

    const arr = [
        {no:1, name:'AAA', price: 3000},
        {no:2, name:'BAA', price: 4000},
        {no:3, name:'CAA', price: 5000},
        {no:4, name:'DAA', price: 3500},
    ]

    //배열에 map( )의 결과는 배열 -> JSX의 배열
    //const lis = arr.map(m => <li key={m.no}>{m.name}</li>)

    return (
        <div>
            <ul>
                {makeLis(arr)}
            </ul>
        </div>
    );
}

function makeLis(arr) {
    const result = arr.map(m => <li key={m.no}>{m.name}</li>)
    return result
}

export default ForEx2;