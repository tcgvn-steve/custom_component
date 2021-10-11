import PropTypes from 'prop-types';
import React from "react"
import { Chrono } from "react-chrono";

// https://reactjsexample.com/modern-timeline-component-for-react/
export default class TimelineComponentClass extends Component {
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

    onSelectionChanged() {
        console.log("==============");
    };

    render() {
        const { id, items } = this.props;
        return (
            <div id={id} style={{ width: "500px", height: "950px" }}>
                <Chrono items={items} mode="VERTICAL" onItemSelected={this.onSelectionChanged} />
            </div>
        )
    }
}

TimelineComponentClass.defaultProps = {};

TimelineComponentClass.propTypes = {
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
