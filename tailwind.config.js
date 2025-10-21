module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                midnight: {
                    bg: '#0D1117',
                    card: '#161B22',
                    text: '#E6EDF3',
                    textSecondary: '#8B949E',
                    accent: '#1F6FEB',
                    accentHover: '#58A6FF',
                    success: '#3FB950',
                    error: '#F85149'
                },
                horizon: {
                    bg: '#FFFFFF',
                    card: '#F5F7FA',
                    text: '#1C1C1E',
                    textSecondary: '#6E6E73',
                    accent: '#007AFF',
                    accentHover: '#005FCC',
                    success: '#28CD41',
                    error: '#FF3B30'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 4s ease-in-out infinite',
                'float-delayed': 'float 4s ease-in-out infinite 2s',
                'spin-slow': 'spin 15s linear infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'glow': 'glow 4s ease-in-out infinite',
                'bounce-soft': 'bounce-soft 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    'from': { opacity: '0', transform: 'translateY(10px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    'from': { opacity: '0', transform: 'translateY(30px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(0, -10px)' },
                    '100%': { transform: 'translate(0, 0)' },
                },
                glow: {
                    '0%': { opacity: '0.5', transform: 'scale(0.95)' },
                    '50%': { opacity: '1', transform: 'scale(1.05)' },
                    '100%': { opacity: '0.5', transform: 'scale(0.95)' },
                },
                'bounce-soft': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
}
