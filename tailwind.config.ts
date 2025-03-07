import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontWeight: {
  		thin: '100',
  		extralight: '200',
  		light: '300',
  		seminormal: '350',
  		normal: '400',
  		semimedium: '450',
  		medium: '500',
  		semibold: '600',
  		bold: '700',
  		extrabold: '800',
  		black: '900'
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			rounded: [
  				'OpenRunde',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))'
  		},
  		backgroundAttachment: {
  			fixed: 'fixed'
  		},
  		brightness: {
  			'70': '.7',
  			'80': '.8'
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			backgroundsaturated: 'hsl(var(--backgroundsaturated))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
  				hover: 'hsl(var(--primary-hover))',
  				active: 'hsl(var(--primary-active))',
  				accent: 'hsl(var(--primary-accent))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				hover: 'hsl(var(--secondary-hover))',
  				active: 'hsl(var(--secondary-active))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent) / 0.1)',
  				hover: 'hsl(var(--accent-hover) / 0.2)',
  				active: 'hsl(var(--accent-active) / 0.3)',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card) / 0.6)',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			cherry: {
  				DEFAULT: 'hsl(var(--cherry))',
  				foreground: 'hsl(var(--cherry-foreground))'
  			},
  			banana: {
  				DEFAULT: 'hsl(var(--banana))',
  				foreground: 'hsl(var(--banana-foreground))'
  			},
  			grape: {
  				DEFAULT: 'hsl(var(--grape))',
  				foreground: 'hsl(var(--grape-foreground))'
  			},
  			blueberry: {
  				DEFAULT: 'hsl(var(--blueberry))',
  				foreground: 'hsl(var(--blueberry-foreground))'
  			},
  			mint: {
  				DEFAULT: 'hsl(var(--mint))',
  				foreground: 'hsl(var(--mint-foreground))'
  			},
  			onion: {
  				DEFAULT: 'hsl(var(--onion))',
  				foreground: 'hsl(var(--onion-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: object) => void }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
