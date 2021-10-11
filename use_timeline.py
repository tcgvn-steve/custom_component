import custom_components
import dash
from dash.dependencies import Input, Output
from dash_html_components import html

app = dash.Dash(__name__)
items = [{
    "title": "title",
    "cardTitle": "Dunkirk",
    "cardSubtitle": "Men of the British Expeditionary Force (BEF) wade out to..",
    "cardDetailedText": "Men of the British Expeditionary Force (BEF) wade out to..",
    "media": {
         "type": "IMAGE",
         "source": {
             "url": "http://someurl/image.jpg"
         }
         }
}, {
    "title": "title",
    "cardTitle": "Dunkirk",
    "cardSubtitle": "Men of the British Expeditionary Force (BEF) wade out to..",
    "cardDetailedText": "Men of the British Expeditionary Force (BEF) wade out to..",
    "media": {
        "type": "IMAGE",
        "source": {
             "url": "http://someurl/image.jpg"
        }
    }
}, {
    "title": "title",
    "cardTitle": "Dunkirk",
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
        id='input', items=items
    ),
    html.Div(id='output'),
])


# @app.callback(Output('output', 'children'), [Input('input', 'date')])
# def display_output(date):
#     return 'You have entered {}'.format(date)


if __name__ == '__main__':
    app.run_server(debug=True)
