import { Application } from './spline/runtime.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('./spline/scene.splinecode');
});

