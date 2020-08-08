import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
   
   render(){
       return ( 
           <div className="btn-container">
               <SplitButton title="ToolTip Button" size="lg">
                   <Dropdown.Item eventKey="1">Top</Dropdown.Item>
                   <Dropdown.Item eventKey="2">Bottom</Dropdown.Item>
                   <Dropdown.Item eventKey="3">Left</Dropdown.Item>
                   <Dropdown.Item eventKey="3">Right</Dropdown.Item>
               </SplitButton>
          </div>
    );

   }  
    
}

export default Button;
