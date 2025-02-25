

function HelloComponent() {

    function handleClick () {
        alert("AAA")
    }

    return (
        <div>
            <h1 onClick={handleClick} >Hello World</h1>
        </div>
    );
}

export default HelloComponent;