document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // --- Footer/Page Logic (from your previous page) ---

    // Set current year in footer (if element exists)
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date in footer (if element exists)
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Update LinkedIn link and profile photo (if elements exist - for your index.html)
    const linkedInUrl = "https://www.linkedin.com/in/yourprofile/";
    const profilePhotoSrc = "rubia_profile.jpg";

    const linkedinLink = document.getElementById('linkedinLink');
    if (linkedinLink && linkedInUrl) {
        linkedinLink.href = linkedInUrl;
        linkedinLink.target = "_blank";
    }

    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto && profilePhotoSrc) {
        profilePhoto.src = profilePhotoSrc;
    }
});