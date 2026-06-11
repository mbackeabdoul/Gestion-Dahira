const rendreDashboard = () => `
    <div id="dashboard-dieuwrigne" class="page cache flex h-screen overflow-hidden bg-gray-50">

        <aside id="dashboard-sidebar" class="w-56 bg-white border-r border-gray-100 flex flex-col justify-between py-6 shrink-0 h-full">

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

                    <a href="#" id="nav-accueil" class="nav-lien flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-all">
                        <span>Tableau de bord</span>
                    </a>

                    <a href="#" id="nav-membres" class="nav-lien flex items-center px-4 py-2.5 rounded-lg text-sm transition-all">
                        <div>
                            <p class="text-gray-700 font-medium">Membres</p>
                            <p class="text-xs text-gray-400">Repertoire</p>
                        </div>
                    </a>

                    <a href="#" id="nav-sass" class="nav-lien flex items-center px-4 py-2.5 rounded-lg text-sm transition-all">
                        <div>
                            <p class="text-gray-700 font-medium">Cotisations</p>
                            <p class="text-xs text-gray-400">Paiements</p>
                        </div>
                    </a>

                    <a href="#" id="nav-caisse" class="nav-lien flex items-center px-4 py-2.5 rounded-lg text-sm transition-all">
                        <div>
                            <p class="text-gray-700 font-medium">Caisse</p>
                            <p class="text-xs text-gray-400">Finances</p>
                        </div>
                    </a>

                    <a href="#" id="nav-evenements" class="nav-lien flex items-center px-4 py-2.5 rounded-lg text-sm transition-all">
                        <div>
                            <p class="text-gray-700 font-medium">Evenements</p>
                            <p class="text-xs text-gray-400">Calendrier</p>
                        </div>
                    </a>

                    <a href="#" id="nav-apprentissage" class="nav-lien flex items-center px-4 py-2.5 rounded-lg text-sm transition-all">
                        <div>
                            <p class="text-gray-700 font-medium">Apprentissage</p>
                            <p class="text-xs text-gray-400">Coran et Religion</p>
                        </div>
                    </a>

                </nav>
            </div>

            <div class="px-3 flex flex-col gap-4 border-t border-gray-100 pt-4">
                <a href="#" id="bouton-deconnexion" class="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-gray-700 transition-all">
                    Se deconnecter
                </a>
                <p class="text-xs text-gray-300 px-4 italic">Servir la communaute, c est servir Dieu</p>
            </div>

        </aside>

        <div class="flex-1 flex flex-col overflow-hidden">

            <header id="dashboard-header" class="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between shrink-0">
                <h2 id="dashboard-titre-page" class="text-sm font-semibold text-gray-600">Tableau de bord</h2>
                <span id="dashboard-nom-dieuwrigne" class="text-sm text-gray-500"></span>
            </header>

            <main id="dashboard-contenu" class="flex-1 overflow-y-auto p-8">
            </main>

        </div>

    </div>
`

const afficherContenu = (html) => {
    document.getElementById('dashboard-contenu').innerHTML = html
}

const activerNav = (idActif) => {
    document.querySelectorAll('.nav-lien').forEach(lien => {
        lien.classList.remove('bg-gray-100', 'font-semibold')
    })
    document.getElementById(idActif).classList.add('bg-gray-100', 'font-semibold')
}

const initDashboard = () => {

    document.getElementById('bouton-deconnexion')
        .addEventListener('click', e => {
            e.preventDefault()
            supprimerSession()
            afficherPage('page-connexion')
        })

    document.getElementById('nav-accueil')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-accueil')
            document.getElementById('dashboard-titre-page').textContent = 'Tableau de bord'
            afficherContenu(rendreAccueil())
        })

    document.getElementById('nav-membres')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-membres')
            document.getElementById('dashboard-titre-page').textContent = 'Membres'
            afficherContenu(rendreMembres())
            initMembres()
        })

    document.getElementById('nav-sass')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-sass')
            document.getElementById('dashboard-titre-page').textContent = 'Cotisations'
            afficherContenu(rendreSass())
            initSass()
        })

    document.getElementById('nav-caisse')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-caisse')
            document.getElementById('dashboard-titre-page').textContent = 'Caisse'
            afficherContenu(rendreCaisse())
            initCaisse()
        })

    document.getElementById('nav-evenements')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-evenements')
            document.getElementById('dashboard-titre-page').textContent = 'Evenements'
            afficherContenu(rendreEvenements())
            initEvenements()
        })

    document.getElementById('nav-apprentissage')
        .addEventListener('click', e => {
            e.preventDefault()
            activerNav('nav-apprentissage')
            document.getElementById('dashboard-titre-page').textContent = 'Apprentissage'
            afficherContenu(rendreApprentissage())
            initApprentissage()
        })
}

const afficherDashboard = () => {
    const dieuwrigne = getDieuwrigne()
    if (dieuwrigne) {
        document.getElementById('dashboard-nom-dahira').textContent = dieuwrigne.nomDahira
        document.getElementById('dashboard-nom-dieuwrigne').textContent = dieuwrigne.prenom + ' ' + dieuwrigne.nom
        activerNav('nav-accueil')
    }
}