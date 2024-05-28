import Aboutme from "@/components/Aboutme";
import NavBar from "../components/NavBar";
import { FaChevronDown } from "react-icons/fa";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white dark:bg-white dark:text-black">
      <NavBar />
      {/* <Sidebar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen pb-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-8xl font-bold mb-4">Hi! I'm Deep.</h1>
          <h2 className="text-8xl mb-20">I'm a software engineer.</h2>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center pb-10 ">
          <FaChevronDown />
        </div>
      </main>

      <div>
        <Aboutme />
      </div>
    </div>
  );
}
