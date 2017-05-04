import * as React from 'react';
import * as classes from './Animations.less';

export class Animations extends React.Component<any, any> {
    render() {
        return <div className={classes.wrapper}>
            <div className={classes.spin} />
        </div>
    }
}