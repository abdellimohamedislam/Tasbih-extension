const intervalInput = document.getElementById("interval");
const status = document.getElementById("status");
const saveBtn = document.getElementById("save");

chrome.storage.sync.get("interval", (data) => {
  intervalInput.value = data.interval || 15;
});

saveBtn.addEventListener("click", () => {
  const interval = parseInt(intervalInput.value);
  if (interval > 0) {
    chrome.storage.sync.set({ interval });
    chrome.alarms.clear("tasbihReminder", () => {
      chrome.alarms.create("tasbihReminder", {
        delayInMinutes: 1,
        periodInMinutes: interval
      });
      status.textContent = `Saved! Reminders every ${interval} min.`;
    });
  }
});
