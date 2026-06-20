---
title: "Lactation Consultation Booking"
description: "Booking form for Lactation Consultation"
layout: "form"
image: "images/mother-feeding-baby-with-breast.jpg"
slug: "lactation-consultation-form"
weight: 20
tags: ["enquiry"]
date: 2026-06-20T00:00:00+05:30
draft: false
---

<div id="form-container">
  <form id="lactation-consultation-form">
    <!-- Honeypot -->
    <input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">
    
    <p>Please fill out this form to book your consultation. Once submitted, you will receive payment details via WhatsApp. <strong style="font-weight: bold;">Consultation Fee: 799 INR / 100 QAR</strong></p>

    <div style="margin-bottom: 15px;">
      <label for="name">Name *</label><br>
      <input type="text" id="name" name="name" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="email">Email *</label><br>
      <input type="email" id="email" name="email" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="mobile">Mobile No (WhatsApp Contact Preferred) *</label><br>
      <input type="tel" id="mobile" name="mobile" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="location">Location *</label><br>
      <input type="text" id="location" name="location" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="baby_age">Baby's Age in Months *</label><br>
      <input type="text" id="baby_age" name="baby_age" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="baby_gender">Gender of the Baby *</label><br>
      <input type="text" id="baby_gender" name="baby_gender" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="birth_weight">Baby's Weight at birth *</label><br>
      <input type="text" id="birth_weight" name="birth_weight" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label for="current_weight">Baby's Current Weight *</label><br>
      <input type="text" id="current_weight" name="current_weight" required style="width: 100%; padding: 8px;">
    </div>

    <div style="margin-bottom: 15px;">
      <label>Current Feeding habits *</label><br>
      <input type="checkbox" name="feeding_habits" value="Breastfeeding"> Breastfeeding<br>
      <input type="checkbox" name="feeding_habits" value="Formula"> Formula<br>
      <input type="checkbox" name="feeding_habits" value="Mixed feeding"> Mixed feeding
    </div>

    <div style="margin-bottom: 15px;">
      <label>Mode of Birth *</label><br>
      <input type="checkbox" name="birth_mode" value="Vaginal Delivery"> Vaginal Delivery<br>
      <input type="checkbox" name="birth_mode" value="C-section"> C-section<br>
      <input type="checkbox" name="birth_mode" value="Assisted Vaginal Delivery"> Assisted Vaginal Delivery
    </div>

    <div style="margin-bottom: 15px;">
      <label for="complications">Any complications faced during and after delivery *</label><br>
      <textarea id="complications" name="complications" required style="width: 100%; padding: 8px;"></textarea>
    </div>

    <div style="margin-bottom: 15px;">
      <label>Mom having any previous history of *</label><br>
      <input type="radio" name="history" value="Thyroid"> Thyroid<br>
      <input type="radio" name="history" value="PCOS"> PCOS<br>
      <input type="radio" name="history" value="Diabetes"> Diabetes<br>
      <input type="radio" name="history" value="Pregnancy Induced Hypertension"> Pregnancy Induced Hypertension<br>
      <input type="radio" name="history" value="Anemia"> Anemia
    </div>

    <div style="margin-bottom: 15px;">
      <label>Mother's health & wellbeing *</label><br>
      <input type="checkbox" name="wellbeing" value="Latching Issues"> Latching Issues<br>
      <input type="checkbox" name="wellbeing" value="Engorgement"> Engorgement<br>
      <input type="checkbox" name="wellbeing" value="Supply issues"> Supply issues<br>
      <input type="checkbox" name="wellbeing" value="Pain during feed"> Pain during feed<br>
      <input type="checkbox" name="wellbeing" value="Milk Blister"> Milk Blister<br>
      <input type="checkbox" name="wellbeing" value="Pumping Guidance"> Pumping Guidance<br>
      <input type="checkbox" name="wellbeing" value="Others"> Others
    </div>

    <div style="margin-bottom: 15px;">
      <label>When would you like the consultation *</label><br>
      <input type="checkbox" name="timeline" value="Within 24hours"> Within 24hours<br>
      <input type="checkbox" name="timeline" value="This Week"> This Week
    </div>

    <div style="margin-bottom: 15px;">
      <label>Mode of consultation *</label><br>
      <input type="radio" name="mode" value="Tele consultation" required> Tele consultation<br>
      <input type="radio" name="mode" value="Video consultation"> Video consultation<br>
      <input type="radio" name="mode" value="Direct Consultation (For Moms in Qatar)"> Direct Consultation (For Moms in Qatar)
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
  const form = document.getElementById('lactation-consultation-form');
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
        statusDiv.innerText = 'Success! Your booking has been sent via email.';
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
    let message = `*New Lactation Consultation Booking*\n\n`;
    message += `*Name:* ${data.name}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Mobile:* ${data.mobile}\n`;
    message += `*Location:* ${data.location}\n`;
    message += `*Baby Age:* ${data.baby_age}\n`;
    message += `*Baby Gender:* ${data.baby_gender}\n`;
    message += `*Birth Weight:* ${data.birth_weight}\n`;
    message += `*Current Weight:* ${data.current_weight}\n`;
    message += `*Feeding Habits:* ${data.feeding_habits || 'N/A'}\n`;
    message += `*Birth Mode:* ${data.birth_mode || 'N/A'}\n`;
    message += `*Complications:* ${data.complications}\n`;
    message += `*History:* ${data.history || 'N/A'}\n`;
    message += `*Wellbeing:* ${data.wellbeing || 'N/A'}\n`;
    message += `*Timeline:* ${data.timeline || 'N/A'}\n`;
    message += `*Mode:* ${data.mode}\n`;
    
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
  }

  emailBtn.addEventListener('click', handleEmailSubmit);
  whatsappBtn.addEventListener('click', handleWhatsappSubmit);
})();
</script>
