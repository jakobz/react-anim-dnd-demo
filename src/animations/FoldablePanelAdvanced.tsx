import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './FoldablePanelAdvanced.less';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { ReactHeight } from 'react-height';

interface State {
    open: boolean;
}

export interface FoldablePanelProps {   
    caption: string;
}

export class FoldablePanel extends React.Component<FoldablePanelProps, State> {
    state = { open: true }
    height = null;

    toggle = () => this.setState({ open: !this.state.open })

    onBodyRef = body => {
        var height = $(body).height();       
        if (this.height != height) {
            this.height = height;
            this.forceUpdate();
        }
    }

    render() {
        let height;
        if (this.height == null) {
            height = this.state.open ? 'auto' : 0;            
        } else {
            height = this.state.open ? this.height : 0;
        }

        return <div className={classes.panel}>
            <div className={classes.header} onClick={this.toggle}>{this.props.caption}</div>
            <div className={classes.bodyContainer} style={{ height: this.state.open ? this.height : 0 }}>
                <div className={classes.body} ref={this.onBodyRef}>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}
