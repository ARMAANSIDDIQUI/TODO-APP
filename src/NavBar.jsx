const NavBar = ({ theme, handleThemeChange }) => {
    return (
      <div className="h-10 p-5 flex justify-between items-center bg-inherit">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="font-bold text-lg">ToDo App</span>
        </div>
  
        <select
          value={theme}
          onChange={handleThemeChange}
          className="rounded px-2 py-1 bg-white text-black shadow-md"
        >
          <option value="light">Light 🌞</option>
          <option value="dark">Dark 🌙</option>
          <option value="ocean">Ocean 🌊</option>
          <option value="sunset">Sunset 🌅</option>
        </select>
      </div>
    );
  };
  
  export default NavBar;
  