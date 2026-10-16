# Projects Directory & CLI Command Manual

This directory contains full architectural overviews, technical stacks, source code repositories, and documentation for personal projects and systems tools.

================================================================================
CLI COMMAND USAGE & HELP
================================================================================

1. List all projects with summaries & links:
   $ projects

2. Search or filter projects by keyword, domain, or technology stack:
   $ projects cerrfix
   $ projects hpccfs
   $ projects orgslide
   $ projects shell
   $ projects linux
   $ projects python

3. View complete project catalog text file:
   $ cat projects/allprojects.txt
   $ cat allprojects.txt         (when inside ~/projects)

4. Read manual page & full command options:
   $ man projects
   $ help projects

5. Explore an individual project directory:
   $ cd projects/hpccfs
   $ ls -l
   $ cat README.md             # Project summary and overview
   $ cat details.txt           # In-depth architectural details & features
   $ cat stack.txt             # Complete technology stack list
   $ cat links.txt             # Repository and live demo URLs

6. Quick inspection of files from anywhere:
   $ cat projects/orgslide/stack.txt
   $ cat projects/cerrfix/details.txt
   $ cat projects/playlisto/links.txt

7. Interactive File Navigation:
   $ ranger projects           # Open Ranger in projects folder

================================================================================
AVAILABLE PROJECTS
================================================================================

1. OrgSlide (~/projects/orgslide/)
   Excerpt: Transform Emacs Org-mode and Markdown files into interactive web presentations
   Stack:   Org-mode, Markdown, HTML5, CSS3, JavaScript, FileReader API
   Repo:    https://github.com/CISSSCO/OrgSlide
   URL:     https://cisssco.github.io/OrgSlide/

2. HPCCFS (~/projects/hpccfs/)
   Excerpt: Build a production-like HPC cluster from scratch using open-source technologies
   Stack:   Rocky Linux, Slurm, OpenMPI, LDAP, NFS, Spack, Munge, MariaDB, C, Bash
   Repo:    https://github.com/CISSSCO/HPCCFS
   URL:     https://cisssco.github.io/HPCCFS/

3. Playlisto (~/projects/playlisto/)
   Excerpt: Turn Google Drive into your personal music streaming server
   Stack:   Python, FastAPI, React, TypeScript, Google Drive API, HTTP Streaming
   Repo:    https://github.com/CISSSCO/Playlisto

4. CerrFix (~/projects/cerrfix/)
   Excerpt: Rule-based error analysis and fix suggestion tool for Linux systems
   Stack:   Python, Bash Scripting, YAML
   Repo:    https://github.com/CISSSCO/cerrfix
   URL:     https://cisssco.github.io/cerrfix

5. GitPush (~/projects/gitpush/)
   Excerpt: Minimal CLI helper to automate common git workflows
   Stack:   Bash Scripting
   Repo:    https://github.com/CISSSCO/gitpush

6. Dotfiles (~/projects/dotfiles/)
   Excerpt: Reproducible Linux shell and development environment configuration
   Stack:   Bash Scripting, Vimscript, Python, Lisp, YAML
   Repo:    https://github.com/CISSSCO/dotfiles

7. My VimRC (~/projects/myvimrc/)
   Excerpt: Customized Vim configuration for personal use and efficient editing
   Stack:   Vimscript, Bash Scripting
   Repo:    https://github.com/CISSSCO/myvimrc_config

8. CISSSCO.github.io (~/projects/cisssco/)
   Excerpt: Terminal style personal portfolio and documentation interface
   Stack:   JavaScript, HTML5, CSS3
   Repo:    https://github.com/CISSSCO/CISSSCO.github.io
   URL:     https://cisssco.github.io

9. PopularWebsiteThemes (~/projects/popularwebsitethemes/)
   Excerpt: Custom CSS themes for popular websites like 10fastfingers
   Stack:   CSS, HTML
   Repo:    https://github.com/CISSSCO/PopularWebsiteThemes
   URL:     https://userstyles.org/user-profile/1051695
