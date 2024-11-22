import React from 'react';
import Button from './components/Element/Button/Index';
class BindingEvent extends React.Component {
    constructor() {
      super();
      // Inisialisasi state
      this.state = {
        count: 0
      };
      // Binding event handler ke instance komponen di dalam constructor
      this.handleIncrement = this.handleIncrement.bind(this);
    }
    // Metode untuk menangani peningkatan nilai count
    handleIncrement() {
    // Memperbarui state dengan setState
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div className='flex justify-center items-center min-h-screen flex-col' >
          <h1 className='text-3xl font-bold'>Count value is: {this.state.count}</h1>
          <Button classname='bg-slate-800 my-5' onClick={this.handleIncrement}>Increment</Button>
        </div>
      );
    }
  }

export default BindingEvent;