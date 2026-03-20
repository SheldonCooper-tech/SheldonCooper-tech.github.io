// Energy slider interaction
const energySlider = document.getElementById('energy-slider');
const energyText = document.getElementById('energy-text');
const energyPlan = document.getElementById('energy-plan');
const mockEnergy = document.getElementById('mock-energy-bar');
const mockPlan = document.getElementById('mock-plan');
const mockFill = mockEnergy.querySelector('.fill');

const energyConfigs = [
  { text: 'Very low', plan: '8min breathing + stretch', percent: 20 },
  { text: 'Low', plan: '10min walk + mobility', percent: 40 },
  { text: 'OK', plan: '18min strength + breath', percent: 65 },
  { text: 'Good', plan: '25min focused work', percent: 80 },
  { text: 'Peak', plan: '35min optimal session', percent: 100 }
];

energySlider.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  const config = energyConfigs[Math.floor(value / 20)];

  energyText.textContent = config.text;
  energyPlan.textContent = config.plan;

  mockFill.style.width = config.percent + '%';
  mockPlan.textContent = config.plan;
});

// Quiz interaction
let quizStep = 1;
let quizAnswers = {};

document.querySelectorAll('.quiz-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = btn.closest('.quiz-step');
    const value = btn.dataset.value;

    quizAnswers['step' + quizStep] = value;
    step.classList.remove('active');

    if (quizStep < 3) {
      quizStep++;
      document.querySelector(`[data-step="${quizStep}"]`).classList.add('active');
    } else {
      showQuizResult();
    }
  });
});

function showQuizResult() {
  const score = Object.values(quizAnswers).filter(v => v !== 'none').length;
  const result = document.getElementById('quiz-result');
  const title = document.getElementById('quiz-title');
  const desc = document.getElementById('quiz-desc');

  if (score >= 2) {
    title.textContent = 'Perfect fit!';
    desc.innerHTML = 'You're exactly who we built this for.';
  } else {
    title.textContent = 'Good fit';
    desc.innerHTML = 'This could really help you.';
  }

  result.style.display = 'block';
  document.getElementById('quiz').style.display = 'none';
}

// Feature hover
document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    const info = feature.dataset.info;
    const infoEl = document.getElementById('feature-info');
    infoEl.textContent = feature.querySelector('p').textContent;
  });
});

// Form
document.getElementById('main-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Sent!';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send application';
    btn.disabled = false;
  }, 2000);
});

// Smooth scroll
function scrollToForm() {
  document.getElementById('form-section').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
