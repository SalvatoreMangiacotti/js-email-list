// ####### //
axios.get('/user?ID=12345')
    .then(response => {
        // handle success
        console.log(response);
    })
    .catch(error => {
        // handle error
        console.log(error);
    })
