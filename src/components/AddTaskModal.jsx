import { useState } from "react";

const AddTaskModal = ({ closeModal, setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function addTodo() {
    if (title.trim() === "" || description.trim() === "") {
      setError("Both title and description are required.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setError("");
    closeModal();
  }

  return (
    <div
      className="m-top-20 fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[60vh] w-[400px] bg-[#00879E] relative rounded-md p-5 flex flex-col gap-5"
      >
        <button onClick={closeModal} className="absolute -top-0 right-2">
          X
        </button>

        {error && (
          <p className="text-red-200 text-sm bg-red-600 px-3 py-1 rounded">
            {error}
          </p>
        )}

        <input
          value={title}
          onInput={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter ToDo title..."
          className="w-full px-2 m-top-5 rounded-md"
        />
        <textarea
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Enter ToDo description..."
          className="w-full px-2 h-full max-h-full rounded-md"
        />
        <button
          onClick={addTodo}
          className="bg-[#98D2C0] rounded-md py-2 h-16 font-semibold hover:bg-[#86c1b0] transition"
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
