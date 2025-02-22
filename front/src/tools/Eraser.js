import Brush from "./Brush";

export default class Eraser extends Brush {
  constructor(canvas) {
    super(canvas);
  }

  draw(x, y) {
    this.ctx.strokeStyle = "#fff";
    super.draw(x, y);
  }
}
