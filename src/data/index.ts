// src/data/portfolioData.ts

import {
  SkillCard,
  CodeSnippet,
  ExperienceItem,
  Project,
} from '../types';

// SKILLS SECTION
export const skills: SkillCard[] = [
  {
    id: 1,
    title: 'Google Analytics & Reporting',
    description:
      'Monitoring and analyzing website traffic and user behavior to drive data-informed financial decisions.',
    icon: 'activity',
  },
  {
    id: 2,
    title: 'Java Development for Finance',
    description:
      'Developing scalable and secure backend systems using Java for enterprise-level financial applications.',
    icon: 'terminal',
  },
  {
    id: 3,
    title: 'ERP Integration & Support',
    description:
      'Integrating and optimizing ERP financial modules to improve data flow and decision-making efficiency.',
    icon: 'network',
  },
  {
    id: 4,
    title: 'Python Automation',
    description:
      'Streamlining financial workflows and report generation through automation using Python.',
    icon: 'code',
  },
  {
    id: 5,
    title: 'SQL Data Analysis',
    description:
      'Performing complex queries to analyze, visualize, and extract insights from financial datasets.',
    icon: 'database',
  },
  {
    id: 6,
    title: 'HTML-Based Reporting',
    description:
      'Designing responsive web dashboards for real-time financial performance tracking and reporting.',
    icon: 'bar-chart',
  },
  {
    id: 7,
    title: 'Web3 Applications in Finance',
    description:
      'Building decentralized finance (DeFi) solutions using blockchain technologies for secure, transparent transactions.',
    icon: 'bitcoin',
  },
];

// CODE SNIPPETS SECTION
export const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: 'Python Data Analysis',
    description: 'Process and visualize financial data using pandas and matplotlib.',
    language: 'python',
    code: `import pandas as pd
import matplotlib.pyplot as plt

# Load financial data
df = pd.read_csv('financial_data.csv')

# Calculate ROI and profit margin
df['roi'] = (df['revenue'] - df['cost']) / df['cost'] * 100
df['profit_margin'] = (df['revenue'] - df['cost']) / df['revenue'] * 100

# Summarize by department
summary = df.groupby('department').agg({
    'revenue': 'sum',
    'cost': 'sum',
    'roi': 'mean',
    'profit_margin': 'mean'
})

# Plot ROI
summary['roi'].plot(kind='bar', title='Average ROI by Department')
plt.ylabel('ROI (%)')
plt.tight_layout()
plt.show()`,
  },
  {
    id: 2,
    title: 'SQL Financial Queries',
    description: 'Generate monthly performance reports and analyze profitability metrics.',
    language: 'sql',
    code: `-- Monthly Financial Performance Report
SELECT 
  TO_CHAR(transaction_date, 'YYYY-MM') AS month,
  department,
  SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE 0 END) AS total_income,
  SUM(CASE WHEN transaction_type = 'EXPENSE' THEN amount ELSE 0 END) AS total_expense,
  SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE -amount END) AS net_profit,
  ROUND(
    SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE -amount END) / 
    NULLIF(SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE 0 END), 0) * 100, 
    2
  ) AS profit_margin
FROM financial_transactions
WHERE transaction_date BETWEEN '2022-01-01' AND '2022-12-31'
GROUP BY TO_CHAR(transaction_date, 'YYYY-MM'), department
ORDER BY month, profit_margin DESC;`,
  },
  {
    id: 3,
    title: 'HTML-Based Report Component',
    description: 'Interactive dashboard interface for visualizing financial metrics.',
    language: 'markup',
    code: `<div class="financial-dashboard">
  <header>
    <h2>Q2 2023 Financial Summary</h2>
    <div class="filters">
      <button class="active">Monthly</button>
      <button>Quarterly</button>
      <button>Yearly</button>
    </div>
  </header>

  <section class="metrics">
    <div class="card">
      <h3>Revenue</h3>
      <p>$1,284,500</p>
      <span class="change positive">+12.3%</span>
    </div>
    <div class="card">
      <h3>Expenses</h3>
      <p>$876,200</p>
      <span class="change neutral">+5.7%</span>
    </div>
    <div class="card">
      <h3>Profit</h3>
      <p>$408,300</p>
      <span class="change positive">+24.8%</span>
    </div>
  </section>

  <canvas id="revenueChart"></canvas>

  <table>
    <thead>
      <tr>
        <th>Month</th>
        <th>Revenue</th>
        <th>Expenses</th>
        <th>Profit</th>
        <th>Margin</th>
      </tr>
    </thead>
    <tbody id="financialData">
      <!-- Populated dynamically -->
    </tbody>
  </table>
</div>`,
  },
];

// EXPERIENCE SECTION
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'ERP Financial System Implementation Support Staff',
    company: 'NPDC/NECONDE (OML-42 AMT)',
    period: '2019–2022',
    description:
      'Provided ERP deployment support and streamlined financial data operations to enhance automation and insight.',
    achievements: [
      'Reduced month-end reconciliation time by 40% through automated workflows.',
      'Designed executive dashboards using HTML for quick financial overviews.',
      'Led integration of ERP systems with cloud-based financial platforms.',
    ],
  },
  {
    id: 2,
    role: 'Financial Systems Analyst/Product Marketing Strategist/Google Analytics Specialist/Skilled Communicator and Presenter ',
    company:
      'NPDC/FRANK OLUBA AND SONS NIG LIMITED/ALEX FEMINI NIG LTD/TONBRAPA NIG LTD',
    period: '2022 – Present',
    description:
      'Overseeing service delivery, project execution, and digital transformation strategies.',
    achievements: [
      'Comprehensive account reconciliation across multiple enterprises utilizing advanced Excel functionalities and python-driven automation.',
      'Automated regulatory compliance reporting using Python scripts.',
      'Built reusable tools in Python, Excel, and SQL for automated reporting.',
      'Translated complex technical skills (e.g., ERP systems, data analysis with SQL/Python, financial software workflows) into clear, value-driven messaging for a hybrid tech/business audience.',
      'Conducted competitor benchmarking and market research to tailor positioning of tech skills (e.g., scripting, automation) on personal website to match trends in the dev tools ecosystem.',
      'Created technical case studies and code showcases to serve as developer enablement tools and storytelling aids for enterprise stakeholders.',
    ],
  },
];

// PROJECTS SECTION
export const projects: Project[] = [
  {
    id: 1,
    title: 'ERP Financial Module Automation',
    description:
      'Automated manual ERP financial processes using Python and SQL, reducing overhead by 70%.',
    technologies: ['Python', 'SQL', 'ERP API'],
    image:
      'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com',
    demoUrl: '#demo',
  },
  {
    id: 2,
    title: 'Financial Data Visualization Dashboard',
    description:
      'Created a responsive dashboard for visualizing KPIs and real-time data using D3.js.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'D3.js'],
    image:
      'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Blockchain-Based Reconciliation System',
    description:
      'Built a prototype system using blockchain to ensure secure and immutable financial reconciliation.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    image:
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com',
    demoUrl: '#demo',
  },
];

// Exporting the full portfolio data
export const portfolioData = {
  skills,
  codeSnippets,
  experiences,
  projects,
};
