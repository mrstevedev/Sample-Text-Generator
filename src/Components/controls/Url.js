import React from 'react';

class Url extends React.Component {
    render(){
        return(
            <div>
                { 'https://baconipsum.com/api/?type='+this.props.type+'&paras='+this.props.paras+'&format='+this.props.format }
            </div>
        );
    }
}

export default Url;