import React from 'react';

class Total extends React.Component {
    alertManager() {
        if (this.props.cookList.length > 4) {
            alert('The manager has been alerted')
        }
    }
    
    checkProps() {
        const cooksListItems = this.props.cookList.forEach((food) => {
            food.map((item) => {
                return (
                    <li>
                        <div>I am rendering below:</div>
                        <div>{item.title}</div>
                    </li>
                )
            })
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