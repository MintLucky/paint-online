import React from 'react';
import toolState from '../store/toolState';

import '../styles/toolbar.scss';

const SettingBar = () => {
  
  return (
    <div className='toolbar setting-bar'>
      <label htmlFor="line-width">Line width</label>
      <input
          onChange={e => toolState.setLineWidth(e.target.value)}
          style={{margin: '0 10px'}}
          id="line-width"
          type="number" defaultValue={1} min={1} max={50}/>
      <label htmlFor="stroke-color" >Stroke color</label>
      <input 
        onChange={e => toolState.setStrokeColor(e.target.value)} 
        style={{margin: '0 10px'}}
        id="stroke-color" 
        type="color"/>
    </div>
  );
};

export default SettingBar;