const defaultData = [
  {
    id: 'chem1',
    title: 'Chemical Reactions and Equations',
    topics: [
      { pos: 1, name: 'Chemical Equations' },
      { pos: 2, name: 'Balanced Chemical Equation' },
      { pos: 3, name: 'Combination Reaction' },
      { pos: 4, name: 'Decomposition Reaction' },
      { pos: 5, name: 'Displacement Reaction' },
      { pos: 6, name: 'Double Displacement Reaction' },
      { pos: 7, name: 'Precipitation Reaction' },
      { pos: 8, name: 'Endothermic and Exothermic Reactions' },
      { pos: 9, name: 'Oxidation and Reduction (Redox Reactions)' },
      { pos: 10, name: 'Corrosion and Rancidity' }
    ]
  },
  {
    id: 'acidbase',
    title: 'Acids, Bases and Salts',
    topics: [
      { pos: 1, name: 'Definitions of Acids and Bases' },
      { pos: 2, name: 'Indicators' },
      { pos: 3, name: 'Chemical Properties and Uses' },
      { pos: 4, name: 'Neutralization Reaction' },
      { pos: 5, name: 'Concept of pH Scale' },
      { pos: 6, name: 'Importance of pH in Everyday Life' },
      { pos: 7, name: 'Preparation and Uses of Common Salts' }
    ]
  },
  {
    id: 'metals',
    title: 'Metals and Non-metals',
    topics: [
      { pos: 1, name: 'Physical Properties of Metals and Non-metals' },
      { pos: 2, name: 'Chemical Properties of Metals' },
      { pos: 3, name: 'Reactivity Series' },
      { pos: 4, name: 'Formation and Properties of Ionic Compounds' },
      { pos: 5, name: 'Basic Metallurgical Processes' },
      { pos: 6, name: 'Corrosion and its Prevention' }
    ]
  },
  {
    id: 'carbon',
    title: 'Carbon and its Compounds',
    topics: [
      { pos: 1, name: 'Covalent Bonds' },
      { pos: 2, name: 'Versatile Nature of Carbon' },
      { pos: 3, name: 'Hydrocarbons' },
      { pos: 4, name: 'Homologous Series' },
      { pos: 5, name: 'Nomenclature of Carbon Compounds' },
      { pos: 6, name: 'Combustion' },
      { pos: 7, name: 'Oxidation' },
      { pos: 8, name: 'Addition Reaction' },
      { pos: 9, name: 'Substitution Reaction' },
      { pos: 10, name: 'Ethanol and Ethanoic Acid' },
      { pos: 11, name: 'Soaps and Detergents' }
    ]
  },
  {
    id: 'lifeproc',
    title: 'Life Processes',
    topics: [
      { pos: 1, name: 'Introduction to Life Processes' },
      { pos: 2, name: 'Modes of Nutrition' },
      { pos: 3, name: 'Nutrition in Plants' },
      { pos: 4, name: 'Nutrition in Animals' },
      { pos: 5, name: 'Aerobic and Anaerobic Respiration' },
      { pos: 6, name: 'Respiration in Plants and Animals' },
      { pos: 7, name: 'Transportation in Plants' },
      { pos: 8, name: 'Transportation in Animals' },
      { pos: 9, name: 'Excretion in Plants and Animals' }
    ]
  },
  {
    id: 'control',
    title: 'Control and Coordination',
    topics: [
      { pos: 1, name: 'Tropic Movements in Plants' },
      { pos: 2, name: 'Plant Hormones' },
      { pos: 3, name: 'Voluntary, Involuntary, and Reflex Actions' },
      { pos: 4, name: 'Human Nervous System' },
      { pos: 5, name: 'Chemical Coordination (Endocrine System)' },
      { pos: 6, name: 'Animal Hormones' },
      { pos: 7, name: 'Feedback Mechanism' }
    ]
  },
  {
    id: 'repro',
    title: 'How Do Organisms Reproduce?',
    topics: [
      { pos: 1, name: 'Asexual Reproduction' },
      { pos: 2, name: 'Sexual Reproduction' },
      { pos: 3, name: 'Sexual Reproduction in Flowering Plants' },
      { pos: 4, name: 'Reproduction in Human Beings' },
      { pos: 5, name: 'Reproductive Health' }
    ]
  },
  {
    id: 'heredity',
    title: 'Heredity and Evolution',
    topics: [
      { pos: 1, name: 'Heredity and Variations' },
      { pos: 2, name: 'Mendel’s Contribution' },
      { pos: 3, name: 'Monohybrid and Dihybrid Crosses' },
      { pos: 4, name: 'Sex Determination' },
      { pos: 5, name: 'Evolution (Basic Concept)' }
    ]
  },
  {
    id: 'light',
    title: 'Light – Reflection and Refraction',
    topics: [
      { pos: 1, name: 'Reflection of Light' },
      { pos: 2, name: 'Laws of Reflection' },
      { pos: 3, name: 'Images Formed by Plane Mirrors' },
      { pos: 4, name: 'Spherical Mirrors and Their Images' },
      { pos: 5, name: 'Mirror Formula and Magnification' },
      { pos: 6, name: 'Refraction of Light' },
      { pos: 7, name: 'Laws of Refraction' },
      { pos: 8, name: 'Refractive Index' },
      { pos: 9, name: 'Refraction through Spherical Lenses' },
      { pos: 10, name: 'Lens Formula and Power of a Lens' }
    ]
  },
  {
    id: 'eye',
    title: 'The Human Eye and the Colourful World',
    topics: [
      { pos: 1, name: 'Structure of the Human Eye' },
      { pos: 2, name: 'Defects of Vision and their Correction' },
      { pos: 3, name: 'Refraction of Light through a Prism' },
      { pos: 4, name: 'Dispersion of Light' },
      { pos: 5, name: 'Atmospheric Refraction' },
      { pos: 6, name: 'Scattering of Light' }
    ]
  },
  {
    id: 'electricity',
    title: 'Electricity',
    topics: [
      { pos: 1, name: 'Electric Current' },
      { pos: 2, name: 'Electric Potential and Potential Difference' },
      { pos: 3, name: 'Ohm’s Law' },
      { pos: 4, name: 'Resistance and Resistivity' },
      { pos: 5, name: 'Resistors in Series and Parallel' },
      { pos: 6, name: 'Heating Effect of Electric Current' },
      { pos: 7, name: 'Electric Power' },
      { pos: 8, name: 'Commercial Unit of Electrical Energy' }
    ]
  },
  {
    id: 'magnetism',
    title: 'Magnetic Effects of Electric Current',
    topics: [
      { pos: 1, name: 'Magnetic Field and Field Lines' },
      { pos: 2, name: 'Magnetic Field due to a Current-Carrying Conductor' },
      { pos: 3, name: 'Force on a Current-Carrying Conductor' },
      { pos: 4, name: 'Electric Motor' },
      { pos: 5, name: 'Electromagnetic Induction' },
      { pos: 6, name: 'Electric Generator' },
      { pos: 7, name: 'Direct Current and Alternating Current' },
      { pos: 8, name: 'Domestic Electric Circuits' }
    ]
  },
  {
    id: 'enviro',
    title: 'Our Environment',
    topics: [
      { pos: 1, name: 'Ecosystem and Its Components' },
      { pos: 2, name: 'Food Chain and Food Web' },
      { pos: 3, name: 'Trophic Levels and Energy Flow' },
      { pos: 4, name: 'Bioaccumulation and Biomagnification' },
      { pos: 5, name: 'Ozone Layer and its Depletion' },
      { pos: 6, name: 'Waste Production and Management' }
    ]
  }
];

