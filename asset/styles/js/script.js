/************************ start sidebar ************************/
document.addEventListener('DOMContentLoaded', function() {
    const sidebarDiv = document.getElementById('sidebar-div');
    const menusIcons = document.querySelectorAll('.menus-icon'); // Select all menu icons

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        sidebarDiv.classList.toggle('sidebar-div-active');
        document.querySelector('.main').classList.toggle('main-div-active');
    };

    // Attach the click event to each menus-icon
    menusIcons.forEach(icon => {
        icon.addEventListener('click', toggleSidebar);
    });

    // Click outside to close the sidebar
    document.addEventListener('click', function(event) {
        if (sidebarDiv.classList.contains('sidebar-div-active') && 
            !sidebarDiv.contains(event.target) && 
            !Array.from(menusIcons).some(icon => icon.contains(event.target))) {
            sidebarDiv.classList.remove('sidebar-div-active');
            document.querySelector('.main').classList.remove('main-div-active');
        }
    });
});
/************************ end sidebar ************************/