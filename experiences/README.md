# Experiences Directory & CLI Command Manual

This directory contains technical dossiers of professional engineering positions, supercomputing cluster deployments, and research contributions.

================================================================================
CLI COMMAND USAGE & HELP
================================================================================

1. View all professional engineering positions:
   $ experience
   $ experiences

2. Filter experience entries by organization or keyword:
   $ experience hpc
   $ experience cdac
   $ experience iitbhu
   $ experience slurm

3. Read manual page & full command options:
   $ man experience
   $ man experiences
   $ help experience

4. Explore an individual organization folder:
   $ cd experiences/iitbhu
   $ ls -l
   $ cat role.txt              # Role title, organization, duration, location
   $ cat responsibilities.txt  # Bulleted day-to-day engineering duties
   $ cat stack.txt             # Technologies, tools, and supercomputing stack
   $ cat overview.txt          # Summary narrative of tenure
   $ cat README.md             # Markdown dossier for this role

5. Quick inspection from anywhere:
   $ cat experiences/cdac/role.txt
   $ cat experiences/iitbhu/responsibilities.txt

6. Interactive File Navigation:
   $ ranger experiences        # Open Ranger in experiences folder

================================================================================
ORGANIZATIONS & ROLES
================================================================================

1. Indian Institute of Technology (Banaras Hindu University), Varanasi
   Directory: ~/experiences/iitbhu/
   Position:  HPC Application Engineer (Deputation / Supercomputing Project)
   Duration:  Feb 2025 — Aug 2026 (1.5 years)
   Facility:  PARAM Shivay Supercomputer (NSM)
   Stack:     Slurm, OpenMPI, Intel oneAPI, Spack, CUDA, Apptainer, Linux, C/C++
   Key Focus: High Performance Computing application porting, scientific code
              optimization, cluster support, and researcher workflows.

2. Centre for Development of Advanced Computing (C-DAC), India
   Directory: ~/experiences/cdac/
   Position:  Project Engineer
   Duration:  Apr 2024 — Present (2.5+ years)
   Mission:   National Supercomputing Mission (NSM)
   Stack:     HPC, Parallel Systems, Slurm, C/C++, Python, Linux, Spack
   Key Focus: National supercomputer deployments, cluster software stacks,
              system benchmarking, parallel programming enablement.
