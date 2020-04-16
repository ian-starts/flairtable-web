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
                'custom-pink': '#edb5f5',
                'custom-hard-pink': '#FCB400',
            }),
            textColor: theme => ({
                'custom-white': '#fdfdfd',
                'custom-blue': '#18BFFF',
                'custom-pink': '#edb5f5',
                'custom-hard-pink': '#FCB400',
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