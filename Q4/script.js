fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(todo => todo.completed && todo.id <= 50);
    const output = document.getElementById('output');
    filteredData.forEach(todo => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${todo.userId}</td><td>${todo.title}</td><td>${todo.completed}</td>`;
      output.appendChild(row);
    });
  })
  .catch(error => console.error(error));
