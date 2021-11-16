module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: '#172dba',
                'brand-lighter': '#253bcc',
                'brand-darker': '#11249e',
            },
            spacing: {
                112: '28rem',
                128: '32rem',
                256: '64rem',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
};
