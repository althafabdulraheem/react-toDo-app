import React,{Component} from 'react';
import './todo.css';
class todo extends Component {
    
    state = {input:"",
items:[]  } ;
    handleChange=(event)=>
    {
        this.setState({input:event.target.value})
       
        
    }
    handleSubmit=event=>{
        event.preventDefault();
        const allitems=this.state.items;
        allitems.push(this.state.input)
        this.setState({items:allitems})
        this.setState({input:""})
            
    }
    remove=(key)=>{
        const allitems=this.state.items;
        console.log(allitems)
        allitems.splice(key,1);
        this.setState({
            items:allitems
        })
    }
    render() { 
        return (
            <div className='todo-container'>
                <h1>TO APP...</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <input type="text" value={this.state.input} onChange={this.handleChange}/>
                  
                </div>
                </form>
               
                <ul>
                 {this.state.items.map((value,index)=>{
                         return <li key={index} > {value} <span class="remove"><i className="fa fa-trash" onClick={()=>{this.remove(index)}}></i> </span> </li>
                 })}
                  
                </ul>
            </div>
        );
    }
}
 
export default todo;
