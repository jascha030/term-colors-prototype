module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        backgroundDim: '#34324A',
        background: '#292D3E',
        backgroundDarker: '#1a1423',
        foregroundDim: '#676E95',
        foreground: '#a6Accd',
        accentViolet: '#a59bff',
        sunshine: '#ffb833',
        sunshineBright: '#ffcc00',
        razzmatazz: '#ea1479',
        aliceBlue: '#4db6ac',
        smokey: '#eeeeee',
        ansi: {
          black: '#000000',
          red: '#cc0000',
          green: '#4e9a06',
          yellow: '#c4a000',
          blue: '#729fcf',
          magenta: '#75507b',
          cyan: '#06989a',
          white: '#d3d7cf',
          bright: {
            black: '#555753',
            red: '#ef2929',
            green: '#8ae234',
            yellow: '#fce94f',
            blue: '#32afff',
            magenta: '#ad7fa8',
            cyan: '#34e2e2',
            white: '#ffffff',
          }
        },
      }
    }
  },
  plugins: []
};
