// Helper function to enable/disable zoom & fullscreen buttons
function setZoomControlsDisabled(isDisabled) {
    const zoomButtons = document.querySelectorAll(".zoom-controls .buttonZoom, #prevBtn, #nextBtn");
    
    zoomButtons.forEach(button => {
        button.disabled = isDisabled;
        
        // Optional: style changes when disabled
        if (isDisabled) {
            button.style.opacity = "0";
            button.style.pointerEvents = "none";
        } else {
            button.style.opacity = "1";
            button.style.pointerEvents = "auto";
        }
    });
}

// NAVBAR
document.querySelectorAll(".sub-dropbtn").forEach(btn => {
    btn.addEventListener("click", function(e){
        if(window.innerWidth <= 768){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

// Updated toggleMenu function
function toggleMenu() {
    const navUL = document.querySelector(".navUL");
    navUL.classList.toggle("active");

    // Check if navbar is currently active
    const isActive = navUL.classList.contains("active");
    
    // Disable buttons if navbar is open, enable if closed
    setZoomControlsDisabled(isActive);
}

// Mobile dropdowns
document.querySelectorAll(".dropbtn").forEach(button => {
    button.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

// TABS
function openLabTab(evt, tabId) {
    // Hide all lab tab contents
    const contents = document.querySelectorAll('.lab-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.lab-tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Show current tab content and activate button
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}