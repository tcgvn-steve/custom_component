import PropTypes from 'prop-types';
import React from "react"
import { Chrono } from "react-chrono";

// https://reactjsexample.com/modern-timeline-component-for-react/
const TimelineComponent = (props) => {
    // const items = [{
    //     title: title,
    //     cardTitle: "Dunkirk",
    //     cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    //     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    //     media: {
    //         type: "IMAGE",
    //         source: {
    //             url: "http://someurl/image.jpg"
    //         }
    //     }
    // },
    // ];
    const { id, items } = this.props;

    const onSelectionChanged = () => {
        console.log("==============");
    };

    return (
        <div id={id} style={{ width: "500px", height: "950px" }}>
            <Chrono items={items} mode="VERTICAL" iconOnClick={this.onSelectionChanged} />
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
