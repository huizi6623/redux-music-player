import '../static/css/reset.css' ;
import '../static/css/common.css' ;
import React, { Fragment } from 'react' ;
import Header from './header' ;
import Player from '../containers/playerContainer' ;
import MusicList from '../containers/musicListContainer' ;
import { Switch, Route, BrowserRouter } from 'react-router-dom' ;

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Switch>
            <Route exact path='/' component={Player}/>
            <Route path='/list' component={MusicList}/>
            </Switch>
        </Fragment>
    </BrowserRouter>
) ;

export default App ;

