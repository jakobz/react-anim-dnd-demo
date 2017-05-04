import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as classes from './app.less';
import * as globalCss from './less/globals.less';
import * as Router from 'react-router-dom';
import { Animations } from './animations/Animations';
import { Transitions } from './animations/Transitions';
import { FoldablePanelDemo } from './animations/FoldablePanel';
import { Performance } from './animations/Performance';

let samples: { name: string, component: any, path: string }[] = [
    { name: 'Animations', component: Animations, path: '/animations' },
    { name: 'Transitions', component: Transitions, path: '/transitions' },
    { name: 'Foldable', component: FoldablePanelDemo, path: '/foldable' },
    { name: 'Performance', component: Performance, path: '/perf' }   
]

class App extends React.Component<any, any> {
    render() {
        let menuItems = samples.map(s => <Router.NavLink className={classes.menuItem} activeClassName={classes.menuItemActive} to={s.path}>{s.name}</Router.NavLink> );
        let routes = samples.map(s => <Router.Route exact path={s.path} component={s.component} />);
        
        return <Router.BrowserRouter>
            <div className={classes.app}>
                <div className={classes.menu}>{menuItems}</div>
                <div className={classes.body}>{routes}</div>
            </div>
        </Router.BrowserRouter>
    }
}

ReactDom.render(<App />, document.getElementById('main'))