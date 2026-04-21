/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Contact Modal functionality
   */
  const contactModal = {
    overlay: null,
    modal: null,
    closeBtn: null,
    isOpen: false,

    init() {
      this.overlay = select('#contactModal');
      this.modal = select('.contact-modal');
      this.closeBtn = select('.modal-close-btn');

      if (!this.overlay) return;

      this.bindEvents();
    },

    bindEvents() {
      // Open modal when CTA button is clicked
      const ctaButtons = select('.cta-button, .nav-cta a', true);
      ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.open();
        });
      });

      // Open modal when Contact link is clicked
      const contactLinks = select('.nav-link[href="#contact"]', true);
      contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.open();
        });
      });

      // Close modal when close button is clicked
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }

      // Close modal when overlay is clicked
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });

      // Close modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    },

    open() {
      if (!this.overlay) return;

      this.overlay.classList.add('active');
      document.body.classList.add('modal-open');
      this.isOpen = true;

      // Focus management
      setTimeout(() => {
        const closeBtn = select('.modal-close-btn');
        if (closeBtn) {
          closeBtn.focus();
        }
      }, 100);
    },

    close() {
      if (!this.overlay) return;

      this.overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
      this.isOpen = false;
    }
  };

  /**
   * New Navigation Functionality
   */
  const initNewNavigation = () => {
    const mobileMenuToggle = select('.mobile-menu-toggle');
    const mobileMenu = select('.mobile-menu');
    const newHeader = select('.new-header');
    const mobileNavLinks = select('.mobile-nav-link', true);
    const navLinks = select('.nav-link', true);

    // Mobile menu toggle
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
      });
    }

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Header scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        newHeader.classList.add('scrolled');
      } else {
        newHeader.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Active link highlighting
    const updateActiveLink = () => {
      const sections = select('section[id]', true);
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });

      mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial check
  };

  // Initialize new navigation
  initNewNavigation();

  // Initialize contact modal
  contactModal.init();

  /**
   * Portfolio Master-Detail System
   */
  const portfolioSystem = {
    projects: {
      'web-design': [
        {
          id: 'ai-web',
          name: 'Marketing & product website for AI SaaS',
          icon: 'bi-cpu',
          description: 'Designed and built a bilingual (Traditional Chinese & English) marketing site in Framer for Chat Everywhere v2.',
          heroImage: 'assets/img/portfolio/CE-Mock-1.jpg',
          images: [
            { src: 'assets/img/portfolio/ce/ce-home.jpg', caption: 'Homepage page of ChatEverywhere' },
            { src: 'assets/img/portfolio/ce/ce-teacher.jpg', caption: 'Teacher feature page of ChatEverywhere' },
            { src: 'assets/img/portfolio/ce/ce-organization.jpg', caption: 'Pricing page of ChatEverywhere' }
          ]
        },
        {
          id: '3d-store',
          name: '3D Animation Web Store',
          icon: 'bi-shop',
          description: 'Interactive web store featuring 3D product animations and immersive shopping experience. Combines advanced web technologies with creative design to showcase products in an engaging way.',
          heroImage: 'assets/img/portfolio/3D-Mock-1.png',
          images: [
            { src: 'assets/img/portfolio/animation/home.jpg', caption: 'Interactive 3D animation store page' },
            { src: 'assets/img/portfolio/animation/Store-3D-open.mp4', caption: 'Interactive 3D animation - Interior Showcase' },
            { src: 'assets/img/portfolio/animation/Store-3D-handle.mp4', caption: 'Interactive 3D animation - Handle Showcase' },
            { src: 'assets/img/portfolio/animation/Store-3D-FullyExtend.mp4', caption: 'Interactive 3D animation - Fully Extend Showcase' }
          ]
        },
        {
          id: 'pp-app',
          name: 'Professional Platform',
          icon: 'bi-briefcase',
          description: 'Professional networking platform with modern design and comprehensive user management features. Focuses on clean interfaces, efficient workflows, and excellent user experience.',
          heroImage: 'assets/img/portfolio/PP-Mock-1.png',
          images: [
            { src: 'assets/img/portfolio/pp/dashboard.jpg', caption: 'Platform Dashboard Page' },
            { src: 'assets/img/portfolio/pp/location.jpg', caption: 'Location Page' },
            { src: 'assets/img/portfolio/pp/project-Information.jpg', caption: 'Project Information Page' },
            { src: 'assets/img/portfolio/pp/schedule-calendar.jpg', caption: 'Schedule Calendar Page' },
            { src: 'assets/img/portfolio/pp/administration.jpg', caption: 'Administration Page' },
            { src: 'assets/img/portfolio/pp/notification.jpg', caption: 'Notification Page' }
          ]
        },
        {
          id: 'mobile-app',
          name: 'Mobile Application Design',
          icon: 'bi-phone',
          description: 'Mobile-first application design with focus on user experience and accessibility. Features include intuitive navigation, touch-optimized interfaces, and seamless integration with backend services.',
          heroImage: 'assets/img/portfolio/Mobile-Mock-1.png',
          images: [
            { src: 'assets/img/portfolio/mobile/home.jpg', caption: 'Mobile website home screen' },
            { src: 'assets/img/portfolio/mobile/product.jpg', caption: 'Mobile website product page' },
            { src: 'assets/img/portfolio/mobile/store.jpg', caption: 'Mobile website store page' }

          ]
        },
        {
          id: 'ai-app',
          name: 'AI-Based Application',
          icon: 'bi-globe',
          description: 'Innovative AI-powered application with sophisticated user interface design. The project combines cutting-edge technology with user-centered design principles to deliver an intuitive and powerful user experience.',
          heroImage: 'assets/img/portfolio/WD-Mock-1.png',
          images: [
            { src: 'assets/img/portfolio/user/sign-up.jpg', caption: 'User Application Dashboard Page' },
            { src: 'assets/img/portfolio/user/Application-dashboard.jpg', caption: 'User Application Dashboard Page' },
            { src: 'assets/img/portfolio/user/application.jpg', caption: 'User Application Page' },
            { src: 'assets/img/portfolio/user/support.jpg', caption: 'User Support Page' },
            { src: 'assets/img/portfolio/user/admin-user-application.jpg', caption: 'Admin View Client Application Page' },
            { src: 'assets/img/portfolio/user/admin-user-management.jpg', caption: 'Admin Client Management Page' }
          ]
        }
      ],
      'graphic-design': [
        {
          id: 'brand-identity-CE',
          name: 'Brand Identity Graphic - ChatEverywhere',
          icon: 'bi-palette',
          description: 'Use consistent colors, fonts, and images to ensure fast cross-platform recognition.',
          heroImage: 'assets/img/portfolio/graphic-1.png',
          images: [
            { src: 'assets/img/portfolio/ce-sm/9.jpg', caption: '學校部署方案' },
            { src: 'assets/img/portfolio/ce-sm/8.jpg', caption: 'Line小助手' },
            { src: 'assets/img/portfolio/ce-sm/6.jpg', caption: '檔案上傳支援大升級' },
            { src: 'assets/img/portfolio/ce-sm/4.jpg', caption: '口歸初心' },
            { src: 'assets/img/portfolio/ce-sm/1.jpg', caption: 'ECF 工具箱' },
            { src: 'assets/img/portfolio/ce-sm/2.jpg', caption: '語音對話' },
            { src: 'assets/img/portfolio/ce-sm/3.jpg', caption: 'AI課堂 提前安排課程' },
            { src: 'assets/img/portfolio/ce-sm/5.jpg', caption: '會議小幫手 手機APP' },
            { src: 'assets/img/portfolio/ce-sm/7.jpg', caption: 'CE Bot' }
          ]
        },
        {
          id: 'brand-identity-HR',
          name: 'Brand Identity Graphic - HiveRadar',
          icon: 'bi-palette2',
          description: 'Use consistent colors, fonts, and images to ensure fast cross-platform recognition.',
          heroImage: 'assets/img/portfolio/graphic-3.png',
          images: [
            { src: 'assets/img/portfolio/hiveradar/6.jpeg', caption: 'HALLOWEEN - 3' },
            { src: 'assets/img/portfolio/hiveradar/7.jpeg', caption: 'MASLOW HIERARCHY IN MODERN TIMES' },
            { src: 'assets/img/portfolio/hiveradar/8.jpeg', caption: 'CYBERSECURITY' },
            { src: 'assets/img/portfolio/hiveradar/1.png', caption: 'EASTER - 1' },
            { src: 'assets/img/portfolio/hiveradar/2.png', caption: 'EASTER - 2' },
            { src: 'assets/img/portfolio/hiveradar/3.png', caption: 'EASTER - 3' },
            { src: 'assets/img/portfolio/hiveradar/4.png', caption: 'HALLOWEEN - 1' },
            { src: 'assets/img/portfolio/hiveradar/5.png', caption: 'HALLOWEEN - 2' }
          ]
        },
        {
          id: 'magazine-design',
          name: 'Magazine Layout Design',
          icon: 'bi-book',
          description: 'Editorial design for print and digital magazines. Features sophisticated typography, thoughtful layout composition, and engaging visual hierarchy to enhance reader experience.',
          heroImage: 'assets/img/portfolio/graphic-m-1.png',
          images: [
            { src: 'assets/img/portfolio/magazine/1.png', caption: 'MAGAZINE DESIGN' },
            { src: 'assets/img/portfolio/magazine/2.png', caption: ' ' },
            { src: 'assets/img/portfolio/magazine/3.png', caption: ' ' },
            { src: 'assets/img/portfolio/magazine/4.png', caption: ' ' },
            { src: 'assets/img/portfolio/magazine/5.png', caption: ' ' },
            { src: 'assets/img/portfolio/magazine/6.png', caption: ' ' }
          ]
        },
        // {
        //   id: 'poster-design',
        //   name: 'Event Poster Design',
        //   icon: 'bi-image',
        //   description: 'Promotional poster designs for various events and campaigns. Each poster combines striking visuals with clear messaging to capture audience attention and drive engagement.',
        //   heroImage: 'assets/img/portfolio/graphic-p-1.png',
        //   images: [
        //     { src: 'assets/img/portfolio/graphic-p-1.png', caption: 'Christmas & New Year poster' },
        //     { src: 'assets/img/portfolio/graphic-p-2.png', caption: 'Chinatown Night Market poster' }
        //   ]
        // },
        {
          id: 'user-guides',
          name: 'Technical User Guides',
          icon: 'bi-file-text',
          description: 'Comprehensive user guide design for technical products. Features clear instructions, intuitive diagrams, and professional layout to enhance user understanding and product usability.',
          heroImage: 'assets/img/portfolio/Repair-Kit-User-Guide.png',
          images: [
            { src: 'assets/img/portfolio/tug/1.png', caption: 'HiveRadar Rapid Deployment Kit' },
            { src: 'assets/img/portfolio/tug/2.png', caption: 'LASER DISTANCE MEASURE & LED FLASHLIGHT - USER GUIDE' },
            { src: 'assets/img/portfolio/tug/3.png', caption: 'MAGNETIC POLE ADAPTOR & GUY WIRE - USER GUIDE' },
            { src: 'assets/img/portfolio/tug/4.png', caption: 'REPAIR KIT - USER GUIDE' }
          ]
        }
      ],
      'animation-video': [
        {
          id: 'product-ads',
          name: 'Product Advertising Videos',
          icon: 'bi-camera-video',
          description: 'Professional product advertising videos with 3D animations and motion graphics. Each video showcases product features through engaging visual storytelling and high-quality production.',
          images: [
            { src: 'assets/img/portfolio/video/video1.mp4', caption: 'Product advertising video' },
            { src: 'assets/img/portfolio/video/video2.mp4', caption: 'Product showcase video' },
            { src: 'assets/img/portfolio/video/3.mp4', caption: 'Product detail showcase video' },
            { src: 'assets/img/portfolio/video/4.gif', caption: 'Product detail showcase video' }
          ]
        },
        {
          id: 'social-media-gifs',
          name: 'Social Media Animations',
          icon: 'bi-gif',
          description: 'Animated content for social media marketing including GIFs and short videos. Designed to capture attention quickly and communicate messages effectively in digital spaces.',
          images: [
            { src: 'assets/img/portfolio/gif/Thanksgiving-post.gif', caption: 'Thanksgiving social media GIF' },
            { src: 'assets/img/portfolio/gif/National-Internet-Day.gif', caption: 'National Internet Day animation' }
          ]
        },
        // {
        //   id: '3d-animations',
        //   name: '3D Product Animations',
        //   icon: 'bi-play-circle',
        //   description: 'Advanced 3D animations showcasing product features and functionality. Combines technical precision with creative presentation to highlight product value propositions.',
        //   images: [
        //     { src: 'assets/img/portfolio/animation/video2.png', caption: '3D animation product advertising' },
        //     { src: 'assets/img/portfolio/gif/360-Camera-mount.gif', caption: '360-degree product demonstration' }
        //   ]
        // }
      ]
    },

    currentCategory: 'web-design',
    currentProject: null,

    init() {
      this.bindEvents();
      this.renderProjects();
      this.selectProject('ai-web');
    },

    bindEvents() {
      // Filter button clicks
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const category = e.target.dataset.category;
          this.setActiveFilter(category);
          this.renderProjects();

          // Select first project in new category
          const projects = this.projects[category];
          if (projects.length > 0) {
            this.selectProject(projects[0].id);
          }
        });
      });
    },

    setActiveFilter(category) {
      this.currentCategory = category;

      // Update button states
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
          btn.classList.add('active');
        }
      });

      // Update portfolio section data attribute for CSS targeting
      const portfolioSection = document.querySelector('.portfolio');
      if (portfolioSection) {
        portfolioSection.setAttribute('data-active-category', category);
      }
    },

    renderProjects() {
      const projectList = document.getElementById('projectList');
      const circularIconsContainer = document.getElementById('circularIconsContainer');
      const projects = this.projects[this.currentCategory];

      // Render desktop project list
      projectList.innerHTML = '';

      projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.dataset.projectId = project.id;

        projectItem.innerHTML = `
          <div class="project-name">${project.name}</div>
          <div class="project-category">${this.getCategoryLabel(this.currentCategory)}</div>
        `;

        projectItem.addEventListener('click', () => {
          this.selectProject(project.id);
        });

        projectList.appendChild(projectItem);
      });

      // Render mobile circular icons
      circularIconsContainer.innerHTML = '';

      projects.forEach(project => {
        const circularIcon = document.createElement('div');
        circularIcon.className = 'circular-icon';
        circularIcon.dataset.projectId = project.id;

        circularIcon.innerHTML = `
          <i class="bi ${project.icon}"></i>
        `;

        circularIcon.addEventListener('click', () => {
          this.selectProject(project.id);
        });

        circularIconsContainer.appendChild(circularIcon);
      });
    },

    selectProject(projectId) {
      const projects = this.projects[this.currentCategory];
      const project = projects.find(p => p.id === projectId);

      if (!project) return;

      this.currentProject = project;

      // Update active state in desktop list
      document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.projectId === projectId) {
          item.classList.add('active');
        }
      });

      // Update active state in mobile circular icons
      document.querySelectorAll('.circular-icon').forEach(icon => {
        icon.classList.remove('active');
        if (icon.dataset.projectId === projectId) {
          icon.classList.add('active');
        }
      });

      // Render project details
      this.renderProjectDetails(project);
    },

    renderProjectDetails(project) {
      const projectDetail = document.getElementById('projectDetail');

      // Check if this is a Web Design project
      const isWebDesign = this.currentCategory === 'web-design';

      if (isWebDesign) {
        projectDetail.innerHTML = this.renderWebDesignCaseStudy(project);
      } else {
        // Keep original layout for other categories
        let imagesHtml = '';
        project.images.forEach(image => {
          // Check if this is a video file
          const isVideo = image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.endsWith('.ogg');
          
          if (isVideo) {
            imagesHtml += `
              <p class="project-detail-caption">${image.caption}</p>
              <video controls class="project-detail-video" style="width: 100%; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                <source src="${image.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            `;
          } else {
            imagesHtml += `
              <p class="project-detail-caption">${image.caption}</p>
              <img src="${image.src}" alt="${image.caption}" class="project-detail-image">
            `;
          }
        });

        projectDetail.innerHTML = `
          <h3 class="project-detail-title">${project.name}</h3>
          <p class="project-detail-description">${project.description}</p>
          ${imagesHtml}
        `;
      }

      // Trigger animation
      setTimeout(() => {
        projectDetail.classList.add('show');
      }, 50);
    },

    renderWebDesignCaseStudy(project) {
      // Get project-specific case study data
      const caseStudyData = this.getWebDesignCaseStudyData(project.id);

      // Generate final designs gallery with support for images and videos
      let finalDesignsHtml = '';
      project.images.forEach(image => {
        // Check if this is a video file
        const isVideo = image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.endsWith('.ogg');

        if (isVideo) {
          finalDesignsHtml += `
            <div class="design-item video-item">
              <p class="project-detail-caption">${image.caption}</p>
              <video controls class="project-detail-video" poster="${image.src.replace(/\.(mp4|webm|ogg)$/, '.jpg')}">
                <source src="${image.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          `;
        } else {
          finalDesignsHtml += `
            <div class="design-item">
              <p class="project-detail-caption">${image.caption}</p>
              <div class="image-frame">
                <img src="${image.src}" alt="${image.caption}" class="project-detail-image">
              </div>
            </div>
          `;
        }
      });

      return `
        <!-- Hero Section -->
        <div class="case-study-hero">
          <h3 class="project-detail-title">${caseStudyData.hero.title}</h3>
          <div class="hero-image">
            <img src="${project.heroImage || project.images[0]?.src || 'assets/img/portfolio/placeholder-hero.png'}" alt="${caseStudyData.hero.title} - Hero Image" class="hero-detail-image">
          </div>
          <div class="hero-meta">
            <div class="meta-row">
              <span class="meta-label">Project Type:</span>
              <span class="meta-value">${caseStudyData.hero.type}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Client:</span>
              <span class="meta-value">${caseStudyData.hero.client}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">My Role:</span>
              <span class="meta-value">${caseStudyData.hero.role}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Year & Duration:</span>
              <span class="meta-value">${caseStudyData.hero.year}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Tools & Tech:</span>
              <span class="meta-value">${caseStudyData.hero.tools}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Overview:</span>
              <span class="meta-value">${caseStudyData.overview.description}</span>
            </div>
          </div>
        </div>
        
        <!-- Final Designs Section -->
        <div class="case-study-section">
          <!-- <h4 class="section-title">Final Designs</h4> -->
          <div class="final-designs-gallery">
            ${finalDesignsHtml}
          </div>
        </div>
        
        <!-- Overview Section -->
        <!-- <div class="case-study-section">
          <h4 class="section-title">Overview</h4>
          <p class="section-description">${caseStudyData.overview.description}</p>
          <div class="goals-list">
            <h5>Business Goal</h5>
            <ul>
              ${caseStudyData.overview.businessGoal.map(goal => `<li>${goal}</li>`).join('')}
            </ul>
            <h5>Objectives & Success Metrics</h5>
            <ul>
              ${caseStudyData.overview.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
          </div>
        </div> -->
        
        <!-- Process Section -->
        <!-- <div class="case-study-section">
          <h4 class="section-title">Process</h4>
          
          <div class="process-subsection">
            <h5>Research & Discovery</h5>
            <ul>
              ${caseStudyData.process.research.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          
          <div class="process-subsection">
            <h5>Information Architecture & Wireframes</h5>
            <ul>
              ${caseStudyData.process.wireframes.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          
          <div class="process-subsection">
            <h5>Visual Design & System</h5>
            <ul>
              ${caseStudyData.process.visualDesign.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          
          <div class="process-subsection">
            <h5>Prototyping & Testing</h5>
            <ul>
              ${caseStudyData.process.prototyping.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          
          <div class="process-subsection">
            <h5>Implementation / Handoff</h5>
            <ul>
              ${caseStudyData.process.implementation.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div> --> 
        
        <!-- Results & Impact Section -->
        <div class="case-study-section">
          <h4 class="section-title">Results & Impact</h4>
          <ul class="results-list">
            ${caseStudyData.results.map(result => `<li>${result}</li>`).join('')}
          </ul>
        </div>
        
        <!-- My Role Section -->
        <div class="case-study-section">
          <h4 class="section-title">My Role</h4>
          <ul class="role-list">
            ${caseStudyData.myRole.map(role => `<li>${role}</li>`).join('')}
          </ul>
        </div>
        
        <!-- Challenges & Learnings Section -->
        <!-- <div class="case-study-section">
          <h4 class="section-title">Challenges & Learnings</h4>
          <ul class="learnings-list">
            ${caseStudyData.learnings.map(learning => `<li>${learning}</li>`).join('')}
          </ul>
        </div> -->
      `;
    },

    getWebDesignCaseStudyData(projectId) {
      const caseStudies = {
        'ai-web': {
          hero: {
            title: 'Marketing & Product Website for AI Application',
            type: 'AI Web Application Design',
            client: 'Chat Everywhere',
            role: 'Lead Web Designer',
            year: '2025 - 2026',
            tools: 'Figma, Adobe Photoshop, Adobe Illustrator, Framer, basic HTML/CSS components within Framer'
          },
          overview: {
            description: 'Designed and built a bilingual (Traditional Chinese & English) marketing site in Framer for Chat Everywhere v2, showcasing its AI tools for education, organizations, and individuals.',
            businessGoal: ['Enhance the shopping experience and increase engagement and sales.'],
            objectives: [
              'Increase conversion rate on the main product pages by 25%',
              'Make the checkout process 3 steps instead of 7 to reduce cart abandonment',
              'Improve mobile usability for ~60% mobile traffic',
              'Implement advanced filtering and search functionality'
            ]
          },
          myRole: [
            'Planned information architecture and section flow (hero, features, portals, metrics, pricing, changelog, etc.) to support conversions.',
            'Designed and implemented the full site in Framer, including responsive layouts, interactions, and component reuse.',
            'Crafted and localized key marketing copy for both English and Traditional Chinese versions to keep tone consistent and persuasive.'
          ],
          process: {
            research: [
              'Reviewed existing analytics and interviewed 8 key stakeholders',
              'Analyzed competitor e-commerce platforms and industry best practices',
              'Created user personas based on customer data and interviews'
            ],
            wireframes: [
              'Mapped user flows for product discovery, selection, and checkout',
              'Created low-fidelity wireframes for core pages (homepage, product pages, cart, checkout)',
              'Designed responsive layouts for mobile, tablet, and desktop views'
            ],
            visualDesign: [
              'Developed a clean, modern UI kit with reusable components',
              'Established typography hierarchy and color system aligned with brand',
              'Created detailed design specifications for all interactive elements'
            ],
            prototyping: [
              'Built interactive Figma prototypes for key user journeys',
              'Conducted usability testing with 12 target users',
              'Iterated on designs based on feedback and testing results'
            ],
            implementation: [
              'Prepared developer-ready design specs and style guides',
              'Collaborated during front-end implementation and QA testing',
              'Ensured design consistency across all pages and components'
            ]
          },
          results: [
            'Communicated complex multi-portal product (worker, teacher, organization) with clear, scannable sections and visuals.',
            'Increased clarity of value proposition for education and business users by structuring features and metrics (users, visits, time saved).',
            'Delivered a fast, responsive, and fully bilingual landing experience that supports both global and Traditional Chinese–speaking audiences.'
          ],
          learnings: [
            'Learned to balance complex e-commerce functionality with clean, intuitive design',
            'Discovered the importance of progressive disclosure in product filtering options',
            'Improved remote collaboration through detailed design documentation and regular check-ins'
          ]
        },
        'mobile-app': {
          hero: {
            title: 'Mobile Website Design',
            type: 'Mobile Application Design',
            client: 'Hiveradar Inc.',
            role: 'Lead UI/UX Designer',
            year: '2024 - 2 months',
            tools: 'Figma, Adobe Photoshop, Adobe Illustrator, monday.com'
          },
          overview: {
            description: 'Designed a mobile-optimized version of an existing IT company desktop site, focusing on responsive layouts, clear content hierarchy, and performance. Responsibilities included wireframing, UX flows, visual design, and device testing to deliver a smooth mobile experience.',
            businessGoal: ['Create a mobile-first experience that increases user engagement'],
            objectives: [
              'Design an intuitive navigation system that requires no learning curve',
              'Ensure key tasks can be completed in under 30 seconds',
              'Achieve 4.5+ star rating in app stores',
              'Support both iOS and Android platforms with consistent experience'
            ]
          },
          myRole: [
            'Led end-to-end mobile UX and UI, from research and wireframes to final high-fidelity designs.',
            'Optimized content and interaction patterns for one-handed use and small screens.',
            'Collaborated with developers to ensure performant implementation and performed cross-device testing to refine the experience.'
          ],
          process: {
            research: [
              'Conducted contextual interviews with 15 target users',
              'Analyzed top 5 competitor mobile apps in the category',
              'Created user journey maps for key mobile use cases'
            ],
            wireframes: [
              'Designed user flows optimized for thumb navigation and mobile patterns',
              'Created wireframes for all major app screens and interactions',
              'Established information architecture for mobile-first experience'
            ],
            visualDesign: [
              'Developed mobile-specific UI components and interaction patterns',
              'Created color system optimized for mobile screens and accessibility',
              'Designed custom iconography and illustration style'
            ],
            prototyping: [
              'Built high-fidelity interactive prototypes in Figma',
              'Conducted usability testing with 8 participants using mobile devices',
              'Tested gesture interactions and micro-animations'
            ],
            implementation: [
              'Prepared detailed mobile design specifications and guidelines',
              'Created component library for iOS and Android development',
              'Collaborated with developers on native implementation challenges'
            ]
          },
          results: [
            'Translated complex desktop features into an intuitive, mobile-friendly interface.',
            'Improved mobile engagement and reduced bounce rates through better usability and faster load times.',
            'Delivered a consistent brand and feature experience across devices, strengthening the company’s mobile presence.'
          ],
          learnings: [
            'Learned importance of designing for thumb-friendly interaction zones',
            'Discovered that micro-animations significantly improve user engagement',
            'Improved cross-platform design consistency through systematic component libraries'
          ]
        },
        'ai-app': {
          hero: {
            title: 'AI-Based Application Design',
            type: 'AI-Powered Application',
            client: 'Immigantion Agency Company',
            role: 'Lead Web & UI/UX Designer',
            year: '2024 - 4 months',
            tools: 'Figma, Adobe Photoshop, Adobe Illustrator, Basecamp'
          },
          overview: {
            description: 'AI-powered Canadian visa application assistant that auto-fills required forms and generates a tailored checklist of supporting documents. Includes an admin portal so staff can review, support, and complete user applications efficiently.',
            businessGoal: ['Democratize AI analytics for business users without technical expertise'],
            objectives: [
              'Reduce learning curve for AI features to under 30 minutes',
              'Increase user adoption of advanced AI features by 40%',
              'Create intuitive data visualization for complex AI insights',
              'Ensure the interface can handle real-time AI processing feedback'
            ]
          },
          myRole: [
            'Led end-to-end UX from user research and competitor analysis through to high-fidelity UI design.',
            'Designed responsive user and admin portals, ensuring seamless integration with AI-driven backend workflows.',
            'Collaborated closely with engineers to align interface behavior with data extraction and form auto-fill logic.'
          ],
          process: {
            research: [
              'Interviewed 20 business users about their understanding of AI concepts',
              'Analyzed existing analytics platforms and AI interfaces',
              'Created mental models for how users expect to interact with AI'
            ],
            wireframes: [
              'Designed dashboard layouts that balance simplicity with powerful features',
              'Created wireframes for AI configuration and result interpretation screens',
              'Mapped user flows for AI-powered workflows and decision-making'
            ],
            visualDesign: [
              'Developed visualization system for complex AI data and insights',
              'Created iconography and visual language for AI concepts',
              'Designed responsive layouts for various screen sizes and devices'
            ],
            prototyping: [
              'Built interactive prototypes demonstrating AI feature interactions',
              'Tested data visualization comprehension with target users',
              'Validated AI workflow designs with business stakeholders'
            ],
            implementation: [
              'Created detailed specifications for data visualization components',
              'Collaborated with front-end developers on AI interface implementation',
              'Ensured accessibility compliance for complex data displays'
            ]
          },
          results: [
            'Streamlined a complex visa application journey into a guided, AI-assisted web experience.',
            'Improved user confidence and clarity by generating clear, personalized document checklists.',
            'Delivered a cohesive multi-device experience (admin + user portals across desktop, tablet, and mobile).'
          ],
          learnings: [
            'Learned to balance technical complexity with user-friendly interfaces',
            'Discovered importance of progressive disclosure for AI features',
            'Improved understanding of how to visualize abstract AI concepts intuitively'
          ]
        },
        '3d-store': {
          hero: {
            title: 'Interactive 3D Animation Webstore Design',
            type: '3D E-commerce Platform',
            client: 'Hiveradar Inc.',
            role: 'Lead 3D Animator & Web Experience Designer',
            year: '2024 - 5 months',
            tools: 'Figma, Adobe Photoshop, Adobe Illustrator, Blender'
          },
          overview: {
            description: 'Developed interactive 3D product animations for a web store to clearly showcase product features and functionality from multiple angles.',
            businessGoal: ['Create an engaging, user-friendly visual aid that supports more confident purchase decisions.'],
            objectives: [
              'Implement 3D product viewers that load in under 3 seconds',
              'Increase average time on product pages by 60%',
              'Reduce product returns by 25% through better visualization',
              'Maintain accessibility for users who can\'t use 3D features'
            ]
          },
          myRole: [
            'Led the full 3D animation pipeline, from concept to final rendering and web integration.',
            'Collaborated with the software engineer to ensure smooth, performant interactive behavior on the website.',
            'Incorporated stakeholder and senior feedback throughout iterations to refine clarity, pacing, and user experience.'
          ],
          process: {
            research: [
              'Researched 3D e-commerce trends and user expectations',
              'Analyzed performance implications of 3D features',
              'Tested user comprehension of 3D controls and interactions'
            ],
            wireframes: [
              'Designed layouts that accommodate both 3D and traditional product views',
              'Created wireframes for 3D viewer controls and interaction patterns',
              'Planned responsive behavior for 3D features across devices'
            ],
            visualDesign: [
              'Designed UI controls for 3D manipulation (zoom, rotate, etc.)',
              'Created visual hierarchy that balances 3D and 2D elements',
              'Developed loading states and performance indicators for 3D content'
            ],
            prototyping: [
              'Built interactive prototypes with simulated 3D interactions',
              'Tested user understanding of 3D navigation and controls',
              'Validated performance expectations and loading behaviors'
            ],
            implementation: [
              'Created detailed specifications for 3D viewer UI components',
              'Collaborated with Three.js developers on integration',
              'Ensured fallback experiences for users without 3D support'
            ]
          },
          results: [
            'Delivered three optimized, web-ready 3D animations that improved product understanding.',
            'Enhanced user engagement by allowing shoppers to explore product details interactively.',
            'Supported higher purchase confidence, contributing to stronger product presentation and sales potential.'
          ],
          learnings: [
            'Learned to balance immersive 3D features with practical e-commerce needs',
            'Discovered importance of performance optimization for 3D content',
            'Improved understanding of accessibility in immersive web experiences'
          ]
        },
        'pp-app': {
          hero: {
            title: 'Project Management Web Application',
            type: 'Professional Management Platform',
            client: 'Securicore',
            role: 'Lead Web & UI/UX Designer',
            year: '2024 - 6 months',
            tools: 'Figma, Adobe Photoshop, Adobe Illustrator, monday.com'
          },
          overview: {
            description: 'Designed a project planning and network management web application that helps admins and engineers securely store and share building-related documents and notes from anywhere. The app centralizes tasks, resources, and live AP data to simplify building internet management and improve operational efficiency.',
            businessGoal: ['Create engaging professional networking platform that drives user growth'],
            objectives: [
              'Achieve 100,000 active users within first 6 months',
              'Increase user engagement to 3+ sessions per week',
              'Reduce profile completion time to under 10 minutes',
              'Implement AI-powered career recommendations'
            ]
          },
          myRole: [
            'Led UX and UI design from research and user flows through to high-fidelity screens.',
            'Collaborated closely with engineers to align interface behavior with real-time data, notifications, and image uploads.',
            'Designed user-friendly layouts that balance technical network details with clear, accessible visuals for both admins and engineers.'
          ],
          process: {
            research: [
              'Conducted market research on professional networking platforms',
              'Interviewed 25 professionals about networking pain points',
              'Created competitive analysis matrix of existing platforms'
            ],
            wireframes: [
              'Designed user flows for profile creation, networking, and career features',
              'Created wireframes for all major platform screens and interactions',
              'Planned information architecture for complex social features'
            ],
            visualDesign: [
              'Developed professional yet approachable visual identity',
              'Created comprehensive design system with 50+ components',
              'Designed responsive layouts for web and mobile platforms'
            ],
            prototyping: [
              'Built interactive prototypes for key networking workflows',
              'Tested onboarding flow with 20 target users',
              'Validated AI recommendation feature designs'
            ],
            implementation: [
              'Created detailed design specifications and component documentation',
              'Collaborated with engineering team on implementation',
              'Conducted design QA and iteration based on user feedback'
            ]
          },
          results: [
            'Streamlined document, note, and task management into a single intuitive interface for admins and engineers.',
            'Enabled live monitoring of AP/network status to quickly detect issues and reduce potential downtime.',
            'Improved team coordination by clarifying responsibilities, task progress, and shared context across locations.'
          ],
          learnings: [
            'Learned importance of balancing professional tone with engaging user experience',
            'Discovered key drivers of user engagement in professional networking',
            'Improved skills in designing complex social interaction systems'
          ]
        }
      };

      return caseStudies[projectId] || caseStudies['ai-web']; // Fallback to ai-web
    },

    getCategoryLabel(category) {
      const labels = {
        'web-design': 'Web Design',
        'graphic-design': 'Graphic Design',
        'animation-video': 'Animation & Video'
      };
      return labels[category] || category;
    }
  };

  // Initialize portfolio system
  portfolioSystem.init();

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      window.portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 0
        }
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        window.portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        window.portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }
  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  // Handle See All Projects button
  const seeAllBtn = document.getElementById('seeAllBtn');
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', function () {
      const hiddenProjects = document.querySelectorAll('.hidden-project');
      hiddenProjects.forEach(project => {
        project.style.display = 'block';
        project.classList.add('animate__animated', 'animate__fadeIn');
      });

      // Update Isotope layout
      if (window.portfolioIsotope) {
        window.portfolioIsotope.arrange();
        window.portfolioIsotope.layout();
      }

      seeAllBtn.classList.add('hidden');
    });
  }

})()