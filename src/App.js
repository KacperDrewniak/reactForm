import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    username:"",
    email:"",
    password:""
  }

  handleChange =(e)=>{

    console.log(e.target.type);

    const value = e.target.value;
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }
  render(){
  return (
    <div className="App">
      <form>
      <label htmlFor="user">Twoje imię:
        <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
      </label>

        <label htmlFor="email">Twój adres email:
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>

        <label htmlFor="password">Twoje Haseło
        <input type="password" id="user" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>

      </form>
    </div>
  )
}
}
export default App;
