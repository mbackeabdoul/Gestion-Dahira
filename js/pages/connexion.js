const rendreConnexion = () => `
    <div id="page-connexion" class="page cache grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">

        <div id="connexion-gauche" class="hidden md:block relative overflow-hidden"></div>

        <div id="connexion-droite" class="flex items-center justify-center bg-white">
            <div id="connexion-contenu" class="w-full max-w-lg flex flex-col gap-6 px-16 md:px-20">

                <div class="text-center">
                    <h2 class="text-3xl font-bold mb-2">Connexion</h2>
                    <p class="text-sm italic">Accedez a la gestion de votre dahira</p>
                </div>

                <form id="connexion-formulaire" onsubmit="return false" class="flex flex-col gap-5">

                    <div id="connexion-champ-email" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Adresse email</label>
                        <input type="email" placeholder="mail@gmail.com" class="w-full">
                    </div>

                    <div id="connexion-champ-mdp" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Mot de passe</label>
                        <input type="password" placeholder="*********" class="w-full">
                    </div>

                    <p id="connexion-erreur"></p>

                    <button id="connexion-bouton" class="w-full text-white font-semibold">
                        Se connecter
                    </button>

                    <p id="connexion-lien-inscription" class="text-center text-sm">
                        Vous n'avez pas de compte ?
                        <a href="#">S'inscrire</a>
                    </p>

                </form>
            </div>
        </div>

    </div>
`

function initConnexion (){

    document.querySelector('#connexion-lien-inscription a')
        .addEventListener('click', e => {
            e.preventDefault()
            afficherPage('page-inscription')
        })

    document.getElementById('connexion-bouton')
        .addEventListener('click', () => {
            const email = document.querySelector('#connexion-champ-email input').value.trim()
            const modpasse = document.querySelector('#connexion-champ-mdp input').value
            const erreur = document.getElementById('connexion-erreur')
            if (!email || !modpasse) {
                erreur.textContent = 'Veuillez remplir toutes les champs'
                return
            } 
            

            const dieuwrigne = getDieuwrigne()
            if (dieuwrigne && email === dieuwrigne.email && modpasse === dieuwrigne.modpasse) {
                creerSession(dieuwrigne)
                erreur.textContent = ''
                document.querySelector('#connexion-champ-email input').value = ''
                document.querySelector('#connexion-champ-mdp input').value = ''
                afficherPage('dashboard-dieuwrigne')
            } else {
                erreur.textContent = 'Email ou mot de passe incorrect'
                document.querySelector('#connexion-champ-mdp input').value = ''
            }
        })
}