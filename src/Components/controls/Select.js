import React from 'react';

class Select extends React.Component {
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
        });
    }

    render() {
        return (
            <div>
                <select className="form-control" onChange={this.onChange.bind(this)}>
                    <option value="meat-and-filler">Yes</option>
                    <option value="all-meat">No</option>
                </select>
            </div>
        )
    }
}

export default Select;