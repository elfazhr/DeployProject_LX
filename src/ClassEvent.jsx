import React from 'react';
import Button from './components/Element/Button/Index';

class EventReactClass extends React.Component {
    handleClickClass(){
        console.log('Class Based Event Handling');
    }
    render() {
        return(
            <div className='flex justify-center items-center min-h-screen flex-col '>
                <h1 className='text-xl font-bold'>This is Based Class Component</h1>
                <Button classname="bg-red-500 my-5" onClick={this.handleClickClass}>Click Me</Button>
            </div>
        )
    }
}

export default EventReactClass;