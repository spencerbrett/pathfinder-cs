import CssBaseline from '@material-ui/core/CssBaseline';
import { Main } from './main/Main';
import { Navigation } from './components/Navigation';
import { Switch } from 'react-router-dom';
import Routes from './Routes';
import { Route } from 'react-router';

function App() {
    return (
        <>
            <CssBaseline/>
            <Navigation>
                <Switch>
                    {Routes.map((route) =>
                        <Route exact path={route.path} key={route.path}>
                            <route.component/>
                        </Route>)}
                    <Main/>
                </Switch>
            </Navigation>
        </>
    );
}

export default App;
