const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const calendar = document.getElementById("calendar");

months.forEach((month) => {
  const div = document.createElement("div");
  div.className = "month";

  div.onclick = () => {
    window.location.href = `letters/${month.toLowerCase()}.html`;
  };

  div.innerHTML = `<strong>${month}</strong>`;
  calendar.appendChild(div);
});
 