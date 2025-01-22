// SELEZIONE OUTPUT PAGINA //

const listaEmail = document.querySelector('.container ul');

// GESTIONE API //

const emailEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

let displayOutput = "";

for (let i = 0; i < 10; i++) {

    axios.get(emailEndpoint)

        .then(response => {

            // handle success

            const emailResult = response.data;
            const randomEmail = emailResult.response;

            displayOutput += `<li>${randomEmail}</li>`;

            listaEmail.innerHTML = displayOutput;
        })
        .catch(error => {

            // handle error
            console.log(error);

        })
}
