const defaultChapters = [
  {
    id: 'chem1',
    title: 'Chemical Reactions and Equations',
    topics: [
      'Chemical Equations',
      'Balanced Chemical Equation',
      'Combination Reaction',
      'Decomposition Reaction',
      'Displacement Reaction',
      'Double Displacement Reaction',
      'Precipitation Reaction',
      'Endothermic and Exothermic Reactions',
      'Oxidation and Reduction (Redox Reactions)',
      'Corrosion and Rancidity'
    ]
  },
  {
    id: 'acidbase',
    title: 'Acids, Bases and Salts',
    topics: [
      'Definitions of Acids and Bases',
      'Indicators',
      'Chemical Properties and Uses',
      'Neutralization Reaction',
      'Concept of pH Scale',
      'Importance of pH in Everyday Life',
      'Preparation and Uses of Common Salts'
    ]
  },
  {
    id: 'metals',
    title: 'Metals and Non-metals',
    topics: [
      'Physical Properties of Metals and Non-metals',
      'Chemical Properties of Metals',
      'Reactivity Series',
      'Formation and Properties of Ionic Compounds',
      'Basic Metallurgical Processes',
      'Corrosion and its Prevention'
    ]
  },
  {
    id: 'carbon',
    title: 'Carbon and its Compounds',
    topics: [
      'Covalent Bonds',
      'Versatile Nature of Carbon',
      'Hydrocarbons',
      'Homologous Series',
      'Nomenclature of Carbon Compounds',
      'Combustion',
      'Oxidation',
      'Addition Reaction',
      'Substitution Reaction',
      'Ethanol and Ethanoic Acid',
      'Soaps and Detergents'
    ]
  },
  {
    id: 'lifeproc',
    title: 'Life Processes',
    topics: [
      'Introduction to Life Processes',
      'Modes of Nutrition',
      'Nutrition in Plants',
      'Nutrition in Animals',
      'Aerobic and Anaerobic Respiration',
      'Respiration in Plants and Animals',
      'Transportation in Plants',
      'Transportation in Animals',
      'Excretion in Plants and Animals'
    ]
  },
  {
    id: 'control',
    title: 'Control and Coordination',
    topics: [
      'Tropic Movements in Plants',
      'Plant Hormones',
      'Voluntary, Involuntary, and Reflex Actions',
      'Human Nervous System',
      'Chemical Coordination (Endocrine System)',
      'Animal Hormones',
      'Feedback Mechanism'
    ]
  },
  {
    id: 'repro',
    title: 'How Do Organisms Reproduce?',
    topics: [
      'Asexual Reproduction',
      'Sexual Reproduction',
      'Sexual Reproduction in Flowering Plants',
      'Reproduction in Human Beings',
      'Reproductive Health'
    ]
  },
  {
    id: 'heredity',
    title: 'Heredity and Evolution',
    topics: [
      'Heredity and Variations',
      'Mendel’s Contribution',
      'Monohybrid and Dihybrid Crosses',
      'Sex Determination',
      'Evolution (Basic Concept)'
    ]
  },
  {
    id: 'light',
    title: 'Light – Reflection and Refraction',
    topics: [
      'Reflection of Light',
      'Laws of Reflection',
      'Images Formed by Plane Mirrors',
      'Spherical Mirrors and Their Images',
      'Mirror Formula and Magnification',
      'Refraction of Light',
      'Laws of Refraction',
      'Refractive Index',
      'Refraction through Spherical Lenses',
      'Lens Formula and Power of a Lens'
    ]
  },
  {
    id: 'eye',
    title: 'The Human Eye and the Colourful World',
    topics: [
      'Structure of the Human Eye',
      'Defects of Vision and their Correction',
      'Refraction of Light through a Prism',
      'Dispersion of Light',
      'Atmospheric Refraction',
      'Scattering of Light'
    ]
  },
  {
    id: 'electricity',
    title: 'Electricity',
    topics: [
      'Electric Current',
      'Electric Potential and Potential Difference',
      'Ohm’s Law',
      'Resistance and Resistivity',
      'Resistors in Series and Parallel',
      'Heating Effect of Electric Current',
      'Electric Power',
      'Commercial Unit of Electrical Energy'
    ]
  },
  {
    id: 'magnetism',
    title: 'Magnetic Effects of Electric Current',
    topics: [
      'Magnetic Field and Field Lines',
      'Magnetic Field due to a Current-Carrying Conductor',
      'Force on a Current-Carrying Conductor',
      'Electric Motor',
      'Electromagnetic Induction',
      'Electric Generator',
      'Direct Current and Alternating Current',
      'Domestic Electric Circuits'
    ]
  },
  {
    id: 'enviro',
    title: 'Our Environment',
    topics: [
      'Ecosystem and Its Components',
      'Food Chain and Food Web',
      'Trophic Levels and Energy Flow',
      'Bioaccumulation and Biomagnification',
      'Ozone Layer and its Depletion',
      'Waste Production and Management'
    ]
  }
];

const container = document.getElementById('chapters');

function getTodayDateString() {
  const now = new Date();
  return now.toISOString().split("T")[0];
}

// Render sections
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
          <th>Topic</th>
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
  chap.topics.forEach((topic, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${topic}</td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-solved"></td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-notes"></td>
      <td><input type="checkbox" data-id="${chap.id}-${i}-video"></td>
    `;
    tbody.appendChild(row);
  });
});

// Load and save progress
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
