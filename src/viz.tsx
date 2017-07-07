import * as React from 'react';
import * as VIS from 'vis';

export default class Viz extends React.Component<{markup:string}, any>
{
    ref:HTMLElement;

    timeline:VIS.Timeline;

    componentDidMount()
    {
        this.timeline = new VIS.Timeline(this.ref, [], {});
        this.refresh();
    }

    refresh()
    {
        let data = this.parseMarkup();
        this.timeline.setItems(data);
        this.timeline.fit();
        this.timeline.redraw();
    }

    componentDidUpdate(prevProps, prevState)
    {
        this.refresh();
    }

    parseMarkup()
    {
        try
        {
            let data = [];
            let lines = this.props.markup.split('\n');

            let current = null;
            let i = 0;
            for (let line of lines)
            {
                if (line.indexOf("##") == 0) // ##
                {
                    current.start = line.substr(1, line.length-1);
                }
                else if (line.indexOf("#") == 0) // #
                {
                    if (current != null)
                    {
                        data.push(current);
                    }

                    current = {id:i++, content:"<b>" + line.substr(1, line.length-1) + "</b>", start:"", style:"text-align: left"};
                }
                else if (line.length > 0)
                {
                    current.content += "<br/>" + line;
                }
            }

            if (current != null)
            {
                data.push(current);
            }

            /*
            let i = 0;
            for (let line of lines)
            {
                let parts = line.split(":");
                if (parts.length == 2)
                {
                    let item = {id:i, content:parts[1], start:parts[0]};
                    data.push(item);
                    i++;
                }
            }*/

            return data;
        }
        catch(ex)
        {
            return [];
        }
    }

    render()
    {
        return (
            <div ref={(ref)=>this.ref = ref}>
            </div>
        )
    }
}