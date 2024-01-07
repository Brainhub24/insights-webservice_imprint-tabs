// Test-function to toggle between German and English content
function showLanguage(lang) {
    // Get references to language content elements
    const deContent = document.getElementById('de-content');
    const enContent = document.getElementById('en-content');
    
    // Toggle display based on selected language
    if (lang === 'de') {
        deContent.style.display = 'block';
        enContent.style.display = 'none';
    } else if (lang === 'en') {
        deContent.style.display = 'none';
        enContent.style.display = 'block';
    }
}

// Set default language (e.g., English) on page load
showLanguage('en');
