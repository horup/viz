import * as React from 'react';
import * as VIS from 'vis';
import Viz from './viz';
export default class App extends React.Component<any, {markup:string}>
{
    textarea:HTMLTextAreaElement;
    constructor(props)
    {
        super(props);
        let s = `
#FOX 3.4.1
##2017-07-05
- KIK fejl rettet
- user notification rettet


#FOX 3.5
##2018-01-01
- backup
- dashboard
- fejl rettelser
- auto upgrade

#FOX 3.6
##2018-06-01
- layer 1
- forbedringer til breeder modul

        `;

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