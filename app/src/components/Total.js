import React from 'react';

class Total extends React.Component {
    checkProps() {
        const singleOrder = this.props.cookList
        singleOrder.forEach((list) => {
            console.log(list)   
        })
    }
    
    render() {
        return (
            <div>
                {this.checkProps()}
            </div>
        )}
}

export default Total;