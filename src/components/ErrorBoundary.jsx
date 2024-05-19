import { Component } from "react";

class Err extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError:false})
    }

    render() {
        if(this.state.hasError){
            return <div>has error</div>
        }

        return this.props.children
    }
}

export default Err