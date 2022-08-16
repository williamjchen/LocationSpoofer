document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleBtn").classList.toggle('active')

  let status = document.getElementById("OnStatus")

  if (status.innerHTML === "On") {
    status.innerHTML = "Off"
    chrome.action.setIcon({
      path: {
          "16": "/images/Off_16.png",
          "32": "/images/Off_32.png",
          "48": "/images/Off_48.png",
          "128": "/images/Off_128.png"
      }
    })
  } else {
    status.innerHTML = "On"
    chrome.action.setIcon({
      path: {
          "16": "/images/On_16.png",
          "32": "/images/On_32.png",
          "48": "/images/On_48.png",
          "128": "/images/On_128.png"
      }
    })
  }
});