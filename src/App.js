import './App.css';
import './index.css';
import Header from './components/Header';
import StoriBar from './components/StoriBar';

function App() {
  return (
    <>
      <div className="border w-2/3 m-auto grid-cols-1 lg:grid-cols-2 ">
          <Header />
        <div className="lg:min-h-screen lg:flex-grow lg:items-start sm:p12 contents shadow-sm self-center justify-items-center" >
          <div className="flex items-center justify-items-center p-2 overflow-x-hidden ">
            <div className="border-2 rounded-full border-pink-600 w-20 h-20 flex flex-column items-start self-center justify-items-center">
                <div className="w-20 h-20 flex items-center justify-items-center self-baseline"></div>
                <span className="text-xs flex items-end self-end justify-items-center"> Enviar </span>
            </div>
            <StoriBar />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
