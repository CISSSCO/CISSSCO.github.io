(function () {
  // Virtual Filesystem (VFS) for Cisco Ramon's terminal portfolio

  const DEFAULT_PROJECTS = [
  {
    "id": "orgslide",
    "title": "OrgSlide",
    "excerpt": "Transform Emacs Org-mode and Markdown files into beautiful, interactive web presentations",
    "description": "Developed a lightweight, browser-based presentation engine that transforms Emacs Org-mode and Markdown files into responsive, PowerPoint-style web presentations. Features client-side file parsing for privacy, interactive table of contents with multiple layouts, infinite-canvas navigation, light and dark themes, syntax-highlighted code blocks, keyboard-driven controls, and touch-friendly interactions. Designed as a zero-dependency, single-file HTML application that runs entirely in the browser without a backend, installation, or build process.",
    "stack": [
      "Org-mode",
      "Markdown",
      "HTML5",
      "CSS3",
      "JavaScript",
      "HTML5 FileReader API"
    ],
    "featured": true,
    "repo": "https://github.com/CISSSCO/OrgSlide",
    "url": "https://cisssco.github.io/OrgSlide/"
  },
  {
    "id": "hpccfs",
    "title": "HPCCFS",
    "excerpt": "Build a production-like HPC cluster from scratch using open-source technologies",
    "description": "Designed and documented a complete HPC cluster from the ground up, implementing centralized authentication, shared storage, workload scheduling, accounting, QoS, fairshare scheduling, software management with Environment Modules, and distributed MPI execution. The project serves as a comprehensive educational guide that closely follows real-world HPC center practices.",
    "stack": [
      "Rocky Linux",
      "Slurm",
      "OpenMPI",
      "LDAP",
      "NFS",
      "Environment Modules",
      "Spack",
      "Munge",
      "MariaDB",
      "SlurmDBD",
      "Bash",
      "C",
      "MPI"
    ],
    "featured": true,
    "repo": "https://github.com/CISSSCO/HPCCFS",
    "url": "https://cisssco.github.io/HPCCFS/"
  },
  {
    "id": "playlisto",
    "title": "Playlisto",
    "excerpt": "Turn Google Drive into your personal music streaming server",
    "description": "Developed a personal cloud music server that streams Google Drive media seamlessly across web browsers and Kodi",
    "stack": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Google Drive API",
      "HTTP Streaming",
      "Kodi Add-on"
    ],
    "featured": true,
    "repo": "https://github.com/CISSSCO/Playlisto"
  },
  {
    "id": "cerrfix",
    "title": "CerrFix",
    "excerpt": "Rule-based error analysis and fix suggestion tool for Linux systems",
    "description": "cerrfix is a lightweight, extensible command-line tool designed to help users and system administrators diagnose and resolve common errors on Linux-based systems.",
    "stack": [
      "Python",
      "Bash Scripting",
      "YAML"
    ],
    "featured": true,
    "repo": "https://github.com/CISSSCO/cerrfix",
    "url": "https://cisssco.github.io/cerrfix"
  },
  {
    "id": "gitpush",
    "title": "GitPush",
    "excerpt": "Minimal CLI helper to automate common git workflows",
    "description": "A simple tool for git to automate some of the commonly used tasks.",
    "stack": [
      "Bash Scripting"
    ],
    "repo": "https://github.com/CISSSCO/gitpush"
  },
  {
    "id": "dotfiles",
    "title": "Dotfiles",
    "excerpt": "Reproducible Linux shell and development environment configuration",
    "description": "Personal configurations for Linux shell and development environment, managed with GNU Stow for easy reproducibility across different systems.",
    "stack": [
      "Bash Scripting",
      "Vimscript",
      "Python",
      "Lisp",
      "YAML"
    ],
    "repo": "https://github.com/CISSSCO/dotfiles"
  },
  {
    "id": "myvimrc",
    "title": "My VimRC",
    "excerpt": "Customized Vim configuration for personal use and efficient editing",
    "description": "A personalized Vim configuration file (.vimrc) that enhances the functionality of the Vim text editor with custom settings, key mappings, and plugins to improve productivity and streamline the editing experience.",
    "stack": [
      "Vimscript",
      "Bash Scripting"
    ],
    "repo": "https://github.com/CISSSCO/myvimrc_config"
  },
  {
    "id": "cisssco",
    "title": "CISSSCO.github.io",
    "excerpt": "Terminal style Personal portfolio",
    "description": "This repository contains my personal portfolio website in terminal style, built and hosted using GitHub Pages.",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "repo": "https://github.com/CISSSCO/CISSSCO.github.io",
    "url": "https://cisssco.github.io"
  },
  {
    "id": "popularwebsitethemes",
    "title": "PopularWebsiteThemes",
    "excerpt": "Custom themes for popular websites like 10fastfingers",
    "description": "This repo have some of my custom themes for popular websites.",
    "stack": [
      "CSS",
      "HTML"
    ],
    "url": "https://userstyles.org/user-profile/1051695",
    "repo": "https://github.com/CISSSCO/PopularWebsiteThemes"
  }
];
  const DEFAULT_SKILLS = [
  {
    "id": "c_cpp",
    "name": "C / C++",
    "category": "Programming",
    "level": 90,
    "context": "Performance-critical HPC and scientific applications",
    "featured": true
  },
  {
    "id": "supercomputing",
    "name": "Supercomputing",
    "category": "HPC",
    "level": 90,
    "context": "Work experience on multiple PARAM Series of Supercomputers of INDIA",
    "featured": true
  },
  {
    "id": "mpi",
    "name": "MPI",
    "category": "Parallel Computing",
    "level": 85,
    "context": "Distributed-memory parallelism on multi-node clusters",
    "featured": true
  },
  {
    "id": "openmp",
    "name": "OpenMP",
    "category": "Parallel Computing",
    "level": 85,
    "context": "Shared-memory and hybrid parallel programming",
    "featured": true
  },
  {
    "id": "pthread",
    "name": "Pthread",
    "category": "Parallel Computing",
    "level": 70,
    "context": "Shared-memory parallel programming",
    "featured": false
  },
  {
    "id": "cuda",
    "name": "CUDA",
    "category": "GPU Computing",
    "level": 70,
    "context": "GPU acceleration for scientific and compute workloads",
    "featured": false
  },
  {
    "id": "slurm",
    "name": "Slurm",
    "category": "HPC Tools",
    "level": 75,
    "context": "Job scheduling and workload management on clusters",
    "featured": false
  },
  {
    "id": "python",
    "name": "Python",
    "category": "Programming",
    "level": 75,
    "context": "Automation, scripting, tooling",
    "featured": false
  },
  {
    "id": "java",
    "name": "JAVA",
    "category": "Programming",
    "level": 60,
    "context": "Intermediate Level Understanding of Java",
    "featured": false
  },
  {
    "id": "shell",
    "name": "Shell Scripting",
    "category": "Systems",
    "level": 90,
    "context": "Workflow automation and system setup",
    "featured": true
  },
  {
    "id": "linux",
    "name": "Linux",
    "category": "Systems",
    "level": 95,
    "context": "Primary environment for HPC clusters, system administration, and development",
    "featured": true
  },
  {
    "id": "dsa",
    "name": "Data Structure and Algorithms",
    "category": "Programming",
    "level": 70,
    "context": "Understand the fundamentals of DSA and use it wherever possible in my work",
    "featured": false
  },
  {
    "id": "ai",
    "name": "AI/ML",
    "category": "AI",
    "level": 70,
    "context": "Have hands on experience in working with AI/ML environment and projects",
    "featured": false
  },
  {
    "id": "fortran",
    "name": "Fortran",
    "category": "Programming",
    "level": 75,
    "context": "Have experience with fortran while working on scientific/parallel programming codes",
    "featured": false
  },
  {
    "id": "openacc",
    "name": "OpenACC",
    "category": "GPU Computing",
    "level": 65,
    "context": "Experience with OpenACC for Pragma based GPU programming",
    "featured": false
  },
  {
    "id": "sysadmin",
    "name": "System Administration",
    "category": "Systems",
    "level": 85,
    "context": "My daily work involves parts of system admin and monitoring for efficient cluster usage",
    "featured": true
  },
  {
    "id": "html",
    "name": "HTML",
    "category": "Web Technology",
    "level": 90,
    "context": "I use HTML to write my documents and also to develop my Portfolios",
    "featured": false
  },
  {
    "id": "css",
    "name": "CSS",
    "category": "Web Technology",
    "level": 80,
    "context": "Style Webpages and my ORG Documents",
    "featured": false
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "category": "Web Technology",
    "level": 65,
    "context": "Used JavaScript in my Portfolios and my projects",
    "featured": false
  },
  {
    "id": "react",
    "name": "ReactJS",
    "category": "Web Technology",
    "level": 50,
    "context": "Used React to develop this Portfolio",
    "featured": false
  },
  {
    "id": "threejs",
    "name": "ThreeJS",
    "category": "Web Technology",
    "level": 50,
    "context": "Have Basic Understanding about Threejs fundamentals",
    "featured": false
  },
  {
    "id": "distributedcomputing",
    "name": "Distributed Computing",
    "category": "Parallel Computing",
    "level": 75,
    "context": "My daily work involve working on distributed computing environment like PARAM Series of Supercomputers",
    "featured": false
  },
  {
    "id": "spack",
    "name": "Spack",
    "category": "HPC Tools",
    "level": 90,
    "context": "I use Spack extensively to build, install, and manage scientific software on HPC systems",
    "featured": false
  },
  {
    "id": "conda",
    "name": "Conda",
    "category": "HPC Tools",
    "level": 90,
    "context": "I use Conda to create and manage reproducible scientific and AI/ML environments",
    "featured": false
  },
  {
    "id": "docker",
    "name": "Docker",
    "category": "Containers",
    "level": 75,
    "context": "I use Docker to build and manage containerized development and scientific computing environments",
    "featured": false
  },
  {
    "id": "apptainer",
    "name": "Apptainer",
    "category": "Containers",
    "level": 70,
    "context": "I use Apptainer to deploy portable and reproducible applications on HPC systems",
    "featured": false
  },
  {
    "id": "jupyterhub",
    "name": "JupyterHub",
    "category": "HPC Tools",
    "level": 90,
    "context": "Designed and deployed JupyterHub platforms integrated with HPC resources and authentication",
    "featured": false
  },
  {
    "id": "clusteradmin",
    "name": "Cluster Administration",
    "category": "HPC",
    "level": 85,
    "context": "My daily work involves administering and maintaining Linux based HPC clusters",
    "featured": false
  },
  {
    "id": "scientificcomputing",
    "name": "Scientific Computing",
    "category": "HPC",
    "level": 90,
    "context": "My work involves deploying, maintaining, and optimizing scientific computing applications",
    "featured": true
  },
  {
    "id": "researchcomputing",
    "name": "Research Computing",
    "category": "HPC",
    "level": 90,
    "context": "I develop and support computing environments for multidisciplinary research workloads",
    "featured": false
  },
  {
    "id": "softwaredeployment",
    "name": "Software Deployment",
    "category": "Systems",
    "level": 90,
    "context": "I deploy and maintain scientific software on Linux and HPC environments",
    "featured": true
  },
  {
    "id": "applicationporting",
    "name": "Application Porting",
    "category": "Systems",
    "level": 90,
    "context": "I have experience porting scientific applications across Linux and HPC platforms",
    "featured": false
  },
  {
    "id": "performanceanalysis",
    "name": "Performance Analysis",
    "category": "HPC",
    "level": 75,
    "context": "I analyze and optimize the performance of scientific and parallel applications",
    "featured": true
  },
  {
    "id": "git",
    "name": "Git",
    "category": "DevOps",
    "level": 90,
    "context": "I use Git for version control and collaborative software development",
    "featured": false
  },
  {
    "id": "cmake",
    "name": "CMake",
    "category": "Compilers and Build Tolls",
    "level": 80,
    "context": "I use CMake to configure and build scientific and HPC software projects",
    "featured": false
  },
  {
    "id": "make",
    "name": "GNU Make",
    "category": "Compilers and Build Tolls",
    "level": 70,
    "context": "I use GNU Make to build and automate compilation of scientific software",
    "featured": false
  },
  {
    "id": "technicaldocumentation",
    "name": "Technical Documentation",
    "category": "Systems",
    "level": 95,
    "context": "I prepare installation guides, deployment manuals, and technical documentation",
    "featured": false
  },
  {
    "id": "sculpting",
    "name": "Digital Sculpting",
    "category": "3D/Design",
    "level": 80,
    "context": "I do digital sculpting as hobby in my free time using tools like blender and zbrush",
    "featured": false
  },
  {
    "id": "blender",
    "name": "Blender",
    "category": "3D/Design",
    "level": 80,
    "context": "Use this tools to create my own 3D assets for projects",
    "featured": false
  },
  {
    "id": "unity",
    "name": "Unity",
    "category": "3D/Design",
    "level": 65,
    "context": "Used this to develop and port my applications to different plateform including web and windows devices",
    "featured": false
  },
  {
    "id": "perl",
    "name": "Perl",
    "category": "Programming",
    "level": 60,
    "context": "Used Perl for scripting, automation, and maintaining scientific software workflows",
    "featured": false
  },
  {
    "id": "ansible",
    "name": "Ansible",
    "category": "DevOps",
    "level": 60,
    "context": "Use Ansible to automate Linux system configuration and software deployment",
    "featured": false
  },
  {
    "id": "jenkins",
    "name": "Jenkins",
    "category": "DevOps",
    "level": 60,
    "context": "Have experience creating and maintaining CI/CD pipelines using Jenkins",
    "featured": false
  },
  {
    "id": "kubernetes",
    "name": "Kubernetes",
    "category": "DevOps",
    "level": 60,
    "context": "Have working knowledge of Kubernetes for container orchestration and application deployment",
    "featured": false
  },
  {
    "id": "aws",
    "name": "Amazon Web Services",
    "category": "Cloud",
    "level": 50,
    "context": "Basic understanding of AWS cloud services and cloud infrastructure concepts",
    "featured": false
  },
  {
    "id": "prometheus",
    "name": "Prometheus",
    "category": "DevOps",
    "level": 55,
    "context": "Used Prometheus for monitoring Linux systems and collecting infrastructure metrics",
    "featured": false
  },
  {
    "id": "grafana",
    "name": "Grafana",
    "category": "DevOps",
    "level": 55,
    "context": "Created dashboards for monitoring infrastructure and application performance",
    "featured": false
  },
  {
    "id": "batch",
    "name": "Batch Scripting",
    "category": "Programming",
    "level": 70,
    "context": "Write batch scripts to automate administrative and development tasks on Windows systems",
    "featured": false
  },
  {
    "id": "org",
    "name": "Org Mode",
    "category": "Literate Programming",
    "level": 95,
    "context": "Extensively use Org Mode for literate programming, technical documentation, project management, note-taking, presentations, and personal knowledge management",
    "featured": false
  },
  {
    "id": "emacs",
    "name": "GNU Emacs",
    "category": "Literate Programming",
    "level": 90,
    "context": "Daily development environment customized for programming, documentation, knowledge management, and productivity",
    "featured": false
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "category": "Literate Programming",
    "level": 85,
    "context": "Write technical documentation, project documentation, README files, and knowledge base articles using Markdown",
    "featured": false
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "category": "Literate Programming",
    "level": 80,
    "context": "Use LaTeX to prepare technical reports, research documents, presentations, and professional resumes",
    "featured": false
  }
];
  const DEFAULT_EXPERIENCES = [
  {
    "id": "iitbhu",
    "role": "HPC Application Engineer",
    "org": "Indian Institute of Technology (Banaras Hindu University), Varanasi",
    "period": "Feb 2025 — Aug 2026",
    "duration": "1.5 year",
    "summary": "Working as an HPC Application Engineer at IIT (BHU), deputed by C-DAC, supporting large-scale scientific and computational research workloads.",
    "highlights": [
      "Currently deputed to IIT (BHU), managing HPC application workflows on the PARAM Shivay supercomputing cluster.",
      "Responsible for system administration tasks including user management, job monitoring, workload scheduling, and identifying unauthorized or inefficient applications.",
      "Provide customized software environments for researchers running simulations, DFT calculations, and AI/ML/DL workloads.",
      "Collaborate closely with researchers to optimize performance, troubleshoot execution issues, and ensure reliable operation of scientific workloads.",
      "Actively contribute to open-source software and customize Linux environments for improved performance and usability."
    ],
    "stack": [
      "C",
      "C++",
      "Python",
      "Bash",
      "MPI",
      "OpenMP",
      "CUDA",
      "Linux",
      "SLURM",
      "Spack",
      "Conda",
      "JupyterHub",
      "Apptainer",
      "Intel MPI",
      "OpenMPI",
      "Intel oneAPI",
      "Scientific Computing",
      "HPC Systems"
    ]
  },
  {
    "id": "cdac",
    "role": "Project Engineer",
    "org": "Centre for Development of Advanced Computing (C-DAC), India",
    "period": "Apr 2024 — Present",
    "duration": "2.5+ years",
    "summary": "Working as a Project Engineer at C-DAC, contributing to national-level HPC research, development, and training initiatives under the National Supercomputing Mission (NSM).",
    "highlights": [
      "Contributing to the National Supercomputing Mission (NSM) through research, development, and capacity-building in High-Performance Computing and Supercomputing.",
      "Design, manage, and optimize HPC environments using parallel programming models such as MPI, OpenMP, Pthreads, and GPU programming frameworks including CUDA and OpenACC.",
      "Work on R&D of HPC software tools with a focus on performance optimization, scalability, and efficient resource utilization.",
      "Develop technical training content and educational materials to support HPC adoption across academic and research institutions.",
      "Conduct workshops, training programs, and mentoring sessions for students, researchers, and professionals in HPC and parallel programming.",
      "Support national initiatives aimed at strengthening India’s supercomputing ecosystem and next-generation computing capabilities."
    ],
    "stack": [
      "Linux",
      "C",
      "C++",
      "Python",
      "Bash",
      "MPI",
      "OpenMP",
      "Pthreads",
      "CUDA",
      "OpenACC",
      "SLURM",
      "Spack",
      "Conda",
      "Intel oneAPI",
      "Intel MPI",
      "OpenMPI",
      "NVHPC",
      "GCC",
      "MKL",
      "VTune",
      "Git",
      "Scientific Computing",
      "HPC Toolchains",
      "Supercomputing"
    ]
  }
];
  const SKILL_PROJECTS = {
  "c_cpp": [
    "hpccfs"
  ],
  "supercomputing": [
    "hpccfs"
  ],
  "mpi": [
    "hpccfs"
  ],
  "openmp": [
    "hpccfs"
  ],
  "pthread": [],
  "cuda": [],
  "slurm": [
    "hpccfs"
  ],
  "python": [
    "playlisto",
    "cerrfix",
    "dotfiles"
  ],
  "java": [],
  "shell": [
    "hpccfs",
    "cerrfix",
    "gitpush",
    "dotfiles",
    "myvimrc"
  ],
  "linux": [
    "hpccfs",
    "dotfiles",
    "cerrfix",
    "myvimrc",
    "gitpush"
  ],
  "dsa": [],
  "ai": [],
  "fortran": [],
  "openacc": [],
  "sysadmin": [
    "hpccfs"
  ],
  "html": [
    "orgslide",
    "cisssco",
    "popularwebsitethemes"
  ],
  "css": [
    "orgslide",
    "cisssco",
    "popularwebsitethemes"
  ],
  "javascript": [
    "orgslide",
    "cisssco",
    "playlisto"
  ],
  "react": [
    "playlisto"
  ],
  "threejs": [],
  "distributedcomputing": [
    "hpccfs"
  ],
  "spack": [
    "hpccfs"
  ],
  "conda": [],
  "docker": [],
  "apptainer": [],
  "jupyterhub": [],
  "clusteradmin": [
    "hpccfs"
  ],
  "scientificcomputing": [
    "hpccfs"
  ],
  "researchcomputing": [],
  "softwaredeployment": [
    "hpccfs"
  ],
  "applicationporting": [],
  "performanceanalysis": [
    "hpccfs"
  ],
  "git": [
    "gitpush",
    "dotfiles",
    "cisssco",
    "orgslide",
    "hpccfs",
    "cerrfix",
    "playlisto",
    "myvimrc",
    "popularwebsitethemes"
  ],
  "cmake": [
    "hpccfs"
  ],
  "make": [
    "hpccfs"
  ],
  "technicaldocumentation": [
    "hpccfs",
    "orgslide",
    "cisssco"
  ],
  "sculpting": [],
  "blender": [],
  "unity": [],
  "perl": [],
  "ansible": [],
  "jenkins": [],
  "kubernetes": [],
  "aws": [],
  "prometheus": [],
  "grafana": [],
  "batch": [],
  "org": [
    "orgslide",
    "dotfiles"
  ],
  "emacs": [
    "orgslide",
    "dotfiles"
  ],
  "markdown": [
    "orgslide",
    "cisssco"
  ],
  "latex": []
};
  const SKILL_EXPS = {
  "c_cpp": [
    "iitbhu",
    "cdac"
  ],
  "supercomputing": [
    "iitbhu",
    "cdac"
  ],
  "mpi": [
    "iitbhu",
    "cdac"
  ],
  "openmp": [
    "iitbhu",
    "cdac"
  ],
  "pthread": [
    "cdac"
  ],
  "cuda": [
    "iitbhu",
    "cdac"
  ],
  "slurm": [
    "iitbhu",
    "cdac"
  ],
  "python": [
    "iitbhu",
    "cdac"
  ],
  "java": [],
  "shell": [
    "iitbhu",
    "cdac"
  ],
  "linux": [
    "iitbhu",
    "cdac"
  ],
  "dsa": [
    "iitbhu",
    "cdac"
  ],
  "ai": [
    "iitbhu",
    "cdac"
  ],
  "fortran": [
    "iitbhu",
    "cdac"
  ],
  "openacc": [
    "cdac"
  ],
  "sysadmin": [
    "iitbhu"
  ],
  "html": [],
  "css": [],
  "javascript": [],
  "react": [],
  "threejs": [],
  "distributedcomputing": [
    "iitbhu",
    "cdac"
  ],
  "spack": [
    "iitbhu",
    "cdac"
  ],
  "conda": [
    "iitbhu",
    "cdac"
  ],
  "docker": [],
  "apptainer": [
    "iitbhu"
  ],
  "jupyterhub": [
    "iitbhu"
  ],
  "clusteradmin": [
    "iitbhu",
    "cdac"
  ],
  "scientificcomputing": [
    "iitbhu",
    "cdac"
  ],
  "researchcomputing": [
    "iitbhu",
    "cdac"
  ],
  "softwaredeployment": [
    "iitbhu",
    "cdac"
  ],
  "applicationporting": [
    "iitbhu",
    "cdac"
  ],
  "performanceanalysis": [
    "iitbhu",
    "cdac"
  ],
  "git": [
    "cdac"
  ],
  "cmake": [
    "iitbhu",
    "cdac"
  ],
  "make": [
    "iitbhu",
    "cdac"
  ],
  "technicaldocumentation": [
    "iitbhu",
    "cdac"
  ],
  "sculpting": [],
  "blender": [],
  "unity": [],
  "perl": [
    "iitbhu"
  ],
  "ansible": [],
  "jenkins": [],
  "kubernetes": [],
  "aws": [],
  "prometheus": [],
  "grafana": [],
  "batch": [],
  "org": [
    "iitbhu",
    "cdac"
  ],
  "emacs": [
    "iitbhu",
    "cdac"
  ],
  "markdown": [
    "iitbhu",
    "cdac"
  ],
  "latex": [
    "iitbhu",
    "cdac"
  ]
};

  function getBar(level) {
    const bars = Math.min(20, Math.max(0, Math.round(level / 5)));
    const fill = "█".repeat(bars);
    const empty = "░".repeat(20 - bars);
    return '<span class="bar-fill">' + fill + '</span><span class="bar-empty">' + empty + '</span>';
  }

  function getStatus(level) {
    if (level >= 90) return 'Expert / Core Competency';
    if (level >= 75) return 'Advanced / Production-ready';
    if (level >= 60) return 'Proficient / Working Knowledge';
    return 'Familiar / Foundational';
  }

  // Build the hierarchical VFS tree
  function buildFilesystem(projectsData = DEFAULT_PROJECTS, skillsData = DEFAULT_SKILLS, expData = DEFAULT_EXPERIENCES) {
    const root = {
      type: "dir",
      name: "",
      children: {}
    };

    root.children["home"] = {
      type: "dir",
      name: "home",
      children: {}
    };

    const cisco = {
      type: "dir",
      name: "cisco",
      children: {}
    };
    root.children["home"].children["cisco"] = cisco;

    // Standard root files in ~
    cisco.children["about.txt"] = {
      type: "file",
      name: "about.txt",
      size: "1.4K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.about
    };

    cisco.children["philosophy.txt"] = {
      type: "file",
      name: "philosophy.txt",
      size: "1.5K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.philosophy
    };

    cisco.children["uses.org"] = {
      type: "file",
      name: "uses.org",
      size: "1.1K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.uses
    };

    cisco.children["README.org"] = {
      type: "file",
      name: "README.org",
      size: "4.3K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title">#+TITLE: CISSSCO.github.io</div>
  <p class="term-dim">Personal portfolio website, built and hosted using GitHub Pages.</p>
  <p>The site is intentionally minimal and terminal-driven. All interaction happens through a command-line interface with full directory navigation, Tab autocompletion, Ranger file manager, and Unix utilities.</p>
</div>
      `
    };

    // ==========================================
    // 1. Projects directory inside ~
    // ==========================================
    const projectsDir = {
      type: "dir",
      name: "projects",
      children: {}
    };
    cisco.children["projects"] = projectsDir;

    projectsDir.children["README.md"] = {
      type: "file",
      name: "README.md",
      size: "2.8K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">~/projects — Projects Directory & Command Manual</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">CLI COMMAND USAGE & HELP:</div>
  <div style="line-height: 1.6; margin-bottom: 0.8rem;">
    <span class="term-cyan term-bold">projects</span> <span class="term-dim">— List all portfolio projects with summaries & links</span><br>
    <span class="term-cyan term-bold">projects &lt;keyword&gt;</span> <span class="term-dim">— Filter by keyword (e.g. 'projects cerrfix', 'projects shell', 'projects linux')</span><br>
    <span class="term-cyan term-bold">cat allprojects.txt</span> <span class="term-dim">— View complete catalog of all projects</span><br>
    <span class="term-cyan term-bold">man projects</span> <span class="term-dim">— Read full manual page and options</span><br>
    <span class="term-cyan term-bold">ranger projects</span> <span class="term-dim">— Browse projects in interactive Ranger file manager</span><br>
    <span class="term-cyan term-bold">cd &lt;project-id&gt;</span> <span class="term-dim">— Enter a project directory (e.g. 'cd hpccfs', 'cd orgslide')</span>
  </div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">PROJECT FILES IN EACH SUBDIRECTORY:</div>
  <div style="line-height: 1.6;">
    <span class="term-key">README.md</span> <span class="term-dim">— Project architecture and overview</span><br>
    <span class="term-key">details.txt</span> <span class="term-dim">— Detailed technical specifications and features</span><br>
    <span class="term-key">stack.txt</span> <span class="term-dim">— Languages, frameworks, and libraries used</span><br>
    <span class="term-key">links.txt</span> <span class="term-dim">— Repository and live demo links</span>
  </div>
</div>
      `
    };

    projectsDir.children["allprojects.txt"] = {
      type: "file",
      name: "allprojects.txt",
      size: "3.2K",
      date: "Sep 19 19:40",
      getContent: () => {
        const rows = projectsData.map((p, idx) => `
<div style="margin-bottom: 0.85rem; border-left: 2px solid var(--accent); padding-left: 0.75rem;">
  <div><span class="term-dim">${idx + 1}.</span> <span class="term-cyan term-bold">${p.title}</span> <span class="term-dim">(~/projects/${p.id}/)</span></div>
  <div style="line-height: 1.5; margin: 0.2rem 0;"><span class="term-value">${p.excerpt}</span></div>
  <div style="margin: 0.25rem 0;"><span class="term-key">Stack:</span> ${p.stack.map(s => '<span class="term-badge">' + s + '</span>').join(" ")}</div>
  <div class="term-dim"><span class="term-key">Repo:</span> <a class="term-link" href="${p.repo}" target="_blank">${p.repo}</a>${p.url ? ` &nbsp;|&nbsp; <span class="term-key">Live:</span> <a class="term-link" href="${p.url}" target="_blank">${p.url}</a>` : ''}</div>
</div>
        `).join("");
        return `
<div class="terminal-section">
  <div class="term-title term-bold">~/projects/allprojects.txt — Full Projects Catalog (${projectsData.length} projects)</div>
  <div class="term-dim" style="margin-bottom: 0.8rem;">-------------------------------------------------------------------</div>
  ${rows}
  <div class="term-dim" style="margin-top: 0.6rem;">[Tip] Navigate into any project: 'cd projects/&lt;id&gt;' or run 'projects &lt;filter&gt;'.</div>
</div>
        `;
      }
    };
    projectsDir.children["allprojects"] = projectsDir.children["allprojects.txt"];

    // Populate each project folder
    projectsData.forEach(p => {
      const projFolder = {
        type: "dir",
        name: p.id,
        children: {}
      };
      projectsDir.children[p.id] = projFolder;

      projFolder.children["README.md"] = {
        type: "file",
        name: "README.md",
        size: "1.5K",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${p.title}</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Excerpt:</span> <span class="term-fg">${p.excerpt}</span></p>
  ${p.featured ? '<p><span class="term-badge term-yellow">Featured Project</span></p>' : ''}
  <div class="term-title" style="margin-top: 0.8rem;">OVERVIEW:</div>
  <p style="line-height: 1.6;">${p.description}</p>
  <div class="term-title" style="margin-top: 0.8rem;">TECH STACK:</div>
  <p>${p.stack.map(s => '<span class="term-badge">' + s + '</span>').join(" ")}</p>
  <div class="term-title" style="margin-top: 0.8rem;">REPOSITORY & LINKS:</div>
  <p><span class="term-key">Repo:</span> <a class="term-link" href="${p.repo}" target="_blank">${p.repo}</a></p>
  ${p.url ? '<p><span class="term-key">Live:</span> <a class="term-link" href="' + p.url + '" target="_blank">' + p.url + '</a></p>' : ''}
</div>
        `
      };

      projFolder.children["stack.txt"] = {
        type: "file",
        name: "stack.txt",
        size: "620B",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${p.title} — Technical Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <thead>
      <tr><th>#</th><th>TECHNOLOGY / TOOL</th></tr>
    </thead>
    <tbody>
      ${p.stack.map((s, idx) => '<tr><td style="width:50px;"><span class="term-dim">' + (idx + 1) + '</span></td><td><span class="term-cyan term-bold">' + s + '</span></td></tr>').join("")}
    </tbody>
  </table>
  <div class="term-dim" style="margin-top: 0.5rem;">Total components: ${p.stack.length}</div>
</div>
        `
      };

      projFolder.children["links.txt"] = {
        type: "file",
        name: "links.txt",
        size: "340B",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${p.title} — Links & URLs</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="${p.repo}" target="_blank">${p.repo}</a></p>
  ${p.url ? '<p><span class="term-key">Website / Demo:</span> <a class="term-link" href="' + p.url + '" target="_blank">' + p.url + '</a></p>' : '<p><span class="term-key">Website:</span> <span class="term-dim">N/A</span></p>'}
</div>
        `
      };

      projFolder.children["details.txt"] = {
        type: "file",
        name: "details.txt",
        size: "1.8K",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${p.title} — Project Dossier</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Tagline:</span> ${p.excerpt}</p>
  <p><span class="term-key">Status:</span> ${p.featured ? '<span class="term-yellow term-bold">Featured Project</span>' : 'Standard'}</p>
  <div class="term-title" style="margin-top: 0.6rem;">DESCRIPTION:</div>
  <p style="line-height:1.6">${p.description}</p>
  <div class="term-title" style="margin-top: 0.6rem;">STACK:</div>
  <p>${p.stack.map(s => '<span class="term-badge">' + s + '</span>').join(" ")}</p>
  <div class="term-title" style="margin-top: 0.6rem;">LINKS:</div>
  <p><a class="term-link" href="${p.repo}" target="_blank">${p.repo}</a></p>
  ${p.url ? '<p><a class="term-link" href="' + p.url + '" target="_blank">' + p.url + '</a></p>' : ''}
</div>
        `
      };
    });

    // ==========================================
    // 2. Experiences directory inside ~
    // ==========================================
    const expDir = {
      type: "dir",
      name: "experiences",
      children: {}
    };
    cisco.children["experiences"] = expDir;

    expDir.children["README.md"] = {
      type: "file",
      name: "README.md",
      size: "2.4K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">~/experiences — Career & Engineering Roles Manual</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">CLI COMMAND USAGE & HELP:</div>
  <div style="line-height: 1.6; margin-bottom: 0.8rem;">
    <span class="term-cyan term-bold">experience</span> / <span class="term-cyan term-bold">experiences</span> <span class="term-dim">— View all professional positions & research deputations</span><br>
    <span class="term-cyan term-bold">experience &lt;keyword&gt;</span> <span class="term-dim">— Filter by keyword (e.g. 'experience hpc', 'experience cdac', 'experience iitbhu')</span><br>
    <span class="term-cyan term-bold">man experience</span> <span class="term-dim">— View full manual documentation and examples</span><br>
    <span class="term-cyan term-bold">ranger experiences</span> <span class="term-dim">— Explore experience dossiers in Ranger file manager</span><br>
    <span class="term-cyan term-bold">cd &lt;org-id&gt;</span> <span class="term-dim">— Enter an organization directory ('cd iitbhu', 'cd cdac')</span>
  </div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">DOSSIER FILES IN EACH SUBDIRECTORY:</div>
  <div style="line-height: 1.6;">
    <span class="term-key">role.txt</span> <span class="term-dim">— Role title, organization, duration, and dates</span><br>
    <span class="term-key">responsibilities.txt</span> <span class="term-dim">— Day-to-day duties, accomplishments & highlights</span><br>
    <span class="term-key">stack.txt</span> <span class="term-dim">— Tools, compilers, and supercomputing stack</span><br>
    <span class="term-key">overview.txt</span> <span class="term-dim">— Narrative summary of deputation tenure</span>
  </div>
</div>
      `
    };

    expData.forEach(e => {
      const eFolder = {
        type: "dir",
        name: e.id,
        children: {}
      };
      expDir.children[e.id] = eFolder;

      eFolder.children["role.txt"] = {
        type: "file",
        name: "role.txt",
        size: "850B",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${e.role} @ ${e.org}</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <tbody>
      <tr><td style="width: 140px;"><span class="term-key">Role</span></td><td><span class="term-cyan term-bold">${e.role}</span></td></tr>
      <tr><td><span class="term-key">Organization</span></td><td><span class="term-yellow">${e.org}</span></td></tr>
      <tr><td><span class="term-key">Period</span></td><td><span class="term-green">${e.period}</span></td></tr>
      <tr><td><span class="term-key">Duration</span></td><td><span class="term-fg">${e.duration}</span></td></tr>
    </tbody>
  </table>
  <div class="term-title" style="margin-top: 0.8rem;">EXECUTIVE SUMMARY:</div>
  <p style="line-height: 1.6;">${e.summary}</p>
</div>
        `
      };

      eFolder.children["responsibilities.txt"] = {
        type: "file",
        name: "responsibilities.txt",
        size: "1.4K",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${e.role} — Key Responsibilities & Highlights</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    ${e.highlights.map(h => '<li>' + h + '</li>').join("")}
  </ul>
</div>
        `
      };

      eFolder.children["stack.txt"] = {
        type: "file",
        name: "stack.txt",
        size: "950B",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${e.org} — Technologies & Environments</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p>${e.stack.map(s => '<span class="term-badge">' + s + '</span>').join(" ")}</p>
  <div class="term-dim" style="margin-top: 0.5rem;">Total tools & environments: ${e.stack.length}</div>
</div>
        `
      };

      eFolder.children["overview.txt"] = {
        type: "file",
        name: "overview.txt",
        size: "2.8K",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${e.role} @ ${e.org} — Complete Record</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <div style="margin-bottom: 0.8rem;">
    <span class="term-green term-bold">* ${e.period}</span>
    <span class="term-dim"> · </span>
    <span class="term-yellow">${e.duration}</span>
  </div>
  <p style="line-height: 1.6;">${e.summary}</p>
  <div class="term-title" style="margin-top: 0.8rem;">KEY RESPONSIBILITIES:</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6; margin-bottom: 0.8rem;">
    ${e.highlights.map(h => '<li>' + h + '</li>').join("")}
  </ul>
  <div class="term-title" style="margin-top: 0.8rem;">TECHNOLOGY STACK:</div>
  <p>${e.stack.map(s => '<span class="term-badge">' + s + '</span>').join(" ")}</p>
</div>
        `
      };
    });

    // ==========================================
    // 3. Skills directory inside ~
    // ==========================================
    const skillsDir = {
      type: "dir",
      name: "skills",
      children: {}
    };
    cisco.children["skills"] = skillsDir;

    skillsDir.children["README.md"] = {
      type: "file",
      name: "README.md",
      size: "3.2K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">~/skills — Technical Skills Directory & Command Manual</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">CLI COMMAND USAGE & HELP:</div>
  <div style="line-height: 1.6; margin-bottom: 0.8rem;">
    <span class="term-cyan term-bold">skills</span> <span class="term-dim">— Display all skills with visual ASCII progress bars & domains</span><br>
    <span class="term-cyan term-bold">skills &lt;keyword&gt;</span> <span class="term-dim">— Filter by keyword (e.g. 'skills c++', 'skills python', 'skills slurm', 'skills hpc')</span><br>
    <span class="term-cyan term-bold">cat allskills.txt</span> <span class="term-dim">— View full catalog of all ${skillsData.length} competencies grouped by domain</span><br>
    <span class="term-cyan term-bold">man skills</span> <span class="term-dim">— Read full manual page and options</span><br>
    <span class="term-cyan term-bold">ranger skills</span> <span class="term-dim">— Explore skills in interactive Ranger file manager</span><br>
    <span class="term-cyan term-bold">cd &lt;skill-id&gt;</span> <span class="term-dim">— Enter a skill directory (e.g. 'cd mpi', 'cd cuda', 'cd slurm')</span>
  </div>
  <div class="term-title" style="margin-top: 0.5rem; margin-bottom: 0.3rem;">SKILL FILES IN EACH SUBDIRECTORY:</div>
  <div style="line-height: 1.6;">
    <span class="term-key">proficiency.txt</span> <span class="term-dim">— Rating bar, score, and practical context</span><br>
    <span class="term-key">projects.txt</span> <span class="term-dim">— Projects where used with percentage breakdown</span><br>
    <span class="term-key">experience.txt</span> <span class="term-dim">— Supercomputing roles at IIT (BHU) & C-DAC where applied</span><br>
    <span class="term-key">details.txt</span> <span class="term-dim">— Complete skill profile combining all metrics</span>
  </div>
</div>
      `
    };

    skillsDir.children["allskills.txt"] = {
      type: "file",
      name: "allskills.txt",
      size: "10.6K",
      date: "Sep 19 19:40",
      getContent: () => {
        const cats = {};
        skillsData.forEach(s => {
          const c = s.category || "Other";
          cats[c] = cats[c] || [];
          cats[c].push(s);
        });

        let catBlocks = "";
        for (const [catName, list] of Object.entries(cats)) {
          const rows = list.map(s => {
            const barHTML = getBar(s.level);
            return `<tr>
              <td style="white-space:nowrap;"><span class="term-cyan term-bold">${s.name}</span></td>
              <td style="white-space:nowrap; padding: 0 0.75rem;"><span class="term-dim">[</span>${barHTML}<span class="term-dim">]</span> <span class="term-green">${s.level}%</span></td>
              <td><span class="term-value">${s.context}</span></td>
            </tr>`;
          }).join("");

          catBlocks += `
<div style="margin-top: 0.9rem;">
  <div class="term-title" style="font-size: 0.95rem; margin-bottom: 0.3rem;">[CATEGORY: ${catName.toUpperCase()}] (${list.length} skills)</div>
  <div class="term-table-responsive">
    <table class="term-table">
      <thead>
        <tr><th>SKILL</th><th>PROFICIENCY</th><th>PRACTICAL CONTEXT</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</div>
          `;
        }

        return `
<div class="terminal-section">
  <div class="term-title term-bold">~/skills/allskills.txt — All Technical Skills & Proficiencies (${skillsData.length} competencies)</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  ${catBlocks}
  <div class="term-dim" style="margin-top: 0.8rem;">[Tip] Filter any skill with 'skills &lt;keyword&gt;' or explore 'cd skills/&lt;id&gt;'.</div>
</div>
        `;
      }
    };
    skillsDir.children["allskills"] = skillsDir.children["allskills.txt"];

    skillsData.forEach(s => {
      const sFolder = {
        type: "dir",
        name: s.id,
        children: {}
      };
      skillsDir.children[s.id] = sFolder;

      const pIds = SKILL_PROJECTS[s.id] || [];
      const matchedProjects = projectsData.filter(p => pIds.includes(p.id));
      const projPct = ((matchedProjects.length / projectsData.length) * 100).toFixed(1);

      const eIds = SKILL_EXPS[s.id] || [];
      const matchedExp = expData.filter(e => eIds.includes(e.id));

      const barHTML = getBar(s.level);
      const statusStr = getStatus(s.level);

      sFolder.children["proficiency.txt"] = {
        type: "file",
        name: "proficiency.txt",
        size: "720B",
        date: "Sep 19 19:40",
        getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">${s.name} — Technical Proficiency</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <tbody>
      <tr><td style="width: 150px;"><span class="term-key">Category</span></td><td><span class="term-yellow">${s.category}</span></td></tr>
      <tr><td><span class="term-key">Proficiency Level</span></td><td>[${barHTML}] <span class="term-cyan term-bold">${s.level}%</span></td></tr>
      <tr><td><span class="term-key">Evaluation</span></td><td><span class="term-fg">${statusStr}</span></td></tr>
      <tr><td><span class="term-key">Featured Skill</span></td><td>${s.featured ? '<span class="term-badge term-yellow">Highlight</span>' : '<span class="term-dim">Standard</span>'}</td></tr>
    </tbody>
  </table>
  <div class="term-title" style="margin-top: 0.8rem;">PRACTICAL CONTEXT:</div>
  <p style="line-height: 1.6;">${s.context}</p>
</div>
        `
      };

      sFolder.children["projects.txt"] = {
        type: "file",
        name: "projects.txt",
        size: "980B",
        date: "Sep 19 19:40",
        getContent: () => {
          let projListHTML = "";
          if (matchedProjects.length > 0) {
            projListHTML = matchedProjects.map(p => `
<div style="margin-bottom: 0.6rem;">
  <span class="term-cyan term-bold">* ${p.title}</span> <span class="term-dim">(${p.id})</span><br>
  <span class="term-dim">Role:</span> ${p.excerpt}<br>
  <span class="term-dim">Stack:</span> ${p.stack.join(", ")}<br>
  <span class="term-dim">Repo:</span> <a class="term-link" href="${p.repo}" target="_blank">${p.repo}</a>
</div>
            `).join("");
          } else {
            projListHTML = `
<div class="term-dim" style="line-height:1.6">
  * Not utilized in public standalone portfolio projects.<br>
  * Extensively deployed in production HPC cluster operations, scientific workloads, and research infrastructure.
</div>
            `;
          }

          return `
<div class="terminal-section">
  <div class="term-title term-bold">${s.name} — Project Utilization</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Portfolio Utilization:</span> <span class="term-cyan term-bold">${matchedProjects.length} of ${projectsData.length} projects (${projPct}%)</span></p>
  <div class="term-title" style="margin-top: 0.8rem;">PROJECT BREAKDOWN:</div>
  ${projListHTML}
</div>
          `;
        }
      };

      sFolder.children["experience.txt"] = {
        type: "file",
        name: "experience.txt",
        size: "820B",
        date: "Sep 19 19:40",
        getContent: () => {
          let expListHTML = "";
          if (matchedExp.length > 0) {
            expListHTML = matchedExp.map(e => `
<div style="margin-bottom: 0.6rem;">
  <span class="term-green term-bold">* ${e.role}</span> @ <span class="term-yellow">${e.org}</span><br>
  <span class="term-dim">Period:</span> ${e.period} (${e.duration})<br>
  <span class="term-dim">Context:</span> ${e.summary}
</div>
            `).join("");
          } else {
            expListHTML = `
<div class="term-dim" style="line-height:1.6">
  * Independent engineering practice, specialized toolchain exploration, and open-source contributions.
</div>
            `;
          }

          return `
<div class="terminal-section">
  <div class="term-title term-bold">${s.name} — Professional Experience & Supercomputing Roles</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  ${expListHTML}
</div>
          `;
        }
      };

      sFolder.children["details.txt"] = {
        type: "file",
        name: "details.txt",
        size: "1.6K",
        date: "Sep 19 19:40",
        getContent: () => {
          const related = skillsData
            .filter(o => o.category === s.category && o.id !== s.id)
            .map(o => o.name);

          return `
<div class="terminal-section">
  <div class="term-title term-bold">${s.name} — Technical Dossier</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <tbody>
      <tr><td style="width: 150px;"><span class="term-key">Skill ID</span></td><td><span class="term-cyan">${s.id}</span></td></tr>
      <tr><td><span class="term-key">Category</span></td><td><span class="term-yellow">${s.category}</span></td></tr>
      <tr><td><span class="term-key">Proficiency</span></td><td>[${barHTML}] <span class="term-bold">${s.level}%</span> (${statusStr})</td></tr>
      <tr><td><span class="term-key">Featured</span></td><td>${s.featured ? '<span class="term-badge term-yellow">Highlight</span>' : 'Standard'}</td></tr>
      <tr><td><span class="term-key">Portfolio Usage</span></td><td><span class="term-cyan">${matchedProjects.length} / ${projectsData.length} projects (${projPct}%)</span></td></tr>
    </tbody>
  </table>

  <div class="term-title" style="margin-top: 0.8rem;">CONTEXT:</div>
  <p style="line-height:1.6">${s.context}</p>

  <div class="term-title" style="margin-top: 0.8rem;">PORTFOLIO PROJECTS:</div>
  <p>${matchedProjects.length > 0 ? matchedProjects.map(p => '<span class="term-badge">' + p.title + '</span>').join(" ") : '<span class="term-dim">Used in internal cluster operations and scientific research workflows</span>'}</p>

  <div class="term-title" style="margin-top: 0.8rem;">PROFESSIONAL ROLES:</div>
  <p>${matchedExp.length > 0 ? matchedExp.map(e => '<span class="term-badge term-green">' + e.org + '</span>').join(" ") : '<span class="term-dim">Independent research and personal workflows</span>'}</p>

  ${related.length > 0 ? `
  <div class="term-title" style="margin-top: 0.8rem;">RELATED SKILLS IN ${s.category.toUpperCase()}:</div>
  <p class="term-dim">${related.slice(0, 8).join(" · ")}</p>
  ` : ''}
</div>
          `;
        }
      };
    });

    return root;
  }

  let FS_ROOT = buildFilesystem();
  let currentPathParts = ["home", "cisco"]; // Default to /home/cisco (~)

  // Path resolution helpers
  function normalizePath(pathStr, fromParts = currentPathParts) {
    if (!pathStr || pathStr === "~") {
      return ["home", "cisco"];
    }

    let parts;
    if (pathStr.startsWith("~/")) {
      parts = ["home", "cisco", ...pathStr.slice(2).split("/")];
    } else if (pathStr.startsWith("/")) {
      parts = pathStr.split("/");
    } else {
      parts = [...fromParts, ...pathStr.split("/")];
    }

    const resolved = [];
    for (let seg of parts) {
      if (!seg || seg === ".") continue;
      if (seg === "experience") seg = "experiences";
      if (seg === "..") {
        if (resolved.length > 0) resolved.pop();
      } else {
        resolved.push(seg);
      }
    }
    return resolved;
  }

  function getNode(parts) {
    let curr = FS_ROOT;
    for (const seg of parts) {
      if (!curr.children || !curr.children[seg]) {
        return null;
      }
      curr = curr.children[seg];
    }
    return curr;
  }

  function getPromptPath(parts = currentPathParts) {
    const p = "/" + parts.join("/");
    if (p === "/home/cisco") return "~";
    if (p.startsWith("/home/cisco/")) {
      return "~" + p.slice("/home/cisco".length);
    }
    return p;
  }

  function getDisplayPath(parts = currentPathParts) {
    return "/" + parts.join("/");
  }

  // VFS API
  const VFS = {
    init(projectsData, skillsData, expData) {
      FS_ROOT = buildFilesystem(projectsData, skillsData, expData);
    },

    getCurrentParts() {
      return [...currentPathParts];
    },

    getPromptPath() {
      return getPromptPath(currentPathParts);
    },

    getPwd() {
      return getDisplayPath(currentPathParts);
    },

    cd(target) {
      if (!target || target === "~" || target === "") {
        currentPathParts = ["home", "cisco"];
        return { success: true, path: getPromptPath() };
      }

      const targetParts = normalizePath(target);
      const node = getNode(targetParts);

      if (!node) {
        return { success: false, error: `cd: no such file or directory: ${target}` };
      }
      if (node.type !== "dir") {
        return { success: false, error: `cd: not a directory: ${target}` };
      }

      currentPathParts = targetParts;
      return { success: true, path: getPromptPath() };
    },

    ls(targetPath = "") {
      const parts = targetPath ? normalizePath(targetPath) : currentPathParts;
      const node = getNode(parts);

      if (!node) {
        return { success: false, error: `ls: cannot access '${targetPath}': No such file or directory` };
      }

      if (node.type === "file") {
        return {
          success: true,
          isSingleFile: true,
          entries: [{ name: node.name, type: "file", size: node.size, date: node.date }]
        };
      }

      const seen = new Set();
      const entries = [];
      for (const child of Object.values(node.children)) {
        if (seen.has(child.name)) continue;
        seen.add(child.name);
        entries.push({
          name: child.name + (child.type === "dir" ? "/" : ""),
          baseName: child.name,
          type: child.type,
          size: child.size || "4.0K",
          date: child.date || "Sep 19 19:40"
        });
      }

      // Sort: directories first, then alphabetical
      entries.sort((a, b) => {
        if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
        return a.baseName.localeCompare(b.baseName);
      });

      return { success: true, entries, targetPrompt: getPromptPath(parts) };
    },

    async cat(targetPath, terminal) {
      if (!targetPath) {
        return { success: false, error: "cat: missing file operand" };
      }

      const parts = normalizePath(targetPath);
      const node = getNode(parts);

      if (!node) {
        return { success: false, error: `cat: ${targetPath}: No such file or directory` };
      }

      if (node.type === "dir") {
        // Friendly fallback for directories: check for README.md or details.txt or overview.txt
        const defaultFiles = ["details.txt", "README.md", "overview.txt", "proficiency.txt", "role.txt"];
        for (const defFile of defaultFiles) {
          if (node.children && node.children[defFile]) {
            const content = await node.children[defFile].getContent(terminal);
            const hint = `<div class="term-dim" style="margin-top: 0.6rem;">[Notice] '${targetPath}' is a directory. Showing its ${defFile}.<br>Tip: Use 'cd ${targetPath}' and 'ls' to see all files in this directory.</div>`;
            return { success: true, content: content + hint };
          }
        }
        return { success: false, error: `cat: ${targetPath}: Is a directory. Use 'cd ${targetPath}' and 'ls' to explore.` };
      }

      const content = await node.getContent(terminal);
      return { success: true, content };
    },

    // Get completions for Tab key
    getCompletions(partial, isDirOnly = false) {
      let searchDirParts;
      let filePrefix;

      if (partial.includes("/")) {
        const lastSlash = partial.lastIndexOf("/");
        const dirPart = partial.slice(0, lastSlash + 1);
        filePrefix = partial.slice(lastSlash + 1).toLowerCase();
        searchDirParts = normalizePath(dirPart);
      } else {
        filePrefix = partial.toLowerCase();
        searchDirParts = currentPathParts;
      }

      const node = getNode(searchDirParts);
      if (!node || node.type !== "dir") return [];

      const candidates = [];
      for (const [name, child] of Object.entries(node.children)) {
        if (isDirOnly && child.type !== "dir") continue;
        if (name.toLowerCase().startsWith(filePrefix)) {
          const suffix = child.type === "dir" ? "/" : "";
          candidates.push(name + suffix);
        }
      }
      return candidates;
    },

    // Generate directory tree (full or for targetPath)
    getTree(targetPath = "") {
      function renderTree(dirNode, prefix = "") {
        const entries = Object.values(dirNode.children);
        // Deduplicate aliases like experience vs experiences pointing to the same child
        const seenNames = new Set();
        const uniqueEntries = entries.filter(e => {
          if (seenNames.has(e.name)) return false;
          seenNames.add(e.name);
          return true;
        });

        uniqueEntries.sort((a, b) => {
          if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
          return a.name.localeCompare(b.name);
        });

        let output = "";
        uniqueEntries.forEach((entry, idx) => {
          const isLast = idx === uniqueEntries.length - 1;
          const branch = isLast ? "└── " : "├── ";
          const nextPrefix = prefix + (isLast ? "    " : "│   ");

          if (entry.type === "dir") {
            output += `\n<span class="tree-branch">${prefix}${branch}</span><span class="term-accent term-bold">${entry.name}/</span>`;
            output += renderTree(entry, nextPrefix);
          } else {
            let color = "term-green";
            if (entry.name.endsWith(".log")) color = "term-cyan";
            if (entry.name.endsWith(".txt")) color = "term-green";
            if (entry.name.endsWith(".org")) color = "term-yellow";
            if (entry.name.endsWith(".md")) color = "term-cyan";
            output += `\n<span class="tree-branch">${prefix}${branch}</span><span class="${color}">${entry.name}</span>`;
          }
        });
        return output;
      }

      const startParts = targetPath ? normalizePath(targetPath) : ["home", "cisco"];
      const targetNode = getNode(startParts);
      if (!targetNode || targetNode.type !== "dir") {
        return `<div class="term-red">tree: ${targetPath}: Not a directory</div>`;
      }
      const label = getPromptPath(startParts);
      return `<div class="term-tree"><span class="tree-node">${label}</span>${renderTree(targetNode)}</div>`;
    }
  };

  window.VFS = VFS;
})();
