import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './FoldablePanel.less';
import * as simple from './FoldablePanelSimple';
import * as transitionGroup from './FoldablePanelTransitionGroup';
import * as advanced from './FoldablePanelAdvanced';
import * as _ from 'lodash';

function renderDemo(Component) {
    return <div className={classes.demoPanel}>
        <Component caption='Demo panel'>
            <p>This is content of the demo panel.</p>
            <p>We don't know the height of this content upfront.</p>
            { _.range(0, 5).map((_, n) => <p>Line {n}</p>) }
        </Component>
    </div>
}

export let FoldablePanelDemo = () => <div className={classes.demoContainer}>
    { renderDemo(simple.FoldablePanel) }
    { renderDemo(transitionGroup.FoldablePanel) }    
    { renderDemo(advanced.FoldablePanel) }    
</div> 