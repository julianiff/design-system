import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import style from './style.css';
import {
  BufferGeometry,
  Line,
  LineBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';

const PLAYGROUND_TAG = 'iff-webgl-playground';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement(PLAYGROUND_TAG)
export class WebGLPlayground extends LitElement {
  static styles = [style];
  static canvasSize = 500;

  private renderer = new WebGLRenderer();
  private camera = new PerspectiveCamera(45, 1, 1, 500);
  private scene = new Scene();
  private points: Vector3[] = [];
  private material = new LineBasicMaterial({color: 'green'});
  private enumretor = 1;

  render() {
    this.renderer.setSize(
      WebGLPlayground.canvasSize,
      WebGLPlayground.canvasSize
    );
    this.shadowRoot?.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);

    this.points.push(new Vector3(-10, 0, 0));
    this.points.push(new Vector3(0, 10, 0));
    this.points.push(new Vector3(10, 0, 0));

    const geometry = new BufferGeometry().setFromPoints(this.points);

    const line = new Line(geometry, this.material);
    this.scene.add(line);
    this.renderer.render(this.scene, this.camera);
    this.animation();
    return html``;
  }

  private animation() {
    const exit = setInterval(() => {
      requestAnimationFrame(() => {
        if (this.enumretor > 90) {
          clearInterval(exit);
        }
        this.points.push(
          new Vector3(
            Math.cos((this.enumretor += 0.01)),
            Math.sin((this.enumretor -= 0.1)),
            (this.enumretor += 0.2)
          )
        );
        const geometry = new BufferGeometry().setFromPoints(this.points);
        const line = new Line(geometry, this.material);
        this.scene.add(line);

        console.log('rendering', this.enumretor);
        this.renderer.render(this.scene, this.camera);
      });
    });
    2500;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [PLAYGROUND_TAG]: WebGLPlayground;
  }
}
