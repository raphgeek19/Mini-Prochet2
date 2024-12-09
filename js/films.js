function openModal(episodeId) {
    console.log("Opening modal for episode:", episodeId); // Debug
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    if (filmDescriptions[episodeId]) {
        modalTitle.textContent = filmDescriptions[episodeId].title;
        modalContent.innerHTML = filmDescriptions[episodeId].description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Episode non trouvé:', episodeId);
    }
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Gestionnaires d'événements
document.addEventListener('DOMContentLoaded', function() {
    // Fermeture avec le X
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Fermeture en cliquant en dehors
    window.onclick = function(event) {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
            closeModal();
        }
    };

    // Fermeture avec Echap
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

const filmDescriptions = {
    episode1: {
        title: "Épisode I : La Menace Fantôme (1999)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Dans une période de troubles politiques, la Fédération du Commerce impose un blocus à la planète Naboo. 
                    Le Chancelier Suprême envoie secrètement deux Chevaliers Jedi, Qui-Gon Jinn et son apprenti Obi-Wan 
                    Kenobi, pour résoudre la crise. Leur mission les conduit à Tatooine, où ils découvrent un jeune esclave 
                    nommé Anakin Skywalker, dont la puissance dans la Force est exceptionnelle.</p>
                    
                    <p>Pendant ce temps, les Sith, ennemis ancestraux des Jedi, révèlent leur existence après un millénaire 
                    de secret. La situation politique se dégrade, menant à une invasion de Naboo et à un conflit qui aura 
                    des répercussions sur toute la galaxie.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>La Découverte d'Anakin</strong>
                            <p>Qui-Gon découvre Anakin et reconnaît en lui l'Élu d'une ancienne prophétie Jedi. Cette 
                            découverte bouleversera l'équilibre de la Force.</p>
                        </li>
                        
                        <li><strong>Le Retour des Sith</strong>
                            <p>L'apparition de Dark Maul confirme que les Sith ont survécu et se sont renforcés dans 
                            l'ombre pendant des siècles.</p>
                        </li>
                        
                        <li><strong>L'Ascension de Palpatine</strong>
                            <p>La crise de Naboo permet à Palpatine de manipuler les événements pour devenir Chancelier 
                            Suprême.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Qui-Gon Jinn</h4>
                        <ul>
                            <li>Sa conviction inébranlable en la prophétie</li>
                            <li>Son rôle de mentor pour Obi-Wan et Anakin</li>
                            <li>Son sacrifice qui change le destin de la galaxie</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Obi-Wan Kenobi</h4>
                        <ul>
                            <li>Sa transition de Padawan à Chevalier</li>
                            <li>Sa promesse de former Anakin</li>
                            <li>Son respect des traditions Jedi</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Anakin Skywalker</h4>
                        <ul>
                            <li>Son passage de l'esclavage à la liberté</li>
                            <li>Sa séparation douloureuse avec sa mère</li>
                            <li>Ses premiers pas vers son destin</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Duels Épiques</h3>
                    <div class="battle">
                        <h4>Course de Pods</h4>
                        <ul>
                            <li>Course mortelle dans le désert de Tatooine</li>
                            <li>Démonstration des réflexes surhumains d'Anakin</li>
                            <li>Enjeu : la liberté d'Anakin</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Bataille de Naboo</h4>
                        <ul>
                            <li>Combat terrestre entre Gungans et droïdes</li>
                            <li>Bataille spatiale autour du vaisseau de contrôle</li>
                            <li>Duel final contre Dark Maul</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Destinée et Choix</strong>
                            <p>L'impact des choix individuels sur le destin de la galaxie.</p>
                        </li>
                        
                        <li><strong>Symbiose et Unité</strong>
                            <p>L'importance de l'union entre différents peuples face à l'adversité.</p>
                        </li>
                        
                        <li><strong>Manipulation Politique</strong>
                            <p>Les mécanismes subtils de la corruption démocratique.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Premier film à utiliser massivement les effets numériques</li>
                        <li>Création du premier personnage principal entièrement numérique</li>
                        <li>Nouvelles techniques de prévisualisation</li>
                        <li>Environnements numériques révolutionnaires</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Introduction des midi-chloriens</li>
                        <li>Expansion de l'univers Star Wars</li>
                        <li>Révolution technologique dans le cinéma</li>
                        <li>Début de la nouvelle trilogie</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Plus de 3500 storyboards créés</li>
                        <li>Deux ans de post-production</li>
                        <li>Création de plus de 60 décors</li>
                        <li>Utilisation de 950 plans avec effets spéciaux</li>
                    </ul>
                </div>
            </div>`
    },
    episode2: {
        title: "Épisode II : L'Attaque des Clones (2002)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Dix ans après les événements de La Menace Fantôme, la galaxie est au bord de la guerre civile. 
                    Le mouvement séparatiste, mené par le Comte Dooku, ancien Maître Jedi, menace la stabilité de la 
                    République. Après une tentative d'assassinat contre la sénatrice Padmé Amidala, Obi-Wan Kenobi mène 
                    l'enquête tandis qu'Anakin Skywalker est chargé de protéger la sénatrice.</p>

                    <p>L'enquête d'Obi-Wan le conduit sur la mystérieuse planète Kamino, où il découvre une armée de 
                    clones secrètement commandée pour la République. Pendant ce temps, Anakin et Padmé développent une 
                    relation interdite, et le jeune Jedi fait face à ses premiers véritables défis émotionnels.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>L'Armée des Clones</strong>
                            <p>La découverte d'une armée massive créée en secret pour la République, basée sur le modèle 
                            génétique de Jango Fett.</p>
                        </li>
                        
                        <li><strong>La Romance Interdite</strong>
                            <p>Le développement de la relation entre Anakin et Padmé, en violation du Code Jedi, posant 
                            les bases de futurs conflits.</p>
                        </li>
                        
                        <li><strong>Le Début de la Guerre</strong>
                            <p>L'éclatement officiel de la Guerre des Clones, marquant le début d'un conflit galactique 
                            majeur.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Anakin Skywalker</h4>
                        <ul>
                            <li>Ses premiers signes d'arrogance et de rébellion</li>
                            <li>Son amour grandissant pour Padmé</li>
                            <li>Sa vengeance contre les Tuskens</li>
                            <li>Ses conflits avec l'autorité</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Obi-Wan Kenobi</h4>
                        <ul>
                            <li>Son rôle de mentor parfois difficile</li>
                            <li>Ses talents d'enquêteur</li>
                            <li>Sa découverte de la conspiration</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Comte Dooku</h4>
                        <ul>
                            <li>Son passé de Jedi révélé</li>
                            <li>Son rôle dans la création de l'armée des clones</li>
                            <li>Sa relation avec Dark Sidious</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Duels Épiques</h3>
                    <div class="battle">
                        <h4>L'Arène de Géonosis</h4>
                        <ul>
                            <li>Combat contre des créatures monstrueuses</li>
                            <li>Arrivée des Jedi et des Clones</li>
                            <li>Première grande bataille de la guerre</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Duel contre Dooku</h4>
                        <ul>
                            <li>Anakin et Obi-Wan contre le Comte</li>
                            <li>Intervention de Maître Yoda</li>
                            <li>Première utilisation des éclairs de Force</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Amour Interdit</strong>
                            <p>Le conflit entre devoir et désir personnel.</p>
                        </li>
                        
                        <li><strong>Manipulation Politique</strong>
                            <p>Les machinations complexes menant à la guerre.</p>
                        </li>
                        
                        <li><strong>Trahison et Loyauté</strong>
                            <p>Les différentes formes de fidélité et leurs conséquences.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Premier film majeur tourné entièrement en numérique</li>
                        <li>Création d'environnements virtuels complexes</li>
                        <li>Animation avancée des clones</li>
                        <li>Effets spéciaux révolutionnaires pour les batailles</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Introduction de l'armée des clones</li>
                        <li>Développement de la mythologie Mandalorian</li>
                        <li>Bases de la Guerre des Clones</li>
                        <li>Evolution des relations entre personnages clés</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Tournage dans des studios en Australie</li>
                        <li>Christopher Lee a réalisé ses propres combats</li>
                        <li>Utilisation massive d'écrans bleus</li>
                        <li>Plus de 2000 plans avec effets spéciaux</li>
                    </ul>
                </div>
            </div>`
    },
    episode3: {
        title: "Épisode III : La Revanche des Sith (2005)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Trois ans après le début de la Guerre des Clones, la galaxie est en plein chaos. Lors d'une bataille 
                    épique au-dessus de Coruscant, Obi-Wan Kenobi et Anakin Skywalker mènent une mission audacieuse pour 
                    sauver le Chancelier Palpatine, retenu prisonnier par le Général Grievous et le Comte Dooku. Cette 
                    mission marque le début d'une série d'événements qui changeront la galaxie à jamais.</p>
                    
                    <p>Après avoir éliminé le Comte Dooku sur l'ordre de Palpatine, Anakin retourne sur Coruscant où il 
                    retrouve secrètement Padmé, son épouse, qui lui annonce sa grossesse. Cette nouvelle, au lieu d'apporter 
                    la joie, déclenche chez Anakin des visions cauchemardesques de la mort de Padmé en couches.</p>

                    <p>Parallèlement, les tensions entre Anakin et le Conseil Jedi s'intensifient lorsque Palpatine le 
                    nomme au Conseil sans lui accorder le rang de Maître. La méfiance grandit des deux côtés, alors que 
                    Palpatine continue de manipuler subtilement Anakin, exploitant ses peurs et ses doutes.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>La Tentation du Pouvoir</strong>
                            <p>Palpatine révèle progressivement à Anakin l'histoire de Dark Plagueis, un Seigneur Sith 
                            capable de sauver les gens de la mort, jouant sur sa peur de perdre Padmé. Cette manipulation 
                            subtile pousse Anakin vers le Côté Obscur.</p>
                        </li>
                        
                        <li><strong>La Chute d'Anakin</strong>
                            <p>Lorsque Mace Windu découvre que Palpatine est le Seigneur Sith recherché, Anakin doit 
                            faire un choix décisif. Dans un moment crucial, il choisit de sauver Palpatine, trahissant 
                            les Jedi et devenant Dark Vador.</p>
                        </li>
                        
                        <li><strong>L'Ordre 66</strong>
                            <p>L'exécution de l'Ordre 66 déclenche l'élimination systématique des Jedi à travers la 
                            galaxie. Les clones se retournent contre leurs généraux Jedi, marquant la fin brutale de 
                            l'Ordre Jedi.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Anakin Skywalker/Dark Vador</h4>
                        <p>Son parcours est marqué par :</p>
                        <ul>
                            <li>Sa peur obsessionnelle de perdre Padmé</li>
                            <li>Son ressentiment croissant envers le Conseil Jedi</li>
                            <li>Sa relation de plus en plus proche avec Palpatine</li>
                            <li>Sa transformation physique et psychologique après Mustafar</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Obi-Wan Kenobi</h4>
                        <p>Son évolution comprend :</p>
                        <ul>
                            <li>Sa lutte pour maintenir sa foi en Anakin</li>
                            <li>Son déchirement face à la trahison de son ancien apprenti</li>
                            <li>Son combat final sur Mustafar</li>
                            <li>Sa mission de protéger Luke</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Padmé Amidala</h4>
                        <p>Son destin tragique se manifeste par :</p>
                        <ul>
                            <li>Son impuissance face aux événements politiques</li>
                            <li>Sa tentative désespérée de sauver Anakin</li>
                            <li>Sa mort tragique qui marque la fin de la République</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Duels Épiques</h3>
                    <div class="battle">
                        <h4>Bataille de Coruscant</h4>
                        <p>Une séquence d'ouverture spectaculaire comprenant :</p>
                        <ul>
                            <li>Combat spatial intense au-dessus de la capitale</li>
                            <li>Atterrissage périlleux d'un croiseur coupé en deux</li>
                            <li>Affrontement avec le Comte Dooku</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Duel sur Mustafar</h4>
                        <p>Le combat le plus émotionnel de la saga :</p>
                        <ul>
                            <li>Affrontement entre maître et apprenti</li>
                            <li>Chorégraphie complexe sur une planète volcanique</li>
                            <li>Conclusion tragique transformant Anakin en Dark Vador</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Corruption du Pouvoir</strong>
                            <p>La transformation de la République en Empire illustre comment la démocratie peut mourir 
                            sous les applaudissements.</p>
                        </li>
                        
                        <li><strong>Tragédie Grecque</strong>
                            <p>La chute d'Anakin suit le modèle classique du héros tragique, détruit par ses propres 
                            faiblesses.</p>
                        </li>
                        
                        <li><strong>Amour et Perte</strong>
                            <p>L'amour d'Anakin pour Padmé, censé être sa force, devient l'instrument de sa destruction.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Effets Visuels et Techniques</h3>
                    <ul>
                        <li>Plus de 2200 plans avec effets spéciaux</li>
                        <li>Création numérique complète de nombreux environnements</li>
                        <li>Utilisation innovante de la capture de mouvement</li>
                        <li>Mélange unique d'effets pratiques et numériques</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage et Impact</h3>
                    <ul>
                        <li>Film le plus sombre de la saga Star Wars</li>
                        <li>Connexion cruciale entre les deux trilogies</li>
                        <li>Scènes devenues iconiques dans la culture populaire</li>
                        <li>Influence sur les œuvres Star Wars ultérieures</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses et Anecdotes</h3>
                    <ul>
                        <li>Le duel sur Mustafar a nécessité plus de 70 heures de tournage</li>
                        <li>Ewan McGregor et Hayden Christensen se sont entraînés pendant des mois pour les scènes de combat</li>
                        <li>Le cri de Vador à la fin a été enregistré plus de 50 fois</li>
                        <li>George Lucas a fait un caméo dans l'Opéra Galactique</li>
                    </ul>
                </div>
            </div>`
    },
    episode4: {
        title: "Épisode IV : Un Nouvel Espoir (1977)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>C'est une période de guerre civile. À bord de son vaisseau spatial, la princesse Leia, membre de 
                    l'Alliance Rebelle, transporte les plans volés de l'Étoile de la Mort, l'arme absolue de l'Empire. 
                    Interceptée par un Destroyer Impérial, elle dissimule les plans dans un droïde, R2-D2, qui s'échappe 
                    avec C-3PO vers la planète Tatooine.</p>

                    <p>Les droïdes sont récupérés par Luke Skywalker, un jeune fermier qui découvre un message secret 
                    destiné à Obi-Wan Kenobi. Avec l'aide du vieux Ben Kenobi et du contrebandier Han Solo, Luke se lance 
                    dans une mission pour sauver la princesse et rejoindre la Rébellion.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>L'Appel à l'Aventure</strong>
                            <p>Luke découvre son héritage Jedi et quitte sa vie de fermier pour une destinée plus grande.</p>
                        </li>
                        
                        <li><strong>La Force Révélée</strong>
                            <p>Introduction du concept de la Force et des Jedi à travers les enseignements d'Obi-Wan.</p>
                        </li>
                        
                        <li><strong>La Menace Impériale</strong>
                            <p>Démonstration de la puissance de l'Empire avec la destruction d'Alderaan.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Luke Skywalker</h4>
                        <ul>
                            <li>Sa transformation de fermier en héros</li>
                            <li>Ses premiers pas dans la Force</li>
                            <li>La perte de son mentor</li>
                            <li>Son intégration à la Rébellion</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Han Solo</h4>
                        <ul>
                            <li>Son évolution de mercenaire égoïste en héros</li>
                            <li>Sa relation avec Chewbacca</li>
                            <li>Son scepticisme envers la Force</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Princesse Leia</h4>
                        <ul>
                            <li>Sa résistance face à la torture</li>
                            <li>Son leadership dans la Rébellion</li>
                            <li>Sa relation complexe avec Han Solo</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Duels Épiques</h3>
                    <div class="battle">
                        <h4>Duel Kenobi vs Vader</h4>
                        <ul>
                            <li>Confrontation légendaire entre ancien maître et élève</li>
                            <li>Sacrifice d'Obi-Wan</li>
                            <li>Premier duel au sabre laser de la saga</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Bataille de Yavin</h4>
                        <ul>
                            <li>Assaut final sur l'Étoile de la Mort</li>
                            <li>Utilisation de la Force par Luke</li>
                            <li>Retour héroïque de Han Solo</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Le Voyage du Héros</strong>
                            <p>Structure classique du monomythe appliquée à l'histoire de Luke.</p>
                        </li>
                        
                        <li><strong>Bien contre Mal</strong>
                            <p>Lutte entre l'Empire oppressif et la Rébellion idéaliste.</p>
                        </li>
                        
                        <li><strong>Foi et Spiritualité</strong>
                            <p>La Force comme élément mystique et spirituel.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Création d'Industrial Light & Magic</li>
                        <li>Effets spéciaux révolutionnaires pour l'époque</li>
                        <li>Utilisation novatrice du motion control</li>
                        <li>Maquettes et miniatures détaillées</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Film qui a lancé la saga Star Wars</li>
                        <li>Révolution dans les effets spéciaux</li>
                        <li>Impact culturel majeur</li>
                        <li>Création d'un nouveau genre de science-fiction</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Budget initial limité de 11 millions de dollars</li>
                        <li>Tournage difficile dans le désert tunisien</li>
                        <li>Alec Guinness sceptique envers le projet</li>
                        <li>Harrison Ford était initialement menuisier sur le plateau</li>
                    </ul>
                </div>
            </div>`
    },
    episode5: {
        title: "Épisode V : L'Empire Contre-Attaque (1980)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Après la destruction de l'Étoile de la Mort, l'Empire traque l'Alliance Rebelle à travers la galaxie. 
                    Les Rebelles se sont réfugiés sur la planète glacée Hoth, mais sont rapidement découverts. Pendant 
                    l'évacuation, Luke reçoit la vision de son ancien mentor Obi-Wan, lui ordonnant de se rendre sur 
                    Dagobah pour y être formé par Maître Yoda.</p>

                    <p>Pendant ce temps, Han Solo, la Princesse Leia, Chewbacca et C-3PO fuient les forces impériales, 
                    cherchant refuge dans la Cité des Nuages de Bespin. Mais Vador a préparé un piège, utilisant les amis 
                    de Luke comme appât pour l'attirer dans un duel qui changera sa vie à jamais.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>La Formation Jedi</strong>
                            <p>Luke commence son apprentissage avec Yoda, découvrant la vraie nature de la Force.</p>
                        </li>
                        
                        <li><strong>La Révélation</strong>
                            <p>L'une des plus grandes révélations de l'histoire du cinéma : Vador est le père de Luke.</p>
                        </li>
                        
                        <li><strong>La Trahison</strong>
                            <p>Lando trahit ses amis sous la pression de l'Empire, montrant la complexité morale de la guerre.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Luke Skywalker</h4>
                        <ul>
                            <li>Son apprentissage difficile avec Yoda</li>
                            <li>Sa vision dans la grotte de Dagobah</li>
                            <li>Le traumatisme de la révélation sur son père</li>
                            <li>Son choix entre son entraînement et ses amis</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Han Solo et Leia</h4>
                        <ul>
                            <li>Développement de leur romance</li>
                            <li>La capture de Han et sa congélation</li>
                            <li>L'évolution de leur relation</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Dark Vador</h4>
                        <ul>
                            <li>Révélation de sa vraie identité</li>
                            <li>Sa détermination à trouver Luke</li>
                            <li>Son offre de régner ensemble sur la galaxie</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Duels Épiques</h3>
                    <div class="battle">
                        <h4>Bataille de Hoth</h4>
                        <ul>
                            <li>Attaque des Marcheurs Impériaux</li>
                            <li>Défense héroïque des Rebelles</li>
                            <li>Évacuation sous le feu ennemi</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Duel sur Bespin</h4>
                        <ul>
                            <li>Combat intense entre Luke et Vador</li>
                            <li>Révélation dramatique</li>
                            <li>Défaite et mutilation de Luke</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Choix et Sacrifice</strong>
                            <p>Les décisions difficiles et leurs conséquences.</p>
                        </li>
                        
                        <li><strong>Identité et Héritage</strong>
                            <p>La découverte de ses origines et leur impact.</p>
                        </li>
                        
                        <li><strong>La Tentation du Pouvoir</strong>
                            <p>L'attrait du Côté Obscur et la résistance à la tentation.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Utilisation révolutionnaire des maquettes</li>
                        <li>Première utilisation de la technique Go-motion</li>
                        <li>Effets spéciaux améliorés pour les sabres laser</li>
                        <li>Création de décors complexes pour Bespin</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Considéré comme le meilleur film Star Wars</li>
                        <li>Une des plus grandes révélations du cinéma</li>
                        <li>Tournant sombre de la saga</li>
                        <li>Introduction de personnages iconiques comme Yoda</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Réalisé par Irvin Kershner</li>
                        <li>Tournage difficile en Norvège pour les scènes de Hoth</li>
                        <li>Mark Hamill a fait la majorité de ses cascades</li>
                        <li>La scène de la révélation tait un secret absolu</li>
                    </ul>
                </div>
            </div>`
    },
    episode6: {
        title: "Épisode VI : Le Retour du Jedi (1983)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Dans les profondeurs du palais de Jabba le Hutt sur Tatooine, un plan complexe se met en place 
                    pour sauver Han Solo, toujours prisonnier dans la carbonite. Luke Skywalker, maintenant un Jedi plus 
                    puissant et confiant, orchestre une mission de sauvetage audacieuse avec Leia, Lando, Chewbacca et 
                    les droïdes.</p>

                    <p>Après avoir libéré Han, Luke retourne sur Dagobah pour compléter sa formation, mais trouve Yoda 
                    mourant. Le vieux maître Jedi confirme que Vador est bien son père et qu'il existe un autre Skywalker. 
                    L'esprit d'Obi-Wan révèle à Luke que Leia est sa sœur jumelle.</p>

                    <p>Pendant ce temps, l'Empire construit une nouvelle Étoile de la Mort, plus puissante que la première, 
                    protégée par un bouclier généré depuis la lune forestière d'Endor. L'Empereur lui-même supervise les 
                    dernières phases de la construction, préparant un piège pour l'Alliance Rebelle.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>Le Plan de Sauvetage</strong>
                            <p>Une mission complexe en plusieurs phases pour sauver Han Solo, démontrant la maturité 
                            stratégique de Luke et la cohésion du groupe.</p>
                        </li>
                        
                        <li><strong>Les Derniers Enseignements</strong>
                            <p>Les révélations finales de Yoda et Obi-Wan, complétant la formation de Luke et le 
                            préparant pour sa confrontation finale.</p>
                        </li>
                        
                        <li><strong>La Bataille Finale</strong>
                            <p>Un assaut coordonné sur trois fronts : la bataille spatiale, le combat au sol sur Endor, 
                            et la confrontation spirituelle entre Luke, Vador et l'Empereur.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Luke Skywalker</h4>
                        <ul>
                            <li>Sa transformation en Jedi accompli</li>
                            <li>Sa maîtrise émotionnelle face à la révélation sur Leia</li>
                            <li>Son refus du Côté Obscur malgré la tentation</li>
                            <li>Sa foi inébranlable en la rédemption de son père</li>
                            <li>Sa victoire finale par le sacrifice plutôt que la violence</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Dark Vador/Anakin Skywalker</h4>
                        <ul>
                            <li>Son conflit intérieur croissant</li>
                            <li>Sa lutte entre loyauté à l'Empereur et amour pour son fils</li>
                            <li>Son moment de rédemption et son sacrifice final</li>
                            <li>Son retour à la lumière et la paix trouvée dans la mort</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Leia Organa</h4>
                        <ul>
                            <li>Sa découverte de son héritage Skywalker</li>
                            <li>Son rôle de leader dans la Rébellion</li>
                            <li>Sa relation approfondie avec Han Solo</li>
                            <li>Son acceptation de ses pouvoirs latents dans la Force</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Séquences Mémorables</h3>
                    <div class="battle">
                        <h4>Le Sauvetage chez Jabba</h4>
                        <ul>
                            <li>Infiltration progressive de tous les héros</li>
                            <li>Combat contre le Rancor</li>
                            <li>Bataille au-dessus de la fosse du Sarlacc</li>
                            <li>Démonstration des nouveaux pouvoirs de Luke</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>La Bataille d'Endor</h4>
                        <ul>
                            <li>Mission commando sur la lune forestière</li>
                            <li>Alliance avec les Ewoks</li>
                            <li>Destruction du générateur de bouclier</li>
                            <li>Combat spatial autour de l'Étoile de la Mort</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>La Confrontation Finale</h4>
                        <ul>
                            <li>Duel émotionnel entre Luke et Vador</li>
                            <li>Tentation de Luke par l'Empereur</li>
                            <li>Sacrifice de Vador</li>
                            <li>Destruction de l'Étoile de la Mort</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Rédemption</strong>
                            <p>Le pouvoir du pardon et la possibilité de rédemption même pour le plus corrompu.</p>
                        </li>
                        
                        <li><strong>Amour Familial</strong>
                            <p>La force des liens familiaux transcendant même le Côté Obscur.</p>
                        </li>
                        
                        <li><strong>Sacrifice</strong>
                            <p>Le prix ultime de la victoire et de la rédemption.</p>
                        </li>
                        
                        <li><strong>Espoir</strong>
                            <p>La victoire du bien sur le mal malgré des obstacles apparemment insurmontables.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Effets spéciaux révolutionnaires pour la bataille spatiale finale</li>
                        <li>Création de créatures complexes comme le Rancor</li>
                        <li>Amélioration des effets de vitesse pour les speeders</li>
                        <li>Maquillages élaborés pour les nombreuses créatures aliens</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Héritage</h3>
                    <ul>
                        <li>Conclusion satisfaisante de la trilogie originale</li>
                        <li>Influence durable sur la culture populaire</li>
                        <li>Scènes devenues iconiques dans l'histoire du cinéma</li>
                        <li>Impact sur toutes les œuvres Star Wars ultérieures</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Tournage complexe dans le désert de Yuma pour les scènes de Tatooine</li>
                        <li>Utilisation de la forêt de Redwood pour Endor</li>
                        <li>Plus de 900 effets spéciaux dans le film</li>
                        <li>Dernière apparition d'Anakin Skywalker non masqué</li>
                    </ul>
                </div>
            </div>`
    },
    episode7: {
        title: "Épisode VII : Le Réveil de la Force (2015)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Trente ans après la chute de l'Empire, la galaxie fait face à une nouvelle menace. Le Premier 
                    Ordre, né des cendres de l'Empire, cherche Luke Skywalker, disparu depuis des années. La Résistance, 
                    dirigée par la Générale Leia Organa, envoie son meilleur pilote, Poe Dameron, sur Jakku pour 
                    récupérer une carte menant à Luke.</p>

                    <p>Sur Jakku, Rey, une pilleuse d'épaves solitaire, et Finn, un Stormtrooper déserteur, se 
                    retrouvent impliqués dans un conflit galactique lorsqu'ils rencontrent le droïde BB-8, porteur 
                    de la carte secrète. Leur fuite les mène à Han Solo et Chewbacca, tandis que le mystérieux Kylo 
                    Ren, obsédé par l'héritage de Dark Vador, les traque sans relâche.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>Nouvelle Génération</strong>
                            <p>Introduction de nouveaux personnages principaux : Rey, Finn, Poe, et Kylo Ren, chacun 
                            portant le poids d'un héritage différent.</p>
                        </li>
                        
                        <li><strong>Le Mystère de Rey</strong>
                            <p>Les origines mystérieuses de Rey et sa connexion inexpliquée avec la Force et le sabre 
                            laser des Skywalker.</p>
                        </li>
                        
                        <li><strong>Le Premier Ordre</strong>
                            <p>L'émergence d'une nouvelle menace totalitaire, plus radicale que l'Empire, avec la 
                            Base Starkiller comme arme ultime.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Rey</h4>
                        <ul>
                            <li>Sa découverte de la Force</li>
                            <li>Son passage de pilleuse solitaire à héroïne</li>
                            <li>Sa quête d'identité et d'appartenance</li>
                            <li>Son lien mystérieux avec le sabre laser des Skywalker</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Finn</h4>
                        <ul>
                            <li>Sa désertion du Premier Ordre</li>
                            <li>Son développement moral et éthique</li>
                            <li>Sa lutte pour trouver sa place</li>
                            <li>Son courage croissant face à l'adversité</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Kylo Ren/Ben Solo</h4>
                        <ul>
                            <li>Son conflit interne entre lumière et obscurité</li>
                            <li>Son obsession pour Vador</li>
                            <li>Sa relation complexe avec ses parents</li>
                            <li>Le meurtre de son père, Han Solo</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Séquences Mémorables</h3>
                    <div class="battle">
                        <h4>L'Attaque sur Jakku</h4>
                        <ul>
                            <li>Massacre du village par le Premier Ordre</li>
                            <li>Première apparition de Kylo Ren</li>
                            <li>Fuite de Finn et Poe</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>La Fuite avec le Faucon Millenium</h4>
                        <ul>
                            <li>Poursuite spectaculaire sur Jakku</li>
                            <li>Démonstration des talents de pilote de Rey</li>
                            <li>Retour triomphal du vaisseau légendaire</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>L'Affrontement Final</h4>
                        <ul>
                            <li>Destruction de la Base Starkiller</li>
                            <li>Duel dans la neige entre Rey, Finn et Kylo Ren</li>
                            <li>Première utilisation du sabre laser par Rey</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Héritage et Identité</strong>
                            <p>L'impact du passé sur le présent et la quête d'identité des nouveaux héros.</p>
                        </li>
                        
                        <li><strong>Rédemption et Corruption</strong>
                            <p>Le choix entre le bien et le mal, illustré par les parcours opposés de Rey et Kylo Ren.</p>
                        </li>
                        
                        <li><strong>Espoir et Résistance</strong>
                            <p>La lutte continue contre l'oppression et l'importance de maintenir l'espoir.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Mélange d'effets pratiques et numériques</li>
                        <li>Création du droïde BB-8 en tant qu'accessoire physique</li>
                        <li>Utilisation de décors réels pour plus d'authenticité</li>
                        <li>Effets visuels de nouvelle génération pour les scènes spatiales</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact et Héritage</h3>
                    <ul>
                        <li>Renouveau de la franchise pour une nouvelle génération</li>
                        <li>Introduction de personnages féminins forts</li>
                        <li>Succès critique et commercial majeur</li>
                        <li>Établissement des bases pour la nouvelle trilogie</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Retour aux effets pratiques privilégiés par J.J. Abrams</li>
                        <li>Tournage dans le désert d'Abu Dhabi pour Jakku</li>
                        <li>Création de nouveaux sons pour BB-8</li>
                        <li>Utilisation de pellicule 35mm plutôt que numérique</li>
                    </ul>
                </div>
            </div>`
    },
    episode8: {
        title: "Épisode VIII : Les Derniers Jedi (2017)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>Après avoir trouvé Luke Skywalker, Rey tente de le convaincre de former une nouvelle génération 
                    de Jedi. Cependant, Luke, marqué par son échec avec Kylo Ren, refuse initialement, convaincu que 
                    l'ordre Jedi doit s'éteindre. Pendant ce temps, la Résistance, menée par Leia, est pourchassée 
                    sans relâche par le Premier Ordre.</p>

                    <p>Une connexion mystérieuse dans la Force se développe entre Rey et Kylo Ren, orchestrée par le 
                    Suprême Leader Snoke. Cette connexion révèle la complexité de leurs destins entremêlés et remet 
                    en question les notions traditionnelles du bien et du mal.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>La Formation de Rey</strong>
                            <p>L'apprentissage non conventionnel de Rey avec Luke et sa découverte des textes sacrés 
                            Jedi.</p>
                        </li>
                        
                        <li><strong>Le Lien Force</strong>
                            <p>La connexion unique entre Rey et Kylo Ren qui révèle leurs vulnérabilités et espoirs 
                            respectifs.</p>
                        </li>
                        
                        <li><strong>La Mort de Snoke</strong>
                            <p>Le tournant inattendu où Kylo Ren choisit de tuer son maître plutôt que Rey.</p>
                        </li>
                        
                        <li><strong>Le Sacrifice de Luke</strong>
                            <p>L'ultime acte héroïque de Luke utilisant la projection de Force pour sauver la 
                            Résistance.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Luke Skywalker</h4>
                        <ul>
                            <li>Son isolement volontaire et sa désillusion</li>
                            <li>Sa réconciliation avec la Force</li>
                            <li>Son dernier acte héroïque</li>
                            <li>Sa paix trouvée dans le sacrifice</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Rey</h4>
                        <ul>
                            <li>Sa quête d'identité sur ses origines</li>
                            <li>Son développement dans la Force</li>
                            <li>Sa relation complexe avec Kylo Ren</li>
                            <li>Son acceptation de son rôle dans la galaxie</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Kylo Ren</h4>
                        <ul>
                            <li>Son conflit intérieur persistant</li>
                            <li>Sa relation avec Rey</li>
                            <li>Son ascension au pouvoir</li>
                            <li>Sa rupture avec son passé</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles Mémorables</h3>
                    <div class="battle">
                        <h4>L'Évacuation de D'Qar</h4>
                        <ul>
                            <li>Sacrifice de Paige Tico</li>
                            <li>Destruction du Dreadnought</li>
                            <li>Coût élevé de la victoire</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Combat dans la Salle du Trône</h4>
                        <ul>
                            <li>Alliance temporaire Rey/Kylo</li>
                            <li>Mort de Snoke</li>
                            <li>Combat contre la Garde Prétorienne</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>Bataille de Crait</h4>
                        <ul>
                            <li>Dernière confrontation avec Luke</li>
                            <li>Fuite de la Résistance</li>
                            <li>Sacrifice de Luke</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Échec et Apprentissage</strong>
                            <p>L'importance d'apprendre de ses échecs et de transcender le passé.</p>
                        </li>
                        
                        <li><strong>Espoir et Renouveau</strong>
                            <p>La renaissance de l'espoir même dans les moments les plus sombres.</p>
                        </li>
                        
                        <li><strong>Tradition vs Innovation</strong>
                            <p>La nécessité de faire évoluer les anciennes traditions.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Effets visuels révolutionnaires pour les scènes de Force</li>
                        <li>Création du monde de Crait avec son sel rouge</li>
                        <li>Techniques innovantes pour les connexions Force</li>
                        <li>Utilisation de caméras IMAX</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact</h3>
                    <ul>
                        <li>Remise en question des conventions Star Wars</li>
                        <li>Développement complexe des personnages</li>
                        <li>Nouvelles perspectives sur la Force</li>
                        <li>Débats passionnés dans la communauté des fans</li>
                    </ul>
                </div>
            </div>`
    },
    episode9: {
        title: "Épisode IX : L'Ascension de Skywalker (2019)",
        description: `
            <div class="film-details">
                <div class="synopsis">
                    <h3>Synopsis Détaillé</h3>
                    <p>L'empereur Palpatine est mystérieusement revenu d'entre les morts, annonçant une vengeance 
                    millénaire. Alors que la galaxie est en émoi, Rey poursuit son entraînement Jedi sous la tutelle 
                    de Leia Organa. Pendant ce temps, Kylo Ren, obsédé par la consolidation de son pouvoir, cherche 
                    l'Empereur pour éliminer toute menace à son autorité.</p>

                    <p>Rey découvre qu'elle est la petite-fille de Palpatine, ce qui explique sa puissance naturelle 
                    dans la Force. Avec Finn, Poe, et leurs alliés, elle doit affronter son héritage et mener un 
                    dernier combat pour la liberté de la galaxie, tandis que Ben Solo lutte pour se libérer de 
                    l'emprise du Côté Obscur.</p>
                </div>

                <div class="plot-developments">
                    <h3>Développements Majeurs</h3>
                    <ul>
                        <li><strong>Le Retour de Palpatine</strong>
                            <p>La révélation que l'Empereur a survécu grâce à la science Sith et à des clones, 
                            manipulant les événements depuis le début.</p>
                        </li>
                        
                        <li><strong>L'Héritage de Rey</strong>
                            <p>La découverte des origines de Rey en tant que descendante de Palpatine et son choix 
                            de rejeter cet héritage.</p>
                        </li>
                        
                        <li><strong>La Rédemption de Ben Solo</strong>
                            <p>Le retour de Kylo Ren vers la lumière, catalysé par le sacrifice de Leia et le pardon 
                            de Rey.</p>
                        </li>
                        
                        <li><strong>La Dyade dans la Force</strong>
                            <p>L'exploration du lien unique entre Rey et Ben, une connexion prophétisée qui n'arrive 
                            que tous les millénaires.</p>
                        </li>
                    </ul>
                </div>

                <div class="character-arcs">
                    <h3>Évolution des Personnages</h3>
                    <div class="character">
                        <h4>Rey</h4>
                        <ul>
                            <li>Sa lutte avec son héritage Palpatine</li>
                            <li>Son achèvement de l'entraînement Jedi</li>
                            <li>Sa connexion croissante avec Ben Solo</li>
                            <li>Son choix de devenir une Skywalker</li>
                            <li>Sa maîtrise finale de la Force</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Kylo Ren/Ben Solo</h4>
                        <ul>
                            <li>Son parcours vers la rédemption</li>
                            <li>Sa réconciliation avec le souvenir de son père</li>
                            <li>Son sacrifice final pour Rey</li>
                            <li>Sa paix trouvée dans la lumière</li>
                        </ul>
                    </div>

                    <div class="character">
                        <h4>Palpatine</h4>
                        <ul>
                            <li>Sa survie et ses manipulations</li>
                            <li>Son plan de renaissance Sith</li>
                            <li>Sa tentative de corrompre Rey</li>
                            <li>Sa défaite finale</li>
                        </ul>
                    </div>
                </div>

                <div class="epic-battles">
                    <h3>Batailles et Séquences Mémorables</h3>
                    <div class="battle">
                        <h4>La Quête du Wayfinder</h4>
                        <ul>
                            <li>Course-poursuite sur Pasaana</li>
                            <li>Découverte dans les ruines de l'Étoile de la Mort</li>
                            <li>Duel entre Rey et Kylo Ren</li>
                        </ul>
                    </div>

                    <div class="battle">
                        <h4>La Bataille d'Exegol</h4>
                        <ul>
                            <li>Confrontation finale avec Palpatine</li>
                            <li>Arrivée de la flotte citoyenne</li>
                            <li>Union de Rey et Ben dans le combat</li>
                            <li>Sacrifice et victoire finale</li>
                        </ul>
                    </div>
                </div>

                <div class="themes">
                    <h3>Thèmes Principaux</h3>
                    <ul>
                        <li><strong>Choix et Destinée</strong>
                            <p>Le pouvoir de choisir son propre chemin malgré son héritage.</p>
                        </li>
                        
                        <li><strong>Rédemption</strong>
                            <p>La possibilité de rédemption même après les actes les plus sombres.</p>
                        </li>
                        
                        <li><strong>Unité et Espoir</strong>
                            <p>La force de l'union face à l'oppression.</p>
                        </li>
                        
                        <li><strong>Héritage</strong>
                            <p>L'importance de choisir son propre héritage plutôt que de le subir.</p>
                        </li>
                    </ul>
                </div>

                <div class="visual-effects">
                    <h3>Innovations Techniques</h3>
                    <ul>
                        <li>Effets spéciaux de pointe pour les éclairs de Force</li>
                        <li>Création du monde sinistre d'Exegol</li>
                        <li>Intégration des séquences de Carrie Fisher</li>
                        <li>Animation des vaisseaux de la flotte Sith</li>
                    </ul>
                </div>

                <div class="legacy">
                    <h3>Impact et Conclusion</h3>
                    <ul>
                        <li>Conclusion de la saga Skywalker</li>
                        <li>Résolution des arcs narratifs majeurs</li>
                        <li>Hommage aux neuf films</li>
                        <li>Débats dans la communauté des fans</li>
                    </ul>
                </div>

                <div class="behind-scenes">
                    <h3>Coulisses</h3>
                    <ul>
                        <li>Utilisation innovante d'images d'archive de Carrie Fisher</li>
                        <li>Retour de nombreux acteurs historiques</li>
                        <li>Tournage dans le désert de Jordanie</li>
                        <li>Plus de 1900 plans d'effets spéciaux</li>
                    </ul>
                </div>
            </div>`
    }
}; 