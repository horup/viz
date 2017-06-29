import * as React from 'react';
import * as VIS from 'vis';
import Viz from './viz';
export default class App extends React.Component<any, {markup:string}>
{
    textarea:HTMLTextAreaElement;
    constructor(props)
    {
        super(props);
        let s = "";
        s += "2016-11-28:G0\n";
        s += "2017-04-28:G1\n";
        s += "2017-08-28:G2\n";
        s += "2017-10-15:Staldtest\n";
        s += "2017-12-15:G3\n";

        s += "2018-01-01:Release";
        this.state = {markup:s};

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