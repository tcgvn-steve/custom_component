
module CustomComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/calendarcomponent.jl")
include("jl/mycustomcomponent.jl")
include("jl/quillcomponent.jl")
include("jl/stevecomponent.jl")
include("jl/tablecomponent.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "custom_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "custom_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "custom_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
