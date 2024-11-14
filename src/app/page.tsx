import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  return (
    <>
      <LoadingScreen />

      <div className="content flex flex-col items-center justify-center min-h-screen text-gray-300">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Website</h1>
        <p className="text-lg">
          This content appears after the preloader finishes.
        </p>
      </div>
    </>
  );
};

export default Home;
