import * as React from 'react';
import * as VIS from 'vis';

export default class Viz extends React.Component<{markup:string}, any>
{
    ref:HTMLElement;
   /* componentDidMount()
    {
        let data = [
            {id: 1, content: 'item 1', start: '2013-04-20'},
            {id: 2, content: 'item 2', start: '2013-04-14'},
            {id: 3, content: 'item 3', start: '2013-04-18'},
            {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
            {id: 5, content: 'item 5', start: '2013-04-25'},
            {id: 6, content: 'item 6', start: '2013-04-27'}
        ];
        let timeline = new VIS.Timeline(this.ref, data, {});
    }*/

    timeline:VIS.Timeline;

    componentDidMount()
    {
        this.timeline = new VIS.Timeline(this.ref, [], {});
        this.refresh();
    }

    refresh()
    {
        let data = this.parseMarkup();
        console.log(JSON.stringify(data));
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
            let i = 0;
            for (let line of lines)
            {
                let parts = line.split(":");
                if (parts.length == 2)
                {
                    let item = {id:i, content:parts[0], start:parts[1]};
                    data.push(item);
                    i++;
                }
            }

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