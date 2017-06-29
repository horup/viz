import * as React from 'react';
import * as VIS from 'vis';
import Viz from './viz';
export default class App extends React.Component<any, {markup:string}>
{
    textarea:HTMLTextAreaElement;
    constructor(props)
    {
        super(props);
        this.state = {markup:"item1:2017-03-01\nitem2:2017-05-01"};
    }

    onChange()
    {
        this.setState({markup:this.textarea.value});
    }

    render()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                     <div className="col-sm-12">
                         <h3>VIZ</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <textarea value={this.state.markup} ref={(ref)=>this.textarea=ref} rows={30} onChange={()=>this.onChange()} style={{width:'100%', resize:'none'}} />
                    </div>
                     <div className="col-sm-10">
                         <Viz markup={this.state.markup}/>
                    </div>
                </div>
            </div>
        )
    }
}