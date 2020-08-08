import React from 'react';



function Tooltip (props)  {

    const { showTooltip , position } = props;
    

      return(
            <div className="tooltip-container">
                
                {
                    showTooltip && 
                    position==='Top' 
                    &&  <div id="tooltip" className="top">
                            <div className="tooltip-arrow" />
                            <div className="tooltip-label">ToolTip Component</div>
                        </div>
                }
                    
                
                {
                    showTooltip && 
                    position==='Right'
                    && <div id="tooltip" className="right">
                            <div className="tooltip-arrow" />
                            <div className="tooltip-label">ToolTip Component</div>
                    </div>

                } 


                {
                    showTooltip && 
                    position==='Bottom'
                    && <div id="tooltip" className="bottom">
                        <div className="tooltip-arrow" />
                        <div className="tooltip-label">ToolTip Component</div>
                    </div>

                } 


                {
                    showTooltip && 
                    position==='Left'
                    &&  <div id="tooltip" className="left">
                        <div className="tooltip-arrow" />
                        <div className="tooltip-label">ToolTip Component</div>
                    </div>

                } 
                
            </div>
      );
    
}

export default Tooltip;
