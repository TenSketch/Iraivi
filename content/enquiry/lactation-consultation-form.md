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

<form name="lactation-consultation-form" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="lactation-consultation-form">
  <p>Please fill out this form to book your consultation. Once submitted, you will receive payment details via WhatsApp. <strong>Consultation Fee: 799 INR / 100 QAR</strong></p>

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

  <button type="submit" style="padding: 10px 20px; background-color: #6a5acd; color: white; border: none; cursor: pointer;">Submit</button>
</form>
