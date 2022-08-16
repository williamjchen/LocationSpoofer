document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleBtn").classList.toggle('active')

  let status = document.getElementById("OnStatus")
  status.innerHTML = status.innerHTML === "On"? "Off" : "On"
});