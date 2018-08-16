import React from 'react';

class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        }, () => {
            this.props.onChange(this.state.value)
        })
    }

    render() {
        return (
            <div>
                <input 
                    type="number" 
                    size="2"
                    className="form-control" 
                    value={this.state.value} 
                    onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}

export default Text;