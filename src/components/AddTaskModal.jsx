import { useState } from "react";

const AddTaskModal = ({ closeModal, setTodos, themeStyles }) => {
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
      className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center z-50 ${themeStyles.bg} ${themeStyles.text}`}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-[60vh] w-[400px] rounded-md p-5 flex flex-col gap-5 ${themeStyles.card}`}
      >
        <button onClick={closeModal} className="absolute top-2 right-4 text-xl font-bold">
          ×
        </button>

        {error && (
          <p className="text-red-200 text-sm bg-red-600 px-3 py-1 rounded">
            {error}
          </p>
        )}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter ToDo title..."
          className={`w-full px-3 py-2 rounded-md outline-none placeholder:text-gray-400 ${themeStyles.bg} ${themeStyles.text}`}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter ToDo description..."
          className={`w-full px-3 py-2 h-full max-h-full rounded-md outline-none resize-none placeholder:text-gray-400 ${themeStyles.bg} ${themeStyles.text}`}
        />

        <button
          onClick={addTodo}
          className={`rounded-md py-3 font-semibold transition ${themeStyles.button}`}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