let data = JSON.parse(localStorage.getItem('scienceProgress')) || [];
const container = document.getElementById('chapters');

function saveData() {
  localStorage.setItem('scienceProgress', JSON.stringify(data));
}

function render() {
  container.innerHTML = '';
  data.forEach((chap, chapIndex) => {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2 contenteditable="true" oninput="updateTitle(${chapIndex}, this.innerText)">${chap.title}</h2>
      <div class="progress-container">
        <div class="progress-bar" id="progress-${chap.id}">0%</div>
      </div>
      <button onclick="addTopic(${chapIndex})">Add Topic</button>
      <div class="table-container">
        <table id="table-${chap.id}">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Topic</th>
              <th>Video</th>
              <th>Notes</th>
              <th>Questions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    `;
    container.appendChild(section);
    renderTopics(chapIndex);
  });
}

function renderTopics(chapIndex) {
  const chap = data[chapIndex];
  const tbody = document.querySelector(`#table-${chap.id} tbody`);
  tbody.innerHTML = '';

  chap.topics.forEach((topic, topicIndex) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td contenteditable="true" oninput="updatePos(${chapIndex}, ${topicIndex}, this.innerText)">${topic.pos}</td>
      <td contenteditable="true" oninput="updateTopic(${chapIndex}, ${topicIndex}, this.innerText)">${topic.name}</td>
      <td><input type="checkbox" data-id="${chap.id}-${topicIndex}-0"></td>
      <td><input type="checkbox" data-id="${chap.id}-${topicIndex}-1"></td>
      <td><input type="checkbox" data-id="${chap.id}-${topicIndex}-2"></td>
    `;
    tbody.appendChild(tr);

    let clickCount = 0;
    let clickTimer = null;
    tr.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 3) {
        if (confirm("Do you want to delete this topic?")) {
          deleteTopic(chapIndex, topicIndex);
        }
        clearTimeout(clickTimer);
        clickCount = 0;
      } else {
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 600);
      }
    });

    tr.querySelectorAll('input[type=checkbox]').forEach(cb => {
      const saved = localStorage.getItem(cb.dataset.id);
      if (saved) cb.checked = true;

      cb.onchange = () => {
        if (cb.checked) {
          localStorage.setItem(cb.dataset.id, new Date().toISOString().split("T")[0]);
        } else {
          localStorage.removeItem(cb.dataset.id);
        }
        updateProgress(chap.id);
      };
    });
  });

  updateProgress(chap.id);
}

function addTopic(chapIndex) {
  const name = prompt("Enter topic name:");
  if (name && name.trim()) {
    data[chapIndex].topics.push({ pos: data[chapIndex].topics.length + 1, name: name.trim() });
    saveData();
    render();
  }
}

function deleteTopic(chapIndex, topicIndex) {
  data[chapIndex].topics.splice(topicIndex, 1);
  saveData();
  render();
}

function updateTitle(chapIndex, text) {
  data[chapIndex].title = text.trim();
  saveData();
}

function updateTopic(chapIndex, topicIndex, text) {
  data[chapIndex].topics[topicIndex].name = text.trim();
  saveData();
}

function updatePos(chapIndex, topicIndex, text) {
  let num = parseInt(text);
  if (!isNaN(num) && num > 0) {
    data[chapIndex].topics[topicIndex].pos = num;
    data[chapIndex].topics.sort((a, b) => a.pos - b.pos);
    saveData();
    render();
  }
}

function updateProgress(chapId) {
  const boxes = document.querySelectorAll(`input[data-id^="${chapId}-"]`);
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
      console.log('Audio playback blocked.');
    });
  }

  reward.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { reward.style.opacity = '1'; }, 10);
  setTimeout(() => { reward.style.opacity = '0'; }, 2500);
  setTimeout(() => { reward.remove(); }, 3000);
}

render();
