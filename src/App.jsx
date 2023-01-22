import { React } from 'react';
import Navbar from './complement/Navbar';
import { Component } from 'react';
import { Responsive } from './complement/responsive';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Responsive/>
                <Navbar/>
            </div>
        );
    }
}
export default App;