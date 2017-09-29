import React from 'react';

class Total extends React.Component {
    alertManager() {
        if (this.props.cookList.length > 4) {
            alert('The manager has been alerted')
        }
    }
    
    checkProps() {
        return this.props.cookList.map((food) => {
            return (
                <div>
                    <hr /> 
                    { food.map((item) => (
                        <li>
                            <div>I am rendering below:</div>
                            <div>{item.title}</div>
                        </li>
                    ))}
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <div>{this.alertManager()}</div>
                <div>{this.checkProps()}</div>
            </div>
    )}
}

export default Total;