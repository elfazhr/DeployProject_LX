import React from 'react';
import Button from './components/Element/Button/Index';

class Event extends React.Component {

    constructor(){
        super();
        this.state={
            nama : 'StudentX'
        }
    }
    handleParameter(name){
        alert("Hello, " +name)
    }

    changeMsg(e){
        e.target.innerHTML = 'LearningX';
    }

    changeMsgAgain(e){
        e.target.innerHTML = 'Click Me';
    }
  // Metode untuk menangani perubahan nilai pada input
    greeting(e){
        this.setState({
            nama : e.target.value
        })
    }

    render(){
        return(
            <div className='flex justify-center items-center min-h-screen'>
                {/* <Button classname="bg-blue-500" onClick={this.handleParameter.bind(this, "StudentX")}>Click Me</Button> */}
                {/* <button className="h-10 px-6 font-semibold rounded-md bg-blue-800 text-white" 
                onMouseEnter={(e) => this.changeMsg(e)} 
                onMouseOut={(e) => this.changeMsgAgain(e)}>Click Me</button> */}
                <div className='w-full max-w-sm flex-col'> 
                <h1 className='text-3xl font-bold my-5 text-blue-500'>Selamat Datang, {this.state.nama} </h1>
                <input
                    type="text"
                    className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder: opacity-50"
                    placeholder='Masukkan Nama'
                    name="name"
                    // Memanggil metode greeting saat nilai input berubah
                    onChange={(e) => this.greeting(e)}
                />
                </div>
            </div>
        )
    }
}

export default Event