import useAuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="hero min-h-full bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Sesion iniciada</h1>
            <div className="py-6">
              Usuario: <span>{user?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
