# AUTO GENERATED FILE - DO NOT EDIT

export quillcomponent

"""
    quillcomponent(;kwargs...)

A QuillComponent component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `value` (String; optional): The value displayed in the input.
"""
function quillcomponent(; kwargs...)
        available_props = Symbol[:id, :value]
        wild_props = Symbol[]
        return Component("quillcomponent", "QuillComponent", "custom_components", available_props, wild_props; kwargs...)
end

