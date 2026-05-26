
const clients = [
  {
    name: "Анна Смирнова",
    service: "Маникюр",
    date: "24.05.2026"
  },
  {
    name: "Ирина Коваль",
    service: "Окрашивание",
    date: "25.05.2026"
  },
  {
    name: "Мария Иванова",
    service: "Стрижка",
    date: "26.05.2026"
  }
];

const freeSlots = ["11:00", "15:00", "17:00"];

const table = document.getElementById("clientTable");
clients.forEach(client => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${client.name}</td>
    <td>${client.service}</td>
    <td>${client.date}</td>
  `;
  table.appendChild(row);
});

const slotsList = document.getElementById("freeSlots");
freeSlots.forEach(slot => {
  const li = document.createElement("li");
  li.textContent = `Свободное окно: ${slot}`;
  slotsList.appendChild(li);
});

document.querySelector(".save-btn").addEventListener("click", () => {
  alert("Заметка сохранена");
});
