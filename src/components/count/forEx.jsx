
function ForEx() {

    // 배열을  map을 이용해서 JSX로 바꾸는 것 - 동적으로 생성되는 JSX
    // React 처리시에 모든 JSX는 고유한 ID - 내부적으로 사용
    // 동적으로 하다보면 ID를 생성할 수 없으므로 개발자가 직접 부여
    // 이러한 ID를 key라고 부른다.

    const arr = [
        {no:1, name:'AAA', price: 3000},
        {no:2, name:'BAA', price: 4000},
        {no:3, name:'CAA', price: 5000},
        {no:4, name:'DAA', price: 3500},
    ]


    return (
        <div>
            <ul>
                {arr.map( m => <li key={m.no}> {m.name} -- {m.price} </li>)}
            </ul>

            <ul>
                {arr.map( ({no,name,price} ) =>
                    <li key={no}>
                        {name} -- {price}
                    </li>
                )}
            </ul>

            <ul>
                {arr.map( (m,idx) => <li key={idx}> {m.name} -- {m.price} </li>)}
            </ul>
        </div>
    );
}

export default ForEx;