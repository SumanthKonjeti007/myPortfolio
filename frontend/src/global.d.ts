declare global {
    interface Window {
      particlesInit: (engine: Engine) => void;
      particlesLoaded: (container: Container) => void;
      testProperty: string; // Test property
    }
  }