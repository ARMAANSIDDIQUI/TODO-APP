const ToDoCard = ({ todo, setTodos, themeStyles }) => {
  const { id, title, description, isCompleted } = todo;

  function toggleTick() {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      return newTodos;
    });
  }

  function deleteTodo() {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    }
  }

  return (
    <div className={`h-[300px] w-[300px] rounded-lg p-5 m-5 ${themeStyles.card}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={toggleTick}
            className={`w-5 h-5 border border-black rounded-xs ${
              isCompleted ? "bg-green-500" : "bg-transparent"
            }`}
            title="Mark as complete"
          >
            {isCompleted ? "✔" : ""}
          </button>
          <button
            onClick={deleteTodo}
            className="text-red-500 text-xs font-bold"
            title="Delete Task"
          >
            ❌
          </button>
        </div>
      </div>
      <p className="text-xs mt-2">{description}</p>
    </div>
  );
};

export default ToDoCard;
