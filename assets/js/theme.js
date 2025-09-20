// Theme handling
const themeSelect = document.getElementById('theme-select');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set theme
function setTheme(theme) {
    if (theme === 'auto') {
        // Remove any manually set theme
        document.documentElement.removeAttribute('data-theme');
        // Apply theme based on system preference
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    // Save theme preference
    localStorage.setItem('theme', theme);
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    themeSelect.value = savedTheme;
    setTheme(savedTheme);
}

// Event listeners
themeSelect.addEventListener('change', (e) => setTheme(e.target.value));
prefersDarkScheme.addEventListener('change', () => {
    const currentTheme = localStorage.getItem('theme') || 'auto';
    if (currentTheme === 'auto') {
        setTheme('auto');
    }
});

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);