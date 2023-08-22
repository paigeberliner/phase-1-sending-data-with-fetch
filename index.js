function submitData(name, email){
   return fetch(`http://localhost:3000/users`, 
   {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json', 
        "Accept": 'application/json',
    },
    body: JSON.stringify({
        name: name,
        email: email,
    }),
    })
    .then (res => res.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(function(error){
        document.body.innerHTML = error.message
    });
}


