function fetchdata()
{
    // console.log("Start Fetch");
    fetch('https://reqres.in/api/users?page=2').then(response =>{
        // console.log(response); 
        if(!response.ok)
        {
            throw Error('Error');
        }
         return response.json();

        // console.log(data); 
    }).then(data=>{
        console.log(data.data);
        const html=data.data.map(user => {
            return `
            <div class="user">
<p><img src=" ${user.avatar}" alt=" ${user.first_name} image"></p>
                <h3>Name : ${user.first_name}</h3>
                <p>${user.email}</p>
            </div>`;
           
             
        }).join("");
        console.log(html);
        document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error=>{
        console.log(error);
    })
    console.log();
}
fetchdata();