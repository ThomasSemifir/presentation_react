const url ="http://localhost:3000/utilisateurs"

class UtilisateurService {
    getAllUtilisateurs = () => {
        return fetch(url, {method : "GET", headers: {"Content-type":"application/json"}}).then((res) => res.json())
    }

    addUtilisateur = (utilisateur) => {
        return fetch(url, {method: "POST", body: JSON.stringify(utilisateur), headers: {"Content-type": "application/json"}})
    }

    deleteUtilisateur = (utilisateur) => {
        return fetch(`${url}/${utilisateur.id}`,
        {
            method:"DELETE"
        })
    }
}

export default Object.freeze(new UtilisateurService())