
const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 bg-gray-800 text-white rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-2xl sm:text-3xl text-blue-500 text-center mb-4 md:mb-0 font-bold">
          Typing Speed Tracker
        </div>

        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition duration-300">
              Scores
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition duration-300">
              Texts
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition duration-300">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
