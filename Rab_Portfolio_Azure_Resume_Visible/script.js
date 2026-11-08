  /* ============================================================
     QUICK EDIT — ENTER YOUR LINKS AND VERIFIED CERTIFICATE DETAILS
     Empty optional links stay hidden (no dead buttons on portfolio).
     ============================================================ */
  const PORTFOLIO = {
    email: 'rabluis.baltazar04@gmail.com', // Contact email
    phone: '09100869877',                  // Philippines contact number
    githubUrl: 'https://github.com/rabluisbaltazar04-stack', // My GitHub profile
    resumeUrl: 'assets/resume.pdf', // Local resume supplied for this portfolio update
    brgyAiDocumentationUrl: 'https://github.com/rabluisbaltazar04-stack/BRGY-AI-QA-Documentation', // GitHub README (includes Google Sheets link)
    brgyAiTestCasesUrl: '',                // Optional direct Google Sheets viewer link after sharing approval
    brgyAiDemoUrl: '',                     // Optional approved demo video link
    az900Earned: false,                   // Set true ONLY if you earned the certification
    az900EarnedDate: '',                  // Example: 'November 2026'
    az900CredentialUrl: ''                // Microsoft's verification / credential URL
  };

  document.getElementById('year').textContent = new Date().getFullYear();

  const root=document.documentElement;
  const themeBtn=document.getElementById('theme-toggle');
  try {const saved=localStorage.getItem('rab-portfolio-theme');if(saved==='light'||saved==='dark')root.dataset.theme=saved;}catch(e){}
  function setThemeLabel(){themeBtn.setAttribute('aria-label',root.dataset.theme==='dark'?'Switch to light theme':'Switch to dark theme');}
  setThemeLabel();
  themeBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';setThemeLabel();try{localStorage.setItem('rab-portfolio-theme',root.dataset.theme)}catch(e){}});
  const menu=document.getElementById('menu-toggle'),links=document.getElementById('nav-links');
  function closeNav(){links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
  menu.addEventListener('click',()=>{const isOpen=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});

  // Photo placeholders automatically disappear when you add assets/profile.jpg and assets/brgy-ai-phone-mockup.png.
  function showWhenLoaded(photoId,parentId,parentClass){const img=document.getElementById(photoId),parent=document.getElementById(parentId);if(img.complete&&img.naturalWidth>0)parent.classList.add(parentClass);img.addEventListener('load',()=>parent.classList.add(parentClass));img.addEventListener('error',()=>parent.classList.remove(parentClass));}
  showWhenLoaded('portrait-photo','portrait-frame','has-photo');
  showWhenLoaded('project-photo','project-art','has-project-photo');

  function revealLink(id,url){if(typeof url==='string'&&url.trim()){const node=document.getElementById(id);node.href=url.trim();node.hidden=false;return true;}return false;}
  const docLinkReady=revealLink('qa-doc-link',PORTFOLIO.brgyAiDocumentationUrl);
  const testLinkReady=revealLink('test-case-link',PORTFOLIO.brgyAiTestCasesUrl);
  const demoLinkReady=revealLink('project-demo-link',PORTFOLIO.brgyAiDemoUrl);
  if(docLinkReady||testLinkReady||demoLinkReady)document.getElementById('evidence-placeholder').hidden=true;
  revealLink('resume-button',PORTFOLIO.resumeUrl);
  if(PORTFOLIO.email.trim()){document.getElementById('email-contact').href='mailto:'+PORTFOLIO.email.trim();document.getElementById('email-label').textContent=PORTFOLIO.email.trim();document.getElementById('email-contact').hidden=false;}
  if(PORTFOLIO.phone.trim()){const phone=PORTFOLIO.phone.trim();document.getElementById('phone-contact').href='tel:'+phone.replace(/[^0-9+]/g,'');document.getElementById('phone-label').textContent=phone;document.getElementById('phone-contact').hidden=false;}
  if(revealLink('github-contact',PORTFOLIO.githubUrl)){try{document.getElementById('github-label').textContent=new URL(PORTFOLIO.githubUrl).pathname.replace(/^\//,'')||'GitHub profile';}catch(e){}}
  if(PORTFOLIO.az900Earned){
    document.getElementById('az900-title').textContent='Microsoft Certified: Azure Fundamentals (AZ-900)';
    document.getElementById('az900-status').textContent='Earned'+(PORTFOLIO.az900EarnedDate?' · '+PORTFOLIO.az900EarnedDate:'');
    document.getElementById('az900-unverified').textContent='Microsoft Azure Fundamentals certification earned.';
    revealLink('az900-verify-link',PORTFOLIO.az900CredentialUrl);
  }
