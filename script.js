const pages = document.querySelectorAll('.page');
const afficherPage = (idPage) => {
    pages.forEach(p => p.classList.add('cache'))
    document.getElementById(idPage).classList.remove('cache')
}

fetch('donnes.json')
    .then(reponse => reponse.json())
    .then(data => {
        document.querySelector('#connexion-lien-inscription a')
            .addEventListener('click', e => {
                e.preventDefault()
                afficherPage('page-inscription')
            })
        document.querySelector('#inscription-lien-connexion a')
            .addEventListener('click', e => {
                e.preventDefault()
                afficherPage('page-connexion')
            })

        document.getElementById('connexion-bouton')
            .addEventListener('click', () => {
                const email = document.querySelector('#connexion-champ-email input').value.trim()
                const modpasse = document.querySelector('#connexion-champ-mdp input').value.trim()
                const erreur = document.getElementById('connexion-erreur')
                if (!email || !modpasse) {
                    erreur.textContent = 'remplir tous les champs'
                    return
                }
                if (email === data.dieuwrigne.email && modpasse === data.dieuwrigne.modpasse) {
                    erreur.textContent = ''
                        document.querySelector('#connexion-champ-email input').value = ""
                  document.querySelector('#connexion-champ-mdp input').value = ""
                    afficherPage('dashboard-dieuwrigne')
                } else {
                    erreur.textContent = 'Email ou mot de passe pas correct'
                    document.querySelector('#connexion-champ-mdp input').value = ""

                }
            })

    })