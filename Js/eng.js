const chapters = [
  "A Letter to God", 
  "Nelson Mandela: Long Walk to Freedom",
  "Two Stories about Flying",
  "From the Diary of Anne Frank",
  "The Hundred Dresses–I",
  "The Hundred Dresses–II",
  "Glimpses of India",
  "Mijbil the Otter",
  "Madam Rides the Bus",
  "The Sermon at Benares",
  "The Proposal",
  "Dust of Snow",
  "Fire and Ice",
  "A Tiger in the Zoo",
  "How to Tell Wild Animals",
  "The Ball Poem",
  "Amanda!",
  "Animals",
  "The Trees",
  "Fog",
  "The Tale of Custard the Dragon",
  "For Anne Gregory",
  "A Triumph of Surgery",
  "The Thief’s Story",
  "The Midnight Visitor",
  "A Question of Trust",
  "Footprints without Feet",
  "The Making of a Scientist",
  "The Necklace",
  "Bholi",
  "The Book That Saved the Earth"
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
          <th>Task</th>
          <th>Done?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chapter Read</td>
          <td><input type="checkbox" data-id="${id}" data-task="read"></td>
        </tr>
        <tr>
          <td>Solved Questions</td>
          <td><input type="checkbox" data-id="${id}" data-task="questions"></td>
        </tr>
        <tr>
          <td>Watched Video</td>
          <td><input type="checkbox" data-id="${id}" data-task="video"></td>
        </tr>
      </tbody>
    </table>
  `;
  container.appendChild(section);
});

document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  const key = `${cb.dataset.id}-${cb.dataset.task}`;
  if (localStorage.getItem(key)) cb.checked = true; // Restore if a date exists

  cb.addEventListener('change', () => {
    const today = getTodayDateString();
    if (cb.checked) {
      localStorage.setItem(key, today); // Save today's date instead of 'true'
    } else {
      localStorage.removeItem(key);
    }
    updateProgress(cb.dataset.id);
  });

  updateProgress(cb.dataset.id); // initialize progress
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
  reward.textContent = '✔ You did it!';
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
