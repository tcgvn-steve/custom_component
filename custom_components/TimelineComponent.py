# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TimelineComponent(Component):
    """A TimelineComponent component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- items (list; required):
    The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'items']
        self._type = 'TimelineComponent'
        self._namespace = 'custom_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'items']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['items']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TimelineComponent, self).__init__(**args)
