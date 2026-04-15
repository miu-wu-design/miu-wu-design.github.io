/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
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
          id: 'web-store',
          name: 'E-commerce Web Store',
          description: 'A complete e-commerce platform with modern UI/UX design, featuring product catalog, shopping cart, and checkout functionality. The design emphasizes clean layouts, intuitive navigation, and responsive performance across all devices.',
          images: [
            { src: 'assets/img/portfolio/webstore-Mock-1.png', caption: 'Homepage layout with product showcase' },
            { src: 'assets/img/portfolio/webstore-Mock-2.png', caption: 'Product detail page with specifications' }
          ]
        },
        {
          id: 'mobile-app',
          name: 'Mobile Application Design',
          description: 'Mobile-first application design with focus on user experience and accessibility. Features include intuitive navigation, touch-optimized interfaces, and seamless integration with backend services.',
          images: [
            { src: 'assets/img/portfolio/Mobile-Mock-1.png', caption: 'Mobile app home screen' },
            { src: 'assets/img/portfolio/Mobile-Mock-2.png', caption: 'User profile and settings interface' }
          ]
        },
        {
          id: 'ai-app',
          name: 'AI-Based Application',
          description: 'Innovative AI-powered application with sophisticated user interface design. The project combines cutting-edge technology with user-centered design principles to deliver an intuitive and powerful user experience.',
          images: [
            { src: 'assets/img/portfolio/WD-Mock-1.png', caption: 'AI dashboard with analytics' },
            { src: 'assets/img/portfolio/WD-Mock-2.png', caption: 'User interaction flow design' }
          ]
        },
        {
          id: '3d-store',
          name: '3D Animation Web Store',
          description: 'Interactive web store featuring 3D product animations and immersive shopping experience. Combines advanced web technologies with creative design to showcase products in an engaging way.',
          images: [
            { src: 'assets/img/portfolio/3D-Mock-1.png', caption: '3D product showcase' },
            { src: 'assets/img/portfolio/3D-Mock-2.png', caption: 'Interactive product viewer' }
          ]
        },
        {
          id: 'pp-app',
          name: 'Professional Platform',
          description: 'Professional networking platform with modern design and comprehensive user management features. Focuses on clean interfaces, efficient workflows, and excellent user experience.',
          images: [
            { src: 'assets/img/portfolio/PP-Mock-1.png', caption: 'Platform dashboard design' },
            { src: 'assets/img/portfolio/PP-Mock-2.png', caption: 'User collaboration interface' }
          ]
        }
      ],
      'graphic-design': [
        {
          id: 'easter-banners',
          name: 'Easter Campaign Banners',
          description: 'Seasonal marketing campaign featuring multiple banner designs for various clients. Each banner maintains brand consistency while incorporating Easter themes and modern design elements.',
          images: [
            { src: 'assets/img/portfolio/graphic-1.png', caption: 'Easter banner for HiveRadar' },
            { src: 'assets/img/portfolio/graphic-2.png', caption: 'Easter banner for Securicore' }
          ]
        },
        {
          id: 'brand-identity',
          name: 'Brand Identity Design',
          description: 'Complete brand identity package including logo design, color schemes, and marketing materials. Focus on creating cohesive visual language that communicates brand values effectively.',
          images: [
            { src: 'assets/img/portfolio/graphic-3.png', caption: 'Brand logo variations' },
            { src: 'assets/img/portfolio/graphic-4.png', caption: 'Marketing collateral design' }
          ]
        },
        {
          id: 'magazine-design',
          name: 'Magazine Layout Design',
          description: 'Editorial design for print and digital magazines. Features sophisticated typography, thoughtful layout composition, and engaging visual hierarchy to enhance reader experience.',
          images: [
            { src: 'assets/img/portfolio/graphic-m-1.png', caption: 'Magazine cover design' },
            { src: 'assets/img/portfolio/graphic-m-2.png', caption: 'Interior spread layout' }
          ]
        },
        {
          id: 'poster-design',
          name: 'Event Poster Design',
          description: 'Promotional poster designs for various events and campaigns. Each poster combines striking visuals with clear messaging to capture audience attention and drive engagement.',
          images: [
            { src: 'assets/img/portfolio/graphic-p-1.png', caption: 'Christmas & New Year poster' },
            { src: 'assets/img/portfolio/graphic-p-2.png', caption: 'Chinatown Night Market poster' }
          ]
        },
        {
          id: 'user-guides',
          name: 'Technical User Guides',
          description: 'Comprehensive user guide design for technical products. Features clear instructions, intuitive diagrams, and professional layout to enhance user understanding and product usability.',
          images: [
            { src: 'assets/img/portfolio/Repair-Kit-User-Guide.png', caption: 'Repair kit user manual' },
            { src: 'assets/img/portfolio/Flashlight-User-Guide.png', caption: 'Product operation guide' }
          ]
        }
      ],
      'animation-video': [
        {
          id: 'product-ads',
          name: 'Product Advertising Videos',
          description: 'Professional product advertising videos with 3D animations and motion graphics. Each video showcases product features through engaging visual storytelling and high-quality production.',
          images: [
            { src: 'assets/img/portfolio/video1.png', caption: 'Product advertising video thumbnail' },
            { src: 'assets/img/portfolio/animation/Access-Point.png', caption: '3D animation product showcase' }
          ]
        },
        {
          id: 'social-media-gifs',
          name: 'Social Media Animations',
          description: 'Animated content for social media marketing including GIFs and short videos. Designed to capture attention quickly and communicate messages effectively in digital spaces.',
          images: [
            { src: 'assets/img/portfolio/gif/Thanksgiving-post.gif', caption: 'Thanksgiving social media GIF' },
            { src: 'assets/img/portfolio/gif/National-Internet-Day.gif', caption: 'National Internet Day animation' }
          ]
        },
        {
          id: '3d-animations',
          name: '3D Product Animations',
          description: 'Advanced 3D animations showcasing product features and functionality. Combines technical precision with creative presentation to highlight product value propositions.',
          images: [
            { src: 'assets/img/portfolio/animation/video2.png', caption: '3D animation product advertising' },
            { src: 'assets/img/portfolio/gif/360-Camera-mount.gif', caption: '360-degree product demonstration' }
          ]
        }
      ]
    },
    
    currentCategory: 'web-design',
    currentProject: null,
    
    init() {
      this.bindEvents();
      this.renderProjects();
      this.selectProject('web-store');
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
    },
    
    renderProjects() {
      const projectList = document.getElementById('projectList');
      const projects = this.projects[this.currentCategory];
      
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
    },
    
    selectProject(projectId) {
      const projects = this.projects[this.currentCategory];
      const project = projects.find(p => p.id === projectId);
      
      if (!project) return;
      
      this.currentProject = project;
      
      // Update active state in list
      document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.projectId === projectId) {
          item.classList.add('active');
        }
      });
      
      // Render project details
      this.renderProjectDetails(project);
    },
    
    renderProjectDetails(project) {
      const projectDetail = document.getElementById('projectDetail');
      
      let imagesHtml = '';
      project.images.forEach(image => {
        imagesHtml += `
          <img src="${image.src}" alt="${image.caption}" class="project-detail-image">
          <p class="project-detail-caption">${image.caption}</p>
        `;
      });
      
      projectDetail.innerHTML = `
        <h3 class="project-detail-title">${project.name}</h3>
        <p class="project-detail-description">${project.description}</p>
        ${imagesHtml}
      `;
      
      // Trigger animation
      setTimeout(() => {
        projectDetail.classList.add('show');
      }, 50);
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
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
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
      handler: function(direction) {
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

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        window.portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        window.portfolioIsotope.on('arrangeComplete', function() {
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
    seeAllBtn.addEventListener('click', function() {
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