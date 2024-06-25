document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
