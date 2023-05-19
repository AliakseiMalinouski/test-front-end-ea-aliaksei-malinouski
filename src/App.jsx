
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';
import { CornerVector } from './components/CornerVector';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <CornerVector type="left" left="https://i.ibb.co/Hq5T8pC/Vector.png"/>
          <CornerVector type="right" right="https://i.ibb.co/pQtN4Ty/Vector-1.png"/>
          <div className='Content'>
            <div className='Container'>
              <PageRouter/>
            </div>
          </div>
          <div className='Footer'>
            <div className='Container'>

            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
