(() => {
  function initCourseFilter() {
    const buttons = document.querySelectorAll('[data-course-filter]');
    const cards = document.querySelectorAll('[data-course-card]');

    if (!buttons.length || !cards.length) return;

    const setActive = (activeValue) => {
      buttons.forEach((button) => {
        const isActive = (button.dataset.courseFilter || 'all') === activeValue;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    };

    const applyFilter = (filter) => {
      cards.forEach((card) => {
        const category = (card.dataset.courseCategory || '').toLowerCase();
        card.hidden = !(filter === 'all' || category === filter);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = (button.dataset.courseFilter || 'all').toLowerCase();
        setActive(filter);
        applyFilter(filter);
      });
    });

    setActive('all');
    applyFilter('all');
  }

  function initJourneyReveal() {
    const section = document.querySelector('[data-journey-section]');

    if (!section || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        section.classList.add('is-visible');
        instance.disconnect();
      });
    }, {
      threshold: 0.18,
      rootMargin: '0px 0px -12% 0px',
    });

    observer.observe(section);
  }

  function initCourseStickyCta() {
    const stickyCta = document.querySelector('[data-course-sticky]');

    if (!stickyCta) return;

    const toggleSticky = () => {
      if (window.innerWidth > 991) {
        stickyCta.classList.remove('is-visible');
        return;
      }

      stickyCta.classList.toggle('is-visible', window.scrollY > 320);
    };

    toggleSticky();
    window.addEventListener('scroll', toggleSticky, {passive: true});
    window.addEventListener('resize', toggleSticky);
  }

  function initHomeCoursesSwiper() {
    const swiperEl = document.querySelector('[data-home-courses-swiper]');

    if (!swiperEl || typeof window.Swiper === 'undefined') {
      return;
    }

    new window.Swiper(swiperEl, {
      loop: true,
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 3800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.02,
        },
        640: {
          slidesPerView: 1.4,
        },
        992: {
          slidesPerView: 2.15,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  function initEnquiryForms() {
    function getFormData(form) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        if (!data[key]) {
          data[key] = value;
        } else {
          data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
        }
      });
      return data;
    }

    function validateForm(form) {
      form.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input) => {
        input.setCustomValidity('');
      });

      const groups = {};
      form.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach((input) => {
        if (!input.name) return;
        groups[input.name] = groups[input.name] || [];
        groups[input.name].push(input);
      });

      for (const name in groups) {
        const inputs = groups[name];
        const firstInput = inputs[0];
        const groupRequired = inputs.some((input) => input.required);
        const hasChecked = inputs.some((input) => input.checked);

        if (groupRequired && !hasChecked) {
          firstInput.setCustomValidity('Please select an option.');
        }
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        return false;
      }

      return true;
    }

    function setBusy(button, busyLabel, isBusy) {
      if (!button) return;
      if (isBusy) {
        button.dataset.originalLabel = button.dataset.originalLabel || button.innerText;
        button.disabled = true;
        button.innerText = busyLabel;
        return;
      }

      button.disabled = false;
      button.innerText = button.dataset.originalLabel || button.innerText;
    }

    function initEnquiryForm(container) {
      const form = container.querySelector('[data-enquiry-form-element]');
      const submitBtn = container.querySelector('[data-enquiry-submit]');
      const statusDiv = container.querySelector('[data-enquiry-status]');
      const formType = container.dataset.formType || 'course-enquiry';
      const clientEndpoint = container.dataset.endpoint || '/api/send-email';
      const successMessage = container.dataset.successMessage || 'Success! Your enquiry has been sent.';
      const errorMessage = container.dataset.errorMessage || 'Error sending your enquiry. Please try again.';

      if (!form || !submitBtn || !statusDiv) return;

      const applyPresetSelections = () => {
        const params = new URLSearchParams(window.location.search);
        const session = params.get('session');

        if (!session) return;

        form.querySelectorAll('input[name="session"]').forEach((input) => {
          input.checked = input.value === session;
        });
      };

      async function handleSubmit(event) {
        event.preventDefault();
        if (!validateForm(form)) return;

        setBusy(submitBtn, 'Sending...', true);
        statusDiv.style.display = 'none';
        statusDiv.classList.remove('is-success', 'is-error');

        try {
          const data = getFormData(form);
          const response = await fetch(clientEndpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...data, formType}),
          });

          if (!response.ok) {
            throw new Error('Submission failed');
          }

          statusDiv.innerText = successMessage;
          statusDiv.classList.add('is-success');
          statusDiv.style.display = 'block';
          form.reset();
        } catch (error) {
          statusDiv.innerText = errorMessage;
          statusDiv.classList.add('is-error');
          statusDiv.style.display = 'block';
        } finally {
          setBusy(submitBtn, 'Sending...', false);
        }
      }

      form.addEventListener('submit', handleSubmit);
      form.addEventListener('change', (event) => {
        if (event.target.type !== 'checkbox' && event.target.type !== 'radio') return;
        const {name} = event.target;
        if (!name) return;
        form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
          input.setCustomValidity('');
        });
      });

      applyPresetSelections();
    }

    document.querySelectorAll('[data-enquiry-form]').forEach(initEnquiryForm);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCourseFilter();
    initJourneyReveal();
    initCourseStickyCta();
    initHomeCoursesSwiper();
    initEnquiryForms();
  });
})();
