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

<div data-enquiry-form data-form-type="lactation-consultation" data-whatsapp-prefix="New Lactation Consultation Booking" data-success-message="Success! Your enquiry has been sent.">
<form data-enquiry-form-element class="needs-validation">
<!-- Honeypot -->
<input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">

<p class="mb-4">Please fill out this form to book your consultation. Once submitted, you will receive payment details via WhatsApp. <strong class="text-primary" style="font-weight: 700;">Consultation Fee: 799 INR / 100 QAR</strong></p>

<div class="mb-3">
<label for="name" class="form-label fw-bold">Name *</label>
<input type="text" id="lactation-name" name="name" required class="form-control">
</div>

<div class="mb-3">
<label for="email" class="form-label fw-bold">Email *</label>
<input type="email" id="lactation-email" name="email" required class="form-control">
</div>

<div class="mb-3">
<label for="mobile" class="form-label fw-bold">Mobile No (WhatsApp Contact Preferred) *</label>
<input type="tel" id="lactation-mobile" name="mobile" required class="form-control">
</div>

<div class="mb-3">
<label for="location" class="form-label fw-bold">Location *</label>
<input type="text" id="lactation-location" name="location" required class="form-control">
</div>

<div class="mb-3">
<label for="baby_age" class="form-label fw-bold">Baby's Age in Months *</label>
<input type="text" id="lactation-baby-age" name="baby_age" required class="form-control">
</div>

<div class="mb-3">
<label for="baby_gender" class="form-label fw-bold">Gender of the Baby *</label>
<input type="text" id="lactation-baby-gender" name="baby_gender" required class="form-control">
</div>

<div class="mb-3">
<label for="birth_weight" class="form-label fw-bold">Baby's Weight at birth *</label>
<input type="text" id="lactation-birth-weight" name="birth_weight" required class="form-control">
</div>

<div class="mb-3">
<label for="current_weight" class="form-label fw-bold">Baby's Current Weight *</label>
<input type="text" id="lactation-current-weight" name="current_weight" required class="form-control">
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">Current Feeding habits *</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="feeding_habits" value="Breastfeeding" id="lactation-feed1">
  <label class="form-check-label" for="lactation-feed1">Breastfeeding</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="feeding_habits" value="Formula" id="lactation-feed2">
  <label class="form-check-label" for="lactation-feed2">Formula</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="feeding_habits" value="Mixed feeding" id="lactation-feed3">
  <label class="form-check-label" for="lactation-feed3">Mixed feeding</label>
</div>
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">Mode of Birth *</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="birth_mode" value="Vaginal Delivery" id="lactation-mode1">
  <label class="form-check-label" for="lactation-mode1">Vaginal Delivery</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="birth_mode" value="C-section" id="lactation-mode2">
  <label class="form-check-label" for="lactation-mode2">C-section</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="birth_mode" value="Assisted Vaginal Delivery" id="lactation-mode3">
  <label class="form-check-label" for="lactation-mode3">Assisted Vaginal Delivery</label>
</div>
</div>

<div class="mb-3">
<label for="complications" class="form-label fw-bold">Any complications faced during and after delivery *</label>
<textarea id="complications" name="complications" required class="form-control" rows="3"></textarea>
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">Mom having any previous history of *</label>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="Thyroid" id="lactation-hist1">
  <label class="form-check-label" for="lactation-hist1">Thyroid</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="PCOS" id="lactation-hist2">
  <label class="form-check-label" for="lactation-hist2">PCOS</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="Diabetes" id="lactation-hist3">
  <label class="form-check-label" for="lactation-hist3">Diabetes</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="Pregnancy Induced Hypertension" id="lactation-hist4">
  <label class="form-check-label" for="lactation-hist4">Pregnancy Induced Hypertension</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="Anemia" id="lactation-hist5">
  <label class="form-check-label" for="lactation-hist5">Anemia</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="history" value="None of the above" id="lactation-hist6">
  <label class="form-check-label" for="lactation-hist6">None of the above</label>
</div>
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">Mother's health & wellbeing *</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Latching Issues" id="lactation-well1">
  <label class="form-check-label" for="lactation-well1">Latching Issues</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Engorgement" id="lactation-well2">
  <label class="form-check-label" for="lactation-well2">Engorgement</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Supply issues" id="lactation-well3">
  <label class="form-check-label" for="lactation-well3">Supply issues</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Pain during feed" id="lactation-well4">
  <label class="form-check-label" for="lactation-well4">Pain during feed</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Milk Blister" id="lactation-well5">
  <label class="form-check-label" for="lactation-well5">Milk Blister</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Pumping Guidance" id="lactation-well6">
  <label class="form-check-label" for="lactation-well6">Pumping Guidance</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="Others" id="lactation-well7">
  <label class="form-check-label" for="lactation-well7">Others</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="wellbeing" value="None of the above" id="lactation-well8">
  <label class="form-check-label" for="lactation-well8">None of the above</label>
</div>
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">When would you like the consultation *</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="timeline" value="Within 24hours" id="lactation-time1">
  <label class="form-check-label" for="lactation-time1">Within 24hours</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="timeline" value="This Week" id="lactation-time2">
  <label class="form-check-label" for="lactation-time2">This Week</label>
</div>
</div>

<div class="mb-4">
<label class="form-label fw-bold d-block">Mode of consultation *</label>
<div class="form-check">
  <input class="form-check-input" type="radio" name="mode" value="Tele consultation" id="lactation-mode-c1" required>
  <label class="form-check-label" for="lactation-mode-c1">Tele consultation</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="mode" value="Video consultation" id="lactation-mode-c2">
  <label class="form-check-label" for="lactation-mode-c2">Video consultation</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="mode" value="Direct Consultation (For Moms in Qatar)" id="lactation-mode-c3">
  <label class="form-check-label" for="lactation-mode-c3">Direct Consultation (For Moms in Qatar)</label>
</div>
</div>

<div class="d-flex gap-3 mt-4 flex-wrap">
<button type="submit" data-enquiry-submit class="btn btn_primary py-2 px-4">Submit via Email</button>
<button type="button" data-enquiry-whatsapp class="btn btn-outline-success py-2 px-4">Send via WhatsApp</button>
</div>
</form>
<div data-enquiry-status class="mt-3 p-3 rounded" style="display: none;"></div>
</div>
