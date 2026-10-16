# Skills Directory & CLI Command Manual

Welcome to the Technical Competencies directory. This directory indexes 52 specialized engineering skills, systems tools, HPC frameworks, and domain proficiencies.

================================================================================
CLI COMMAND USAGE & HELP
================================================================================

1. View all skills with progress bars & ratings:
   $ skills

2. Filter skills by name or domain:
   $ skills c++
   $ skills python
   $ skills slurm
   $ skills hpc
   $ skills parallel

3. View complete skill listing file:
   $ cat skills/allskills.txt
   $ cat allskills.txt           (when inside ~/skills)

4. Read manual page & full command options:
   $ man skills
   $ help skills

5. Inspect an individual skill dossier:
   $ cd skills/python
   $ ls -l
   $ cat proficiency.txt       # Rating bar, percentage, level
   $ cat projects.txt          # Projects in which used with percentage
   $ cat experience.txt        # Professional engineering roles where applied
   $ cat details.txt           # Detailed usage & domain context

6. Fast preview without changing directories:
   $ cat skills/mpi/proficiency.txt
   $ cat skills/cuda/projects.txt

7. Interactive File Navigation:
   $ ranger skills             # Open Ranger in skills folder

================================================================================
DIRECTORY LAYOUT
================================================================================
skills/
├── allskills.txt                # Complete catalog of all 52 competencies
├── README.md                    # This manual & quick reference
├── c_cpp/
│   ├── proficiency.txt          # Level: Expert [█████████░] 90%
│   ├── projects.txt             # HPCCFS (40%), CerrFix (10%)
│   ├── experience.txt           # IIT (BHU) Varanasi, C-DAC
│   └── details.txt              # Systems programming, MPI/OpenMP routines
├── supercomputing/
├── mpi/
├── openmp/
├── cuda/
... [52 technical domains]

================================================================================
INDEX OF COMPETENCIES & PROFICIENCIES
================================================================================

[Programming]
* c_cpp/                C / C++                         [█████████░]  90%
* python/               Python                          [████████░░]  75%
* shell/                Shell Scripting                 [█████████░]  90%
* fortran/              Fortran                         [████████░░]  75%
* dsa/                  Data Structures & Algorithms    [███████░░░]  70%
* java/                 JAVA                            [██████░░░░]  60%
* perl/                 Perl                            [██████░░░░]  60%
* batch/                Batch Scripting                 [███████░░░]  70%

[High Performance Computing & Accelerators]
* supercomputing/       Supercomputing                  [█████████░]  90%
* scientificcomputing/  Scientific Computing            [█████████░]  90%
* researchcomputing/    Research Computing              [█████████░]  90%
* clusteradmin/         Cluster Administration          [█████████░]  85%
* mpi/                  MPI (OpenMPI / Intel MPI)       [█████████░]  85%
* openmp/               OpenMP (Shared Memory)          [█████████░]  85%
* distributedcomputing/ Distributed Computing           [████████░░]  75%
* cuda/                 CUDA (GPU Computing)            [███████░░░]  70%
* openacc/              OpenACC (Directives)            [███████░░░]  65%
* performanceanalysis/  Performance Analysis            [████████░░]  75%
* pthread/              POSIX Threads                   [███████░░░]  70%

[HPC Stack & Tools]
* slurm/                Slurm Workload Manager          [████████░░]  75%
* spack/                Spack Package Manager           [█████████░]  90%
* conda/                Conda Environments              [█████████░]  90%
* jupyterhub/           JupyterHub for HPC              [█████████░]  90%

[Systems & DevOps]
* linux/                Linux (Arch / Rocky / Debian)   [██████████]  95%
* sysadmin/             System Administration           [█████████░]  85%
* softwaredeployment/   Software Deployment             [█████████░]  90%
* applicationporting/   Application Porting             [█████████░]  90%
* git/                  Git Version Control             [█████████░]  90%
* cmake/                CMake Build System              [████████░░]  80%
* make/                 GNU Make                        [███████░░░]  70%
* docker/               Docker Containers               [████████░░]  75%
* apptainer/            Apptainer / Singularity (HPC)   [███████░░░]  70%
* ansible/              Ansible Configuration           [██████░░░░]  60%
* jenkins/              Jenkins CI/CD                   [██████░░░░]  60%
* kubernetes/           Kubernetes Container Orch.      [██████░░░░]  60%
* prometheus/           Prometheus Metrics              [██████░░░░]  55%
* grafana/              Grafana Dashboards              [██████░░░░]  55%
* aws/                  Amazon Web Services             [█████░░░░░]  50%

[Web & Interactive]
* html/                 HTML5                           [█████████░]  90%
* css/                  CSS3                            [████████░░]  80%
* javascript/           JavaScript (ES6+)               [███████░░░]  65%
* react/                ReactJS                         [█████░░░░░]  50%
* threejs/              ThreeJS 3D WebGL                [█████░░░░░]  50%

[Literate Programming & Documentation]
* technicaldocumentation/ Technical Documentation       [██████████]  95%
* org/                  Emacs Org-Mode                  [██████████]  95%
* emacs/                GNU Emacs                       [█████████░]  90%
* markdown/             Markdown                        [█████████░]  85%
* latex/                LaTeX Typesetting               [████████░░]  80%

[Creative & 3D]
* blender/              Blender 3D                      [████████░░]  80%
* sculpting/            Digital Sculpting               [████████░░]  80%
* unity/                Unity Engine                    [███████░░░]  65%
* ai/                   AI / ML                         [███████░░░]  70%
