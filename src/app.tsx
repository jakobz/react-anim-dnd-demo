import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as classes from './app.less';
import * as globalCss from './less/globals.less';
import * as Router from 'react-router-dom';
import { Transitions } from './animations/Transitions';

class App extends React.Component<any, any> {
    render() {
        return <Router.BrowserRouter>
            <div className={classes.app}>
                <Router.Route exact path='/:state?' component={Transitions} />
            </div>
        </Router.BrowserRouter>
    }
}

ReactDom.render(<App />, document.getElementById('main'))