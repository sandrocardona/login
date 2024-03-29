import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
import AppLogin from './componentes/Applogin';
import Menu from './componentes/menu';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menuItem:"UNO",
      logged:false,
    }
  }

  changeMenu(item){
    this.setState({menuItem:item})
  }

  userLogin(telefono,password){
    if(telefono=="admin" && password=="1234"){
      this.setState({logged:true})
    }
  }

  render(){
    let obj = <><Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} /></>
    if(!this.state.logged){
      obj= <AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)} />
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;
