import './app.css';
import React, {Component} from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Form from './components/form';

class App extends Component {

  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
  }

  handleIncrement = (habit) => {
    console.log(`handleInc ${habit.name}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
    
  }

  handleDecrement = (habit) => {
    console.log(`handleDc ${habit}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  }

  handleDelete = (habit) => {
    console.log(`handleDT ${habit}`)
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }


  render() {
    return (
      <>
          <Navbar/>
          <Form/>
          <Habits habits={this.state.habits} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}/>
          <button className="reset-button">Reset All</button>
      </>
    );
  }
}

export default App;
