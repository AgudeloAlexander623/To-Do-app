const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que se marque como completado
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}


// 1) Referencias
const themeToggleBtn = document.getElementById("themeToggleBtn");

// 2) Cargar preferencia guardada (si existe)
const savedTheme = localStorage.getItem("theme");                       // :contentReference[oaicite:0]{index=0}
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");                             // :contentReference[oaicite:1]{index=1}
    themeToggleBtn.textContent = "☀️ Modo claro";
}

// 3) Función para alternar tema
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");           // :contentReference[oaicite:2]{index=2}
    // Guardar la preferencia
    if (isDark) {
        localStorage.setItem("theme", "dark");                              // :contentReference[oaicite:3]{index=3}
        themeToggleBtn.textContent = "☀️ Modo claro";
    } else {
        localStorage.setItem("theme", "light");                             // :contentReference[oaicite:4]{index=4}
        themeToggleBtn.textContent = "🌙 Modo oscuro";
    }
}

// 4) Asignar evento al botón
themeToggleBtn.addEventListener("click", toggleTheme);
