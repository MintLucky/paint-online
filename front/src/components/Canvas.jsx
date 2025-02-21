import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Brush from '../tools/Brush';
import { Modal, Button } from 'react-bootstrap';

import '../styles/canvas.scss';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';

const Canvas = observer(() => {

  const canvasRef = useRef()
  const usernameRef = useRef()

  const [modal, setModal] = useState(true)

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current))
  }, [])


  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  const connectHandler = () => {
    canvasState.setUsername(usernameRef.current.value)
    setModal(false)
}

  return (
    <div class="canvas">
      <Modal show={modal} onHide={() => {}}>
        <Modal.Header >
            <Modal.Title>Enter your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" ref={usernameRef}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => connectHandler()}>
                Enter
            </Button>
        </Modal.Footer>
      </Modal>
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400} />
    </div>
  );
});

export default Canvas;