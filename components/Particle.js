import Particles from 'react-particles-js';

const Particle = () => {
    return(
        <Particles 
        height="99.4vh"
        params={{ 
          particles: { 
            nb: 80,
            number: { 
              value: 55, 
              density: { 
                enable: true, 
                value_area: 800, 
              },
            shape: {
                type: "circle",
                stroke: {
                    width: 1,
                    color: "white"
                },
            },
            size: {
                value: 10,
                random: true
            }
            }, 
            interactivity: {
                events: {
                  onresize: {
                    enable: true,
                    density_auto: true,
                    density_area: 300 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                  }
                }
              }
          },
        }} 
      />
    )
}

export default Particle;