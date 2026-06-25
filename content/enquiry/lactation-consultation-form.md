---
title: "Lactation Consultation Booking"
description: "Booking form for Lactation Consultation"
layout: "form"
image: "images/mother-feeding-baby-with-breast.jpg"
slug: "lactation-consultation-form"
weight: 20
tags: ["enquiry"]
show_in_enquiry: false
date: 2026-06-20T00:00:00+05:30
draft: false
---

<div data-enquiry-form data-form-type="lactation-consultation" data-success-message="Success! Your enquiry has been sent.">
<form data-enquiry-form-element class="needs-validation booking-form booking-form--lactation">
<!-- Honeypot -->
<input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="lactation-name" class="form-label">Name</label>
<input type="text" id="lactation-name" name="name" required class="form-control">
</div>

<div class="booking-form__field">
<label for="lactation-email" class="form-label">Email</label>
<input type="email" id="lactation-email" name="email" required class="form-control">
</div>
</div>

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="lactation-mobile" class="form-label">Mobile</label>
<input type="tel" id="lactation-mobile" name="mobile" required class="form-control">
</div>

<div class="booking-form__field">
<label for="lactation-location" class="form-label">Location</label>
<input type="text" id="lactation-location" name="location" required class="form-control">
</div>
</div>

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="lactation-baby-age" class="form-label">Baby's Age in Months</label>
<input type="text" id="lactation-baby-age" name="baby_age" required class="form-control">
</div>

<div class="booking-form__field">
<label for="lactation-baby-gender" class="form-label">Baby's Gender</label>
<input type="text" id="lactation-baby-gender" name="baby_gender" required class="form-control">
</div>
</div>

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="lactation-birth-weight" class="form-label">Birth Weight</label>
<input type="text" id="lactation-birth-weight" name="birth_weight" required class="form-control">
</div>

<div class="booking-form__field">
<label for="lactation-current-weight" class="form-label">Current Weight</label>
<input type="text" id="lactation-current-weight" name="current_weight" required class="form-control">
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Current Feeding Habits</label>
<div class="booking-choice-group">
  <input class="booking-choice__input" type="checkbox" name="feeding_habits" value="Breastfeeding" id="lactation-feed1" required>
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-feed1">Breastfeeding</label>

  <input class="booking-choice__input" type="checkbox" name="feeding_habits" value="Formula" id="lactation-feed2">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-feed2">Formula</label>

  <input class="booking-choice__input" type="checkbox" name="feeding_habits" value="Mixed feeding" id="lactation-feed3">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-feed3">Mixed feeding</label>
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Mode of Birth</label>
<div class="booking-choice-group">
  <input class="booking-choice__input" type="radio" name="birth_mode" value="Vaginal Delivery" id="lactation-birth-mode1" required>
  <label class="booking-choice booking-choice--pill" for="lactation-birth-mode1">Vaginal Delivery</label>

  <input class="booking-choice__input" type="radio" name="birth_mode" value="C-section" id="lactation-birth-mode2">
  <label class="booking-choice booking-choice--pill" for="lactation-birth-mode2">C-section</label>

  <input class="booking-choice__input" type="radio" name="birth_mode" value="Assisted Vaginal Delivery" id="lactation-birth-mode3">
  <label class="booking-choice booking-choice--pill" for="lactation-birth-mode3">Assisted Vaginal Delivery</label>
</div>
</div>

<div class="booking-form__field">
<label for="lactation-complications" class="form-label">Complications During and After Delivery</label>
<textarea id="lactation-complications" name="complications" required class="form-control booking-form__textarea" rows="4"></textarea>
<p class="booking-form__helper">Share any delivery or recovery concerns that may help us understand your feeding journey better.</p>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Previous Medical History</label>
<div class="booking-choice-group">
  <input class="booking-choice__input" type="checkbox" name="history" value="Thyroid" id="lactation-hist1" required>
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist1">Thyroid</label>

  <input class="booking-choice__input" type="checkbox" name="history" value="PCOS" id="lactation-hist2">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist2">PCOS</label>

  <input class="booking-choice__input" type="checkbox" name="history" value="Diabetes" id="lactation-hist3">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist3">Diabetes</label>

  <input class="booking-choice__input" type="checkbox" name="history" value="Pregnancy Induced Hypertension" id="lactation-hist4">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist4">Pregnancy Induced Hypertension</label>

  <input class="booking-choice__input" type="checkbox" name="history" value="Anemia" id="lactation-hist5">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist5">Anemia</label>

  <input class="booking-choice__input" type="checkbox" name="history" value="None of the above" id="lactation-hist6">
  <label class="booking-choice booking-choice--pill booking-choice--pill-multi" for="lactation-hist6">None of the above</label>
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Mother's Health and Wellbeing</label>
<div class="booking-choice-grid booking-choice-grid--three">
  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Latching Issues" id="lactation-well1" required>
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well1">
    <span class="booking-choice__title">Latching Issues</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Engorgement" id="lactation-well2">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well2">
    <span class="booking-choice__title">Engorgement</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Supply issues" id="lactation-well3">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well3">
    <span class="booking-choice__title">Supply Issues</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Pain during feed" id="lactation-well4">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well4">
    <span class="booking-choice__title">Pain During Feed</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Milk Blister" id="lactation-well5">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well5">
    <span class="booking-choice__title">Milk Blister</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Pumping Guidance" id="lactation-well6">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well6">
    <span class="booking-choice__title">Pumping Guidance</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="Others" id="lactation-well7">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well7">
    <span class="booking-choice__title">Others</span>
  </label>

  <input class="booking-choice__input" type="checkbox" name="wellbeing" value="None of the above" id="lactation-well8">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-well8">
    <span class="booking-choice__title">None of the Above</span>
  </label>
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Consultation Time</label>
<div class="booking-choice-grid booking-choice-grid--two-tight">
  <input class="booking-choice__input" type="radio" name="timeline" value="Within 24 hours" id="lactation-time1" required>
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-time1">
    <span class="booking-choice__title">Within 24 Hours</span>
    <span class="booking-choice__meta">For urgent guidance and immediate support.</span>
  </label>

  <input class="booking-choice__input" type="radio" name="timeline" value="This Week" id="lactation-time2">
  <label class="booking-choice booking-choice--card booking-choice--card-compact" for="lactation-time2">
    <span class="booking-choice__title">This Week</span>
    <span class="booking-choice__meta">For planned consultation and follow-up support.</span>
  </label>
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Consultation Mode</label>
<div class="booking-choice-group">
  <input class="booking-choice__input" type="radio" name="mode" value="Tele consultation" id="lactation-mode-c1" required>
  <label class="booking-choice booking-choice--pill" for="lactation-mode-c1">Tele consultation</label>

  <input class="booking-choice__input" type="radio" name="mode" value="Video consultation" id="lactation-mode-c2">
  <label class="booking-choice booking-choice--pill" for="lactation-mode-c2">Video consultation</label>

  <input class="booking-choice__input" type="radio" name="mode" value="Direct Consultation (For Moms in Qatar)" id="lactation-mode-c3">
  <label class="booking-choice booking-choice--pill" for="lactation-mode-c3">Direct Consultation (For Moms in Qatar)</label>
</div>
</div>

<div class="booking-form__actions">
<button type="submit" data-enquiry-submit class="btn btn_primary booking-form__submit"><span>Get Consultation</span><span aria-hidden="true" class="booking-form__submit-icon">→</span></button>
</div>
</form>
<div data-enquiry-status class="booking-form__status" style="display: none;"></div>
</div>
