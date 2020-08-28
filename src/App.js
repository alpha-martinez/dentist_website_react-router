import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'
import WidgetShow from './WidgetShow'
import AboutUs from './AboutUs'
import Career from './Career'
import Reviews from './Reviews'

function App() {
  const procedures = [
    'Oral Surgery',
    'General Cleanings',
    'Fillings',
    'Gold Plating'
  ]
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" >Home</Link>{' '}
          <Link to="/procedures">See Our Procedures</Link>{' '}
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Career">Careers</Link>
          <Link to="/Reviews">Reviews</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={()=><Procedures procedures={procedures}/>} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/career" component={Career}/>
        <Route path="/Reviews" component={Reviews}/>
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props} />} />
      </div>
    </Router>
    
  );
}

export default App;