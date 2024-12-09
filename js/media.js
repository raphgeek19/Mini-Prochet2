// Données des médias
const mediaData = {
    // Romans
    "thrawn": {
        title: "Thrawn",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Découvert sur une planète lointaine de la Bordure Extérieure, le mystérieux Thrawn, un alien 
                    Chiss aux yeux rouges, est amené à l'Académie Impériale. Grâce à son génie tactique et sa 
                    capacité d'analyse exceptionnelle, il gravit rapidement les échelons de la hiérarchie impériale, 
                    devenant l'un des plus grands stratèges de l'Empire.</p>

                    <p>Accompagné du jeune Eli Vanto comme aide et traducteur, Thrawn doit naviguer dans les eaux 
                    troubles de la politique impériale tout en prouvant sa valeur à travers diverses missions 
                    critiques.</p>
                </div>

                <div class="plot-developments">
                    <h3>Points Clés de l'Histoire</h3>
                    <ul>
                        <li><strong>Ascension Militaire</strong>
                            <p>De cadet à Grand Amiral, le parcours extraordinaire d'un alien dans un Empire 
                            xénophobe.</p>
                        </li>
                        <li><strong>Méthodes Uniques</strong>
                            <p>L'approche de Thrawn basée sur l'étude de l'art et de la culture de ses 
                            adversaires.</p>
                        </li>
                        <li><strong>Intrigues Politiques</strong>
                            <p>Les manœuvres complexes au sein de la hiérarchie impériale.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Personnages Principaux</h3>
                    <ul>
                        <li><strong>Thrawn</strong>
                            <p>Stratège brillant aux motivations mystérieuses, cherchant à protéger sa 
                            civilisation.</p>
                        </li>
                        <li><strong>Eli Vanto</strong>
                            <p>Officier impérial devenant le protégé et confident de Thrawn.</p>
                        </li>
                        <li><strong>Arihnda Pryce</strong>
                            <p>Politicienne ambitieuse de Lothal, dont le destin s'entremêle avec celui de 
                            Thrawn.</p>
                        </li>
                    </ul>
                </div>

                <div class="themes">
                    <h3>Thèmes Explorés</h3>
                    <ul>
                        <li>Leadership et stratégie militaire</li>
                        <li>Préjugés et xénophobie dans l'Empire</li>
                        <li>Art et guerre</li>
                        <li>Loyauté et ambition</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact sur l'Univers Star Wars</h3>
                    <ul>
                        <li>Réintroduction majeure d'un personnage légendaire</li>
                        <li>Enrichissement de la période impériale</li>
                        <li>Nouvelle perspective sur l'Empire</li>
                        <li>Connexions avec la série Rebels</li>
                    </ul>
                </div>
            </div>`
    },
    "dark-vador": {
        title: "Dark Vador : Seigneur Noir des Sith",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Immédiatement après sa transformation en cyborg et la mort de Padmé, Dark Vador doit 
                    s'adapter à sa nouvelle existence. Le roman explore ses premiers pas en tant que bras droit 
                    de l'Empereur, sa quête d'un cristal Kyber pour forger son nouveau sabre laser, et ses 
                    premières missions d'éradication des Jedi survivants.</p>

                    <p>À travers ses actions impitoyables et sa lutte intérieure, nous découvrons comment 
                    Anakin Skywalker embrasse pleinement son rôle de Seigneur Noir des Sith, devenant la 
                    figure terrifiante que la galaxie apprendra à craindre.</p>
                </div>

                <div class="plot-developments">
                    <h3>Moments Clés</h3>
                    <ul>
                        <li><strong>La Quête du Cristal</strong>
                            <p>Le périple pour obtenir et "saigner" un cristal Kyber, créant son sabre rouge 
                            caractéristique.</p>
                        </li>
                        <li><strong>Premières Missions</strong>
                            <p>Les missions d'élimination des Jedi et d'établissement du pouvoir impérial.</p>
                        </li>
                        <li><strong>Adaptation</strong>
                            <p>L'apprentissage de l'utilisation de son nouveau corps et de ses capacités.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-development">
                    <h3>Évolution Psychologique</h3>
                    <ul>
                        <li><strong>Deuil et Colère</strong>
                            <p>La gestion de la perte de Padmé et de son ancienne vie.</p>
                        </li>
                        <li><strong>Embrace des Ténèbres</strong>
                            <p>L'acceptation progressive de son nouveau rôle et identité.</p>
                        </li>
                        <li><strong>Relation Maître-Apprenti</strong>
                            <p>La dynamique complexe avec l'Empereur Palpatine.</p>
                        </li>
                    </ul>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li>Transformation et identité</li>
                        <li>Pouvoir et corruption</li>
                        <li>Perte et rédemption</li>
                        <li>Loyauté et trahison</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact sur la Saga</h3>
                    <ul>
                        <li>Enrichissement de l'histoire de Vador</li>
                        <li>Exploration des débuts de l'Empire</li>
                        <li>Approfondissement de la mythologie Sith</li>
                        <li>Connexions avec la trilogie originale</li>
                    </ul>
                </div>
            </div>`
    },
    "clone-wars": {
        title: "Star Wars : Clone Wars",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Au cœur de la Guerre des Clones, ce roman suit les aventures d'Anakin Skywalker, 
                    Obi-Wan Kenobi et Ahsoka Tano alors qu'ils mènent les forces de la République contre 
                    l'armée séparatiste. L'histoire explore les batailles épiques, les relations complexes 
                    entre les personnages et les intrigues politiques qui façonnent la galaxie.</p>

                    <p>À travers différentes missions et conflits, nous découvrons comment la guerre affecte 
                    non seulement les Jedi et leurs troupes, mais aussi la République elle-même, préparant 
                    le terrain pour sa transformation en Empire.</p>
                </div>

                <div class="plot-developments">
                    <h3>Arcs Narratifs Majeurs</h3>
                    <ul>
                        <li><strong>Batailles Stratégiques</strong>
                            <p>Les confrontations décisives qui changent le cours de la guerre.</p>
                        </li>
                        <li><strong>Formation d'Ahsoka</strong>
                            <p>L'évolution d'Ahsoka Tano sous la tutelle d'Anakin.</p>
                        </li>
                        <li><strong>Intrigues Politiques</strong>
                            <p>Les manipulations au Sénat et leurs répercussions sur le front.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Personnages Principaux</h3>
                    <ul>
                        <li><strong>Anakin Skywalker</strong>
                            <p>Le Héros Sans Peur, luttant entre ses devoirs de Jedi et ses émotions.</p>
                        </li>
                        <li><strong>Obi-Wan Kenobi</strong>
                            <p>Le Négociateur, maintenant général respecté de la République.</p>
                        </li>
                        <li><strong>Ahsoka Tano</strong>
                            <p>La jeune Padawan découvrant les réalités de la guerre.</p>
                        </li>
                        <li><strong>Capitaine Rex</strong>
                            <p>Le loyal commandant clone développant sa propre identité.</p>
                        </li>
                    </ul>
                </div>

                <div class="themes">
                    <h3>Thèmes Explorés</h3>
                    <ul>
                        <li>Coût humain de la guerre</li>
                        <li>Loyauté et fraternité</li>
                        <li>Identité et libre arbitre</li>
                        <li>Corruption et manipulation</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact sur l'Univers Star Wars</h3>
                    <ul>
                        <li>Enrichissement de l'ère de la Guerre des Clones</li>
                        <li>Développement des relations entre personnages</li>
                        <li>Exploration des aspects militaires</li>
                        <li>Connexions avec les films préquels</li>
                    </ul>
                </div>
            </div>`
    },
    "jedi-survivor": {
        title: "Star Wars Jedi: Survivor",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis</h3>
                    <p>Cinq ans après les événements de Fallen Order, Cal Kestis continue sa lutte contre l'Empire 
                    tout en cherchant sa place dans une galaxie de plus en plus sombre.</p>
                </div>

                <div class="plot-developments">
                    <h3>Caractéristiques du Jeu</h3>
                    <ul>
                        <li>Système de combat amélioré avec de nouvelles positions de sabre laser</li>
                        <li>Exploration de mondes ouverts plus vastes</li>
                        <li>Nouvelles capacités de la Force</li>
                        <li>Personnalisation approfondie du personnage</li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Personnages Principaux</h3>
                    <ul>
                        <li>Cal Kestis - Protagoniste principal</li>
                        <li>BD-1 - Droïde compagnon</li>
                        <li>Cere Junda - Ancienne Jedi</li>
                        <li>Nouveaux alliés et antagonistes</li>
                    </ul>
                </div>

                <div class="technical">
                    <h3>Informations Techniques</h3>
                    <ul>
                        <li>Développeur: Respawn Entertainment</li>
                        <li>Éditeur: Electronic Arts</li>
                        <li>Plateformes: PS5, Xbox Series X/S, PC</li>
                        <li>Date de sortie: 2023</li>
                    </ul>
                </div>
            </div>`
    },
    "squadrons": {
        title: "Star Wars: Squadrons",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis</h3>
                    <p>Un jeu de combat spatial immersif où les joueurs participent à des batailles intenses 
                    entre la Nouvelle République et l'Empire Galactique.</p>
                </div>

                <div class="plot-developments">
                    <h3>Caractéristiques du Jeu</h3>
                    <ul>
                        <li>Combats spatiaux en vue à la première personne</li>
                        <li>Campagne solo narrative</li>
                        <li>Mode multijoueur 5v5</li>
                        <li>Personnalisation des vaisseaux</li>
                    </ul>
                </div>

                <div class="gameplay">
                    <h3>Gameplay</h3>
                    <ul>
                        <li>Huit vaisseaux jouables différents</li>
                        <li>Gestion de l'énergie des systèmes</li>
                        <li>Support VR complet</li>
                        <li>Modes de jeu variés</li>
                    </ul>
                </div>

                <div class="technical">
                    <h3>Informations Techniques</h3>
                    <ul>
                        <li>Développeur: EA Motive</li>
                        <li>Éditeur: Electronic Arts</li>
                        <li>Plateformes: PS4, Xbox One, PC</li>
                        <li>Date de sortie: 2020</li>
                    </ul>
                </div>
            </div>`
    },
    "kotor": {
        title: "Knights of the Old Republic",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis</h3>
                    <p>4000 ans avant la formation de l'Empire Galactique, la République est menacée par Darth Malak, 
                    un Seigneur Sith qui fut autrefois le disciple du mystérieux Darth Revan. Dans cette épopée 
                    légendaire, les joueurs découvrent leur véritable identité tout en décidant du destin de la galaxie.</p>
                </div>

                <div class="plot-developments">
                    <h3>Caractéristiques du Jeu</h3>
                    <ul>
                        <li>Système de combat au tour par tour basé sur D20</li>
                        <li>Choix moraux influençant l'histoire</li>
                        <li>Personnalisation complète du personnage</li>
                        <li>Exploration de planètes iconiques</li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Personnages Mémorables</h3>
                    <ul>
                        <li>Bastila Shan - Jedi puissante</li>
                        <li>Darth Malak - L'antagoniste principal</li>
                        <li>HK-47 - Droïde assassin sarcastique</li>
                        <li>Carth Onasi - Soldat de la République</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact sur l'Univers Star Wars</h3>
                    <ul>
                        <li>Introduction de l'ère de l'Ancienne République</li>
                        <li>Création de personnages cultes</li>
                        <li>Enrichissement de la mythologie Sith</li>
                        <li>Considéré comme l'un des meilleurs RPG de tous les temps</li>
                    </ul>
                </div>

                <div class="technical">
                    <h3>Informations Techniques</h3>
                    <ul>
                        <li>Développeur: BioWare</li>
                        <li>Éditeur: LucasArts</li>
                        <li>Plateformes: PC, Xbox, Mobile</li>
                        <li>Date de sortie initiale: 2003</li>
                    </ul>
                </div>
            </div>`
    },
    "battlefront-2": {
        title: "Star Wars: Battlefront II (2005)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis</h3>
                    <p>Suivez l'histoire de la 501ème légion, une unité d'élite de clones, à travers les événements 
                    majeurs de la saga Star Wars. De la Guerre des Clones à l'ère de l'Empire Galactique, participez 
                    aux batailles les plus emblématiques de la série.</p>
                </div>

                <div class="plot-developments">
                    <h3>Caractéristiques du Jeu</h3>
                    <ul>
                        <li>Mode campagne narratif suivant la 501ème légion</li>
                        <li>Batailles multijoueur à grande échelle</li>
                        <li>Combats spatiaux</li>
                        <li>Héros jouables des deux trilogies</li>
                    </ul>
                </div>

                <div class="gameplay">
                    <h3>Modes de Jeu</h3>
                    <ul>
                        <li>Conquête - Capture de points de contrôle</li>
                        <li>Assaut Galactique - Batailles spatiales</li>
                        <li>Chasse aux Héros - Duels entre personnages iconiques</li>
                        <li>Mode Histoire - Campagne solo</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Considéré comme l'un des meilleurs jeux Star Wars</li>
                        <li>Communauté active encore aujourd'hui</li>
                        <li>Influence sur les Battlefront modernes</li>
                        <li>Gameplay équilibré et addictif</li>
                    </ul>
                </div>

                <div class="technical">
                    <h3>Informations Techniques</h3>
                    <ul>
                        <li>Développeur: Pandemic Studios</li>
                        <li>Éditeur: LucasArts</li>
                        <li>Plateformes: PS2, Xbox, PC</li>
                        <li>Date de sortie: 2005</li>
                    </ul>
                </div>
            </div>`
    }
};

// Création de la modal
document.body.insertAdjacentHTML('beforeend', `
    <div id="mediaModal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2 id="modalTitle"></h2>
            <div id="modalContent"></div>
        </div>
    </div>
`);

// Sélection des éléments
const modal = document.getElementById('mediaModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.close-button');
const mediaCards = document.querySelectorAll('.media-card');

// Gestionnaires d'événements
mediaCards.forEach(card => {
    card.addEventListener('click', () => {
        // Récupérer le titre et créer un ID
        const mediaTitle = card.querySelector('img').alt.toLowerCase();
        let mediaId = mediaTitle.toLowerCase()
                               .replace(/[:']/g, '')  // Enlever les : et '
                               .replace(/\s+/g, '-'); // Remplacer les espaces par des tirets
        
        // Log pour debug
        console.log('Media ID:', mediaId);
        console.log('Available IDs:', Object.keys(mediaData));

        // Cas spéciaux
        if (mediaId === 'dark-vador-seigneur-noir-des-sith') {
            mediaId = 'dark-vador';
        } else if (mediaId === 'knights-of-the-old-republic') {
            mediaId = 'kotor';
        } else if (mediaId === 'battlefront-ii') {
            mediaId = 'battlefront-2';
        } else if (mediaId === 'star-wars-clone-wars') {
            mediaId = 'clone-wars';
        } else if (mediaId === 'star-wars-squadrons') {
            mediaId = 'squadrons';
        } else if (mediaId === 'star-wars-jedi-survivor') {
            mediaId = 'jedi-survivor';
        }

        if (mediaData[mediaId]) {
            modalTitle.textContent = mediaData[mediaId].title;
            modalContent.innerHTML = mediaData[mediaId].description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            console.error('Media not found:', mediaId);
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 