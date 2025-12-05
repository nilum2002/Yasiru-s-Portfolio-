document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme class and button text
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            toggleButton.textContent = '🌙'; // Moon for dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            toggleButton.textContent = '☀️'; // Sun for light mode
            localStorage.setItem('theme', 'light');
        }
    };

    // 1. Check for saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');

    // 2. Check for operating system preference (if no saved theme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light'); // Default to light theme if no preference is found
    }

    // 3. Add event listener to the button
    toggleButton.addEventListener('click', () => {
        // Determine the current theme based on body class
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});