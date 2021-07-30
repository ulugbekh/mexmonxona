import './app.scss'
import Sidebar from './container/sidebar';
import Dashboard from './pages/page1';
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import Page8 from './pages/page8'
import Home from './pages/home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="app-inner">
      <Sidebar/>
    </div>
    <div className="pages">
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/Dashboard" component={Dashboard}/>
    <Route exact path="/Шахматка" component={Page2}/>
    <Route exact path="/Служба приёма" component={Page3}/>
    <Route exact path="/Профили гостей" component={Page4}/>
    <Route exact path="/Roomboard" component={Page5}/>
    <Route exact path="/Ресторан и Бар" component={Page6}/>
    <Route exact path="/Финансы" component={Page7}/>
    <Route exact path="/Статистика и Отчёты" component={Page8}/>
   </Switch>
    </div>
      </div>
    </Router>
  );
}

export default App;
