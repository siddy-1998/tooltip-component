import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/Button';
import Tooltip from '../components/Tooltip';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showTooltip : false,
      position : 'Top'

    }
  }

  setPosition = (val) => {
    this.setState({
      position : val
    });
  }

  onMouseOverButton = () =>{
    this.setState({
      showTooltip : true
    })
  }

   onMouseAwayFromButton = () => {
     this.setState({
       showTooltip: false
     })
   }

  render(){

    // console.log("Render",this.state);
    const { showTooltip , position } =this.state;
    return (
    <div className="App">
       < Button setPosition={this.setPosition} 
                onMouseOverButton={this.onMouseOverButton} 
                onMouseAwayFromButton={this.onMouseAwayFromButton} 
                position={position}
       />
       <Tooltip showTooltip={showTooltip} position={position}/>


    </div>
  );


  }  
}

export default App;