document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

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