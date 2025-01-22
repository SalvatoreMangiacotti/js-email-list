// SELEZIONE OUTPUT PAGINA //

const listaEmail = document.querySelector('.container ul');

// GESTIONE API //

const emailEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(emailEndpoint)
    .then(response => {
        // handle success

        const result = response.data;
        console.log(result);
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
