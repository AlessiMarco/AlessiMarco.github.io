document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById('canvas3d');

    if (window.innerWidth > 768) {
        const { Application } = await import('./DesktopHero/runtime.js');
        const app = new Application(canvas);
        app.load('./DesktopHero/scene.splinecode');
    } else {
        const { Application } = await import('./MobileHero/runtime.js');
        const app = new Application(canvas);
        app.load('./MobileHero/scene.splinecode');
    }
});
