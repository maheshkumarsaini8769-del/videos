/* ============================================
   SDC - COMPLETE APPLICATION LOGIC
   Navigation + Search + Courses + App Popup + Animations
   ============================================ */

(function() {
  'use strict';

  // ========== LOADER ==========
  var loader = document.getElementById('pageLoader');
  function hideLoader() {
    loader.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(showHeroAnim, 200);
  }
  window.addEventListener('load', function() { setTimeout(hideLoader, 800); });
  setTimeout(hideLoader, 3000);

  // ========== BACK BUTTON - STAY ON SITE ==========
  // Use hash to control navigation
  location.hash = '#home';
  window.addEventListener('hashchange', function(e) {
    if (searchOverlay.classList.contains('open')) { closeSearch(); location.hash = '#home'; }
    else if (courseModal.classList.contains('open')) { closeCourseModal(); location.hash = '#home'; }
    else if (appModal.classList.contains('open')) { closeAppModal(); location.hash = '#home'; }
    else if (mobileMenu.classList.contains('open')) { closeMobile(); location.hash = '#home'; }
    else { location.hash = '#home'; }
  });
  window.addEventListener('popstate', function(e) {
    e.preventDefault();
    if (searchOverlay.classList.contains('open')) { closeSearch(); }
    else if (courseModal.classList.contains('open')) { closeCourseModal(); }
    else if (appModal.classList.contains('open')) { closeAppModal(); }
    else if (mobileMenu.classList.contains('open')) { closeMobile(); }
    location.hash = '#home';
  });

  // ========== HERO ANIMATIONS ==========
  function showHeroAnim() {
    document.querySelectorAll('.hero .anim-item').forEach(function(el) {
      el.classList.add('show');
    });
  }

  // ========== SCROLL REVEAL ==========
  function initScrollReveal() {
    var els = document.querySelectorAll('.anim-scroll');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function(el) { el.classList.add('vis'); });
      return;
    }
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el) { obs.observe(el); });
  }

  // ========== JOURNEY LINE ==========
  function initJourneyLine() {
    var line = document.getElementById('journeyLine');
    if (!line) return;
    if (!('IntersectionObserver' in window)) { line.classList.add('fill'); return; }
    var obs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) line.classList.add('fill');
    }, { threshold: 0.3 });
    obs.observe(line);
  }

  // ========== NAVBAR ==========
  var navbar = document.getElementById('navbar');
  var lastY = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (y <= 50) { navbar.classList.remove('hide'); lastY = y; return; }
    if (y > lastY && y > 100) navbar.classList.add('hide');
    else if (y < lastY) navbar.classList.remove('hide');
    lastY = y;
    updateActiveNav();
  }, { passive: true });

  function updateActiveNav() {
    var pos = window.scrollY + 150;
    document.querySelectorAll('section[id]').forEach(function(sec) {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        document.querySelectorAll('.nav-link').forEach(function(l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + sec.id);
        });
      }
    });
  }
  updateActiveNav();

  // ========== MOBILE MENU ==========
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileClose');

  hamburger.addEventListener('click', function() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    document.body.classList.add('no-scroll');
    history.pushState({ modal: 'mobile' }, '');
  });

  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  mobileClose.addEventListener('click', closeMobile);
  mobileMenu.addEventListener('click', function(e) { if (e.target === mobileMenu) closeMobile(); });

  document.querySelectorAll('.mobile-link').forEach(function(link) {
    link.addEventListener('click', closeMobile);
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var offset = navbar.offsetHeight;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
      }
    });
  });

  // ========== SEARCH ==========
  var searchBtn = document.getElementById('searchBtn');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchClose = document.getElementById('searchClose');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');

  var coursesData = [
    { name: 'Digital Marketing', num: '01', desc: 'SEO, Social Media, Google Ads, YouTube', skills: ['SEO', 'Social Media', 'Google Ads', 'YouTube', 'Email Marketing', 'Content Marketing'], duration: '2-3 MONTHS' },
    { name: 'Graphic Design', num: '02', desc: 'Photoshop, Illustrator, Canva, Logo, Branding', skills: ['Photoshop', 'Illustrator', 'Canva', 'Logo', 'Banner', 'Poster', 'Branding'], duration: '2-3 MONTHS' },
    { name: 'Video Editing', num: '03', desc: 'Premiere Pro, After Effects, Color Grading', skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Reels', 'YouTube'], duration: '2-3 MONTHS' },
    { name: 'Video Shooting', num: '04', desc: 'Camera Basics, Lighting, Composition', skills: ['Camera Basics', 'Lighting', 'Composition', 'Storytelling', 'Practical'], duration: '2-3 MONTHS' },
    { name: 'Personality Development', num: '05', desc: 'Communication, Public Speaking, Interview', skills: ['Communication', 'Confidence', 'Public Speaking', 'Interview', 'Time Management'], duration: '2-3 MONTHS' },
    { name: 'Advanced Tools', num: '06', desc: 'Canva Advanced, Firefly AI, ChatGPT, Automation', skills: ['Canva Advanced', 'Firefly AI', 'ChatGPT', 'AI Tools', 'Automation', 'Productivity'], duration: '2-3 MONTHS' }
  ];

  var courseIcons = {
    'Digital Marketing': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'Graphic Design': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>',
    'Video Editing': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    'Video Shooting': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    'Personality Development': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    'Advanced Tools': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  };

  function openSearch() {
    searchOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
    history.pushState({ modal: 'search' }, '');
    setTimeout(function() { searchInput.focus(); }, 300);
    renderDefaultSearch();
  }
  function closeSearch() {
    searchOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
    searchInput.value = '';
  }
  function renderDefaultSearch() {
    searchResults.innerHTML = '<p class="search-hint">Try: <span class="search-tag" data-q="video">video</span> <span class="search-tag" data-q="AI">AI</span> <span class="search-tag" data-q="design">design</span> <span class="search-tag" data-q="marketing">marketing</span></p>';
    searchResults.querySelectorAll('.search-tag').forEach(function(t) {
      t.addEventListener('click', function() {
        searchInput.value = this.getAttribute('data-q');
        doSearch(this.getAttribute('data-q'));
      });
    });
  }
  function doSearch(q) {
    if (!q || !q.trim()) { renderDefaultSearch(); return; }
    var query = q.toLowerCase().trim();
    var results = coursesData.filter(function(c) {
      return c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query) || c.skills.some(function(s) { return s.toLowerCase().includes(query); });
    });
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p class="empty-title">No course found</p><p class="empty-sub">Try another keyword.</p></div>';
      return;
    }
    var html = '';
    results.forEach(function(c) {
      var courseData = courseDetails[c.name];
      var imgSrc = courseData ? courseData.img : '';
      html += '<div class="sr-item" data-course="' + c.name + '"><div class="sr-thumb"><img src="' + imgSrc + '" alt="' + c.name + '" loading="lazy"></div><div class="sr-info"><h4>' + c.name + '</h4><p>' + c.skills.slice(0, 4).join(', ') + ' • ' + c.duration + '</p></div></div>';
    });
    searchResults.innerHTML = html;
    searchResults.querySelectorAll('.sr-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var name = this.getAttribute('data-course');
        closeSearch();
        openCourseDetail(name);
      });
    });
  }

  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', function(e) { if (e.target === searchOverlay) closeSearch(); });
  searchInput.addEventListener('input', function() { doSearch(this.value); updateClearBtn(); });

  var searchClearBtn = document.getElementById('searchClearBtn');
  searchClearBtn.addEventListener('click', function() {
    searchInput.value = '';
    doSearch('');
    updateClearBtn();
    searchInput.focus();
  });
  function updateClearBtn() {
    searchClearBtn.classList.toggle('visible', searchInput.value.length > 0);
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeSearch(); closeCourseModal(); closeAppModal(); closeMobile(); }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchOverlay.classList.contains('open') ? closeSearch() : openSearch(); }
  });

  // ========== COURSE DETAIL MODAL ==========
  var courseDetails = {
    'Digital Marketing': { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop&q=80', overview: 'Master the art of online marketing with hands-on training in SEO, social media management, Google Ads, YouTube marketing, email campaigns, and content marketing strategies.', skills: ['SEO', 'Social Media', 'Google Ads', 'YouTube', 'Email Marketing', 'Content Marketing'], tools: 'Google Analytics, Google Ads, Meta Business Suite, SEMrush, Mailchimp, WordPress', career: 'Digital Marketing Executive, Social Media Manager, SEO Specialist, Content Marketer' },
    'Graphic Design': { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80', overview: 'Create stunning visual designs and brand identities using professional tools like Photoshop, Illustrator, and Canva. Learn to design logos, banners, posters, and complete branding.', skills: ['Photoshop', 'Illustrator', 'Canva', 'Logo', 'Banner', 'Poster', 'Branding'], tools: 'Adobe Photoshop, Adobe Illustrator, Canva Pro, Figma', career: 'Graphic Designer, UI Designer, Brand Designer, Freelance Designer' },
    'Video Editing': { img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&fit=crop&q=80', overview: 'Learn professional video editing from raw footage to polished final products. Master Premiere Pro, After Effects, color grading, and YouTube content creation.', skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Reels', 'YouTube'], tools: 'Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut', career: 'Video Editor, Content Creator, YouTube Editor, Film Editor' },
    'Video Shooting': { img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&fit=crop&q=80', overview: 'Master camera techniques, lighting, composition, and video production from concept to capture. Learn indoor and outdoor shooting and video storytelling.', skills: ['Camera Basics', 'Lighting', 'Composition', 'Storytelling', 'Practical'], tools: 'DSLR Cameras, Mirrorless Cameras, Lighting Equipment, Stabilizers', career: 'Videographer, Camera Operator, Content Creator, YouTube Creator' },
    'Personality Development': { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop&q=80', overview: 'Build confidence and communication skills for professional success. Master public speaking, body language, interview skills, and time management.', skills: ['Communication', 'Confidence', 'Public Speaking', 'Interview', 'Time Management'], tools: 'Presentation Software, Recording Equipment, Behavioral Assessment Tools', career: 'Professional Development, Interview Success, Leadership Skills, Public Speaking' },
    'Advanced Tools': { img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&fit=crop&q=80', overview: 'Harness the power of AI and modern tools for maximum productivity. Learn Canva Advanced, Adobe Firefly AI, ChatGPT, automation workflows, and productivity tools.', skills: ['Canva Advanced', 'Firefly AI', 'ChatGPT', 'AI Tools', 'Automation', 'Productivity'], tools: 'Canva Pro, Adobe Firefly, ChatGPT, Zapier, Notion, Grammarly', career: 'AI Specialist, Content Automation Expert, Digital Productivity Consultant' }
  };

  var courseModal = document.getElementById('courseModal');
  var cmBackdrop = document.getElementById('cmBackdrop');
  var cmClose = document.getElementById('cmClose');
  var cmImage = document.getElementById('cmImage');
  var cmNum = document.getElementById('cmNum');
  var cmTitle = document.getElementById('cmTitle');
  var cmOverview = document.getElementById('cmOverview');
  var cmSkills = document.getElementById('cmSkills');
  var cmTools = document.getElementById('cmTools');
  var cmCareer = document.getElementById('cmCareer');
  var cmApplyBtn = document.getElementById('cmApplyBtn');
  var currentCourseName = null;

  function openCourseDetail(name) {
    var c = courseDetails[name];
    if (!c) return;
    currentCourseName = name;
    cmImage.src = c.img; cmImage.alt = name;
    cmNum.textContent = 'COURSE ' + (coursesData.find(function(d) { return d.name === name; }) || {}).num;
    cmTitle.textContent = name;
    cmOverview.textContent = c.overview;
    cmTools.textContent = c.tools;
    cmCareer.textContent = c.career;
    cmSkills.innerHTML = '';
    c.skills.forEach(function(s) {
      var span = document.createElement('span'); span.className = 'cm-skill'; span.textContent = s;
      cmSkills.appendChild(span);
    });
    courseModal.classList.add('open');
    document.body.classList.add('no-scroll');
    history.pushState({ modal: 'course' }, '');
    setTimeout(function() { cmClose.focus(); }, 100);
  }
  function closeCourseModal() {
    courseModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  document.querySelectorAll('.cc-explore').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      openCourseDetail(this.getAttribute('data-course'));
    });
  });
  document.querySelectorAll('.course-card').forEach(function(card) {
    card.addEventListener('click', function() { openCourseDetail(this.getAttribute('data-course')); });
  });
  cmClose.addEventListener('click', closeCourseModal);
  cmBackdrop.addEventListener('click', closeCourseModal);
  cmApplyBtn.addEventListener('click', function() { closeCourseModal(); openAppModal(currentCourseName); });

  // ========== APPLICATION MODAL ==========
  var appModal = document.getElementById('appModal');
  var appBackdrop = document.getElementById('appBackdrop');
  var appClose = document.getElementById('appClose');
  var appFormView = document.getElementById('appFormView');
  var appSuccessView = document.getElementById('appSuccessView');
  var appForm = document.getElementById('appForm');
  var appName = document.getElementById('appName');
  var appMobile = document.getElementById('appMobile');
  var chipsGrid = document.getElementById('chipsGrid');
  var submitBtn = document.getElementById('submitBtn');
  var maybeLater = document.getElementById('maybeLater');
  var continueBtn = document.getElementById('continueBtn');
  var successTags = document.getElementById('successTags');
  var heroApply = document.getElementById('heroApply');
  var selectedCourses = [];

  function openAppModal(preCourse) {
    appModal.classList.add('open');
    document.body.classList.add('no-scroll');
    history.pushState({ modal: 'app' }, '');
    resetAppForm();
    if (preCourse) selectChip(preCourse);
    setTimeout(function() { appName.focus(); }, 400);
  }
  function closeAppModal() {
    appModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
    resetAppForm();
  }
  function resetAppForm() {
    appForm.reset();
    selectedCourses = [];
    document.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('sel'); });
    clearFieldErrors();
    submitBtn.classList.remove('load');
    submitBtn.disabled = false;
    appFormView.style.display = '';
    appSuccessView.style.display = 'none';
  }

  // Course chips
  function selectChip(name) {
    var chip = document.querySelector('.chip[data-course="' + name + '"]');
    if (chip && !selectedCourses.includes(name)) {
      selectedCourses.push(name);
      chip.classList.add('sel');
    }
  }
  function toggleChip(name) {
    var idx = selectedCourses.indexOf(name);
    if (idx > -1) { selectedCourses.splice(idx, 1); document.querySelector('.chip[data-course="' + name + '"]').classList.remove('sel'); }
    else selectChip(name);
    clearErr('courseErr');
  }
  chipsGrid.querySelectorAll('.chip').forEach(function(chip) {
    chip.addEventListener('click', function() { toggleChip(this.getAttribute('data-course')); });
  });

  // Validation
  function validateName() {
    var v = appName.value.trim();
    if (!v) { showErr('nameErr', 'Please enter your full name'); appName.classList.add('err'); return false; }
    if (v.length < 2) { showErr('nameErr', 'Name must be at least 2 characters'); appName.classList.add('err'); return false; }
    clearErr('nameErr'); appName.classList.remove('err'); return true;
  }
  function validateMobile() {
    var v = appMobile.value.trim();
    if (!v) { showErr('mobileErr', 'Please enter your mobile number'); appMobile.classList.add('err'); return false; }
    if (!/^[6-9]\d{9}$/.test(v)) { showErr('mobileErr', 'Enter valid 10-digit Indian number'); appMobile.classList.add('err'); return false; }
    clearErr('mobileErr'); appMobile.classList.remove('err'); return true;
  }
  function validateCourses() {
    if (selectedCourses.length === 0) { showErr('courseErr', 'Select at least one course'); return false; }
    clearErr('courseErr'); return true;
  }
  function showErr(id, msg) { var el = document.getElementById(id); if (el) el.textContent = msg; }
  function clearErr(id) { var el = document.getElementById(id); if (el) el.textContent = ''; }
  function clearFieldErrors() { clearErr('nameErr'); clearErr('mobileErr'); clearErr('courseErr'); appName.classList.remove('err'); appMobile.classList.remove('err'); }

  appName.addEventListener('blur', validateName);
  appMobile.addEventListener('blur', validateMobile);
  appMobile.addEventListener('input', function() { this.value = this.value.replace(/\D/g, '').substring(0, 10); });

  // Submit
  appForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateName() || !validateMobile() || !validateCourses()) return;
    submitBtn.classList.add('load');
    submitBtn.disabled = true;
    var data = { name: appName.value.trim(), mobile: appMobile.value.trim(), selectedCourses: selectedCourses.slice(), timestamp: new Date().toISOString(), source: 'website' };
    console.log('Application:', data);
    setTimeout(function() {
      appFormView.style.display = 'none';
      appSuccessView.style.display = '';
      successTags.innerHTML = '';
      selectedCourses.forEach(function(c) {
        var s = document.createElement('span'); s.className = 'success-tag'; s.textContent = c;
        successTags.appendChild(s);
      });
    }, 1500);
  });

  appClose.addEventListener('click', closeAppModal);
  appBackdrop.addEventListener('click', closeAppModal);
  maybeLater.addEventListener('click', closeAppModal);
  continueBtn.addEventListener('click', function() {
    closeAppModal();
    var el = document.getElementById('courses');
    if (el) window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
  });
  if (heroApply) heroApply.addEventListener('click', function() { openAppModal(); });
  document.querySelectorAll('.cta-apply-btn').forEach(function(b) { b.addEventListener('click', function() { openAppModal(); }); });
  document.querySelectorAll('.mobile-apply-btn').forEach(function(b) { b.addEventListener('click', function() { openAppModal(); closeMobileMenu(); }); });
  document.querySelectorAll('.nav-apply-btn').forEach(function(b) { b.addEventListener('click', function() { openAppModal(); }); });
  document.querySelectorAll('.footer-apply-link').forEach(function(b) {
    b.addEventListener('click', function(e) { e.preventDefault(); openAppModal(); });
  });

  // ========== FIRST VISIT POPUP ==========
  // Shows on every page load
  setTimeout(function() {
    openAppModal();
  }, 2000);

  // ========== INIT ==========
  initScrollReveal();
  initJourneyLine();

  // ========== TORNADO ANIMATION ==========
  var tornadoCanvas = document.getElementById('tornadoCanvas');
  if (tornadoCanvas) {
    // Check for canvas support
    if (!tornadoCanvas.getContext) {
      // Fallback: show watercolor background only
      tornadoCanvas.style.display = 'none';
    } else {
    var tCtx = tornadoCanvas.getContext('2d');
    var tornadoParticles = [];
    var comets = [];
    var tornadoMouseX = -1000, tornadoMouseY = -1000;
    var isMobile = window.innerWidth < 768;
    
    // Colors per spec: 75% Royal Blue, 20% Sky Blue, 5% Gold
    var tColors = {
      primary: '#1D4ED8',
      secondary: '#3B82F6',
      soft: '#60A5FA',
      light: '#BFDBFE',
      gold: '#F5B400'
    };
    
    function resizeTornado() {
      var hero = tornadoCanvas.parentElement;
      tornadoCanvas.width = hero.offsetWidth;
      tornadoCanvas.height = hero.offsetHeight;
      isMobile = window.innerWidth < 768;
    }
    resizeTornado();
    window.addEventListener('resize', resizeTornado);
    
    // Mouse interaction
    tornadoCanvas.parentElement.addEventListener('mousemove', function(e) {
      var rect = tornadoCanvas.getBoundingClientRect();
      tornadoMouseX = e.clientX - rect.left;
      tornadoMouseY = e.clientY - rect.top;
    });
    tornadoCanvas.parentElement.addEventListener('mouseleave', function() {
      tornadoMouseX = -1000;
      tornadoMouseY = -1000;
    });
    
    // Tornado parameters
    var tornadoCenterX, tornadoCenterY, tornadoHeight, tornadoTopWidth, tornadoMidWidth, tornadoBotWidth;
    
    function updateTornadoParams() {
      tornadoCenterX = tornadoCanvas.width * 0.55;
      tornadoCenterY = tornadoCanvas.height * 0.5;
      tornadoHeight = tornadoCanvas.height * 0.75;
      tornadoTopWidth = isMobile ? 80 : 140;
      tornadoMidWidth = isMobile ? 25 : 45;
      tornadoBotWidth = isMobile ? 65 : 110;
    }
    updateTornadoParams();
    
    // Get position on tornado shape at given t (0=top, 1=bottom)
    function getTornadoPos(t, angle) {
      var y = tornadoCenterY - tornadoHeight / 2 + t * tornadoHeight;
      var width;
      if (t < 0.5) {
        width = tornadoTopWidth + (tornadoMidWidth - tornadoTopWidth) * (t * 2);
      } else {
        width = tornadoMidWidth + (tornadoBotWidth - tornadoMidWidth) * ((t - 0.5) * 2);
      }
      var x = tornadoCenterX + Math.cos(angle) * width;
      var z = Math.sin(angle) * width * 0.3;
      return { x: x, y: y, z: z, width: width };
    }
    
    // Particle class
    function TornadoParticle() {
      this.reset();
    }
    
    TornadoParticle.prototype.reset = function() {
      this.t = Math.random();
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (0.004 + Math.random() * 0.008) * (Math.random() < 0.5 ? 1 : -1);
      this.tSpeed = 0.0008 + Math.random() * 0.002;
      this.size = isMobile ? (1 + Math.random() * 2) : (1.5 + Math.random() * 3);
      
      // Color distribution: 75% primary, 20% soft, 5% gold
      var rand = Math.random();
      if (rand < 0.45) {
        this.color = tColors.primary;
      } else if (rand < 0.75) {
        this.color = tColors.secondary;
      } else if (rand < 0.95) {
        this.color = tColors.soft;
      } else if (rand < 0.99) {
        this.color = tColors.light;
      } else {
        this.color = tColors.gold;
      }
      
      this.opacity = 0.3 + Math.random() * 0.5;
      this.glowSize = this.size * (2 + Math.random() * 2);
    };
    
    TornadoParticle.prototype.update = function() {
      this.t += this.tSpeed;
      this.angle += this.angleSpeed;
      
      if (this.t > 1 || this.t < 0) {
        this.reset();
        this.t = this.t > 1 ? 0 : 1;
        this.tSpeed = -this.tSpeed;
      }
      
      var pos = getTornadoPos(this.t, this.angle);
      this.x = pos.x;
      this.y = pos.y;
      
      // Mouse repulsion
      var dx = this.x - tornadoMouseX;
      var dy = this.y - tornadoMouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100 && dist > 0) {
        var force = (100 - dist) / 100;
        this.x += (dx / dist) * force * 15;
        this.y += (dy / dist) * force * 10;
        this.opacity = Math.min(1, this.opacity + 0.2);
      }
    };
    
    TornadoParticle.prototype.draw = function() {
      tCtx.save();
      tCtx.globalAlpha = this.opacity * 0.8;
      tCtx.fillStyle = this.color;
      tCtx.shadowBlur = this.glowSize * 1.5;
      tCtx.shadowColor = this.color;
      tCtx.beginPath();
      tCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      tCtx.fill();
      tCtx.restore();
    };
    
    // Comet class
    function Comet() {
      this.reset();
    }
    
    Comet.prototype.reset = function() {
      this.t = Math.random();
      this.angle = Math.random() * Math.PI * 2;
      this.speed = 0.002 + Math.random() * 0.003;
      this.angleSpeed = 0.015 + Math.random() * 0.02;
      this.length = isMobile ? (15 + Math.random() * 20) : (25 + Math.random() * 40);
      this.size = isMobile ? 1.5 : 2;
      
      var rand = Math.random();
      if (rand < 0.7) {
        this.color = tColors.secondary;
      } else if (rand < 0.9) {
        this.color = tColors.soft;
      } else {
        this.color = tColors.gold;
      }
      
      this.opacity = 0.5 + Math.random() * 0.4;
      this.trail = [];
    };
    
    Comet.prototype.update = function() {
      this.t += this.speed;
      this.angle += this.angleSpeed;
      
      if (this.t > 1) {
        this.reset();
        this.t = 0;
      }
      
      var pos = getTornadoPos(this.t, this.angle);
      this.x = pos.x;
      this.y = pos.y;
      
      this.trail.unshift({ x: this.x, y: this.y });
      if (this.trail.length > 12) this.trail.pop();
    };
    
    Comet.prototype.draw = function() {
      if (this.trail.length < 2) return;
      
      tCtx.save();
      for (var i = 0; i < this.trail.length - 1; i++) {
        var alpha = (1 - i / this.trail.length) * this.opacity * 0.6;
        tCtx.globalAlpha = alpha;
        tCtx.strokeStyle = this.color;
        tCtx.lineWidth = this.size * (1 - i / this.trail.length);
        tCtx.beginPath();
        tCtx.moveTo(this.trail[i].x, this.trail[i].y);
        tCtx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
        tCtx.stroke();
      }
      
      // Comet head
      tCtx.globalAlpha = this.opacity;
      tCtx.fillStyle = this.color;
      tCtx.shadowBlur = 10;
      tCtx.shadowColor = this.color;
      tCtx.beginPath();
      tCtx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
      tCtx.fill();
      tCtx.restore();
    };
    
    // Strand class - flowing lines through tornado
    function Strand() {
      this.reset();
    }
    
    Strand.prototype.reset = function() {
      this.points = [];
      this.baseAngle = Math.random() * Math.PI * 2;
      this.speed = 0.003 + Math.random() * 0.005;
      this.thickness = 0.5 + Math.random() * 1;
      
      var rand = Math.random();
      if (rand < 0.6) {
        this.color = tColors.primary;
      } else if (rand < 0.85) {
        this.color = tColors.secondary;
      } else {
        this.color = tColors.soft;
      }
      
      this.opacity = 0.1 + Math.random() * 0.15;
      
      for (var i = 0; i <= 20; i++) {
        var t = i / 20;
        var angle = this.baseAngle + t * Math.PI * 4;
        var pos = getTornadoPos(t, angle);
        this.points.push(pos);
      }
    };
    
    Strand.prototype.update = function() {
      this.baseAngle += this.speed;
      for (var i = 0; i <= 20; i++) {
        var t = i / 20;
        var angle = this.baseAngle + t * Math.PI * 4;
        var pos = getTornadoPos(t, angle);
        this.points[i] = pos;
      }
    };
    
    Strand.prototype.draw = function() {
      if (this.points.length < 2) return;
      tCtx.save();
      tCtx.globalAlpha = this.opacity;
      tCtx.strokeStyle = this.color;
      tCtx.lineWidth = this.thickness;
      tCtx.lineCap = 'round';
      tCtx.beginPath();
      tCtx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 1; i < this.points.length; i++) {
        tCtx.lineTo(this.points[i].x, this.points[i].y);
      }
      tCtx.stroke();
      tCtx.restore();
    };
    
    // Create particles
    var particleCount = isMobile ? 70 : 180;
    for (var i = 0; i < particleCount; i++) {
      tornadoParticles.push(new TornadoParticle());
    }
    
    // Create comets
    var cometCount = isMobile ? 4 : 10;
    for (var c = 0; c < cometCount; c++) {
      comets.push(new Comet());
    }
    
    // Create strands
    var strandCount = isMobile ? 6 : 15;
    var strands = [];
    for (var s = 0; s < strandCount; s++) {
      strands.push(new Strand());
    }
    
    function animateTornado() {
      tCtx.clearRect(0, 0, tornadoCanvas.width, tornadoCanvas.height);
      updateTornadoParams();
      
      // Draw watercolor glow behind tornado
      var gradient = tCtx.createRadialGradient(
        tornadoCenterX, tornadoCenterY, 0,
        tornadoCenterX, tornadoCenterY, tornadoTopWidth * 3
      );
      gradient.addColorStop(0, 'rgba(29,78,216,0.04)');
      gradient.addColorStop(0.3, 'rgba(59,130,246,0.025)');
      gradient.addColorStop(0.6, 'rgba(96,165,250,0.015)');
      gradient.addColorStop(1, 'rgba(191,219,254,0)');
      tCtx.fillStyle = gradient;
      tCtx.fillRect(0, 0, tornadoCanvas.width, tornadoCanvas.height);
      
      // Draw strands
      strands.forEach(function(strand) {
        strand.update();
        strand.draw();
      });
      
      // Draw particles
      tornadoParticles.forEach(function(p) {
        p.update();
        p.draw();
      });
      
      // Draw comets
      comets.forEach(function(comet) {
        comet.update();
        comet.draw();
      });
      
      requestAnimationFrame(animateTornado);
    }
    
    // Respect reduced motion
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animateTornado();
    } else {
      // Draw static version
      tornadoParticles.forEach(function(p) {
        p.update();
        p.draw();
      });
    }
    } // End else block for canvas support
  }

})();
