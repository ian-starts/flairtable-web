module.exports = {
    theme: {
        extend: {
            fontSize: {
                '4xl': '2.5rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
                '8xl': '6rem'
            },
            backgroundColor: theme => ({
                'custom-white': '#fdfdfd',
                'custom-blue': '#18BFFF',
                'custom-blue-100': 'rgba(24,191,255,0.1)',
                'custom-blue-200': 'rgba(24,191,255,0.2)',
                'custom-blue-300': 'rgba(24,191,255,0.3)',
                'custom-blue-400': 'rgba(24,191,255,0.4)',
                'custom-blue-500': 'rgba(24,191,255,0.5)',
                'custom-blue-600': 'rgba(24,191,255,0.6)',
                'custom-blue-700': 'rgba(24,191,255,0.7)',
                'custom-blue-800': 'rgba(24,191,255,0.8)',
                'custom-pink': '#edb5f5',
                'custom-orange': '#FCB400',
                'custom-red': '#F82B60',
                'custom-red-100': 'rgba(248,43,96,0.1)',
                'custom-red-200': 'rgba(248,43,96,0.2)',
                'custom-red-300': 'rgba(248,43,96,0.3)',
                'custom-red-400': 'rgba(248,43,96,0.4)',
                'custom-red-500': 'rgba(248,43,96,0.5)',
                'custom-red-600': 'rgba(248,43,96,0.6)',
                'custom-red-700': 'rgba(248,43,96,0.7)',
                'custom-red-800': 'rgba(248,43,96,0.8)',
            }),
            textColor: theme => ({
                'custom-white': '#fdfdfd',
                'custom-blue': '#18BFFF',
                'custom-pink': '#edb5f5',
                'custom-orange': '#FCB400',
            }),
            minWidth: {
                '0': '0',
                '0.5': '0.5rem',
                '0.8': '0.8rem',
                '1': '1rem',
                '2': '2rem',
                '3': '3rem',
                '10': '10rem',
                '15': '15rem',
                '20': '20rem',
                '24': '24rem',
            },
            maxWidth: {
                '0': '0',
                '0.5': '0.5rem',
                '0.8': '0.8rem',
                '1': '1rem',
                '2': '2rem',
                '3': '3rem',
                '10': '10rem',
                '15': '15rem',
                '20': '20rem',
                '24': '24rem',
                '28': '28rem',
                '30': '30rem',
                '34': '34rem',
                '38': '38rem',
            },
            minHeight: {
                '0': '0',
                '5': '5rem',
                '10': '10rem',
                '15': '15rem',
                '20': '20rem',
                '24': '24rem',
            },
            borderColor: theme => ({
                ...theme('colors'),
                'primary': '#ecfcff',
                'secondary': '#edb5f5',
            })
        }

    }
};