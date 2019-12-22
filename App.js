import React,{Component} from 'react';
import Header from'./Header';
import AddSubscriber from './AddSubscriber';
import PhoneDirectory from './PhoneDirectory';
//.because it is in same folder and Header for Header.js and first Header was for const Header in Header.js
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component{
    
    constructor(){
        super();
        this.state={
            subscribers:[]
        }
    }
    
    deleteHandler(message)
    {
        alert(message);
    }
   
    onDeletedClick= (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }
    
    render(){

        return(
            <div className="component-container">
             
            <Header heading="Phone Directory" Instructor="abc"/>
           {/*const Header in Header.js and inside render comment will bein braces*/}
          { //<button>Add</button>
//            <div>
//            <span>Name</span><br/>
//            <span>Phone</span>
//            </div>
            }
<div className="component-body-container">
<Link to="/add">            
<button className="custom-btn addBtn">Add</button>
</Link>
<div className="grid-container heading-container">
<span className="grid-item name">Name</span>
<span className="grid-item phone">PhoneNo.</span>
            
        </div> 
            {
            this.props.subscribersList.map(sub=>{
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
           
           <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
            </span>
            </div>
            })
            }
            
            </div>
           
            </div>
        );
    }
}


export default App;
