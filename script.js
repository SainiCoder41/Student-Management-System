function addStudent() {

    const name = document.getElementById("studentName").value;
    const course = document.getElementById("studentCourse").value;

    if (name === "" || course === "") {
        alert("Please enter student name and course.");
        return;
    }

    const table = document.getElementById("studentTable");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${course}</td>
        <td>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    table.appendChild(row);

    document.getElementById("studentName").value = "";
    document.getElementById("studentCourse").value = "";
}

function deleteStudent(button) {
    button.parentElement.parentElement.remove();
}