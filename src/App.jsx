import "./App.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import { useCallback } from "react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);
  return (
    <>
      <h1>and so it begins</h1>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height="100vh"
        width="100vw"
        options={{
          preset: "firefly",
        }}
      />
      {/* <Particles */}
      {/*   id="tsparticles" */}
      {/*   init={particlesInit} */}
      {/*   loaded={particlesLoaded} */}
      {/*   height="100vh" */}
      {/*   width="100vw" */}
      {/*   options={{ */}
      {/*     background: { */}
      {/*       color: { */}
      {/*         value: "#0d47a1", */}
      {/*       }, */}
      {/*     }, */}
      {/*     fpsLimit: 120, */}
      {/*     interactivity: { */}
      {/*       events: { */}
      {/*         onClick: { */}
      {/*           enable: true, */}
      {/*           mode: "push", */}
      {/*         }, */}
      {/*         onHover: { */}
      {/*           enable: true, */}
      {/*           mode: "repulse", */}
      {/*         }, */}
      {/*         resize: true, */}
      {/*       }, */}
      {/*       modes: { */}
      {/*         push: { */}
      {/*           quantity: 4, */}
      {/*         }, */}
      {/*         repulse: { */}
      {/*           distance: 200, */}
      {/*           duration: 0.4, */}
      {/*         }, */}
      {/*       }, */}
      {/*     }, */}
      {/*     particles: { */}
      {/*       color: { */}
      {/*         value: "#ffffff", */}
      {/*       }, */}
      {/*       links: { */}
      {/*         color: "#ffffff", */}
      {/*         distance: 150, */}
      {/*         enable: true, */}
      {/*         opacity: 0.5, */}
      {/*         width: 1, */}
      {/*       }, */}
      {/*       move: { */}
      {/*         direction: "none", */}
      {/*         enable: true, */}
      {/*         outModes: { */}
      {/*           default: "bounce", */}
      {/*         }, */}
      {/*         random: false, */}
      {/*         speed: 6, */}
      {/*         straight: false, */}
      {/*       }, */}
      {/*       number: { */}
      {/*         density: { */}
      {/*           enable: true, */}
      {/*           area: 800, */}
      {/*         }, */}
      {/*         value: 80, */}
      {/*       }, */}
      {/*       opacity: { */}
      {/*         value: 0.5, */}
      {/*       }, */}
      {/*       shape: { */}
      {/*         type: "circle", */}
      {/*       }, */}
      {/*       size: { */}
      {/*         value: { min: 1, max: 5 }, */}
      {/*       }, */}
      {/*     }, */}
      {/*     detectRetina: true, */}
      {/*   }} */}
      {/* /> */}
    </>
  );
}

export default App;
