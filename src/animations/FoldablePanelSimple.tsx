import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './FoldablePanelSimple.less';
import * as _ from 'lodash';

interface State {
    open: boolean;
}

export interface FoldablePanelProps {   
    caption: string;
}

// Take 1 - naive approach
export class FoldablePanel extends React.Component<FoldablePanelProps, State> {
    state = { open: true }

    toggle = () => this.setState({ open: !this.state.open })

    render() {
        return <div className={classes.panel}>
            <div className={classes.header} onClick={this.toggle}>{this.props.caption}</div>
            <div className={cx(classes.body, this.state.open && classes.bodyOpen)}>{this.props.children}</div>
        </div>
    }
}
