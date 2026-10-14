const DOMAIN_CONFIG = {
  AICS: {
    label: 'AICS',
    title: 'Artificial Intelligence and Cybersecurity',
    roadmapCount: 4,
    roadmaps: [
      {
        title: 'Cyber Security Specialist',
        description: 'Builds defensive security habits and modern protection strategies for systems and networks.',
        icon: '🛡️',
        file: 'cyber-security-specialist.pdf',
        available: true
      },
      {
        title: 'AI Engineer',
        description: 'Explores systems, models, inference, and practical AI engineering workflows.',
        icon: '🤖',
        file: 'ai-engineer.pdf',
        available: true
      },
      {
        title: 'DevSecOps Engineer',
        description: 'Connects security, automation, and delivery across modern engineering operations.',
        icon: '🔐',
        file: 'devsecops-engineer.pdf',
        available: true
      },
      {
        title: 'Network Engineer',
        description: 'Covers the foundations of connectivity, protocols, routing, and internet infrastructure.',
        icon: '🌐',
        file: 'network-engineer.pdf',
        available: true
      }
    ]
  },
  CSDA: {
    label: 'CSDA',
    title: 'Computer Science and Data Analytics',
    roadmapCount: 5,
    roadmaps: [
      {
        title: 'Data Analyst',
        description: 'Focuses on understanding data patterns and turning raw information into insight.',
        icon: '📊',
        file: 'data-analyst.pdf',
        available: true
      },
      {
        title: 'Full Stack Developer',
        description: 'Covers the front-end and back-end foundations behind modern web applications.',
        icon: '💻',
        file: 'full-stack-developer.pdf',
        available: true
      },
      {
        title: 'Data Engineer',
        description: 'Designs data pipelines, systems, and foundations for reliable data flow.',
        icon: '🧰',
        file: 'data-engineer.pdf',
        available: true
      },
      {
        title: 'AI and Data Scientist',
        description: 'Builds statistical, mathematical, and experimental skills for data-driven intelligence.',
        icon: '📈',
        file: 'ai-and-data-scientist.pdf',
        available: true
      },
      {
        title: 'Computer Science Foundation',
        description: 'Strengthens core computing concepts, algorithms, and problem-solving foundations.',
        icon: '🧠',
        file: 'computer-science-foundation.pdf',
        available: true
      }
    ]
  }
};

const state = {
  currentStep: 1,
  selectedDomain: null,
  formValues: {
    fullName: '',
    course: '',
    specialization: ''
  }
};

const stepNodes = {
  step1: document.getElementById('step-1'),
  step2: document.getElementById('step-2'),
  step3: document.getElementById('step-3')
};

const form = document.getElementById('student-form');
const fullNameInput = document.getElementById('full-name');
const courseInput = document.getElementById('course');
const specializationInput = document.getElementById('specialization');
const roadmapHeading = document.getElementById('roadmap-heading');
const selectedDomainPill = document.getElementById('selected-domain-pill');
const roadmapGrid = document.getElementById('roadmap-grid');

function setStep(stepNumber) {
  state.currentStep = stepNumber;
  const steps = [stepNodes.step1, stepNodes.step2, stepNodes.step3];

  steps.forEach((step) => {
    const isMatch = Number(step.dataset.step) === stepNumber;
    step.hidden = !isMatch;
    step.classList.toggle('active', isMatch);
  });
}

function restoreFormValues() {
  fullNameInput.value = state.formValues.fullName;
  courseInput.value = state.formValues.course;
  specializationInput.value = state.formValues.specialization;
}

function validateForm() {
  const errors = {
    fullName: '',
    course: '',
    specialization: ''
  };

  if (!fullNameInput.value.trim()) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!courseInput.value) {
    errors.course = 'Please select your course.';
  }

  if (!specializationInput.value) {
    errors.specialization = 'Please select your specialization.';
  }

  document.getElementById('full-name-error').textContent = errors.fullName;
  document.getElementById('course-error').textContent = errors.course;
  document.getElementById('specialization-error').textContent = errors.specialization;

  return !Object.values(errors).some(Boolean);
}

function persistStudentValues() {
  state.formValues = {
    fullName: fullNameInput.value.trim(),
    course: courseInput.value,
    specialization: specializationInput.value
  };
}

function renderRoadmaps() {
  const config = state.selectedDomain && DOMAIN_CONFIG[state.selectedDomain];
  if (!config) {
    roadmapGrid.innerHTML = '';
    selectedDomainPill.textContent = 'Select a domain';
    roadmapHeading.textContent = 'Select a domain';
    return;
  }

  roadmapHeading.textContent = config.title;
  selectedDomainPill.textContent = `${config.label} • ${config.roadmapCount} ROADMAPS`;

  roadmapGrid.innerHTML = config.roadmaps
    .map((roadmap) => {
      const linkTag = roadmap.available
        ? `
          <a
            class="pdf-link"
            href="./public/pdfs/${roadmap.file}"
            target="_blank"
            rel="noreferrer"
            download
          >
            Open PDF
          </a>
        `
        : '<button type="button" class="pdf-link unavailable" disabled aria-disabled="true">PDF coming soon</button>';

      return `
        <article class="roadmap-card" aria-label="${roadmap.title}">
          <div class="roadmap-card-header">
            <span class="roadmap-icon" aria-hidden="true">${roadmap.icon}</span>
            <span class="roadmap-domain-tag">${config.label}</span>
          </div>
          <div>
            <h3>${roadmap.title}</h3>
          </div>
          <p>${roadmap.description}</p>
          <div class="roadmap-card-action">
            ${linkTag}
          </div>
        </article>
      `;
    })
    .join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  persistStudentValues();

  if (!validateForm()) {
    return;
  }

  setStep(2);
});

document.querySelectorAll('.domain-card').forEach((button) => {
  button.addEventListener('click', () => {
    state.selectedDomain = button.dataset.domain;
    setStep(3);
    renderRoadmaps();
  });
});

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'back-to-step-1') {
      setStep(1);
      restoreFormValues();
    }

    if (action === 'back-to-step-2') {
      setStep(2);
    }
  });
});

fullNameInput.addEventListener('input', () => {
  document.getElementById('full-name-error').textContent = '';
  persistStudentValues();
});

courseInput.addEventListener('change', () => {
  document.getElementById('course-error').textContent = '';
  persistStudentValues();
});

specializationInput.addEventListener('change', () => {
  document.getElementById('specialization-error').textContent = '';
  persistStudentValues();
});

restoreFormValues();
setStep(1);
