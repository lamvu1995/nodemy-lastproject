const tableBody = document.querySelector('#task-table tbody');
function renderTasks() {
  fetch('https://backoffice.nodemy.vn/api/tasks?pagination[page]=1&pagination[pageSize]=4&sort[0]=id:desc')
    .then(response => response.json())
    .then(data => {
      // Thêm các tasks vào bảng HTML
      data.data.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${task.id}</td>
          <td>${task.attributes.title}</td>
          <td>${task.attributes.date}</td>
          <td>${task.attributes.complete}</td>
          <td>${task.attributes.createdAt}</td>
          <td>${task.attributes.updatedAt}</td>
          <td>${task.attributes.publishedAt}</td>
          <td>
            <button class="edit-btn" data-id="${task.id}">Edit</button>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
      // Xử lý sự kiện click vào các button trong bảng
    })
}

renderTasks();