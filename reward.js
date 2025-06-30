function showReward() {
  const reward = document.getElementById('reward');
  reward.style.display = 'block';
  
  gsap.fromTo(reward, 
    { scale: 0.5, opacity: 0 },
    { scale: 1.5, opacity: 1, duration: 0.5, ease: "back.out(2)" }
  );

  gsap.to(reward, {
    delay: 2,
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    onComplete: () => reward.style.display = 'none'
  });
}
