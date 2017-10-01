import React from 'react';
import shortid from 'shortid';

class Total extends React.Component {
    alertManager() {
        if (this.props.cookList.length > 4) {
            alert('The manager has been alerted')
        }
    }
    
    renderProps() {
        return this.props.cookList.map((food) => {
            return (
                <div key={shortid.generate()} className="orders">
                    <hr />
                    <button>Delete Order</button>
                    { food.map((item) => (
                        <div key={shortid.generate()}>
                            <div>{item.title}</div>
                        </div>
                    ))}
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <div>{this.alertManager()}</div>
                <div>{this.renderProps()}</div>
            </div>
    )}
}

export default Total;