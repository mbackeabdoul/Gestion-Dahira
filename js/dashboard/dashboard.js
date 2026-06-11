const rendreDashboard = () => `
    <div id="dashboard-dieuwrigne" class="page cache flex h-screen overflow-hidden">

        <aside id="dashboard-sidebar" class="flex flex-col justify-between py-6 shrink-0 h-full" style="width:224px; min-width:224px;">

            <div class="flex flex-col gap-6">

                <div class="flex items-center gap-3 px-5 pb-5 border-b border-gray-100">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm" style="background-color: var(--vert)">
                        D
                    </div>
                    <div>
                        <h3 id="dashboard-nom-dahira" class="font-bold text-sm"></h3>
                        <p class="text-xs text-gray-400">Espace Dieuwrigne</p>
                    </div>
                </div>

                <nav class="flex flex-col gap-1 px-3">

                    <a href="#" id="nav-accueil" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-table-cells-large w-4 text-center shrink-0"></i>
                        <span>Tableau de bord</span>
                    </a>

                    <a href="#" id="nav-membres" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-users w-4 text-center shrink-0"></i>
                        <div>
                            <p class="font-medium">Membres</p>
                            <p class="text-xs opacity-60">Répertoire</p>
                        </div>
                    </a>

                    <a href="#" id="nav-sass" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-credit-card w-4 text-center shrink-0"></i>
                        <div>
                            <p class="font-medium">Cotisations</p>
                            <p class="text-xs opacity-60">Paiements</p>
                        </div>
                    </a>

                    <a href="#" id="nav-caisse" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-wallet w-4 text-center shrink-0"></i>
                        <div>
                            <p class="font-medium">Caisse</p>
                            <p class="text-xs opacity-60">Finances</p>
                        </div>
                    </a>

                    <a href="#" id="nav-evenements" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-calendar-days w-4 text-center shrink-0"></i>
                        <div>
                            <p class="font-medium">Événements</p>
                            <p class="text-xs opacity-60">Calendrier</p>
                        </div>
                    </a>

                    <a href="#" id="nav-apprentissage" class="nav-lien flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all">
                        <i class="fa-solid fa-book-open w-4 text-center shrink-0"></i>
                        <div>
                            <p class="font-medium">Apprentissage</p>
                            <p class="text-xs opacity-60">Coran et Religion</p>
                        </div>
                    </a>

                </nav>
            </div>

            <div class="px-3 flex flex-col gap-4 border-t border-gray-100 pt-4">
                <a href="#" id="bouton-deconnexion" class="flex items-center gap-2 px-4 py-2.5 text-sm transition-all">
                    <i class="fa-solid fa-right-from-bracket w-4 text-center shrink-0"></i>
                    Se déconnecter
                </a>
                <p class="text-xs px-4 italic" style="color: rgba(255,255,255,0.2)">Servir la communauté, c'est servir Dieu</p>
            </div>

        </aside>

        <div class="flex flex-col overflow-hidden" style="flex:1; min-width:0;">

            <header id="dashboard-header" class="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between shrink-0">
                <h2 id="dashboard-titre-page" class="text-sm font-semibold text-gray-600">Tableau de bord</h2>
                <span id="dashboard-nom-dieuwrigne" class="text-sm text-gray-500"></span>
            </header>

            <main id="dashboard-contenu" class="overflow-y-auto" style="flex:1; background:#f8f9f8;">
            </main>

        </div>

    </div>
`
function afficherContenu(html) {
    document.getElementById('dashboard-contenu').innerHTML = html
}

function activerNav(idActif) {
    const tousLesLiens = document.querySelectorAll('.nav-lien')
    tousLesLiens.forEach(function(lien) {
        lien.classList.remove('bg-gray-100', 'font-semibold')
    })
    document.getElementById(idActif).classList.add('bg-gray-100', 'font-semibold')
}

function initDashboard() {

    document.getElementById('bouton-deconnexion')
        .addEventListener('click', function(e) {
            e.preventDefault()
            supprimerSession()
            afficherPage('page-connexion')
        })

    document.getElementById('nav-accueil')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-accueil')
            document.getElementById('dashboard-titre-page').textContent = 'Tableau de bord'
            afficherContenu(rendreAccueil())
        })

    document.getElementById('nav-membres')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-membres')
            document.getElementById('dashboard-titre-page').textContent = 'Membres'
            afficherContenu(rendreMembres())
            initMembres()
        })

    document.getElementById('nav-sass')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-sass')
            document.getElementById('dashboard-titre-page').textContent = 'Cotisations'
            afficherContenu(rendreSass())
            initSass()
        })

    document.getElementById('nav-caisse')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-caisse')
            document.getElementById('dashboard-titre-page').textContent = 'Caisse'
            afficherContenu(rendreCaisse())
            initCaisse()
        })

    document.getElementById('nav-evenements')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-evenements')
            document.getElementById('dashboard-titre-page').textContent = 'Evenements'
            afficherContenu(rendreEvenements())
            initEvenements()
        })

    document.getElementById('nav-apprentissage')
        .addEventListener('click', function(e) {
            e.preventDefault()
            activerNav('nav-apprentissage')
            document.getElementById('dashboard-titre-page').textContent = 'Apprentissage'
            afficherContenu(rendreApprentissage())
            initApprentissage()
        })
}

function afficherDashboard() {
    const dieuwrigne = getDieuwrigne()
    if (dieuwrigne) {
        document.getElementById('dashboard-nom-dahira').textContent = dieuwrigne.nomDahira
        document.getElementById('dashboard-nom-dieuwrigne').textContent = dieuwrigne.prenom + ' ' + dieuwrigne.nom
        activerNav('nav-accueil')
        afficherContenu(rendreAccueil())
    }
}


