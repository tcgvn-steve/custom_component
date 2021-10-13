import PropTypes from 'prop-types';
import React from "react"
import { Chrono } from "react-chrono";

// https://reactjsexample.com/modern-timeline-component-for-react/
const TimelineComponent = (props) => {
    const { id, items, setProps } = this.props;
    const onSelectionChanged = (e) => {
        setProps({ value: JSON.stringify(e) })
    };

    return (
        <div id={id} style={{ width: "500px", height: "950px" }}>
            <Chrono items={items} mode="VERTICAL" onItemSelected={this.onSelectionChanged} />
        </div>
    )
}


TimelineComponent.defaultProps = {};

TimelineComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The value displayed in the input.
     */
    items: PropTypes.array.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
export default TimelineComponent;
