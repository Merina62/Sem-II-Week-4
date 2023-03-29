async function fetchUserData(userId) {
    try {
        const response = await fetch(`(https://jsonplaceholder.typicode.com/users/${userId}`
    );
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
    }
      const data = await response.json();
      return { name: data.name, email: data.email };
}     catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
      return { message: "Failed to fetch user data. please try again later." };
    }
}
    let userId = prompt("Enter user Id");

    fetchUserData(userId)
    .then((response) => response.json())
    .then((json) => console.log(json));
