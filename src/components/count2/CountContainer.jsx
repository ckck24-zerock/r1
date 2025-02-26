import CountDisplay from "./CountDisplay.jsx";
import CountButtons from "./CountButtons.jsx";

function CountContainer() {

    return (
        <div className={'p-3'}>
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </div>
    );
}

export default CountContainer;