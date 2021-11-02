import './App.css';
import './index.css';
import Stories from './components/Stories';
import data from './data/planets';

function App() {
  return (
    <>
      <div className="border w-2/3 m-auto">
        <header> Sistema Solar </header>

        <div className="flex p-4 space-x-4 border shadow-sm overflow-x-auto ...">
          <div className="border-2 rounded-full border-pink-600 w-20 h-20">
            <div className="w-20 h-20 rounded-full border-2">
              <span> Enviar </span>
            </div>
          </div>

          {data.map((item) => <Stories srcImage={item.image} name={item.name} />)}
        </div>
      </div>
    </>
  );
}

export default App;
