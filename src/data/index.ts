import { SkillCard, CodeSnippet, ExperienceItem, Project } from '../types';

export const skills: SkillCard[] = [
  {
    id: 1,
    title: 'ERP Integration & Support',
    description: 'Implementation and optimization of enterprise resource planning systems with focus on financial modules',
    icon: 'network',
  },
  {
    id: 2,
    title: 'Python Automation',
    description: 'Development of automated financial workflows and data processing scripts',
    icon: 'code',
  },
  {
    id: 3,
    title: 'SQL Data Analysis',
    description: 'Complex financial data querying, reporting, and analysis',
    icon: 'database',
  },
  {
    id: 4,
    title: 'HTML-Based Reporting',
    description: 'Creation of interactive financial reports and dashboards',
    icon: 'bar-chart',
  },
  {
    id: 5,
    title: 'Web3 Applications in Finance',
    description: 'Exploration of blockchain technology for financial systems',
    icon: 'bitcoin',
  },
];

export const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: 'Python Data Analysis',
    description: 'Financial data processing with pandas',
    language: 'python',
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load financial data
df = pd.read_csv('financial_data.csv')

# Calculate key metrics
df['roi'] = (df['revenue'] - df['cost']) / df['cost'] * 100
df['profit_margin'] = (df['revenue'] - df['cost']) / df['revenue'] * 100

# Group by department
dept_summary = df.groupby('department').agg({
    'revenue': 'sum',
    'cost': 'sum',
    'roi': 'mean',
    'profit_margin': 'mean'
})

# Visualization
plt.figure(figsize=(12, 6))
dept_summary['roi'].plot(kind='bar', color='skyblue')
plt.title('Average ROI by Department')
plt.ylabel('ROI (%)')
plt.tight_layout()
plt.show()

print(dept_summary.sort_values('profit_margin', ascending=False))`
  },
  {
    id: 2,
    title: 'SQL Financial Queries',
    description: 'Complex financial data extraction',
    language: 'sql',
    code: `-- Monthly financial performance report
SELECT 
    TO_CHAR(transaction_date, 'YYYY-MM') AS month,
    department,
    SUM(amount) AS total_revenue,
    SUM(CASE WHEN transaction_type = 'EXPENSE' THEN amount ELSE 0 END) AS total_expenses,
    SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE 0 END) AS total_income,
    SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE -amount END) AS profit,
    ROUND(
        SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE -amount END) / 
        NULLIF(SUM(CASE WHEN transaction_type = 'REVENUE' THEN amount ELSE 0 END), 0) * 100, 
        2
    ) AS profit_margin
FROM 
    financial_transactions
WHERE 
    transaction_date BETWEEN '2022-01-01' AND '2022-12-31'
GROUP BY 
    TO_CHAR(transaction_date, 'YYYY-MM'),
    department
ORDER BY 
    month, 
    profit_margin DESC;`
  },
  {
    id: 3,
    title: 'HTML-Based Report Component',
    description: 'Interactive financial dashboard element',
    language: 'html',
    code: `<div class="financial-dashboard">
  <header class="dashboard-header">
    <h2>Q2 2023 Financial Performance</h2>
    <div class="period-selector">
      <button class="active">Monthly</button>
      <button>Quarterly</button>
      <button>Yearly</button>
    </div>
  </header>
  
  <div class="metrics-container">
    <div class="metric-card positive">
      <h3>Revenue</h3>
      <p class="value">$1,284,500</p>
      <p class="change">+12.3% YoY</p>
    </div>
    
    <div class="metric-card neutral">
      <h3>Operating Expenses</h3>
      <p class="value">$876,200</p>
      <p class="change">+5.7% YoY</p>
    </div>
    
    <div class="metric-card positive">
      <h3>Net Profit</h3>
      <p class="value">$408,300</p>
      <p class="change">+24.8% YoY</p>
    </div>
  </div>
  
  <div class="chart-container">
    <canvas id="revenueChart"></canvas>
  </div>
  
  <div class="data-table">
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
        <!-- Data rows populated via JavaScript -->
      </tbody>
    </table>
  </div>
</div>`
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior ERP Financial Systems Specialist',
    company: 'NPDC',
    period: '2015-2022',
    description: 'Managed implementation and support of financial ERP systems, focusing on data transformation and automation.',
    achievements: [
      'Implemented automated reconciliation system reducing month-end close time by 40%',
      'Developed Python scripts for financial data extraction and transformation saving 20+ hours per week',
      'Created SQL-based financial reporting system enhancing data visibility across departments',
      'Designed HTML-based interactive dashboards for executive financial insights',
      'Led system integration project connecting legacy financial systems to modern cloud platforms'
    ]
  },
  {
    id: 2,
    role: 'Financial Systems Analyst',
    company: 'NPDC',
    period: '2012-2015',
    description: 'Provided technical support for financial systems and developed data analysis solutions.',
    achievements: [
      'Supported migration from legacy financial systems to modern ERP platform',
      'Created custom data extraction tools using SQL and Python',
      'Developed training materials and conducted workshops for financial staff',
      'Implemented automated reporting solutions for compliance requirements'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'ERP Financial Module Automation',
    description: 'Developed Python-based automation scripts for financial data processing in ERP systems, reducing manual data entry by 70%.',
    technologies: ['Python', 'SQL', 'ERP API'],
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com',
    demoUrl: '#demo'
  },
  {
    id: 2,
    title: 'Financial Data Visualization Dashboard',
    description: 'Created an interactive dashboard for visualizing complex financial data using modern web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'D3.js'],
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Blockchain-Based Financial Reconciliation System',
    description: 'Prototype system utilizing blockchain technology for transparent financial reconciliation processes.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: 'https://github.com',
    demoUrl: '#demo'
  }
];