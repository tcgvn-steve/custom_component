import custom_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html


app = dash.Dash(__name__)
items = [{
    "title": "Steve",
    "cardTitle": "Probination",
    "cardSubtitle": "Men of the British Expeditionary Force (BEF) wade out to..",
    "cardDetailedText": "Men of the British Expeditionary Force (BEF) wade out to..",
    "media": {
         "type": "IMAGE",
         "source": {
             "url": "http://someurl/image.jpg"
         }
         }
}, {
    "title": "Ned",
    "cardTitle": "Staff",
    "cardSubtitle": "Men of the British Expeditionary Force (BEF) wade out to..",
    "cardDetailedText": "Men of the British Expeditionary Force (BEF) wade out to..",
    "media": {
        "type": "IMAGE",
        "source": {
             "url": "http://someurl/image.jpg"
        }
    }
}, {
    "title": "Jacob",
    "cardTitle": "Staff",
    "cardSubtitle": "Men of the British Expeditionary Force (BEF) wade out to..",
    "cardDetailedText": "Men of the British Expeditionary Force (BEF) wade out to..",
    "media": {
        "type": "IMAGE",
        "source": {
             "url": "http://someurl/image.jpg"
        }
    }
}
]
app.layout = html.Div([
    custom_components.TimelineComponentClass(
        id='input', items=items, mode='VERTICAL_ALTERNATING'
    ),
    html.Div(id='output'),
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
