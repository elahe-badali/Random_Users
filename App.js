import React from 'react';
import './App.css';
import Users from './Users';
import {Input, Button, Table} from 'reactstrap';

export default class App extends React.Component{

  //Constructor
  constructor(props){

    super(props);

    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);

    this.state={
      inputValue: "",
      input: ""
      }
    }

  //Handeling inputValue changes
  HandleChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  //Set input after submit
  HandleSubmit(event){
    event.preventDefault;
    this.setState(()=>
      {
      return{ input: parseInt(this.state.inputValue)}
      })   
  }

  render(){
    var userArray = [] 
    var i;

    for (i=0; i<this.state.input ; i++){
      userArray.push(<Users key={i} />)
    }
  
    return( 
      <div className="div"> 

      <div>
       <h3>"Final Project" </h3>            
      <Input placeholder="Write number of users..." onChange={this.HandleChange} value={this.state.inputValue}/>
      <Button outline color="success" className="submit" onClick={this.HandleSubmit}>Submit</Button>
      </div>

      <Table className="table" bordered hover responsive> 
        <thead>
            <th className="FirstName">First Name</th>
            <th className="LastName">Last Name</th>
            <th className="Email">Email</th>
            <th className="pic">Pic</th>    
        </thead>        
        </Table>

        {userArray}    

      </div>
    );
  }
}



