import ToDoCard from "./ToDoCard";

const ToDoSection = ({
  toggleModal,
  todos,
  setTodos,
  viewMode,
  toggleViewMode,
  themeStyles,
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h2 className="text-center">TODO</h2>

      <div className="flex gap-10">
        <button
          onClick={toggleModal}
          className={`border border-black ${themeStyles.button} p-5 py-2 rounded-md`}
        >
          Create ToDo
        </button>

        <button
          onClick={toggleViewMode}
          className={`border border-black ${themeStyles.button} p-5 py-2 rounded-md`}
        >
          {viewMode === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      <div
        className={`${
          viewMode === "list"
            ? "flex flex-col"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        }`}
      >
        {todos.map((todo) => {
          if (!todo.isCompleted)
            return (
              <ToDoCard
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                themeStyles={themeStyles}
              />
            );
        })}
        {todos.map((todo) => {
          if (todo.isCompleted)
            return (
              <ToDoCard
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                themeStyles={themeStyles}
              />
            );
        })}
      </div>
    </div>
  );
};

export default ToDoSection;
