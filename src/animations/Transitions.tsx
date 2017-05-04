import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './Transitions.less';

interface State {
    toggled: boolean;
}

export class Transitions extends React.Component<any, State> {
    state = {
        toggled: false
    }

    render() {
        return <div>
            <div className={classes.toggleButton} onClick={() => this.setState({ toggled: !this.state.toggled })}>
                Click to toggle
            </div>
            <div className={classes.demoContainer}>
                <div className={cx(classes.demoBox, classes.allTransition, this.state.toggled && classes.demoBoxToggled)}>One transition</div>
            </div>
            <div className={classes.demoContainer}>
                <div className={cx(classes.demoBox, classes.twoTransitions, this.state.toggled && classes.demoBoxToggled)}>Two transitions</div>
            </div>            
        </div>
    }
}