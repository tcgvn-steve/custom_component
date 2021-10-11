# AUTO GENERATED FILE - DO NOT EDIT

quillComponent <- function(id=NULL, value=NULL) {
    
    props <- list(id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'QuillComponent',
        namespace = 'custom_components',
        propNames = c('id', 'value'),
        package = 'customComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
