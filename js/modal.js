document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments de film
    const filmItems = document.querySelectorAll('.film-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Ajouter les écouteurs d'événements pour chaque film
    filmItems.forEach(item => {
        item.addEventListener('click', function() {
            const episodeId = this.getAttribute('data-episode');
            const modal = document.getElementById(episodeId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Ajouter les écouteurs d'événements pour les boutons de fermeture
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}); 