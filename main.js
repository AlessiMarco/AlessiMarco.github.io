import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@0.9.209/build/spline.module.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/ArYsUPSgJyPMiMIU/scene.splinecode');
});
