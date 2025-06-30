  const pd = document.getElementById('pd');
  const lock = document.getElementById('lock');

  let mobileUnlockMode = false;

  // ----- Desktop: Drag and Drop -----
  pd.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'pd');
  });

  lock.addEventListener('dragover', (e) => {
    e.preventDefault();
    lock.classList.add('hovered');
  });

  lock.addEventListener('dragleave', () => {
    lock.classList.remove('hovered');
  });

  lock.addEventListener('drop', (e) => {
    e.preventDefault();
    lock.classList.remove('hovered');

    const data = e.dataTransfer.getData('text/plain');
    if (data === 'pd') {
      window.location.href = 'jounral.html';
    }
  });

  // ----- Mobile: Tap PD then Tap Lock -----
  pd.addEventListener('click', () => {
    // user pressed "key"
    mobileUnlockMode = true;
    pd.textContent = 'Key Selected';
    pd.style.backgroundColor = '#ff9900';
    setTimeout(() => {
      mobileUnlockMode = false;
      pd.textContent = 'PD';
      pd.style.backgroundColor = '#ffcc00';
    }, 4000); // Reset after 4s
  });

  lock.addEventListener('click', () => {
    if (mobileUnlockMode) {
      window.location.href = 'C:/Users/HP/Desktop/web and games/web based projects/STUDTYTRACKER/jounral.html';
    }
  });
