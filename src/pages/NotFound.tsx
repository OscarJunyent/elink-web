
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              🤖 Aquesta no és la pàgina que busques
            </p>
            <p className="text-lg text-gray-600 italic">
              "This is not the content you are looking for..."
            </p>
            <p className="text-base text-gray-500">
              Pots seguir el teu camí. Mou-te endavant, mou-te endavant.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Sembla que la pàgina que buscaves s'ha perdut en una galàxia molt, molt llunyana...
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            🚀 Tornar a la base rebel
          </a>
        </div>
        
        <div className="mt-8 text-xs text-gray-400">
          <p>Que la força t'acompanyi en la teva cerca</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
