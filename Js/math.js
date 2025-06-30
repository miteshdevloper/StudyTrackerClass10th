const defaultChapters = [
  { id: 'real', title: 'Real Numbers', parts: ['Euclid\'s Division Lemma', 'Fundamental Theorem of Arithmetic', 'Decimal Representation of Rational Numbers'] },
  { id: 'poly', title: 'Polynomials', parts: ['Zeroes of a Polynomial', 'Relationship Between Zeroes and Coefficients', 'Division Algorithm for Polynomials'] },
  { id: 'linear', title: 'Pair of Linear Equations in Two Variables', parts: ['Graphical Solution', 'Algebraic Solution: Substitution', 'Algebraic Solution: Elimination', 'Conditions for Existence of Solutions'] },
  { id: 'quad', title: 'Quadratic Equations', parts: ['Solution by Factorization', 'Solution by Quadratic Formula', 'Discriminant and Nature of Roots'] },
  { id: 'ap', title: 'Arithmetic Progressions', parts: ['General Term of an AP', 'Sum of First n Terms', 'Word Problems on AP'] },
  { id: 'tri', title: 'Triangles', parts: ['Similarity of Triangles', 'Criteria for Similarity', 'Areas of Similar Triangles', 'Pythagorean Theorem'] },
  { id: 'coord', title: 'Coordinate Geometry', parts: ['Distance Formula', 'Section Formula', 'Area of Triangle', 'Concept of Slope'] },
  { id: 'trig', title: 'Introduction to Trigonometry', parts: ['Trigonometric Ratios of Acute Angles', 'Trigonometric Identities', 'Trig Ratios of Complementary Angles'] },
  { id: 'apptrig', title: 'Some Applications of Trigonometry', parts: ['Heights and Distances Problems'] },
  { id: 'circ', title: 'Circles', parts: ['Tangents to a Circle', 'Number of Tangents from a Point', 'Related Theorems'] },
  { id: 'area', title: 'Areas Related to Circles', parts: ['Areas of Sectors', 'Areas of Segments', 'Combined Plane Figures'] },
  { id: 'svol', title: 'Surface Areas and Volumes', parts: ['Surface Areas of Solids', 'Volumes of Solids', 'Combinations of Solids'] },
  { id: 'stats', title: 'Statistics', parts: ['Mean of Grouped/Ungrouped Data', 'Median', 'Mode', 'Cumulative Frequency Graph'] },
  { id: 'prob', title: 'Probability', parts: ['Basic Probability Concepts', 'Simple Probability Problems'] }
];

const container = document.getElementById('chapters');

function getTodayDateString() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

defaultChapters.forEach((chap) => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>${chap.title}</h2>
    <div class="progress-container">
      <div class="progress-bar" id="progress-${chap.id}">0%</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Part</th>
          <th>Question</th>
          <th>Notes</th>
          <th>Video</th>
        </tr>
      </thead>
      <tbody id="table-${chap.id}"></tbody>
    </table>
  `;
  container.appendChild(section);

  const tbody = document.getElementById(`table-${chap.id}`);
  chap.parts.forEach((part, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${part}</td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-solved"></td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-notes"></td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-video"></td>
    `;
    tbody.appendChild(row);
  });
});

// Checkbox event handling + load state
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  const key = cb.dataset.id;
  if (localStorage.getItem(key)) cb.checked = true;

  cb.addEventListener('change', () => {
    const today = getTodayDateString();
    if (cb.checked) {
      localStorage.setItem(key, today);
    } else {
      localStorage.removeItem(key);
    }
    updateProgress(key.split('-')[0]);
  });

  updateProgress(cb.dataset.id.split('-')[0]);
});

function updateProgress(chapId) {
  const checkboxes = document.querySelectorAll(`input[data-id^="${chapId}-"]`);
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percent = total ? Math.round((checked / total) * 100) : 0;

  const bar = document.getElementById(`progress-${chapId}`);
  bar.style.width = `${percent}%`;
  bar.textContent = `${percent}%`;

  const rewardKey = `rewarded-${chapId}`;
  if (percent === 100 && !localStorage.getItem(rewardKey)) {
    showReward();
    localStorage.setItem(rewardKey, 'true');
  } else if (percent < 100) {
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
    audio.play().catch(() => console.log('Audio playback blocked.'));
  }

  reward.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { reward.style.opacity = '1'; }, 10);
  setTimeout(() => { reward.style.opacity = '0'; }, 2500);
  setTimeout(() => { reward.remove(); }, 3000);
}
