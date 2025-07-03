const defaultData = [
  {
    id: "history1",
    title: "History: The Rise of Nationalism in Europe",
    topics: [
      { pos: 1, name: "The French Revolution and the Idea of the Nation" },
      { pos: 2, name: "The Making of Nationalism in Europe" },
      { pos: 3, name: "The Age of Revolutions (1830-1848)" },
      { pos: 4, name: "The Making of Germany and Italy" },
      { pos: 5, name: "Visualising the Nation" },
      { pos: 6, name: "Nationalism and Imperialism" }
    ]
  },
  {
    id: "history2",
    title: "History: Nationalism in India",
    topics: [
      { pos: 1, name: "The First World War, Khilafat and Non-Cooperation" },
      { pos: 2, name: "Differing Strands within the Movement" },
      { pos: 3, name: "Towards Civil Disobedience" },
      { pos: 4, name: "The Salt March and the Civil Disobedience Movement" },
      { pos: 5, name: "How Participants Saw the Movement" },
      { pos: 6, name: "The Limits of Civil Disobedience" },
      { pos: 7, name: "The Sense of Collective Belonging" }
    ]
  },
  {
    id: "history3",
    title: "History: The Making of a Global World",
    topics: [
      { pos: 1, name: "The Pre-Modern World" },
      { pos: 2, name: "The Nineteenth Century (1815-1914)" },
      { pos: 3, name: "The Inter-war Economy" },
      { pos: 4, name: "Rebuilding a World Economy: The Post-war Era" },
      { pos: 5, name: "The End of Bretton Woods and the Beginning of Globalisation" }
    ]
  },
  {
    id: "history4",
    title: "History: The Age of Industrialization",
    topics: [
      { pos: 1, name: "Before the Industrial Revolution" },
      { pos: 2, name: "Hand Labour and Steam Power" },
      { pos: 3, name: "Industrialization in the Colonies" },
      { pos: 4, name: "Factories Come Up" },
      { pos: 5, name: "The Peculiarities of Industrial Growth" },
      { pos: 6, name: "Market for Goods" }
    ]
  },
  {
    id: "history5",
    title: "History: Print Culture and the Modern World",
    topics: [
      { pos: 1, name: "The First Printed Books" },
      { pos: 2, name: "Print Comes to Europe" },
      { pos: 3, name: "The Print Revolution and its Impact" },
      { pos: 4, name: "The Reading Mania" },
      { pos: 5, name: "Reason and Revolution (18th Century)" },
      { pos: 6, name: "India and the World of Print" },
      { pos: 7, name: "Religious Reform and Public Debates" },
      { pos: 8, name: "New Forms of Publication" },
      { pos: 9, name: "Print and Censorship" }
    ]
  },
  {
    id: "geo1",
    title: "Geography: Resources and Development",
    topics: [
      { pos: 1, name: "Types of Resources" },
      { pos: 2, name: "Development of Resources" },
      { pos: 3, name: "Resource Planning in India" },
      { pos: 4, name: "Land Resources" },
      { pos: 5, name: "Land Degradation and Conservation Measures" },
      { pos: 6, name: "Soil as a Resource" },
      { pos: 7, name: "Soil Erosion and Soil Conservation" }
    ]
  },
  {
    id: "geo2",
    title: "Geography: Forest and Wildlife Resources",
    topics: [
      { pos: 1, name: "Flora and Fauna in India" },
      { pos: 2, name: "Conservation of Forest and Wildlife in India" },
      { pos: 3, name: "Types and Distribution of Forests and Wildlife Resources" },
      { pos: 4, name: "Community and Conservation" }
    ]
  },
  {
    id: "geo3",
    title: "Geography: Water Resources",
    topics: [
      { pos: 1, name: "Water Scarcity and the Need for Water Conservation and Management" },
      { pos: 2, name: "Multi-Purpose River Projects and Integrated Water Resources Management" },
      { pos: 3, name: "Rainwater Harvesting" }
    ]
  },
  {
    id: "geo4",
    title: "Geography: Agriculture",
    topics: [
      { pos: 1, name: "Types of Farming" },
      { pos: 2, name: "Cropping Pattern" },
      { pos: 3, name: "Major Crops" },
      { pos: 4, name: "Food Security" },
      { pos: 5, name: "Impact of Globalisation on Agriculture" }
    ]
  },
  {
    id: "geo5",
    title: "Geography: Minerals and Energy Resources",
    topics: [
      { pos: 1, name: "What is a Mineral?" },
      { pos: 2, name: "Mode of Occurrence of Minerals" },
      { pos: 3, name: "Distribution of Minerals in India" },
      { pos: 4, name: "Conservation of Minerals" },
      { pos: 5, name: "Energy Resources" },
      { pos: 6, name: "Conservation of Energy Resources" }
    ]
  },
  {
    id: "geo6",
    title: "Geography: Manufacturing Industries",
    topics: [
      { pos: 1, name: "Importance of Manufacturing" },
      { pos: 2, name: "Contribution of Industry to National Economy" },
      { pos: 3, name: "Industrial Location" },
      { pos: 4, name: "Classification of Industries" },
      { pos: 5, name: "Agro-based Industries" },
      { pos: 6, name: "Mineral-based Industries" },
      { pos: 7, name: "Industrial Pollution and Environmental Degradation" },
      { pos: 8, name: "Control of Environmental Degradation" }
    ]
  },
  {
    id: "geo7",
    title: "Geography: Lifelines of National Economy",
    topics: [
      { pos: 1, name: "Transport: Roadways, Railways, Pipelines, Waterways, Airways" },
      { pos: 2, name: "Communication: Mass and Personal Communication" },
      { pos: 3, name: "International Trade and Role of Tourism" }
    ]
  },
  {
    id: "civics1",
    title: "Political Science: Power-Sharing",
    topics: [
      { pos: 1, name: "Case Studies of Belgium and Sri Lanka" },
      { pos: 2, name: "Why is Power-Sharing Desirable?" },
      { pos: 3, name: "Forms of Power-Sharing" }
    ]
  },
  {
    id: "civics2",
    title: "Political Science: Federalism",
    topics: [
      { pos: 1, name: "What is Federalism?" },
      { pos: 2, name: "What Makes India a Federal Country?" },
      { pos: 3, name: "How is Federalism Practised?" },
      { pos: 4, name: "Decentralisation in India" }
    ]
  },
  {
    id: "civics3",
    title: "Political Science: Gender, Religion and Caste",
    topics: [
      { pos: 1, name: "Gender and Politics" },
      { pos: 2, name: "Religion, Communalism and Politics" },
      { pos: 3, name: "Caste and Politics" }
    ]
  },
  {
    id: "civics4",
    title: "Political Science: Political Parties",
    topics: [
      { pos: 1, name: "Why Do We Need Political Parties?" },
      { pos: 2, name: "How Many Parties Should We Have?" },
      { pos: 3, name: "National Parties" },
      { pos: 4, name: "State Parties" },
      { pos: 5, name: "Challenges to Political Parties" },
      { pos: 6, name: "How Can Parties be Reformed?" }
    ]
  },
  {
    id: "civics5",
    title: "Political Science: Outcomes of Democracy",
    topics: [
      { pos: 1, name: "How Do We Assess Democracy's Outcomes?" },
      { pos: 2, name: "Accountable, Responsive and Legitimate Government" },
      { pos: 3, name: "Economic Growth and Development" },
      { pos: 4, name: "Reduction of Inequality and Poverty" },
      { pos: 5, name: "Accommodation of Social Diversity" },
      { pos: 6, name: "Dignity and Freedom of the Citizens" }
    ]
  },
  {
    id: "eco1",
    title: "Economics: Development",
    topics: [
      { pos: 1, name: "What Development Promises – Different People, Different Goals" },
      { pos: 2, name: "Income and Other Goals" },
      { pos: 3, name: "National Development" },
      { pos: 4, name: "How to Compare Different Countries or States?" },
      { pos: 5, name: "Public Facilities" },
      { pos: 6, name: "Sustainability of Development" }
    ]
  },
  {
    id: "eco2",
    title: "Economics: Sectors of the Indian Economy",
    topics: [
      { pos: 1, name: "Sectors of Economic Activities" },
      { pos: 2, name: "Comparing the Three Sectors" },
      { pos: 3, name: "Primary, Secondary and Tertiary Sectors in India" },
      { pos: 4, name: "Division of Sectors as Organised and Unorganised" },
      { pos: 5, name: "Sectors in Terms of Ownership: Public and Private Sectors" }
    ]
  },
  {
    id: "eco3",
    title: "Economics: Money and Credit",
    topics: [
      { pos: 1, name: "Money as a Medium of Exchange" },
      { pos: 2, name: "Modern Forms of Money" },
      { pos: 3, name: "Loan Activities of Banks" },
      { pos: 4, name: "Two Different Credit Situations" },
      { pos: 5, name: "Terms of Credit" },
      { pos: 6, name: "Formal Sector Credit in India" },
      { pos: 7, name: "Self-Help Groups for the Poor" }
    ]
  },
  {
    id: "eco4",
    title: "Economics: Globalisation and the Indian Economy",
    topics: [
      { pos: 1, name: "Production Across Countries" },
      { pos: 2, name: "Interlinking Production Across Countries" },
      { pos: 3, name: "What is Globalisation?" },
      { pos: 4, name: "Factors that Enabled Globalisation" },
      { pos: 5, name: "World Trade Organisation (WTO)" },
      { pos: 6, name: "Impact of Globalisation in India" },
      { pos: 7, name: "The Struggle for a Fair Globalisation" }
    ]
  }
];

let data = JSON.parse(localStorage.getItem('sstProgress'));
if (!data || !Array.isArray(data) || data.length === 0) {
  data = defaultData;
  saveData();
}
console.log("Loaded chapters:", data);

const container = document.getElementById('chapters');

function saveData() {
  localStorage.setItem('sstProgress', JSON.stringify(data));
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
      const stored = localStorage.getItem(cb.dataset.id);
      if (stored) cb.checked = true;

      cb.onchange = () => {
        if (cb.checked) {
          const date = new Date().toISOString().split("T")[0];
          localStorage.setItem(cb.dataset.id, date);
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
      console.log('Audio playback blocked');
    });
  }

  reward.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { reward.style.opacity = '1'; }, 10);
  setTimeout(() => { reward.style.opacity = '0'; }, 2500);
  setTimeout(() => { reward.remove(); }, 3000);
}

// Wait for DOM to load before rendering
document.addEventListener("DOMContentLoaded", function () {
  render();
});
