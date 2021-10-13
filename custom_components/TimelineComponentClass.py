# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TimelineComponentClass(Component):
    """A TimelineComponentClass component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- items (list; required)

- mode (string; required)

- value (string; optional):
    The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, items=Component.REQUIRED, mode=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'items', 'mode', 'value']
        self._type = 'TimelineComponentClass'
        self._namespace = 'custom_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'items', 'mode', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['items', 'mode']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TimelineComponentClass, self).__init__(**args)
