import React from 'react';
import './App.css';
import { spawn } from 'child_process';

class App extends React.Component {
  state={
    username:"",
    email:"",
    password:"",
    accept:false,

    errors:{
      username: false,
      email: false,
      password: false,
      accept: false
    }
  }
  handleSubmit =(e)=>{
    e.preventDefault()

    const validation = this.formValidation()
    console.log(validation)

  }


  formValidation = () =>{
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    
    if(this.state.username.lenght >=8)username=true;
    if(this.state.email.indexOf('@')!==-1)email=true;
    if(this.state.password.length === 8)password=true;
    if(this.state.accept)accept=true;
    if(username && email && password && accept)correct=true;

    return({
      correct,
      username,
      password,
      accept,
      email,
    })


  }


  messages={
    username_incorrecet:'Nazwa musi być dłużasza niż 10 ',
    email_incorrecet:"Musi zawierać @ w emailu",
    password_incorrect:"Hasło musi mieć minimum 8 znaków",
    accept_incorrect:"not potwierdzoned wszelaka of zgoda gościu"
  }

  handleChange =(e)=>{

    
    const type = e.target.type;

    const name = e.target.name;

    if(type === "text" || type=== "password" || type==="email"){
      const value = e.target.value;
      const checked = e.target.checked
      this.setState({
        [name]: value
      })
    }
    else if(type==="checkbox"){
      const checked = e.target.checked;
      this.setState({
        [name]:checked
      })
    
    }
  }
  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit} noValidate>
      <label htmlFor="user">Twoje imię:
        <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
        {this.state.errors.username && <span>{this.messages.username_incorrecet}</span>}
      </label>

        <label htmlFor="email">Twój adres email:
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          {this.state.errors.email && <span>{this.messages.email_incorrecet}</span>}
        </label>

        <label htmlFor="password">Twoje Haseło
        <input type="password" id="user" name="password" value={this.state.password} onChange={this.handleChange} />
          {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
        </label>

        <label htmlFor="accept">Wyrażam wszelaką zgodę

          <input type="checkbox" name="accept" id="accept" checked={this.state.accept} onChange={this.handleChange}/>
          {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
        </label>

      <button>Zapisz się</button>
      </form>
    </div>
  )
}
}
export default App;
