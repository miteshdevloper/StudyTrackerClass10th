    const chapters = [
  "बड़े भाई साहब",
  "डायरी का एक पन्ना",
  "तताँरा-वामीरो कथा",
  "तीसरी कसम के शिल्पकार शैलेंद्र",
  "गिरगिट",
  "अब कहाँ दूसरे के दुख से दुखी होने वाले",
  "पतझर में टूटी पत्तियाँ",
  "कारतूस",
  "कबीर - साखी",
  "मीरा - पद",
  "बिहारी - दोहे",
  "मनुष्यता",
  "पर्वत प्रदेश में पावस",
  "तोप",
  "कर चले हम फ़िदा",
  "आत्मत्राण",
  "हरिहर काका",
  "सपनों के-से दिन",
  "टोपी शुक्ला",
  "पदबंध",
  "रचना के आधार पर वाक्य रूपांतरण",
  "समास",
  "मुहावरे",
  "अलंकार",
  "अनुच्छेद लेखन",
  "पत्र लेखन",
  "संदेश लेखन",
  "विज्ञापन लेखन"
];

const container = document.getElementById('chapters');

function getTodayDateString() {
  const now = new Date();
  return now.toISOString().split("T")[0]; // "YYYY-MM-DD"
}

chapters.forEach((title, index) => {
  const id = `chap-${index}`;
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>${title}</h2>
    <div class="progress-container">
      <div class="progress-bar" id="progress-${id}">0%</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>कार्य</th>
          <th>पूर्ण?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>अध्याय पढ़ा</td>
          <td><input type="checkbox" data-id="${id}" data-task="read"></td>
        </tr>
        <tr>
          <td>प्रश्न हल किए</td>
          <td><input type="checkbox" data-id="${id}" data-task="questions"></td>
        </tr>
        <tr>
          <td>वीडियो देखा</td>
          <td><input type="checkbox" data-id="${id}" data-task="video"></td>
        </tr>
      </tbody>
    </table>
  `;
  container.appendChild(section);
});

document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  const key = `${cb.dataset.id}-${cb.dataset.task}`;
  if (localStorage.getItem(key)) cb.checked = true;

  cb.addEventListener('change', () => {
    const today = getTodayDateString();
    if (cb.checked) {
      localStorage.setItem(key, today); // Save today's date
    } else {
      localStorage.removeItem(key);
    }
    updateProgress(cb.dataset.id);
  });

  updateProgress(cb.dataset.id);
});

function updateProgress(chapId) {
  const boxes = document.querySelectorAll(`input[data-id="${chapId}"]`);
  const total = boxes.length;
  let checked = 0;
  boxes.forEach(b => { if (b.checked) checked++; });
  const percent = total ? Math.round((checked / total) * 100) : 0;
  const bar = document.getElementById(`progress-${chapId}`);
  bar.style.width = percent + '%';
  bar.textContent = percent + '%';

  const rewardKey = `rewarded-${chapId}`;
  if (percent === 100 && localStorage.getItem(rewardKey) !== 'true') {
    showReward();
    localStorage.setItem(rewardKey, 'true');
  }
  if (percent < 100) {
    localStorage.removeItem(rewardKey);
  }
}

function showReward() {
  const reward = document.createElement('div');
  reward.textContent = '✔ आपने पूरा कर लिया!';
  reward.style.position = 'fixed';
  reward.style.top = '20px';
  reward.style.right = '20px';
  reward.style.background = '#4caf50';
  reward.style.color = 'white';
  reward.style.padding = '15px 20px';
  reward.style.borderRadius = '8px';
  reward.style.fontSize = '16px';
  reward.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
  reward.style.zIndex = '1000';
  reward.style.opacity = '0';

  document.body.appendChild(reward);

  const audio = document.getElementById('reward-audio');
  if (audio) {
    audio.play().catch(() => {
      console.log('Audio playback blocked — interaction may be needed.');
    });
  }

  reward.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { reward.style.opacity = '1'; }, 10);
  setTimeout(() => { reward.style.opacity = '0'; }, 2500);
  setTimeout(() => { reward.remove(); }, 3000);
}
