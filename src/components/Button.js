import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button (props)  {

    const { setPosition , onMouseOverButton , onMouseAwayFromButton , position} = props;


    const handleSelect = (e) =>{
        //console.log(e); 
        setPosition(e);        
    }

       return ( 
           <div className="btn-container"> 
               <SplitButton title="ToolTip Button" id="tooltip-btn" size="lg" onMouseEnter={onMouseOverButton} onMouseLeave={onMouseAwayFromButton} onSelect={handleSelect}>
                   <Dropdown.Item eventKey="Top" active={position==='Top'?"true":""} >Top</Dropdown.Item>
                   <Dropdown.Item eventKey="Bottom" active={position==='Bottom'?"true":""}>Bottom</Dropdown.Item>
                   <Dropdown.Item eventKey="Left" active={position==='Left'?"true":""}>Left</Dropdown.Item>
                   <Dropdown.Item eventKey="Right" active={position==='Right'?"true":""}>Right</Dropdown.Item>
               </SplitButton>
          </div>
    );


    
}

export default Button;
