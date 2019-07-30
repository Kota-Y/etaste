import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Detail from './Detail';
import '../CSS/App.css';
  
const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <h1>ホーム画面</h1>
            <ul>
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/about'>About</Link></button>
                <button><Link to='/list'>List</Link></button>
                <button><Link to='/deal'>Deal</Link></button>
                <button><Link to='setting'>Setting</Link></button>
                {/*<button><Link to='/friends/10'>Friends</Link></button>*/}
                <button><Link to='/detail'>Detail</Link></button>
            </ul>
            <hr />
  
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/list' component={List} />
            <Route path='/deal' component={Deal} />
            <Route path='/setting' component={Setting} />
            {/*<Route path='/friends/:ids' component={Friends} />*/}
            <Route path='/detail' component={Detail} />
        </div>
    </BrowserRouter>
  );
}
  
const Home = () => (
  <div>
    <h2>Home</h2>
    Homeページです
  </div>
)

const List = () => (
  <div>
    <h2>List</h2>
    お気に入りの店舗のリスト
  </div>
)

const Deal = () => (
  <div>
    <h2>Deal</h2>
    受け取り予定・取引履歴など
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    Aboutページです
  </div>
)

const Setting = () => (
  <div>
    <h2>Setting</h2>
    設定ページです
  </div>
);

/*
const Friends = ({ match }) => (
  <div>
    <h2>Friends</h2>
    Friendページです{match.params.ids}
  </div>
);*/
export default App
