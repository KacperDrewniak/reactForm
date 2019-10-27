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
  }
  messages={
    username_incorrecet:'Nazwa musi być dłużasza niż 10 ',
    email_inoccrect:"Musi zawierać @ w emailu",
    password_incorrect:"Hasło musi mieć minimum 8 znaków",
    accept_incorreeect:"not potwierdzoned wszelaka of zgoda gościu"
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
          {this.state.errors.password && <span>{this.messages.password_incorrecet}</span>}
        </label>

        <label htmlFor="accept">Wyrażam wszelaką zgodę

          <input type="checkbox" name="accept" id="accept" checked={this.state.value} onChange={this.handleChange}/>
        </label>

      <button>Zapisz się</button>
      </form>
    </div>
  )
}
}
export default App;
