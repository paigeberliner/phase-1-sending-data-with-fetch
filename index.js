function submitData(name, email){
   return fetch('http://localhost:3000/users' , 
   {
    method: 'POST',
    headers: { 

    },

    })
    .then (res => res.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(function(error){
        document.body.innerHTML = error.message
    });
}


