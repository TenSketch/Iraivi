---
title: "Course Enrollment Form"
description: "Enroll for Iraivi's Motherhood Courses"
layout: "form"
image: "images/baby-smiling.jpg"
slug: "course-enrollment-form"
weight: 10
tags: ["enquiry"]
date: 2026-06-20T00:00:00+05:30
draft: false
---

---
title: "Course Enrollment Form"
description: "Enroll for Iraivi's Motherhood Courses"
layout: "form"
image: "images/baby-smiling.jpg"
slug: "course-enrollment-form"
weight: 10
tags: ["enquiry"]
date: 2026-06-20T00:00:00+05:30
draft: false
---

<div id="form-container">
  <form id="course-enrollment-form">
    <!-- Honeypot -->
    <input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">

    <div style="margin-bottom: 15px;">
      <label for="name">Name *</label><br>
      <input type="text" id="name" name="name" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="mobile">Mobile *</label><br>
      <input type="tel" id="mobile" name="mobile" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="email">Email *</label><br>
      <input type="email" id="email" name="email" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="location">Location *</label><br>
      <input type="text" id="location" name="location" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label>Which trimester are you currently in? *</label><br>
      <input type="checkbox" name="trimester" value="1st Trimester"> 1st Trimester<br>
      <input type="checkbox" name="trimester" value="2nd Trimester"> 2nd Trimester<br>
      <input type="checkbox" name="trimester" value="3rd Trimester"> 3rd Trimester
    </div>

    <div style="margin-bottom: 15px;">
      <label>Session *</label><br>
      <input type="radio" name="session" value="Pregnancy Wellness" required> Pregnancy Wellness<br>
      <input type="radio" name="session" value="Preparing for Birth"> Preparing for Birth<br>
      <input type="radio" name="session" value="Breastfeeding Preparation"> Breastfeeding Preparation<br>
      <input type="radio" name="session" value="Fourth Trimester (Postpartum & Newborn Care)"> Fourth Trimester (Postpartum & Newborn Care)<br>
      <input type="radio" name="session" value="Pregnancy to Parenthood Package"> Pregnancy to Parenthood Package
    </div>

    <div style="display: flex; gap: 10px; margin-top: 20px;">
      <button type="button" id="submit-email" style="padding: 10px 20px; background-color: #6a5acd; color: white; border: none; cursor: pointer;">Submit via Email</button>
      <button type="button" id="submit-whatsapp" style="padding: 10px 20px; background-color: #25D366; color: white; border: none; cursor: pointer;">Send via WhatsApp</button>
    </div>
  </form>
  <div id="form-status" style="margin-top: 15px; display: none; padding: 10px; border-radius: 4px;"></div>
</div>

<script>
(function() {
  const form = document.getElementById('course-enrollment-form');
  const statusDiv = document.getElementById('form-status');
  const emailBtn = document.getElementById('submit-email');
  const whatsappBtn = document.getElementById('submit-whatsapp');
  const whatsappNumber = '917550114682';

  function getFormData() {
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

  function validateForm() {
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }
    return true;
  }

  async function handleEmailSubmit() {
    if (!validateForm()) return;
    
    emailBtn.disabled = true;
    emailBtn.innerText = 'Sending...';
    
    try {
      const data = getFormData();
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        statusDiv.innerText = 'Success! Your enquiry has been sent via email.';
        statusDiv.style.backgroundColor = '#d4edda';
        statusDiv.style.color = '#155724';
        statusDiv.style.display = 'block';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (e) {
      statusDiv.innerText = 'Error sending email. Please try again or use WhatsApp.';
      statusDiv.style.backgroundColor = '#f8d7da';
      statusDiv.style.color = '#721c24';
      statusDiv.style.display = 'block';
    } finally {
      emailBtn.disabled = false;
      emailBtn.innerText = 'Submit via Email';
    }
  }

  function handleWhatsappSubmit() {
    if (!validateForm()) return;
    
    const data = getFormData();
    let message = `*New Course Enquiry*\n\n`;
    message += `*Name:* ${data.name}\n`;
    message += `*Mobile:* ${data.mobile}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Location:* ${data.location}\n`;
    message += `*Trimester:* ${data.trimester || 'N/A'}\n`;
    message += `*Session:* ${data.session}\n`;
    
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
  }

  emailBtn.addEventListener('click', handleEmailSubmit);
  whatsappBtn.addEventListener('click', handleWhatsappSubmit);
})();
</script>

<script>
(function() {
  const form = document.getElementById('course-enrollment-form');
  const statusDiv = document.getElementById('form-status');
  const emailBtn = document.getElementById('submit-email');
  const whatsappBtn = document.getElementById('submit-whatsapp');
  const whatsappNumber = '917550114682';

  function getFormData() {
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

  function validateForm() {
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }
    return true;
  }

  async function handleEmailSubmit() {
    if (!validateForm()) return;
    
    emailBtn.disabled = true;
    emailBtn.innerText = 'Sending...';
    
    try {
      const data = getFormData();
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        statusDiv.innerText = 'Success! Your enquiry has been sent via email.';
        statusDiv.style.backgroundColor = '#d4edda';
        statusDiv.style.color = '#155724';
        statusDiv.style.display = 'block';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (e) {
      statusDiv.innerText = 'Error sending email. Please try again or use WhatsApp.';
      statusDiv.style.backgroundColor = '#f8d7da';
      statusDiv.style.color = '#721c24';
      statusDiv.style.display = 'block';
    } finally {
      emailBtn.disabled = false;
      emailBtn.innerText = 'Submit via Email';
    }
  }

  function handleWhatsappSubmit() {
    if (!validateForm()) return;
    
    const data = getFormData();
    let message = `*New Course Enquiry*\n\n`;
    message += `*Name:* ${data.name}\n`;
    message += `*Mobile:* ${data.mobile}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Location:* ${data.location}\n`;
    message += `*Trimester:* ${data.trimester || 'N/A'}\n`;
    message += `*Session:* ${data.session}\n`;
    
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
  }

  emailBtn.addEventListener('click', handleEmailSubmit);
  whatsappBtn.addEventListener('click', handleWhatsappSubmit);
})();
</script>
