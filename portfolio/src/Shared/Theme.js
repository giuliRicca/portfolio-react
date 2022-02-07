const baseTheme = {
    'colors': {
        'primary': "#FF9F1C",
        'secondary': "#1B2845",
        'primaryHover': "#ce7e16",
        'white': "#fff",
        'black': "#323031",
        'mute': "#cecece",
    },
    'font_sizes':{
        'xxl': '4.5rem',
        'xl': '2.5rem',
        'lg': '1.5rem',
        'md': '1.2rem',
        'sm': '.9rem',
        'xs': '.6rem',
    },
    'paddings': {
        'section-md': '5rem 4rem',
        'section_xl': '10rem 7rem',
        'xxl': '2rem 3.2rem',
        'xl': '1rem 2.2rem',
        'lg': '.8rem 1.5rem',
        'md': '.5rem 1rem',
        'sm': '.3rem .8rem',
    },
    'breakpoints': {
        'xxl': '2560px',
        'xl': '1440px',
        'lg': '960px',
        'sm': '960px',
        'xs': '720px',
    },
    'sizes': {
        'icon_size': 25,
    }
}

export const lightTheme = {
    ...baseTheme,
    'colors': {
        ...baseTheme['colors'],
        'font': "#323031",
        'font_alternative': "#f4f4f4",
        'navbar': "rgba(245, 245, 245, .8)",
        'background': "rgba(245, 245, 245)",
    }
}

export const darkTheme = {
    ...baseTheme,
    'colors': {
        ...baseTheme['colors'],
        'font': "#f4f4f4",
        'font_alternative': "#323031",
        'navbar': "rgba(30,30,30, .8)",
        'background': "#1c1c1c",
    }
}