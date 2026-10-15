const COMPARISON_CRITERIA = [
  ['A', 'Fresher Entry Accessibility', 'higher = easier entry'],
  ['C', 'Learning Curve Manageability', 'higher = more manageable'],
  ['D', 'Mathematics Requirement', 'higher = more maths'],
  ['E', 'Production Coding Intensity', 'higher = more coding'],
  ['F', 'Future Career Growth Trajectory', 'higher = stronger'],
  ['G', 'AI Replacement and Automation Exposure', 'higher = more exposed'],
  ['H', 'Hybrid-Degree Institutional Entry Barrier', 'higher = bigger barrier'],
  ['I', 'Remote Job Accessibility', 'higher = more remote'],
  ['K', 'Current Market Demand and Supply Dynamics', 'higher = more demand'],
  ['L', 'Portfolio and Practical Evidence Dependency', 'higher = more proof'],
  ['M', 'Career Flexibility and Transferability', 'higher = more transferable']
];

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
        available: true,
        conclusion: 'Low AI exposure (G 3) and strong demand (K 8); certifications and hands-on lab proof (L 8) help bypass degree filters.',
        scores: [7, 6, 3, 4, 8, 3, 5, 5, 8, 8, 8],
        salary: ['₹3.5 – 7.0 LPA', '₹5.0 LPA', '₹8.0 – 15.0 LPA', 'Base pay + shift allowances + certification bonuses', 'Glassdoor, CyberSecurityAcademy, Networkers Home'],
        employerFit: [
          ['IT Services', 'Common', '₹3.5–5.0L'],
          ['Product Cos.', 'Selective', '₹7.0–14.0L'],
          ['Tech Startups', 'Selective', '₹5.0–9.0L'],
          ['GCCs', 'Common', '₹6.0–11.0L'],
          ['Remote Employers', 'Selective', '₹6.0–12.0L']
        ],
        availability: [
          ['Intern', 'Widespread; SOC Tier-1, vulnerability screening'],
          ['Fresher', 'High volume; SOC Analyst L1, Junior Pentester'],
          ['Mid', 'High demand; SOC L2/L3, IR, Pentester'],
          ['Senior', 'High demand; CISO, Security Architect']
        ]
      },
      {
        title: 'AI Engineer',
        description: 'Explores systems, models, inference, and practical AI engineering workflows.',
        icon: '🤖',
        file: 'ai-engineer.pdf',
        available: true,
        conclusion: 'Top growth (F 10) and demand (K 9) with Low AI exposure (G 3); a deployed RAG/agent project is the key proof (L 9); fresher entry is Moderate (A 5).',
        scores: [5, 4, 7, 8, 10, 3, 5, 7, 9, 9, 8],
        salary: ['₹6.0 – 14.0 LPA', '₹9.0 LPA', '₹15.0 – 30.0 LPA', 'High base + performance bonus + equity/RSUs', 'ShifttoTech, Futurense, Kalvium, BeInCareer'],
        employerFit: [
          ['IT Services', 'Common', '₹5.0–8.0L'],
          ['Product Cos.', 'Common', '₹10.0–20.0L'],
          ['Tech Startups', 'Common', '₹8.0–16.0L'],
          ['GCCs', 'Common', '₹9.0–18.0L'],
          ['Remote Employers', 'Selective', '₹9.0–20.0L']
        ],
        availability: [
          ['Intern', 'Moderate; prompt engineering, RAG, fine-tuning'],
          ['Fresher', 'Moderate-High; AI App Developer, RAG Engineer'],
          ['Mid', 'Rapidly growing; AI Systems Architect, Agent Eng.'],
          ['Senior', 'Exceptionally high; Principal AI Architect']
        ]
      },
      {
        title: 'DevSecOps Engineer',
        description: 'Connects security, automation, and delivery across modern engineering operations.',
        icon: '🔐',
        file: 'devsecops-engineer.pdf',
        available: true,
        conclusion: 'Lowest fresher entry in AI-CS (A 4); freshers usually start in junior DevOps or cloud roles. Growth is Very High (F 9), AI exposure Low (G 3).',
        scores: [4, 4, 3, 8, 9, 3, 5, 7, 8, 8, 8],
        salary: ['₹4.0 – 8.5 LPA', '₹6.2 LPA', '₹12.0 – 22.0 LPA', 'Fixed salary + cloud certification premium + annual bonus', 'Guvi, Futurense, ShriResume, AmbitionBox'],
        employerFit: [
          ['IT Services', 'Common', '₹4.0–6.5L'],
          ['Product Cos.', 'Common', '₹9.0–16.0L'],
          ['Tech Startups', 'Selective', '₹7.0–13.0L'],
          ['GCCs', 'Common', '₹8.0–15.0L'],
          ['Remote Employers', 'Selective', '₹8.0–16.0L']
        ],
        availability: [
          ['Intern', 'Moderate; CI/CD pipeline, container security'],
          ['Fresher', 'Moderate; Junior Cloud Security / DevOps Eng.'],
          ['Mid', 'High demand; DevSecOps Lead, Cloud Sec. Architect'],
          ['Senior', 'High demand; Head of Infra, Principal Architect']
        ]
      },
      {
        title: 'Network Engineer',
        description: 'Covers the foundations of connectivity, protocols, routing, and internet infrastructure.',
        icon: '🌐',
        file: 'network-engineer.pdf',
        available: true,
        conclusion: 'Easiest fresher entry in AI-CS (A 8) and lowest maths (D 2); growth is lower (F 6) and AI exposure Moderate (G 5). CCNA-type certs are strong credentials.',
        scores: [8, 7, 2, 3, 6, 5, 4, 4, 6, 6, 6],
        salary: ['₹3.5 – 6.5 LPA', '₹4.5 LPA', '₹7.0 – 12.0 LPA', 'Fixed base pay + on-call allowances', 'Shiksha, NTT Data postings, Networkers Home'],
        employerFit: [
          ['IT Services', 'Common', '₹3.5–5.0L'],
          ['Product Cos.', 'Selective', '₹6.0–10.0L'],
          ['Tech Startups', 'Limited', '₹4.5–7.5L'],
          ['GCCs', 'Common', '₹5.5–9.0L'],
          ['Remote Employers', 'Limited', '₹4.0–8.0L']
        ],
        availability: [
          ['Intern', 'Widespread; lab assistant, NOC intern'],
          ['Fresher', 'High volume; Network Support L1, NOC Engineer'],
          ['Mid', 'Moderate; Senior Network Admin, Engineer L2'],
          ['Senior', 'Selective; Chief Network Architect']
        ]
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
        available: true,
        conclusion: 'Easiest fresher entry in CSDA (A 8) with Moderate AI exposure (G 6); portfolio proof matters (L 8), transferability is high (M 8).',
        scores: [8, 7, 6, 5, 7, 6, 4, 7, 7, 8, 8],
        salary: ['₹3.0 – 6.0 LPA', '₹4.5 LPA', '₹8.0 – 14.0 LPA', 'Base salary + performance bonus', 'AmbitionBox, Glassdoor, Guvi'],
        employerFit: [
          ['IT Services', 'Common', '₹3.0–4.5L'],
          ['Product Cos.', 'Selective', '₹6.0–10.0L'],
          ['Tech Startups', 'Common', '₹4.0–7.5L'],
          ['GCCs', 'Selective', '₹5.5–8.5L'],
          ['Remote Employers', 'Selective', '₹4.5–9.0L']
        ],
        availability: [
          ['Intern', 'Widespread; high conversion rates in analytics'],
          ['Fresher', 'High volume; entry via BI, SQL and reporting'],
          ['Mid', 'Strong demand; shift to predictive analytics'],
          ['Senior', 'Selective; Analytics Manager / Lead BI Architect']
        ]
      },
      {
        title: 'Full Stack Developer',
        description: 'Covers the front-end and back-end foundations behind modern web applications.',
        icon: '💻',
        file: 'full-stack-developer.pdf',
        available: true,
        conclusion: 'Largest entry-level hiring pool (A 7, K 8); portfolio is decisive (L 9) and coding intensity is highest (E 9); AI exposure is Moderate (G 5).',
        scores: [7, 6, 3, 9, 8, 5, 4, 8, 8, 9, 9],
        salary: ['₹4.0 – 8.0 LPA', '₹6.0 LPA', '₹10.0 – 20.0 LPA', 'Fixed pay + annual bonus + stock options (startups)', 'Indeed, PayScale, Glassdoor'],
        employerFit: [
          ['IT Services', 'Common', '₹3.5–5.0L'],
          ['Product Cos.', 'Common', '₹8.0–16.0L'],
          ['Tech Startups', 'Common', '₹5.0–12.0L'],
          ['GCCs', 'Common', '₹7.5–13.0L'],
          ['Remote Employers', 'Selective', '₹6.0–15.0L']
        ],
        availability: [
          ['Intern', 'Widespread; startup and open-source driven'],
          ['Fresher', 'High volume; MERN/MEAN stack entry roles'],
          ['Mid', 'High demand; system design, backend scaling'],
          ['Senior', 'High demand; Staff Engineer / Software Architect']
        ]
      },
      {
        title: 'Data Engineer',
        description: 'Designs data pipelines, systems, and foundations for reliable data flow.',
        icon: '🧰',
        file: 'data-engineer.pdf',
        available: true,
        conclusion: 'Very High growth (F 9) and Low AI exposure (G 3); fresher entry is Moderate (A 5) and the learning curve is mid-level (C 5).',
        scores: [5, 5, 5, 8, 9, 3, 5, 6, 8, 8, 8],
        salary: ['₹4.5 – 9.0 LPA', '₹7.0 LPA', '₹11.0 – 22.0 LPA', 'Fixed CTC + joining bonus + ESOPs/RSUs', 'AmbitionBox, 6figr, levels.fyi'],
        employerFit: [
          ['IT Services', 'Common', '₹4.0–6.5L'],
          ['Product Cos.', 'Selective', '₹10.0–18.0L'],
          ['Tech Startups', 'Selective', '₹7.0–14.0L'],
          ['GCCs', 'Common', '₹8.5–15.0L'],
          ['Remote Employers', 'Limited', '₹8.0–16.0L']
        ],
        availability: [
          ['Intern', 'Moderate; needs basic SQL/Python, cloud familiarity'],
          ['Fresher', 'Moderate; pipeline maintenance and ETL tasks'],
          ['Mid', 'Very high demand; cloud warehouse migration'],
          ['Senior', 'High demand; Principal Data Architect / DataOps Lead']
        ]
      },
      {
        title: 'AI and Data Scientist',
        description: 'Builds statistical, mathematical, and experimental skills for data-driven intelligence.',
        icon: '📈',
        file: 'ai-and-data-scientist.pdf',
        available: true,
        conclusion: 'Highest maths demand (D 8) and hybrid-degree barrier (H 6); lowest fresher entry (A 4). Public track records help offset the barrier.',
        scores: [4, 4, 8, 7, 9, 4, 6, 6, 7, 9, 7],
        salary: ['₹5.1 – 14.0 LPA', '₹8.5 LPA', '₹12.0 – 24.0 LPA', 'Base pay + performance incentive + RSUs', 'Glassdoor, AmbitionBox, Unstop'],
        employerFit: [
          ['IT Services', 'Selective', '₹4.5–7.0L'],
          ['Product Cos.', 'Selective', '₹10.0–20.0L'],
          ['Tech Startups', 'Selective', '₹7.0–15.0L'],
          ['GCCs', 'Selective', '₹9.0–16.0L'],
          ['Remote Employers', 'Limited', '₹8.0–18.0L']
        ],
        availability: [
          ['Intern', 'Moderate; favours research or Kaggle proof'],
          ['Fresher', 'Selective; model evaluation, tuning, data prep'],
          ['Mid', 'High demand; end-to-end ML deployment'],
          ['Senior', 'Selective; Principal DS / AI Research Lead']
        ]
      },
      {
        title: 'Computer Science Foundation',
        description: 'Strengthens core computing concepts, algorithms, and problem-solving foundations.',
        icon: '🧠',
        file: 'computer-science-foundation.pdf',
        available: true,
        foundation: true,
        conclusion: 'Baseline for every track: discrete maths, algorithms, OS, networks, databases. Not scored separately in the source.'
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
const careerComparison = document.getElementById('career-comparison');

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

function renderComparisonMatrix(config, caption, regionLabel, rowLabels, getValue) {
  const careerHeaders = config.roadmaps
    .map((career) => `<th scope="col">${career.title}</th>`)
    .join('');
  const rows = rowLabels
    .map((row, index) => {
      const [label, direction, code] = Array.isArray(row) ? row : [row, '', ''];
      const rowLabel = code
        ? `<span class="criterion-code">${code}</span> ${label}<span class="criterion-direction">${direction}</span>`
        : label;
      const cells = config.roadmaps
        .map((career) => `<td>${getValue(career, index)}</td>`)
        .join('');
      return `<tr><th scope="row">${rowLabel}</th>${cells}</tr>`;
    })
    .join('');

  return `
    <div class="comparison-table-wrap" role="region" aria-label="${regionLabel}" tabindex="0">
      <table class="comparison-table comparison-table--matrix">
        <caption>${caption}</caption>
        <thead><tr><th scope="col">Career / criterion</th>${careerHeaders}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderCareerComparisons(config) {
  const scoreRows = COMPARISON_CRITERIA.map(([code, label, direction]) => [label, direction, code]);
  const salaryRows = [
    'Fresher salary (0–2 years)',
    'Central fresher estimate',
    'Early-to-mid (2–5 years)',
    'Pay structure',
    'Sources cited'
  ];
  const employerTypes = [...new Set(config.roadmaps.reduce(
    (types, career) => types.concat((career.employerFit || []).map(([type]) => type)),
    []
  ))];
  const careerLevels = [...new Set(config.roadmaps.reduce(
    (levels, career) => levels.concat((career.availability || []).map(([level]) => level)),
    []
  ))];
  const foundationCareer = config.roadmaps.find((career) => career.foundation);
  const careerNotes = config.roadmaps
    .map((career) => `
      <article class="career-note">
        <h4>${career.title}</h4>
        <p>${career.conclusion}</p>
        ${career.foundation ? '<p class="comparison-caveat">This foundation resource is not a scored job role in the supplied report.</p>' : ''}
      </article>
    `)
    .join('');

  return `
    <h3 class="comparison-section-heading">Consolidated career comparison</h3>
    <section class="comparison-dataset" aria-labelledby="score-comparison-heading">
      <h4 id="score-comparison-heading">Career comparison scores — 0–10 estimates</h4>
      ${renderComparisonMatrix(
        config,
        `${config.label} career comparison scores — 0–10 estimates`,
        `${config.label} career comparison scores`,
        scoreRows,
        (career, index) => career.scores ? `${career.scores[index]} / 10` : '—'
      )}
      ${foundationCareer ? '<p class="comparison-caveat">The supplied report does not score the Computer Science Foundation resource separately.</p>' : ''}
    </section>
    <section class="comparison-dataset" aria-labelledby="salary-comparison-heading">
      <h4 id="salary-comparison-heading">Salary comparison from the supplied report</h4>
      ${renderComparisonMatrix(
        config,
        'Salary comparison from the supplied report',
        `${config.label} salary comparison`,
        salaryRows,
        (career, index) => career.salary ? career.salary[index] : '—'
      )}
      ${foundationCareer ? '<p class="comparison-caveat">Salary data was not reported for the Computer Science Foundation resource.</p>' : ''}
    </section>
    <section class="comparison-dataset" aria-labelledby="employer-fit-heading">
      <h4 id="employer-fit-heading">Employer fit and fresher CTC as reported</h4>
      ${renderComparisonMatrix(
        config,
        'Employer fit and fresher CTC as reported',
        `${config.label} employer fit and fresher CTC`,
        employerTypes,
        (career, index) => {
          const entry = (career.employerFit || []).find(([type]) => type === employerTypes[index]);
          return entry ? `${entry[1]}<span class="comparison-secondary">${entry[2]}</span>` : '—';
        }
      )}
      <p class="comparison-caveat">Employer-category CTC ranges are shown as reported and may exceed the overall fresher salary range.</p>
    </section>
    <section class="comparison-dataset" aria-labelledby="availability-heading">
      <h4 id="availability-heading">Role availability by career level</h4>
      ${renderComparisonMatrix(
        config,
        'Role availability by career level',
        `${config.label} role availability by career level`,
        careerLevels,
        (career, index) => {
          const entry = (career.availability || []).find(([level]) => level === careerLevels[index]);
          return entry ? entry[1] : '—';
        }
      )}
    </section>
    <section class="comparison-dataset" aria-labelledby="career-notes-heading">
      <h4 id="career-notes-heading">Career conclusions from the supplied report</h4>
      <div class="career-notes">${careerNotes}</div>
      <p class="comparison-caveat">Research estimates, not official statistics. Higher AI exposure and entry-barrier scores indicate greater exposure and a bigger barrier, respectively.</p>
    </section>
  `;
}

function renderRoadmaps() {
  const config = state.selectedDomain && DOMAIN_CONFIG[state.selectedDomain];
  if (!config) {
    roadmapGrid.innerHTML = '';
    careerComparison.innerHTML = '';
    selectedDomainPill.textContent = 'Select a domain';
    roadmapHeading.textContent = 'Select a domain';
    return;
  }

  roadmapHeading.textContent = config.title;
  selectedDomainPill.textContent = `${config.label} • ${config.roadmapCount} ROADMAPS`;
  careerComparison.innerHTML = renderCareerComparisons(config);

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
          <h3>${roadmap.title}</h3>
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
