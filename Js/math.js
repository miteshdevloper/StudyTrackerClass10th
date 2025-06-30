const defaultChapters = [
  { id: 'real', title: 'Number Systems', parts: [
    'Fundamental Theorem of Arithmetic',
    'Proofs of Irrationality (√2, √3, √5)'
  ]},
  { id: 'poly', title: 'Polynomials', parts: [
    'Zeros of a Polynomial',
    'Relationship Between Zeros and Coefficients'
  ]},
  { id: 'linear', title: 'Pair of Linear Equations in Two Variables', parts: [
    'Graphical Method & Consistency',
    'Substitution Method',
    'Elimination Method',
    'Word Problems'
  ]},
  { id: 'quad', title: 'Quadratic Equations', parts: [
    'Factorization Method',
    'Quadratic Formula',
    'Discriminant & Nature of Roots',
    'Real‑life Word Problems'
  ]},
  { id: 'coord', title: 'Coordinate Geometry', parts: [
    'Distance Formula',
    'Section (Internal Division) Formula',
    'Graphs of Linear Equations'
  ]},
  { id: 'geometry', title: 'Geometry', parts: [
    'Similarity of Triangles',
    'Criteria for Similarity',
    'Tangent to a Circle'
  ]},
  { id: 'trig', title: 'Trigonometry', parts: [
    'Trigonometric Ratios of Acute Angles',
    'Proof of Ratios at 0°, 30°, 45°, 60°',
    'Identity sin²A + cos²A = 1'
  ]},
  { id: 'apptrig', title: 'Heights and Distances', parts: [
    'Simple Height & Distance Problems (≤ 2 triangles, angles 30°, 45°, 60°)'
  ]},
  { id: 'mensuration', title: 'Mensuration', parts: [
    'Areas of Sectors & Segments (60°, 90°, 120°)',
    'Surface Areas & Volumes of Sphere, Hemisphere, Cylinder, Cone'
  ]},
  { id: 'stats', title: 'Statistics & Probability', parts: [
    'Mean of Grouped Data',
    'Classical Probability – Simple Problems'
  ]}
];

const container = document.getElementById('chapters');

function getTodayDateString() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

// Create sections
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

// Load checkbox state + handle change
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

// Editable <h2> and <td>
document.addEventListener('click', (e) => {
  const target = e.target;

  // Only make editable if it's a chapter title or part name cell
  if (target.tagName === 'H2' || (target.tagName === 'TD' && target.cellIndex === 0)) {
    makeEditable(target);
  }
});

function makeEditable(element) {
  const originalText = element.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = originalText;
  input.style.width = '100%';
  input.style.fontSize = 'inherit';

  element.replaceWith(input);
  input.focus();

  input.addEventListener('blur', () => {
    const newText = input.value.trim() || originalText;
    const newEl = document.createElement(element.tagName);
    newEl.textContent = newText;
    input.replaceWith(newEl);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') input.blur();
  });
}
