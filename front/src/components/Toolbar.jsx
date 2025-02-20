import React from 'react';
import '../styles/toolbar.scss';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import canvasState from '../store/canvasState';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
      <button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))} />
      <button className="toolbar__btn circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas))}  />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <input style={{marginLeft:10}} type="color"/>
      <button className="toolbar__btn undo" />
      <button className="toolbar__btn redo" />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;