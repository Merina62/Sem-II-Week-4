let API_Key = prompt("Enter your API key: ");

async function fetchUserData( API ){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); 

        console.log(data[0])
        for ( let i = 0; i < data.length; i++ )
        {
            if ( API == data[i]["id"] )
            {
                document.getElementById("id").innerHTML = data[i]["id"];
                document.getElementById("Name").innerHTML = data[i]["name"];
                document.getElementById("Username").innerHTML = data[i]["username"];
                document.getElementById("email").innerHTML = data[i]["email"];
                document.getElementById("address").innerHTML = data[i]["address"]["street"];
                console.log(data[i]);
            }
        }
    }
    catch{
        alert("wrong API")
    }
}
fetchUserData( API_Key );



