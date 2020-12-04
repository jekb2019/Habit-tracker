import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <ul className="navbar">
                <i className="fas fa-leaf navbar-logo"></i>
                <span className="navbar-title">Habit Tracker</span>
                <span className="navbar-count">0</span>
            </ul>
        );
    }
}

export default Navbar;