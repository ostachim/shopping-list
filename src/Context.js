import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NewList from './pages/NewList';
import ActiveLists from './pages/ActiveLists';
import ListsHistory from './pages/ListsHistory';

const Context = () => {
    return(
        <>
            <Switch>
                <Route component={NewList} path="/nowalista" />
                <Route component={ActiveLists} path="/aktywnelisty" />
                <Route component={ListsHistory} path="/historia" />

            </Switch>
            
        </>
    )
}

export default Context;