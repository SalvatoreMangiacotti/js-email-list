const emailEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(emailEndpoint)
    .then(response => {
        // handle success
        console.log(response);
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
