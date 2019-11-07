import React,{Fragment} from 'react';
import {GlobalStyle} from './style';
//导入全局字体图标样式
import './static/iconfont/iconfont.css';
import './static/js/set_root';
//引入各个组件
import Header from './common/header/index';
import Home from './views/home';
import Detail from './views/detail';
import Login from './views/login';
import Write from './views/write';
//引入react router 组件
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      <Fragment>
        {/* 全局样式组件 */}
        <GlobalStyle />
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
              <Route path='/login' component={Login} exact></Route>
              <Route path='/home' component={Home}></Route>
              <Route path='/detail/:id' component={Detail} exact></Route>
              <Route path='/write' component={Write}></Route>
              <Redirect from='/' to='/home' exact />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    </div>
  );
}

export default App;
