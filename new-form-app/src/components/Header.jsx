import React from 'react';

function Header(props) {
    return (
        <div>
            <div id="headerContainer" className='headerContainer'>
                 <div id="headerItem" className='headerItem'>1</div>
                 <div id="headerItem" className='headerItem'>2</div>
                 <div id="headerItem" className='headerItem'>3</div>
                 <div id="headerItem" className='headerItem'>4</div>
            </div>
            <div className="headerContainerItem">
                <div className='sideHeaderDetails'>
                    <h5 className="headerStep">Step 1</h5>
                    <h5 className="headerStepINFO">YOUR INFO</h5><br></br>
                </div>
                <div className='sideHeaderDetails'>
                    <h5 className="headerStep">Step 2</h5>
                    <h5 className="headerStepINFO">SELECT PLANS</h5><br></br>
                </div>
                <div className='sideHeaderDetails'>
                    <h5 className="headerStep">Step 3</h5>
                    <h5 className="headerStepINFO">ADD ONS</h5><br></br>
                </div>
                <div className='sideHeaderDetails'>
                    <h5 className="headerStep">Step 4</h5>
                    <h5 className="headerStepINFO">SUMMARY</h5><br></br>
                </div>
            </div>
        </div>
        
    )
}

export default Header;