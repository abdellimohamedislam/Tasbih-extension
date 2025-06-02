const tasbihs = [
  { arabic: "أستغفر الله", english: "Astaghfirullah" },
  { arabic: "سبحان الله", english: "SubhanAllah" },
  { arabic: "الحمد لله", english: "Alhamdulillah" },
  { arabic: "الله أكبر", english: "Allahu Akbar" }
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("tasbihReminder", {
    delayInMinutes: 1,
    periodInMinutes: 15
  });
});

chrome.alarms.onAlarm.addListener(() => {
  const dhikr = tasbihs[Math.floor(Math.random() * tasbihs.length)];
  const url = `reminder.html?arabic=${encodeURIComponent(dhikr.arabic)}&english=${encodeURIComponent(dhikr.english)}`;

  chrome.windows.create({
    url: url,
    type: "popup",
    width: 400,
    height: 300
  });
});
