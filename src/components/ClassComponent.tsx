import React, { Component } from "react";
import { ClassSample } from "../types/SampleObj";

export class Sample extends Component<{},ClassSample> {
    constructor(props:{}) {
        super(props)

        this.state  = {
            count:0
        }
    }

    inc = (event:any) => {
        console.log(event.isTrusted,'eventtttttt');
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>change</button>
            </div>
        )
    }
}