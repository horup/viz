import * as React from 'react';
import * as VIS from 'vis';
import Viz from './viz';
import * as gzip from 'gzip-js';


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

        if (location.hash.length > 1)
        {
            let base64 = location.hash.substr(1, location.hash.length);
            s = atob(base64);
        }
        else
        {
             location.hash = btoa(s);
        }

        this.state = {markup:s};

    }

    onChange()
    {
        let markup = this.textarea.value;
        this.setState({markup:markup});
       // let zipped = gzip.zip(markup);
        location.hash = btoa(markup);
    }

    render()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-m-12">
                         <Viz markup={this.state.markup}/>
                    </div>
                </div>
                <div className="row">
                     <div className="col-m-12">
                        <textarea value={this.state.markup} ref={(ref)=>this.textarea=ref} rows={15} onChange={()=>this.onChange()} style={{width:'100%', resize:'none'}} />
                    </div>
                </div>
            </div>
        )
    }
}