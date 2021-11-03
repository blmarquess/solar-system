import './App.css';
import './index.css';
import Header from './components/Header';
import StoriBar from './components/StoriBar';
import Post from './components/Post';
import Missions from './data/missions';

function App() {
  return (
    <>
      <div className="border w-1/2 m-auto grid-cols-1 lg:grid-cols-2 ">
        <div className="mb-2 shadow-sm ">
          <Header />
        </div>
        <div className="lg:min-h-screen lg:flex-grow lg:items-start sm:p12 contents shadow-sm self-center justify-items-center" >
          <div className="flex items-center justify-items-center p-2 overflow-x-hidden mb-2">
            <StoriBar />
          </div>
          
        </div>
        <div>
          {Missions.map((item) => (<Post
            name={item.name}
            image={item.image}
            year={item.year}
            country={item.country}
            destination={item.destination}
          />))}
        </div>
      </div>
    </>
  );
}

export default App;
