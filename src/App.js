import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import Header from './components/Header';
import Modals from './components/Modals';

function App() {
    return (
        <div className="App">
            <Header title="Modal Example" />

            <div className="container">
                <Modals />
            </div>
        </div>
    );
}

export default App;
