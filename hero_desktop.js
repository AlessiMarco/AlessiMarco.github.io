document.addEventListener('DOMContentLoaded', async () => {
    
    const canvas = document.getElementById('canvas3ddesktop');
    const { Application } = await import('./DesktopHero/runtime.js');
    const app = new Application(canvas);
    app.load('./DesktopHero/scene.splinecode');
});



