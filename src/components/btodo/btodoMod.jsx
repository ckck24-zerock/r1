
function BtodoMod({current, removeTodo}) {

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
            onClick={() => { }}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            >
                B Todo Modify
                <div>
                    <div>
                        {current.tid}
                    </div>
                    <div>
                        {current.title}
                    </div>
                    <div>
                        <button onClick={() => removeTodo(current.tid)}>삭제</button>
                        <button>수정</button>
                        <button>취소</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default BtodoMod;