const trash = document.querySelector('button.delete')

        trash.addEventListener('click', (e) => {
            const pathDelete = `/strona_glowna/profil_uzytkownika/usun_uzytkownika`

            fetch(pathDelete, {method: 'DELETE'})
            .then((response) => response.json()) //odbiera odpowiedz z pliku app,js
            .then((data) => window.location.href = data.redirect) //response zwraca kolejna obietnice dlatego trzeba dodac kolejne then potem ta obietnice trzeba odebrac w data i wypisac na ekran
            .catch(err => console.log(err))
        })