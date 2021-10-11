import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class QuillComponent extends Component {
    render() {
        const { id, value, setProps } = this.props;

        return (
            <ReactQuill theme="snow" onChange={(value) => setProps({ value })}
                value={value || ''} />
        );
    }
}

QuillComponent.defaultProps = {};

QuillComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     *  setProps to notify the dash callbacks about the value change.
     */
    setProps: PropTypes.func
};
