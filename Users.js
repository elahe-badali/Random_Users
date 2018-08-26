import React from 'react';
import './Users.css'
import {Table} from 'reactstrap';

export default class Users extends React.Component {

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            users : [],
        }
    }

// Getting API & Turn it into JSON
    componentDidMount(){
        fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(
            json => {
                this.setState({users: json.results})    
            }
        )
    }

    render(){
        return(
            <div>  
            <Table className="table2" bordered hover >
               <tbody>  
                    {this.state.users.map(item =>(
                        <tr>
                        <td className="FirstName2">{item.name.first}</td>
                        <td className="LastName2">{item.name.last}</td>   
                        <td className="Email2">{item.email}</td>    
                        <td className="pic2"><img src={item.picture.thumbnail}/></td>    
                        </tr>      
                        ))
                    } 
                </tbody>
            </Table>
            </div> 
        )
    }
}
