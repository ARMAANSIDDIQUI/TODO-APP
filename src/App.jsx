import { useState, useEffect } from "react";
import AddTaskModal from "./components/AddTaskModal";
import CarouselSection from "./components/Carousell";
import ToDoSection from "./components/ToDoSection";
import NavBar from "./NavBar";

const themes = {
  light: {
    bg: "bg-white",
    text: "text-black",
    card: "bg-gray-100 text-black",
    button: "bg-blue-500 text-white hover:bg-blue-600"
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    card: "bg-gray-800 text-white",
    button: "bg-purple-600 text-white hover:bg-purple-700"
  },
  ocean: {
    bg: "bg-blue-900",
    text: "text-cyan-100",
    card: "bg-blue-700 text-white",
    button: "bg-cyan-500 text-white hover:bg-cyan-600"
  },
  sunset: {
    bg: "bg-orange-100",
    text: "text-orange-900",
    card: "bg-orange-200 text-orange-900",
    button: "bg-orange-400 text-white hover:bg-orange-500"
  }
};


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const themeStyles = themes[theme];

  return (
    <div className={`${themeStyles.bg} ${themeStyles.text} min-h-screen transition-all`}>
      <NavBar theme={theme} handleThemeChange={handleThemeChange} />
      <CarouselSection />
      <ToDoSection
        toggleModal={() => setIsOpen(true)}
        todos={todos}
        setTodos={setTodos}
        viewMode={viewMode}
        toggleViewMode={() =>
          setViewMode((prev) => (prev === "grid" ? "list" : "grid"))
        }
        themeStyles={themeStyles}
      />
      {isOpen && <AddTaskModal closeModal={() => setIsOpen(false)} setTodos={setTodos} />}
    </div>
  );
}

export default App;
