
function CountButtons({plusFn}) {
    return (
        <div className={'border-2 border-cyan-400 p-4'}>
            <button
                className={'m-2 p-2 border-2'}
                onClick={plusFn}
            >+</button>

            <button className={'m-2 p-2 border-2'}>-</button>
        </div>
    );
}

export default CountButtons;