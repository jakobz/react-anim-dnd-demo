import * as React from 'react';
import * as cx from 'classnames';
import * as classes from './Performance.less';
import * as _ from 'lodash';

class Grid extends React.Component<any, any> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        let cells = _.range(100).map(x => 
            _.range(100).map(y => <div
                style={{ left: x * 2, top: y * 2}}
                className={cx(classes.grid, ((x + y) %  2) && classes.gridBlack)}
            />)
        )

        return <div>{cells}</div>
    }
}

class PerfTest extends React.Component<{ mode: 'position' | 'transform' }, { right: boolean }> {
    state = { right:  false }

    toggle = () => this.setState({ right: !this.state.right })

    renderGrid() {

    }

    render() {
        let position = this.state.right ? 500 : 0;
        let style: React.CSSProperties = this.props.mode == 'position'
            ? { position: 'relative', left: position }
            : { transform: `translateX(${position}px)` };
        return <div className={classes.container} onClick={this.toggle}>
            <div className={classes.box} style={style}>
                <Grid />
            </div>
        </div>
    }    
}

export class Performance extends React.Component<any, any> {
    render() {
        return <div>
            <p>position: absolute, animating 'left' property</p>
            <PerfTest mode='position' />
            <p>animating 'translateX' property</p>
            <PerfTest mode='transform' />
        </div>
    }
}