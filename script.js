// SELEZIONE OUTPUT PAGINA //

const listaEmail = document.querySelector('.container ul');

// GESTIONE API //

const emailEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(emailEndpoint)
    .then(response => {
        // handle success

        const emailResult = response.data;
        const randomEmail = emailResult.response;

        listaEmail.innerHTML = randomEmail;
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
