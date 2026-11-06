var app = angular.module('campusApp', []);

// Parent Main Controller: Manages Shared State, Session, Roles, and Notifications
app.controller('MainController', ['$scope', function($scope) {
  
  // Current active role: 'student', 'company', 'trainer', or 'guest'
  $scope.currentRole = 'student';
  
  // Active Navigation Tab: 'dashboard', 'student_portal', 'company_portal', 'trainer_portal', 'feedback', 'notifications', 'login'
  $scope.activeTab = 'dashboard';

  // Quick toast message banner
  $scope.toastMessage = '';
  $scope.toastType = 'success'; // 'success' or 'error'

  $scope.showToast = function(msg, type) {
    $scope.toastMessage = msg;
    $scope.toastType = type || 'success';
    setTimeout(function() {
      $scope.$apply(function() {
        $scope.toastMessage = '';
      });
    }, 3500);
  };

  // Student Profile Data
  $scope.student = {
    usn: '1MS21CS098',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@campus.edu',
    phone: '+91 98450 12847',
    department: 'Computer Science & Engineering',
    deptCode: 'CSE',
    semester: '8th Semester',
    cgpa: 8.72,
    tenthPercent: 93.4,
    twelfthPercent: 91.2,
    activeBacklogs: 0,
    skills: ['React', 'Python', 'Node.js', 'SQL', 'AWS', 'Data Structures'],
    newSkillInput: '',
    resumeFileName: 'Rohan_Sharma_Resume_2026.pdf',
    resumeUpdated: '2 days ago',
    atsScore: 89,
    placementStatus: 'In Process', // 'Placed' or 'In Process'
    placedCompany: '',
    salaryPackage: ''
  };

  // Company Profile Data
  $scope.companyUser = {
    name: 'Sarah Jenkins',
    role: 'Campus Talent Acquisition Lead',
    companyName: 'Cisco Systems',
    email: 'sarah.jenkins@cisco.com'
  };

  // Placement Trainer / TPO Profile Data
  $scope.trainerUser = {
    name: 'Dr. K. Venkatraman',
    role: 'Dean (Training & Placements) & Head TPO',
    email: 'dean.placements@campus.edu'
  };

  // Login form model
  $scope.loginForm = {
    role: 'student',
    email: 'rohan.sharma@campus.edu',
    password: 'password123'
  };

  // Department-wise Placement Statistics (For Bar Graph & Table)
  $scope.departments = [
    { name: 'Computer Science & Engineering', code: 'CSE', total: 240, placed: 228, rate: 95.0, avgCtc: 14.8, highestCtc: 44.0 },
    { name: 'Information Science & Engineering', code: 'ISE', total: 180, placed: 168, rate: 93.3, avgCtc: 13.5, highestCtc: 38.0 },
    { name: 'Artificial Intelligence & Data Science', code: 'AI&DS', total: 120, placed: 109, rate: 90.8, avgCtc: 14.2, highestCtc: 42.0 },
    { name: 'Electronics & Communication', code: 'ECE', total: 200, placed: 178, rate: 89.0, avgCtc: 10.4, highestCtc: 28.5 },
    { name: 'Electrical & Electronics', code: 'EEE', total: 120, placed: 98, rate: 81.6, avgCtc: 8.2, highestCtc: 20.0 },
    { name: 'Mechanical Engineering', code: 'MECH', total: 140, placed: 102, rate: 72.8, avgCtc: 7.1, highestCtc: 16.0 },
    { name: 'Civil Engineering', code: 'CIVIL', total: 90, placed: 64, rate: 71.1, avgCtc: 6.4, highestCtc: 12.5 }
  ];

  // Top 3 Placed Students (Dashboard Requirement)
  $scope.topPlacedStudents = [
    {
      rank: 1,
      name: 'Priya Nambiar',
      usn: '1MS21CS112',
      department: 'Computer Science & Engg',
      company: 'Google',
      role: 'Software Development Engineer - I',
      package: '44.0 LPA',
      badge: 'Highest Package',
      initials: 'PN'
    },
    {
      rank: 2,
      name: 'Ananya Gupta',
      usn: '1MS21IS045',
      department: 'Information Science & Engg',
      company: 'Microsoft',
      role: 'Cloud Solution Engineer (Azure)',
      package: '38.0 LPA',
      badge: 'Super Dream Offer',
      initials: 'AG'
    },
    {
      rank: 3,
      name: 'Karthik Rao',
      usn: '1MS21AD023',
      department: 'AI & Data Science',
      company: 'Amazon',
      role: 'SDE-1 (AWS Cloud Infrastructure)',
      package: '32.5 LPA',
      badge: 'Super Dream Offer',
      initials: 'KR'
    }
  ];

  // Company Job Openings / Drives
  $scope.drives = [
    {
      id: 'DRV-101',
      company: 'Google',
      role: 'Software Development Engineer - I',
      tier: 'Tier 1 (Dream)',
      package: 44.0,
      baseSalary: 24.5,
      location: 'Bengaluru / Hyderabad',
      minCgpa: 8.5,
      maxBacklogs: 0,
      eligibleDepts: ['CSE', 'ISE', 'AI&DS'],
      requiredSkills: ['Python', 'Data Structures', 'Algorithms'],
      driveDate: 'Nov 18, 2026',
      deadline: 'Nov 12, 2026',
      openings: 8,
      status: 'Active',
      description: 'Design and implement hyperscale algorithms, cloud services, and real-time distributed backends.'
    },
    {
      id: 'DRV-102',
      company: 'Microsoft',
      role: 'Software Engineer - Azure Core',
      tier: 'Tier 1 (Dream)',
      package: 38.0,
      baseSalary: 21.0,
      location: 'Bengaluru / Noida',
      minCgpa: 8.0,
      maxBacklogs: 0,
      eligibleDepts: ['CSE', 'ISE', 'AI&DS', 'ECE'],
      requiredSkills: ['Cloud', 'SQL', 'Data Structures'],
      driveDate: 'Nov 22, 2026',
      deadline: 'Nov 15, 2026',
      openings: 14,
      status: 'Active',
      description: 'Build robust cloud infrastructure components, APIs, and security virtualization services for Azure.'
    },
    {
      id: 'DRV-103',
      company: 'Cisco Systems',
      role: 'Software Consulting Engineer',
      tier: 'Tier 2 (Super Dream)',
      package: 18.5,
      baseSalary: 13.5,
      location: 'Bengaluru',
      minCgpa: 7.5,
      maxBacklogs: 0,
      eligibleDepts: ['CSE', 'ISE', 'ECE', 'EEE', 'AI&DS'],
      requiredSkills: ['Python', 'Networking', 'SQL'],
      driveDate: 'Nov 09, 2026',
      deadline: 'Nov 04, 2026',
      openings: 22,
      status: 'Active',
      description: 'Develop automated networking topologies, enterprise SDN routers, and cloud telemetries.'
    },
    {
      id: 'DRV-104',
      company: 'Amazon',
      role: 'Software Development Engineer - 1',
      tier: 'Tier 1 (Dream)',
      package: 32.5,
      baseSalary: 19.5,
      location: 'Bengaluru / Hyderabad',
      minCgpa: 7.8,
      maxBacklogs: 0,
      eligibleDepts: ['CSE', 'ISE', 'AI&DS', 'ECE'],
      requiredSkills: ['AWS', 'Data Structures', 'Python'],
      driveDate: 'Nov 28, 2026',
      deadline: 'Nov 20, 2026',
      openings: 18,
      status: 'Active',
      description: 'Engineering resilient transactional payment pipelines, catalog microservices, and AWS serverless tooling.'
    },
    {
      id: 'DRV-105',
      company: 'Deloitte USI',
      role: 'Technology Transformation Analyst',
      tier: 'Tier 3 (Core/Mass)',
      package: 11.5,
      baseSalary: 8.5,
      location: 'Bengaluru / Hyderabad / Mumbai',
      minCgpa: 6.8,
      maxBacklogs: 1,
      eligibleDepts: ['CSE', 'ISE', 'AI&DS', 'ECE', 'EEE', 'MECH', 'CIVIL'],
      requiredSkills: ['SQL', 'Analytics'],
      driveDate: 'Dec 06, 2026',
      deadline: 'Nov 30, 2026',
      openings: 45,
      status: 'Active',
      description: 'Consulting enterprise clients on cloud modernisation, ERP integration, and data analytics pipelines.'
    },
    {
      id: 'DRV-106',
      company: 'Bosch Mobility',
      role: 'Associate Embedded Firmware Engineer',
      tier: 'Tier 3 (Core/Mass)',
      package: 10.5,
      baseSalary: 7.8,
      location: 'Bengaluru / Coimbatore',
      minCgpa: 7.0,
      maxBacklogs: 0,
      eligibleDepts: ['ECE', 'EEE', 'MECH', 'CSE'],
      requiredSkills: ['Embedded C', 'C', 'Python'],
      driveDate: 'Dec 10, 2026',
      deadline: 'Dec 04, 2026',
      openings: 30,
      status: 'Active',
      description: 'Automotive embedded safety control units, CAN protocol architectures, and EV battery telemetry.'
    }
  ];

  // All Student Applications Tracker
  $scope.applications = [
    {
      id: 'APP-301',
      driveId: 'DRV-103',
      studentName: 'Rohan Sharma',
      studentUsn: '1MS21CS098',
      studentDept: 'CSE',
      studentCgpa: 8.72,
      company: 'Cisco Systems',
      role: 'Software Consulting Engineer',
      package: 18.5,
      appliedDate: 'Oct 28, 2026',
      status: 'Interview Scheduled',
      currentStage: 'Round 2 - Technical Virtual Onsite',
      interviewDate: 'Nov 09, 2026, 11:00 AM',
      interviewRoom: 'Google Meet (Link: meet.google.com/csc-univ-r2)',
      notes: 'Cleared Online Assessment with 95% score.'
    },
    {
      id: 'APP-302',
      driveId: 'DRV-101',
      studentName: 'Rohan Sharma',
      studentUsn: '1MS21CS098',
      studentDept: 'CSE',
      studentCgpa: 8.72,
      company: 'Google',
      role: 'Software Development Engineer - I',
      package: 44.0,
      appliedDate: 'Nov 02, 2026',
      status: 'Shortlisted',
      currentStage: 'Shortlisted for OA HackerEarth Round',
      interviewDate: 'Nov 14, 2026',
      interviewRoom: 'Online Test Portal',
      notes: 'CGPA cutoff 8.5 satisfied and resume ATS verified.'
    },
    {
      id: 'APP-303',
      driveId: 'DRV-102',
      studentName: 'Rohan Sharma',
      studentUsn: '1MS21CS098',
      studentDept: 'CSE',
      studentCgpa: 8.72,
      company: 'Microsoft',
      role: 'Software Engineer - Azure Core',
      package: 38.0,
      appliedDate: 'Nov 03, 2026',
      status: 'Applied',
      currentStage: 'Application Verification at TPO Cell',
      interviewDate: '',
      interviewRoom: '',
      notes: 'Awaiting recruiter screening.'
    },
    {
      id: 'APP-304',
      driveId: 'DRV-103',
      studentName: 'Vikram Nair',
      studentUsn: '1MS21CS142',
      studentDept: 'CSE',
      studentCgpa: 7.85,
      company: 'Cisco Systems',
      role: 'Software Consulting Engineer',
      package: 18.5,
      appliedDate: 'Oct 29, 2026',
      status: 'Shortlisted',
      currentStage: 'Online Test Complete',
      interviewDate: 'Nov 10, 2026',
      interviewRoom: 'Lab 4',
      notes: 'Eligible and approved by placement desk.'
    },
    {
      id: 'APP-305',
      driveId: 'DRV-105',
      studentName: 'Siddharth Jain',
      studentUsn: '1MS21ME077',
      studentDept: 'MECH',
      studentCgpa: 7.20,
      company: 'Deloitte USI',
      role: 'Technology Transformation Analyst',
      package: 11.5,
      appliedDate: 'Nov 01, 2026',
      status: 'Selected / Placed',
      currentStage: 'Offer Letter Forwarded',
      interviewDate: 'Completed',
      interviewRoom: 'TPO Suite',
      notes: 'Official campus offer released by Deloitte.'
    }
  ];

  // College Master Student Records (For Trainer Portal)
  $scope.allStudents = [
    { usn: '1MS21CS098', name: 'Rohan Sharma', dept: 'CSE', sem: '8th', cgpa: 8.72, backlogs: 0, status: 'In Process', company: 'Shortlisted @ Google, Cisco', resume: 'Rohan_Sharma_Resume.pdf' },
    { usn: '1MS21CS112', name: 'Priya Nambiar', dept: 'CSE', sem: '8th', cgpa: 9.45, backlogs: 0, status: 'Placed', company: 'Google (44.0 LPA)', resume: 'Priya_Nambiar.pdf' },
    { usn: '1MS21IS045', name: 'Ananya Gupta', dept: 'ISE', sem: '8th', cgpa: 9.15, backlogs: 0, status: 'Placed', company: 'Microsoft (38.0 LPA)', resume: 'Ananya_G_Resume.pdf' },
    { usn: '1MS21AD023', name: 'Karthik Rao', dept: 'AI&DS', sem: '8th', cgpa: 8.89, backlogs: 0, status: 'Placed', company: 'Amazon (32.5 LPA)', resume: 'Karthik_Rao.pdf' },
    { usn: '1MS21EC082', name: 'Pooja Verma', dept: 'ECE', sem: '8th', cgpa: 8.45, backlogs: 0, status: 'Placed', company: 'Texas Instruments (22.0 LPA)', resume: 'Pooja_V_ECE.pdf' },
    { usn: '1MS21CS142', name: 'Vikram Nair', dept: 'CSE', sem: '8th', cgpa: 7.85, backlogs: 0, status: 'In Process', company: 'Shortlisted @ Cisco', resume: 'Vikram_Nair.pdf' },
    { usn: '1MS21EE034', name: 'Megha Reddy', dept: 'EEE', sem: '8th', cgpa: 7.60, backlogs: 0, status: 'Placed', company: 'Bosch Mobility (10.5 LPA)', resume: 'Megha_Reddy.pdf' },
    { usn: '1MS21ME077', name: 'Siddharth Jain', dept: 'MECH', sem: '8th', cgpa: 7.20, backlogs: 0, status: 'Placed', company: 'Deloitte USI (11.5 LPA)', resume: 'Siddharth_J.pdf' },
    { usn: '1MS21CV012', name: 'Tanvi Joshi', dept: 'CIVIL', sem: '8th', cgpa: 6.95, backlogs: 0, status: 'In Process', company: 'Awaiting L&T Results', resume: 'Tanvi_Joshi.pdf' },
    { usn: '1MS21CS033', name: 'Arjun Das', dept: 'CSE', sem: '8th', cgpa: 8.30, backlogs: 1, status: 'In Process', company: 'Applied @ Deloitte', resume: 'Arjun_Das.pdf' }
  ];

  // Notification System Records
  $scope.notifications = [
    {
      id: 1,
      targetRole: 'student',
      title: 'Interview Scheduled - Cisco Systems',
      message: 'Your Round 2 technical interview is locked for Nov 09 at 11:00 AM via Google Meet.',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      targetRole: 'company',
      title: 'New Candidate Applied: Rohan Sharma',
      message: 'Rohan Sharma (CSE, 8.72 CGPA) applied for Software Consulting Engineer. Eligibility verified: Passed.',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      targetRole: 'trainer',
      title: 'Drive Application Audit: Google SDE',
      message: 'Student Rohan Sharma submitted an application for Google. Meets 8.5 CGPA cut-off and 0 backlogs.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 4,
      targetRole: 'student',
      title: 'Drive Announced: Microsoft Azure',
      message: 'Microsoft has published a new drive for CSE, ISE, AI&DS, ECE. Package: ₹ 38.0 LPA. Deadline: Nov 15.',
      time: 'Yesterday',
      read: true
    }
  ];

  // Feedback Records (Separate for Placed and Unplaced Students)
  $scope.feedbacksPlaced = [
    {
      id: 101,
      studentName: 'Priya Nambiar',
      usn: '1MS21CS112',
      department: 'Computer Science & Engg',
      company: 'Google',
      package: '44.0 LPA',
      rating: 5,
      difficulty: 'Challenging',
      questions: 'LRU Cache implementation with TTL expiry, Directed Acyclic Graph topological paths, Consistent hashing.',
      tips: 'Clarify constraints upfront. Interviewers care deeply about edge cases and code readability over rushed hacky solutions.',
      date: '3 days ago'
    },
    {
      id: 102,
      studentName: 'Siddharth Jain',
      usn: '1MS21ME077',
      department: 'Mechanical Engg',
      company: 'Deloitte USI',
      package: '11.5 LPA',
      rating: 5,
      difficulty: 'Moderate',
      questions: 'Business case study on EV fleet adoption, basic SQL joins, handling project deadlines.',
      tips: 'Focus on communication and problem structuring. Non-IT candidates can easily crack consulting with good aptitude and logical reasoning.',
      date: '1 week ago'
    }
  ];

  $scope.feedbacksUnplaced = [
    {
      id: 201,
      studentName: 'Tanvi Joshi',
      usn: '1MS21CV012',
      department: 'Civil Engg',
      challengeArea: 'Quantitative Aptitude & Speed Math',
      desiredSupport: 'More mock tests for core branch companies and aptitude speed math shortcuts.',
      comments: 'The placement cell sessions are very helpful. Requesting additional sessions on Excel modeling and AutoCAD assessment preparation.',
      date: '4 days ago'
    },
    {
      id: 202,
      studentName: 'Vikram Nair',
      usn: '1MS21CS142',
      department: 'Computer Science & Engg',
      challengeArea: 'System Design & Whiteboard Coding',
      desiredSupport: 'Live peer mock interviews for Low-Level System Design (LLD).',
      comments: 'Would love 1-on-1 feedback on resume project descriptions and GitHub code structure before upcoming Tier 1 drives.',
      date: '6 days ago'
    }
  ];

  // Feedback submission form model
  $scope.newFeedback = {
    isPlaced: false,
    company: '',
    rating: 5,
    difficulty: 'Moderate',
    questions: '',
    tips: '',
    challengeArea: 'Technical Coding',
    desiredSupport: '',
    comments: ''
  };

  // --- Core Methods & Business Logic ---

  // Role Switcher
  $scope.switchRole = function(role) {
    $scope.currentRole = role;
    if (role === 'student') {
      $scope.activeTab = 'student_portal';
    } else if (role === 'company') {
      $scope.activeTab = 'company_portal';
    } else if (role === 'trainer') {
      $scope.activeTab = 'trainer_portal';
    } else {
      $scope.activeTab = 'dashboard';
    }
    $scope.showToast('Switched to ' + (role.toUpperCase()) + ' view.');
  };

  // Tab Navigation
  $scope.navigate = function(tab) {
    $scope.activeTab = tab;
  };

  // Eligibility Checking Function (Checks CGPA, Backlogs, Department & Skills)
  $scope.checkEligibility = function(student, drive) {
    var reasons = [];
    var isCgpaOk = student.cgpa >= drive.minCgpa;
    var isBacklogOk = student.activeBacklogs <= drive.maxBacklogs;
    var isDeptOk = drive.eligibleDepts.indexOf(student.deptCode) !== -1 || drive.eligibleDepts.indexOf('All') !== -1;
    
    // Skills check: check if student has at least 1-2 required skills
    var hasSkillMatch = true;
    if (drive.requiredSkills && drive.requiredSkills.length > 0) {
      var matchingSkills = drive.requiredSkills.filter(function(reqSkill) {
        return student.skills.some(function(stSkill) {
          return stSkill.toLowerCase() === reqSkill.toLowerCase();
        });
      });
      if (matchingSkills.length === 0) {
        hasSkillMatch = false;
        reasons.push('Missing required skills: ' + drive.requiredSkills.join(', '));
      }
    }

    if (!isCgpaOk) {
      reasons.push('Your CGPA (' + student.cgpa + ') is below the required ' + drive.minCgpa);
    }
    if (!isBacklogOk) {
      reasons.push('Active backlogs (' + student.activeBacklogs + ') exceed maximum allowed (' + drive.maxBacklogs + ')');
    }
    if (!isDeptOk) {
      reasons.push('Department ' + student.deptCode + ' is not in eligible branches (' + drive.eligibleDepts.join(', ') + ')');
    }

    return {
      eligible: isCgpaOk && isBacklogOk && isDeptOk && hasSkillMatch,
      reasons: reasons
    };
  };

  // Check if student already applied for a drive
  $scope.hasApplied = function(driveId) {
    return $scope.applications.some(function(app) {
      return app.driveId === driveId && app.studentUsn === $scope.student.usn;
    });
  };

  // Apply for Job Opening with Eligibility Check & Automated Notifications
  $scope.applyForJob = function(drive) {
    if ($scope.hasApplied(drive.id)) {
      $scope.showToast('You have already applied for ' + drive.company + '.', 'error');
      return;
    }

    var check = $scope.checkEligibility($scope.student, drive);
    if (!check.eligible) {
      alert('Eligibility Criteria Not Met for ' + drive.company + ':\n• ' + check.reasons.join('\n• '));
      return;
    }

    // Create new application
    var newApp = {
      id: 'APP-' + (Math.floor(Math.random() * 900) + 100),
      driveId: drive.id,
      studentName: $scope.student.name,
      studentUsn: $scope.student.usn,
      studentDept: $scope.student.deptCode,
      studentCgpa: $scope.student.cgpa,
      company: drive.company,
      role: drive.role,
      package: drive.package,
      appliedDate: 'Just Now',
      status: 'Applied',
      currentStage: 'Under Review by Campus Recruiter',
      interviewDate: '',
      interviewRoom: '',
      notes: 'Eligibility checked: CGPA ' + $scope.student.cgpa + ' passed cut-off.'
    };

    $scope.applications.unshift(newApp);

    // Notification to Company
    $scope.notifications.unshift({
      id: Date.now() + 1,
      targetRole: 'company',
      title: 'New Applicant: ' + $scope.student.name + ' for ' + drive.company,
      message: 'Student ' + $scope.student.name + ' (' + $scope.student.usn + ', ' + $scope.student.deptCode + ') applied. Verified CGPA: ' + $scope.student.cgpa,
      time: 'Just now',
      read: false
    });

    // Notification to Placement Trainer / TPO
    $scope.notifications.unshift({
      id: Date.now() + 2,
      targetRole: 'trainer',
      title: 'Application Audit: ' + drive.company + ' - ' + $scope.student.name,
      message: 'Application recorded for ' + drive.role + '. Student fulfills eligibility cut-offs.',
      time: 'Just now',
      read: false
    });

    $scope.showToast('Application for ' + drive.company + ' submitted successfully!');
  };

  // Simulate Resume Upload
  $scope.triggerResumeUpload = function() {
    var simulatedFileNames = [
      'Rohan_Sharma_Final_Resume_2026_v2.pdf',
      'Rohan_Sharma_Software_Engineer_CV.pdf',
      'Rohan_Sharma_FullStack_Resume.pdf'
    ];
    var randomName = simulatedFileNames[Math.floor(Math.random() * simulatedFileNames.length)];
    $scope.student.resumeFileName = randomName;
    $scope.student.resumeUpdated = 'Just now';
    $scope.student.atsScore = 94; // Upgraded ATS score
    $scope.showToast('Resume "' + randomName + '" uploaded and ATS verified (Score: 94/100)!');
  };

  // Add Skill to Student Profile
  $scope.addSkill = function() {
    if ($scope.student.newSkillInput && $scope.student.newSkillInput.trim() !== '') {
      var skill = $scope.student.newSkillInput.trim();
      if ($scope.student.skills.indexOf(skill) === -1) {
        $scope.student.skills.push(skill);
        $scope.student.newSkillInput = '';
        $scope.showToast('Added skill: ' + skill);
      }
    }
  };

  // Remove Skill from Student Profile
  $scope.removeSkill = function(index) {
    $scope.student.skills.splice(index, 1);
  };

  // Company: Publish New Job Opening
  $scope.newDrive = {
    company: 'Nexus Cloud Systems',
    role: 'Cloud Infrastructure Engineer',
    tier: 'Tier 2 (Super Dream)',
    package: 20.0,
    baseSalary: 14.5,
    location: 'Bengaluru / Hyderabad',
    minCgpa: 7.5,
    maxBacklogs: 0,
    eligibleDepts: ['CSE', 'ISE', 'AI&DS'],
    requiredSkillsText: 'Python, Linux, Cloud',
    driveDate: 'Dec 15, 2026',
    deadline: 'Dec 05, 2026',
    openings: 15,
    description: 'Work on distributed hyper-scale computing clusters and Kubernetes automation.'
  };

  $scope.publishJobOpening = function() {
    if (!$scope.newDrive.company || !$scope.newDrive.role) {
      alert('Please fill in the company name and role title.');
      return;
    }

    var skillsArr = $scope.newDrive.requiredSkillsText.split(',').map(function(s) {
      return s.trim();
    }).filter(function(s) { return s.length > 0; });

    var createdDrive = {
      id: 'DRV-' + (Math.floor(Math.random() * 900) + 100),
      company: $scope.newDrive.company,
      role: $scope.newDrive.role,
      tier: $scope.newDrive.tier,
      package: parseFloat($scope.newDrive.package) || 12.0,
      baseSalary: parseFloat($scope.newDrive.baseSalary) || 8.0,
      location: $scope.newDrive.location,
      minCgpa: parseFloat($scope.newDrive.minCgpa) || 7.0,
      maxBacklogs: parseInt($scope.newDrive.maxBacklogs) || 0,
      eligibleDepts: angular.copy($scope.newDrive.eligibleDepts),
      requiredSkills: skillsArr,
      driveDate: $scope.newDrive.driveDate,
      deadline: $scope.newDrive.deadline,
      openings: parseInt($scope.newDrive.openings) || 10,
      status: 'Active',
      description: $scope.newDrive.description
    };

    $scope.drives.unshift(createdDrive);

    // Notify Students and Placement Trainer
    $scope.notifications.unshift({
      id: Date.now(),
      targetRole: 'student',
      title: 'New Campus Drive Posted: ' + createdDrive.company,
      message: createdDrive.role + ' opening announced with salary package ₹ ' + createdDrive.package + ' LPA.',
      time: 'Just now',
      read: false
    });

    $scope.showToast('Campus recruitment drive for ' + createdDrive.company + ' successfully published!');
  };

  // Toggle department checkbox when publishing drive
  $scope.toggleDeptSelection = function(deptCode) {
    var idx = $scope.newDrive.eligibleDepts.indexOf(deptCode);
    if (idx > -1) {
      $scope.newDrive.eligibleDepts.splice(idx, 1);
    } else {
      $scope.newDrive.eligibleDepts.push(deptCode);
    }
  };

  // Company: Shortlist Student
  $scope.shortlistApplicant = function(app) {
    app.status = 'Shortlisted';
    app.currentStage = 'Shortlisted for Assessment / Tech Round 1';
    
    $scope.notifications.unshift({
      id: Date.now(),
      targetRole: 'student',
      title: 'Shortlisted by ' + app.company,
      message: 'Congratulations! Your profile has been shortlisted for ' + app.role + '.',
      time: 'Just now',
      read: false
    });

    $scope.showToast(app.studentName + ' has been shortlisted.');
  };

  // Company / Trainer: Schedule Interview
  $scope.scheduleInterview = function(app) {
    var interviewSlot = prompt('Enter interview date & time (e.g. Nov 12, 2026, 10:30 AM):', 'Nov 12, 2026, 10:30 AM');
    if (!interviewSlot) return;

    var room = prompt('Enter interview venue or meeting link:', 'Placement Cell Interview Suite 3 (or meet.google.com/xyz)');
    if (!room) room = 'Placement Cell Interview Suite 1';

    app.status = 'Interview Scheduled';
    app.currentStage = 'Interview Round Scheduled';
    app.interviewDate = interviewSlot;
    app.interviewRoom = room;

    $scope.notifications.unshift({
      id: Date.now(),
      targetRole: 'student',
      title: 'Interview Locked: ' + app.company,
      message: 'Your interview for ' + app.role + ' is scheduled for ' + interviewSlot + ' at ' + room,
      time: 'Just now',
      read: false
    });

    $scope.showToast('Interview scheduled for ' + app.studentName + '.');
  };

  // Company / Trainer: Select Student & Release Offer
  $scope.selectStudentOffer = function(app) {
    app.status = 'Selected / Placed';
    app.currentStage = 'Offer Released';

    // If this application is for the current student, update student placement status
    if (app.studentUsn === $scope.student.usn) {
      $scope.student.placementStatus = 'Placed';
      $scope.student.placedCompany = app.company;
      $scope.student.salaryPackage = '₹ ' + app.package + ' LPA';
    }

    $scope.notifications.unshift({
      id: Date.now(),
      targetRole: 'student',
      title: '🎉 Campus Offer Released by ' + app.company + '!',
      message: 'Congratulations! You have been selected for ' + app.role + ' at ₹ ' + app.package + ' LPA.',
      time: 'Just now',
      read: false
    });

    $scope.showToast('Offer released to ' + app.studentName + ' for ' + app.company + '!');
  };

  // Company: Reject Applicant
  $scope.rejectApplicant = function(app) {
    app.status = 'Rejected';
    app.currentStage = 'Application Archived';
    $scope.showToast(app.studentName + ' status marked as Rejected.');
  };

  // Placement Trainer: Forward Selection Update to Student (Requirement #11 & #13)
  $scope.forwardSelectionToStudent = function(app) {
    $scope.notifications.unshift({
      id: Date.now(),
      targetRole: 'student',
      title: 'TPO Dispatch: Selection Letter for ' + app.company,
      message: 'The Placement Directorate has officially verified and forwarded your selection letter for ' + app.role + ' (₹ ' + app.package + ' LPA).',
      time: 'Just now',
      read: false
    });
    $scope.showToast('Selection information successfully forwarded to ' + app.studentName + '!');
  };

  // Submit Feedback (Supports Placed and Unplaced separately)
  $scope.submitFeedback = function() {
    if ($scope.newFeedback.isPlaced) {
      if (!$scope.newFeedback.company || !$scope.newFeedback.questions) {
        alert('Please fill in the placed company name and interview questions asked.');
        return;
      }
      $scope.feedbacksPlaced.unshift({
        id: Date.now(),
        studentName: $scope.student.name,
        usn: $scope.student.usn,
        department: $scope.student.department,
        company: $scope.newFeedback.company,
        package: $scope.student.salaryPackage || '18.5 LPA',
        rating: $scope.newFeedback.rating,
        difficulty: $scope.newFeedback.difficulty,
        questions: $scope.newFeedback.questions,
        tips: $scope.newFeedback.tips,
        date: 'Just now'
      });
      $scope.showToast('Thank you! Placed interview feedback submitted.');
    } else {
      if (!$scope.newFeedback.comments) {
        alert('Please enter your feedback comments and preparation challenges.');
        return;
      }
      $scope.feedbacksUnplaced.unshift({
        id: Date.now(),
        studentName: $scope.student.name,
        usn: $scope.student.usn,
        department: $scope.student.department,
        challengeArea: $scope.newFeedback.challengeArea,
        desiredSupport: $scope.newFeedback.desiredSupport || 'Additional technical drills',
        comments: $scope.newFeedback.comments,
        date: 'Just now'
      });
      $scope.showToast('Unplaced feedback recorded. TPO cell will provide guidance.');
    }

    // Reset feedback fields
    $scope.newFeedback.company = '';
    $scope.newFeedback.questions = '';
    $scope.newFeedback.tips = '';
    $scope.newFeedback.comments = '';
    $scope.newFeedback.desiredSupport = '';
  };

  // Mark single notification as read
  $scope.markAsRead = function(notif) {
    notif.read = true;
  };

  // Mark all notifications as read
  $scope.markAllNotificationsRead = function() {
    $scope.notifications.forEach(function(n) {
      n.read = true;
    });
    $scope.showToast('All notifications marked as read.');
  };

  // Unread Notification Count for Badge
  $scope.getUnreadCount = function() {
    var count = 0;
    for (var i = 0; i < $scope.notifications.length; i++) {
      if (!$scope.notifications[i].read) {
        count++;
      }
    }
    return count;
  };

  // Login handler
  $scope.performLogin = function() {
    $scope.switchRole($scope.loginForm.role);
    $scope.showToast('Successfully logged in as ' + $scope.loginForm.role.toUpperCase() + '.');
  };

  // Logout handler
  $scope.performLogout = function() {
    $scope.currentRole = 'guest';
    $scope.activeTab = 'login';
    $scope.showToast('You have been logged out.');
  };
}]);

// Child Controller: Dashboard specific calculations
app.controller('DashboardController', ['$scope', function($scope) {
  // Calculate total students placed and total offers
  $scope.getTotalStudents = function() {
    var sum = 0;
    for (var i = 0; i < $scope.departments.length; i++) {
      sum += $scope.departments[i].total;
    }
    return sum;
  };

  $scope.getTotalPlaced = function() {
    var sum = 0;
    for (var i = 0; i < $scope.departments.length; i++) {
      sum += $scope.departments[i].placed;
    }
    return sum;
  };

  $scope.getOverallRate = function() {
    var tot = $scope.getTotalStudents();
    var plc = $scope.getTotalPlaced();
    return tot > 0 ? ((plc / tot) * 100).toFixed(1) : '0';
  };
}]);
