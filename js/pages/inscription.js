const rendreInscription = () => `
    <div id="page-inscription" class="page cache grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">

        <div id="inscription-gauche" class="hidden md:block relative overflow-hidden"></div>

        <div id="inscription-droite" class="flex items-center justify-center bg-white overflow-y-auto">
            <div id="inscription-contenu" class="w-full max-w-lg flex flex-col gap-6 px-16 md:px-20 py-10">

                <div class="text-center">
                    <p class="text-sm italic">Configurez votre espace de gestion</p>
                </div>

                <form id="inscription-formulaire" onsubmit="return false" class="flex flex-col gap-4">

                    <p class="text-xs font-semibold uppercase tracking-widest">Votre dahira</p>

                    <div id="inscription-champ-nom-dahira" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Nom de la dahira</label>
                        <input type="text" placeholder="Ex: Mawaahibu Naafih Touba ODC" class="w-full">
                    </div>

                    <div id="inscription-champ-ville" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Adresse</label>
                        <input type="text" placeholder="Ex: Touba" class="w-full">
                    </div>

                    <p class="text-xs font-semibold uppercase tracking-widest mt-2">Votre compte</p>

                    <div class="flex gap-4">
                        <div id="inscription-champ-prenom" class="flex flex-col gap-1 w-1/2">
                            <label class="text-sm font-medium">Prenom</label>
                            <input type="text" placeholder="Votre prenom" class="w-full">
                        </div>
                        <div id="inscription-champ-nom" class="flex flex-col gap-1 w-1/2">
                            <label class="text-sm font-medium">Nom</label>
                            <input type="text" placeholder="Votre nom" class="w-full">
                        </div>
                    </div>

                    <div id="inscription-champ-email" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Email</label>
                        <input type="email" placeholder="votre@email.com" class="w-full">
                    </div>

                    <div id="inscription-champ-mdp" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Mot de passe</label>
                        <input type="password" placeholder="*******" class="w-full">
                    </div>

                    <div id="inscription-champ-confirmer-mdp" class="flex flex-col gap-1">
                        <label class="text-sm font-medium">Confirmer le mot de passe</label>
                        <input type="password" placeholder="*******" class="w-full">
                    </div>

                    <p id="inscription-erreur"></p>

                    <button id="inscription-bouton" class="w-full text-white font-semibold">
                        Creer ma dahira
                    </button>

                    <p id="inscription-lien-connexion" class="text-center text-sm">
                        Deja inscrit ?
                        <a href="#">Se connecter</a>
                    </p>

                </form>
            </div>
        </div>

    </div>
`

function initInscription () {

    document.querySelector('#inscription-lien-connexion a')
        .addEventListener('click', e => {
            e.preventDefault()
            afficherPage('page-connexion')
        })

    document.getElementById('inscription-bouton')
        .addEventListener('click', () => {
            const prenom = document.querySelector('#inscription-champ-prenom input').value.trim()
            const nom = document.querySelector('#inscription-champ-nom input').value.trim()
            const email = document.querySelector('#inscription-champ-email input').value.trim()
            const nomDahira = document.querySelector('#inscription-champ-nom-dahira input').value.trim()
            const ville = document.querySelector('#inscription-champ-ville input').value.trim()
            const modpasse = document.querySelector('#inscription-champ-mdp input').value
            const modpasseConfirm = document.querySelector('#inscription-champ-confirmer-mdp input').value
            const erreur = document.getElementById('inscription-erreur')
            if (!prenom || !nom || !email || !nomDahira || !ville || !modpasse) {
                erreur.textContent = 'Veuillez remplir tous les champs'
                return
            }
            if (modpasse !== modpasseConfirm) {
                erreur.textContent = 'Les mots de passe ne sont pas identiques'
                return
            }
            setDieuwrigne({ prenom, nom, email, modpasse, nomDahira, ville })
            erreur.textContent = ''
            afficherPage('page-connexion')
        })
}