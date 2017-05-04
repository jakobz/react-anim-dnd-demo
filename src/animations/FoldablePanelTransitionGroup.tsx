import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './FoldablePanelTransitionGroup.less';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import * as _ from 'lodash';

interface State {
    open: boolean;
}

export interface FoldablePanelProps {   
    caption: string;
}

export class FoldablePanel extends React.Component<FoldablePanelProps, State> {
    state = { open: true }

    toggle = () => this.setState({ open: !this.state.open })

    render() {
        return <div className={classes.panel}>
            <div className={classes.header} onClick={this.toggle}>{this.props.caption}</div>
            <CSSTransitionGroup
                /* There's a simpler way to set classes by specifying 'transition' property.
                  However, we can't use it because we use CSS modules.
                */
                transitionName={{
                    enter: classes.bodyInvisible,
                    enterActive: classes.bodyVisible,
                    appear: classes.bodyInvisible,
                    appearActive: classes.bodyVisible,                    
                    leave: classes.bodyVisible,
                     /* body-visible is declared after body-invisible, so it has higher priority
                     As CSSTransitionGroup assigns both leave and leaveActive classes, we need to create 
                     another class for invisible state - with higher priority
                     Ugly :(
                     */
                    leaveActive: classes.bodyInvisible2
                }}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
            { this.state.open && <div key='body' className={classes.body}>{this.props.children}</div> }
            </CSSTransitionGroup>
        </div>
    }
}