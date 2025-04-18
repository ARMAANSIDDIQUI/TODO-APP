const ToDoCard = ({ todo, setTodos, themeStyles }) => {
  const { id, title, description, isCompleted } = todo;

  function toggleTick() {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        if (item.id === id) {
          item.isCompleted = !isCompleted;
        }
        return item;
      });
      return newTodos;
    });
  }

  return (
    <div className={`h-[300px] w-[300px] rounded-lg p-5 m-5 ${themeStyles.card}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">{title}</h3>
        <button
          onClick={toggleTick}
          className={`w-5 h-5 border border-black rounded-xs ${
            isCompleted ? "bg-green-500" : "bg-transparent"
          }`}
        >
          {isCompleted ? "✔" : ""}
        </button>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default ToDoCard;
