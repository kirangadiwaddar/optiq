import React, { useState } from 'react';
import "@fontsource/poppins";
import './App.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



function App(props) {

  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  const [switch1, setSwitch1] = useState (true);
  const [switch2, setSwitch2] = useState (true);
  const [switch3, setSwitch3] = useState (true);

  const [show, setShow] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setSwitch1(!switch1);
    console.log(switch1);
  };
  const handleChange1 = () => {
    setChecked1(!checked1);
    setSwitch2(!switch2);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
    setSwitch3(!switch3);
  };

  const switchList = [
    <FormControlLabel
      className='check-item' 
      control={<Switch checked={(!switch1)}  onChange={handleChange} />} 
      label="Static code analysis" 
    />,
    <FormControlLabel 
      className='check-item' 
      control={<Switch checked={(!switch2)} onChange={handleChange1} />} 
      label="Credential scan" 
    />,
    <FormControlLabel 
      className='check-item' 
      control={<Switch checked={(!switch3)} onChange={handleChange2} />} 
      label="Docker image scan" 
    />
]

const FlowAddBtn=()=>{
  return (  
    <>
      <div className='btn-add-close'>
        <span className='close-icon' onClick={toggleHide}><CloseOutlinedIcon /></span>
        <Button className="fl-btn fl-btn-added" variant="contained">untitled script</Button>
      </div>
    <FlowAdd />
    </>
  )
}

const FlowAdd=(props)=>{
  return (
    <>
    <IconButton aria-label="add" className="fl-add-plus" color="primary">
      <AddCircleIcon color="white" />
    </IconButton>
    </>
  )
}

const toggleShow = () => {
  setShow(true);
}
const toggleHide = () => {
  setShow(false);
}



const flowBtns = [
  <div className={`fl-btn-block ${checked ? 'fl-noActive' : 'fl-active'}`}>    
    <Button startIcon={<AddCircleOutlineIcon onClick={handleChange} />} className="fl-btn" variant="contained">code analysis</Button>
    <FlowAdd />    
  </div>,
  <div className={`fl-btn-block ${checked1 ? 'fl-noActive' : 'fl-active'}`}>
    <Button startIcon={<AddCircleOutlineIcon onClick={handleChange1} />} className="fl-btn" variant="contained">Credentials Scan</Button>
    <FlowAdd />
  </div>,
  <div className="fl-btn-block">
    <Button className="fl-btn fl-btn-added" variant="contained">Docker Build</Button>
  </div>,
  <div className={`fl-btn-block ${checked2 ? 'fl-noActive' : 'fl-active'}`}>
    <FlowAdd />
    <Button startIcon={<AddCircleOutlineIcon onClick={handleChange2} />} className="fl-btn" variant="contained">Docker image scan</Button>
    <FlowAdd />
  </div>
]  



  return (
    <div className="code-block">
      <div className='flow-chart'>
        <h3 className='fr-title'>Task flow</h3>
        <div className='fl-chart'>
          <div className='fl-item-start'>
            <Button className="fl-start" variant="contained">GIT Checkout</Button>
            <IconButton aria-label="add" onClick={toggleShow} className="fl-add-plus" color="primary">
              <AddCircleIcon color="white" />
            </IconButton>
            {show ? <FlowAddBtn /> : null }
          </div>
          {
            flowBtns.map((flowBtnItem, i)=> <div className="fl-item" key={i}>{flowBtnItem}</div>)
          }
          <div className='fl-item-end'>
            <Button className="fl-end" variant="contained">GIT Checkout</Button>
          </div>
        </div>
      </div>
      <div className='code-drawer'>
        <h3 className="dr-title">Security Checks</h3>
        <div className="check-list">
          <FormGroup>
            {
              switchList.map((switchItem, i) => <div className="check-list-item" key={i}>{switchItem}</div>)
            }
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
