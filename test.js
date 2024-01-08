/**
 * Function to toggle between German and English content based on language selection
 * @param {string} lang - The selected language code ('de' for German, 'en' for English)
 */
function showLanguage(lang) {
    const deContent = document.getElementById('de-content');
    const enContent = document.getElementById('en-content');
    
    if (lang === 'de') {
        deContent.style.display = 'block';
        enContent.style.display = 'none';
    } else if (lang === 'en') {
        deContent.style.display = 'none';
        enContent.style.display = 'block';
    }
}

/**
 * Function to check if the user agent contains the German language option and set default language
 */
function checkUserAgentForGerman() {
    const userAgent = navigator.userAgent.toLowerCase();
    const germanLanguageOptions = [
        'de',       // German (Standard)
        'de-de',    // German (Germany)
        'de-at',    // German (Austria)
        'de-ch',    // German (Switzerland)
        'de-li',    // German (Liechtenstein)
        'de-lu',    // German (Luxembourg)
        'de-be',    // German (Belgium)
        'de-it',    // German (Italy)
        'de-fl',    // German (South Tyrol)
    ]; // Comprehensive list of German language codes with ISO details

    // Check if any of the German language options are present in the user agent
    const isGerman = germanLanguageOptions.some(option => userAgent.includes(option));
    
    // If German language detected, show German content by default; otherwise, default to English content
    if (isGerman) {
        showLanguage('de');
    } else {
        showLanguage('en');
    }
}

// Call the function to check the user agent for German language on page load
checkUserAgentForGerman();
