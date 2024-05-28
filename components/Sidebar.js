const Sidebar = () => {
  return (
    <nav className="fixed top-1/3 right-0 p-4 bg-gray-900 text-white dark:bg-white dark:text-black">
      <ul>
        <li className="mb-2">
          <a href="#about-me">About me</a>
        </li>
        <li className="mb-2">
          <a href="#education">Education</a>
        </li>
        <li className="mb-2">
          <a href="#skills">Skills</a>
        </li>
        <li className="mb-2">
          <a href="#experience">Experience</a>
        </li>
        <li className="mb-2">
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
