import './App.css';
import './index.css';
import Header from './components/Header'
import StoriBar from './components/StoriBar';

function App() {
  return (
    <>
      <div className="border w-2/3 m-auto grid-cols-1 lg:grid-cols-2 ">
          <Header />
        <div className="lg:min-h-screen lg:flex-grow lg:items-start sm:p12 contents shadow-sm overflow-x-auto .." >
        <div className="flex flex-grow px-4 py-2 m-l-t-2 space-x-6 overflow-x-hide ">
          <div className="border-2 rounded-full border-pink-600 w-20 h-20 lg:flex-grow items-center">
            <div className="w-20 h-20 rounded-full border-2">
            </div>
              <span className="text-xs items-center flex justify-items-center"> Enviar </span>
          </div>
        <StoriBar />
        </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
