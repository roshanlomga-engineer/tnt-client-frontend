import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-detail.component.html',
  styles: [`
    .hero-banner {
      background: linear-gradient(135deg, #1B3A5C 0%, #0f2236 100%);
      color: #fff;
      padding: 3.5rem 0;
    }

    .hero-banner h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin: 0;
    }

    .meta-row {
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      padding: 1rem 0;
    }

    .meta-item {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-right: 1.5rem;
      font-size: 0.95rem;
      color: #495057;
    }

    .meta-item i {
      color: #1B3A5C;
    }

    .badge-type {
      background-color: #2E7D52;
      color: #fff;
      font-size: 0.85rem;
      padding: 0.3em 0.7em;
      border-radius: 0.25rem;
    }

    .section-title {
      font-size: 1.35rem;
      font-weight: 600;
      color: #1B3A5C;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #E8A838;
      display: inline-block;
    }

    .content-section {
      margin-bottom: 2.5rem;
    }

    .content-section ul {
      padding-left: 1.25rem;
    }

    .content-section ul li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }

    .btn-apply {
      background-color: #E8A838;
      color: #1B3A5C;
      font-weight: 600;
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 0.375rem;
      font-size: 1.05rem;
      transition: background-color 0.2s ease;
    }

    .btn-apply:hover {
      background-color: #d4952e;
      color: #1B3A5C;
    }

    .back-link {
      color: #1B3A5C;
      font-weight: 500;
      text-decoration: none;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    .not-found {
      text-align: center;
      padding: 4rem 1rem;
    }

    .not-found h2 {
      color: #1B3A5C;
      margin-bottom: 1rem;
    }
  `]
})
export default class JobDetailComponent implements OnInit {
  job: Job | undefined;

  private jobs: Record<string, Job> = {
    '1': {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-Time',
      postedDate: '2026-09-25',
      description: 'We are looking for a Senior Frontend Developer to join our Engineering team and lead the development of modern, responsive web applications. You will collaborate closely with designers and backend engineers to deliver exceptional user experiences using Angular, TypeScript, and cutting-edge web technologies.',
      requirements: [
        '5+ years of experience in frontend development with Angular or React',
        'Strong proficiency in TypeScript, HTML5, and CSS3/SCSS',
        'Experience with state management patterns and REST/GraphQL APIs',
        'Familiarity with CI/CD pipelines and automated testing frameworks',
        'Bachelor\'s degree in Computer Science or equivalent experience'
      ],
      responsibilities: [
        'Architect and develop scalable frontend solutions for enterprise applications',
        'Mentor junior developers and conduct thorough code reviews',
        'Collaborate with UX/UI designers to translate mockups into functional interfaces',
        'Optimize application performance and ensure cross-browser compatibility',
        'Contribute to technical planning and sprint ceremonies'
      ]
    },
    '2': {
      id: '2',
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      postedDate: '2026-09-20',
      description: 'Join our backend team to design and build robust, scalable microservices that power our platform. You will work with modern cloud-native technologies and contribute to systems handling millions of requests daily.',
      requirements: [
        '4+ years of experience with Java, C#, or Node.js',
        'Strong understanding of relational and NoSQL databases',
        'Experience with cloud platforms such as AWS or Azure',
        'Knowledge of containerization with Docker and Kubernetes',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement RESTful APIs and microservices',
        'Manage and optimize database schemas and queries',
        'Ensure system reliability through monitoring and alerting',
        'Participate in on-call rotations and incident response',
        'Write comprehensive unit and integration tests'
      ]
    },
    '3': {
      id: '3',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Austin, TX',
      type: 'Full-Time',
      postedDate: '2026-09-18',
      description: 'We are seeking a talented UX/UI Designer to craft intuitive and visually compelling user experiences. You will conduct user research, create wireframes and prototypes, and work hand-in-hand with developers to bring designs to life.',
      requirements: [
        '3+ years of experience in UX/UI design for web and mobile',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating user-centered design thinking',
        'Understanding of accessibility standards (WCAG 2.1)',
        'Experience conducting usability testing and user interviews'
      ],
      responsibilities: [
        'Conduct user research and translate findings into design solutions',
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Develop and maintain a cohesive design system',
        'Collaborate with product managers to define feature requirements',
        'Iterate on designs based on user feedback and analytics'
      ]
    },
    '4': {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-Time',
      postedDate: '2026-09-15',
      description: 'We are hiring a DevOps Engineer to streamline our development and deployment processes. You will build and maintain CI/CD pipelines, manage cloud infrastructure, and champion automation across the organization.',
      requirements: [
        '3+ years of experience in DevOps or Site Reliability Engineering',
        'Hands-on experience with Terraform, Ansible, or CloudFormation',
        'Proficiency with Linux systems administration',
        'Experience with monitoring tools like Prometheus, Grafana, or Datadog',
        'Strong scripting skills in Bash or Python'
      ],
      responsibilities: [
        'Build and maintain CI/CD pipelines for automated deployments',
        'Manage cloud infrastructure on AWS or Azure using IaC',
        'Implement monitoring, logging, and alerting solutions',
        'Improve system reliability, scalability, and security posture',
        'Collaborate with development teams to optimize workflows'
      ]
    },
    '5': {
      id: '5',
      title: 'Product Manager',
      department: 'Product',
      location: 'Chicago, IL',
      type: 'Full-Time',
      postedDate: '2026-09-10',
      description: 'We are looking for a strategic Product Manager to drive the vision and roadmap for our core platform. You will work cross-functionally with engineering, design, and marketing to deliver products that delight our users and grow the business.',
      requirements: [
        '4+ years of product management experience in SaaS or tech',
        'Proven track record of shipping products from concept to launch',
        'Strong analytical skills and experience with data-driven decisions',
        'Excellent written and verbal communication skills',
        'Familiarity with agile methodologies and tools like Jira'
      ],
      responsibilities: [
        'Define product vision, strategy, and roadmap',
        'Gather and prioritize requirements from stakeholders and users',
        'Write detailed user stories and acceptance criteria',
        'Analyze product metrics and drive continuous improvement',
        'Present product updates and plans to leadership'
      ]
    },
    '6': {
      id: '6',
      title: 'QA Automation Engineer',
      department: 'Quality Assurance',
      location: 'Denver, CO',
      type: 'Contract',
      postedDate: '2026-09-05',
      description: 'Join our QA team to build and maintain automated testing frameworks that ensure the quality and reliability of our products. You will design test strategies and work closely with developers to catch issues early in the development lifecycle.',
      requirements: [
        '3+ years of experience in test automation',
        'Proficiency with Selenium, Cypress, or Playwright',
        'Experience with API testing tools like Postman or REST Assured',
        'Knowledge of testing best practices and methodologies',
        'Familiarity with CI/CD integration for automated test suites'
      ],
      responsibilities: [
        'Design and implement automated test suites for web applications',
        'Develop and maintain test frameworks and utilities',
        'Integrate automated tests into CI/CD pipelines',
        'Identify, document, and track defects to resolution',
        'Collaborate with developers to improve testability of features'
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.job = this.jobs[id];
    }
  }
}
