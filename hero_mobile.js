document.addEventListener('DOMContentLoaded', async () => {
    
    const canvas = document.getElementById('canvas3dmobile');
    const { Application } = await import('./MobileHero/runtime.js');
    const app = new Application(canvas);
    app.load('./MobileHero/scene.splinecode');

});