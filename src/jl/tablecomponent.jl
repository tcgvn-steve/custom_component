# AUTO GENERATED FILE - DO NOT EDIT

export tablecomponent

"""
    tablecomponent(;kwargs...)

A TableComponent component.
Dashcustomgrid is a component wrapped on ag-Grid.
It takes two property, `columnDefs`, and `rowData`
displays them.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `columnDefs` (Array; optional): columnDefs for ag-Grid.
- `gridApi` (Dict; optional): gridApi for ag-Grid.
- `rowData` (Array; optional): rowData for ag-Grid.
- `selectedRows` (Array; optional): selectedRows for ag-Grid.
"""
function tablecomponent(; kwargs...)
        available_props = Symbol[:id, :columnDefs, :gridApi, :rowData, :selectedRows]
        wild_props = Symbol[]
        return Component("tablecomponent", "TableComponent", "custom_components", available_props, wild_props; kwargs...)
end

