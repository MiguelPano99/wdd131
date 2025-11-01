document.addEventListener('DOMContentLoaded', function() {
    
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

   
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    
    const linkedInUrl = "https://www.linkedin.com/in/miguel-pano-mart%C3%ADn-a10233212/";
    const profilePhotoSrc = "images/profile_photo.png"; 
    

   
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