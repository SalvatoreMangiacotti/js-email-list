// SELEZIONE OUTPUT PAGINA //

const listaEmail = document.querySelector('.container ul');

// GESTIONE API //

const emailEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailListArray = [];

let displayOutput = "";

const genRandomEmails = (() => {

    emailListArray.length = 0;

    for (let i = 0; i < 10; i++) {

        axios.get(emailEndpoint)

            .then(response => {

                // handle success

                const emailResult = response.data;
                const randomEmail = emailResult.response;

                emailListArray.push(randomEmail);

                displayOutput += `<li>${randomEmail}</li>`;

                listaEmail.innerHTML = displayOutput;

                console.log(emailListArray);

            })
            .catch(error => {

                // handle error

                console.log(error);

            })

    }
})


// GESTIONE PULSANTE //

const button = document.querySelector('.button');

button.addEventListener('click', () => {

    displayOutput = "";
    genRandomEmails();

})