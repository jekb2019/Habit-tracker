import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input className="form-input" type="text" value="Habit"></input>
                </form>
                <button className="add-button">Add</button>
            </div>
        );
    }
}

export default Form;