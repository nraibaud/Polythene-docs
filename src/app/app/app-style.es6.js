const fontSize = 15;
const smallMainSidePadding = 24;
const mediumMainSidePadding = 40;
const largeMainSidePadding = 96;

// const color_primary = '#25e47a';
// const color_primary_dark = '#00b44b';
const color_secondary = '#5e3aae';
const color_main_header = '#f5f5f5';
const color_border_light = '#E8E8E8';
const color_sidebar_header = '#00c853';
const color_code_background = '#FCFCFC';
const color_code_border = color_border_light;
const color_table_background = '#f6f6f6';

const mainBackgroundColor = '#fff';
const mainTextColor = '#333';
const drawerColor = '#263238';
const bodyBackgroundColor = '#37474F';
const linkColor = '#1eaaf1';
const headerFontSize = 20;
const logoColor = '#fff';
const mediumScreenDrawerWidth = 240;
const largeScreenDrawerWidth = 280;
const docContentBottomPadding = 60;

const styles = [{
    '*': [
        {
            'box-sizing': 'border-box'
        },
        // remove tap highlight in mobile Safari
        {
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
        }, {
            '-webkit-tap-highlight-color': 'transparent' // For some Androids
        }
    ],

    // Remove dotted link borders in Firefox
    ' a, a:active, a:focus, input:active, input[type]:focus': {
        outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    ' input:disabled': {
        opacity: 1
    },

    ' html, body': {
        height: '100%',
        margin: 0,
        padding: 0
    },

    ' body': {
        'background-color': bodyBackgroundColor,
        position: 'relative',
        color: mainTextColor,
        'min-width': '320px'
    },
    ' .scaffold': {
        height: '100%'
    },

    ' .pe-toolbar.pe-header--standard, .pe-toolbar__bar.pe-toolbar__bar--top': {
        height: '64px'
    },
    ' .pe-toolbar__bar--top': {
        padding: '0 12px',

        ' .pe-button': {
            // padding: 0,
            margin: '0 0 0 10px'
        },
        ' .pe-button__label': {
            // padding: '4px 0'
        },
        ' .title': {
            height: '64px',
            'line-height': '64px'
        }
    },

    ' .drawer, .drawer.pe-dark-theme': {
        background: drawerColor,
        position: 'relative',
        height: '100%',

        ' .pe-toolbar': {
            background: 'none'
        },

        ' .pe-toolbar__bar--top': {
            ' .title': {
                color: logoColor
            }
        },

        ' .pe-header-panel__header-container': {
            'background-color': color_sidebar_header
        },

        ' .pe-list-tile.pe-list__header .pe-list-tile__title': {
            'font-weight': 400,
            color: 'rgba(255,255,255,.45)'
        },
        ' .pe-list-tile .pe-list-tile__title': {
            // 'font-size': fontSize + 'px',
            color: 'rgba(255,255,255,.9)'
        },
        ' .highlight .pe-list-tile__title': {
            color: 'rgba(255,255,255,.9)'
        },
        ' .pe-list-tile.highlight': {
            'background-color': '#38474f'
        }
    },

    ' html.pe-no-touch .pe-list-tile.highlight, html.pe-no-touch .pe-list-tile:not(.pe-list__header):hover': {
        'background-color': '#38474f'
    },
    ' html.pe-no-touch .pe-list-tile a[href]:hover .pe-list-tile__title': {
        color: 'rgba(255,255,255,.9)'
    },

    ' a': {
        color: linkColor,
        'text-decoration': 'none'
    },

    ' .main': {
        height: '100%',
        'min-height': '100%',
        background: mainBackgroundColor,

        '&, p, ul': {
            'font-size': fontSize + 'px',
        },

        ' p, ul': {
            'margin-bottom': '16px'
        },

        ' a[href*="//"]': {
            color: linkColor
        },

        ' hr': {
            height: '1px',
            border: 'none',
            'background-color': color_border_light,
            margin: '1em 0'
        },

        ' .pe-toolbar': {
            background: 'none'
        },
        ' .pe-header-panel__header-container': {
            'background-color': color_main_header
        },

        ' .btn-demo': {
            display: 'none'
        },
        ' code, pre': {
            'font-family': 'Inconsolata, courier, monospace',
            color: mainTextColor,
            'font-size': '15px'
        },

        ' h1:first-of-type': {
            display: 'none'
        },
        ' h2': {
            'font-size': '32px',
            // color: color_primary_dark,
            'border-bottom': '1px solid ' + color_border_light,
            'padding-bottom': '6px'
        },
        ' h3': {
            'font-size': '24px'
        },
        ' h4': {
            'font-size': '20px'
        },
        ' h1, h2, h3': {
            'font-weight': 400
        },
        ' h2, h3': {
            margin: '35px 0 15px 0'
        },
        ' h1, h2, h3, h4, h5, h6': {
            'line-height': 1.2
        },
        ' pre, blockquote': {
            padding: '16px',
            background: color_code_background,
            margin: '16px 0',
            'border-radius': '3px',
            border: '1px solid ' + color_code_border
        },
        ' pre': {
            'white-space': 'pre-wrap'
        },
        ' blockquote': {
            'font-style': 'italic',
            ' p': {
                margin: 0
            }
        },
        ' table': {
            'border-collapse': 'collapse',
            'background-color': color_table_background,

            ' tr': {
                'border-bottom': '1px solid ' + color_code_border
            },
            ' tbody tr:last-child': {
                border: 'none'
            },
            ' th, td': {
                padding: '12px 16px',
                border: 'none',
                'vertical-align': 'top'
            },
            ' td:last-child': {
                width: '40%'
            },
            ' th, th strong': {
                'font-weight': 'normal',
                color: 'rgba(0,0,0,.3)',
                'text-align': 'left'
            },
            ' td strong': {
                color: color_secondary,
                'font-weight': 'normal'
            }
        }
    },

    ' .footer': {
        margin: '40px 16px 16px 16px',
        'font-size': '13px',
        color: '#999',

        ' a': {
            color: '#ddd',
            'text-decoration': 'none'
        }
    },

    '@media (max-width: 640px)': {
        ' .scaffold': {
            flex: 'none !important',
            '-webkit-flex': 'none !important',
            display: 'block !important',
            position: 'static !important',
            height: 'auto'
        },

        ' .drawer, .main': {
            ' .pe-header-panel': {
                ' .pe-header-panel__main-container, .pe-header-panel__outer-container': {
                    position: 'static',
                    display: 'block !important',
                    'overflow-y': 'visible',
                    'overflow-x': 'visible'
                },
                ' .pe-header-panel__main-container.flex': {
                    flex: 'none',
                    '-webkit-flex': 'none'
                }
            }
        },

        ' .drawer': {
            width: '100%',
            ' .logo': {
                display: 'none'
            },
            ' .highlight': {
                'background-color': '#37474F'
            }
        },

        ' .main': {
            width: '100%',

            ' .pe-toolbar__bar--top': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (smallMainSidePadding - 4) + 'px'
            },
            ' pre': {
                padding: '10px'
            },

            ' table': {
                width: '100%',

                ' thead': {
                    ' th': {
                        display: 'block',
                        width: '100%'
                    }
                },
                ' tbody': {
                    ' td, td:last-child': {
                        display: 'block',
                        width: '100%'
                    },
                    ' td:empty': {
                        '&:before': {
                            content: '-',
                            height: '20px',
                            color: '#aaa'
                        }
                    }
                }
            },

            ' .doc-content': {
                padding: '32px ' + smallMainSidePadding + 'px ' + docContentBottomPadding + 'px ' + smallMainSidePadding + 'px'
            }
        }
    },

    '@media (max-width: 960px)': {
        ' .main': {
            ' table': {
                width: '100%',

                ' thead': {
                    ' th': {
                        display: 'block',
                        width: '100%'
                    }
                },
                ' tbody': {
                    ' tr': {
                        'border-bottom': 'none'
                    },
                    ' tr:not(:first-child)': {
                        'border-top': '1px solid ' + color_code_border
                    },
                    // ' td:first-child': {
                    //     ' strong': {
                    //         color: mainTextColor
                    //     }
                    // },
                    ' td, td:last-child': {
                        display: 'block',
                        width: '100%'
                    },
                    ' td:empty:before': {
                        content: '"-"',
                        height: '20px',
                        color: '#aaa'
                    }
                }
            }
        }
    },

    '@media (min-width: 640px) and (max-width: 960px)': {
        ' .drawer': {
            width: mediumScreenDrawerWidth + 'px'
        },

        ' .main': {
            ' .pe-toolbar__bar--top': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (mediumMainSidePadding - 4) + 'px'
            },

            ' .doc-content': {
                padding: '32px ' + mediumMainSidePadding + 'px ' + docContentBottomPadding + 'px ' + mediumMainSidePadding + 'px'
            }
        }
    },

    '@media (min-width: 960px)': {
        ' .drawer': {
            'min-width': largeScreenDrawerWidth + 'px',

            ' .pe-toolbar__bar--top': {
                'font-size': headerFontSize + 'px',
                'line-height': headerFontSize + 'px'
            },

            ' .logo': {
                width: '40px',
                height: '40px'
            }
        },
        ' .main': {
            ' .pe-toolbar__bar--top': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (largeMainSidePadding - 4) + 'px'
            },
            ' .doc-content': {
                padding: '32px ' + largeMainSidePadding + 'px ' + docContentBottomPadding + 'px ' + largeMainSidePadding + 'px'
            }
        }
    }
}];

export default styles;
