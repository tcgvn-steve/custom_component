# AUTO GENERATED FILE - DO NOT EDIT

export calendarcomponent

"""
    calendarcomponent(;kwargs...)

A CalendarComponent component.
MyCalendar allows the user to select a date
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `date` (String; optional): The date as a string
"""
function calendarcomponent(; kwargs...)
        available_props = Symbol[:id, :date]
        wild_props = Symbol[]
        return Component("calendarcomponent", "CalendarComponent", "custom_components", available_props, wild_props; kwargs...)
end

