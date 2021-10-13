import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Chrono } from "react-chrono";

// https://reactjsexample.com/modern-timeline-component-for-react/
export default class TimelineComponentClass extends Component {
    render() {
        const { id, items, mode, setProps, value, height, width } = this.props;
        return (
            <div id={id} style={{ width: { width }, height: { height } }}>
                <Chrono items={items} mode={mode} onItemSelected={e => setProps({ value: JSON.stringify(e) })} />
            </div>
        )
    }
}

TimelineComponentClass.defaultProps = {
    height: "850px",
    width: "700px"
};

TimelineComponentClass.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    items: PropTypes.array.isRequired,
    mode: PropTypes.string.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

