import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
class MyFirstComponent extends React.Component{
    render(){
        return (
            <h1>Hello! 
              <small className="text-muted">With faded secondary world!</small>
            </h1> 
        );
    }
}
ReactDOM.render(<MyFirstComponent /> ,document.getElementById("root"));