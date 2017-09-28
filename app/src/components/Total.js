import React from 'react';

class Total extends React.Component {
    alertManager() {
        if (this.props.cookList.length > 4) {
            alert('The manager has been alerted')
        }
    }
    checkProps() {
        this.props.cookList.forEach((food) => {
            food.forEach((item) => {
                console.log(item)
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