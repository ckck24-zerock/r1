import TodoItem from "./todoItem.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";


function TodoSubList({arr, removeTodo}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = ()=> {
        setIsModalOpen(true)
    }

    return (
        <div className={'p-3 bg-amber-200 h-full'}>
            <div>Todo Sub List</div>
            <ul>
                {arr.map( todo =>
                    <TodoItem key={todo.tid} todo={todo} showModal={showModal}></TodoItem>
                )}
            </ul>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">모달 제목</h2>
                <p>이것은 모달 내용입니다.</p>
                <button
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    onClick={() => setIsModalOpen(false)}
                >
                    닫기
                </button>
            </Modal>

        </div>
    );
}

export default TodoSubList;