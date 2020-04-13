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
                'primary': '#ecfcff',
                'secondary': '#edb5f5',
                'tertiary': '#e86ed0'
            }),
            textColor: theme => ({
                'primary': '#f3f3f3',
                'secondary': '#edb5f5',
                'tertiary': '#e86ed0'
            }),
            minWidth: {
                '0': '0',
                '0.5': '0.5rem',
                '0.8': '0.8rem',
                '1': '1rem',
                '2': '2rem',
                '10': '10rem',
                '15': '15rem',
                '20': '20rem',
                '24': '24rem',
            },
            minHeight: {
                '0': '0',
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