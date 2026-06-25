---
title: "Course Enrollment Form"
description: "Enroll for Iraivi's Motherhood Courses"
layout: "form"
image: "images/baby-smiling.jpg"
slug: "course-enrollment-form"
weight: 10
tags: ["enquiry"]
show_in_enquiry: true
date: 2026-06-20T00:00:00+05:30
draft: false
---

<div data-enquiry-form data-form-type="course-enquiry" data-success-message="Success! Your enquiry has been sent.">
<form data-enquiry-form-element class="needs-validation booking-form">
<!-- Honeypot -->
<input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="course-name" class="form-label">Name</label>
<input type="text" id="course-name" name="name" required class="form-control">
</div>

<div class="booking-form__field">
<label for="course-mobile" class="form-label">Mobile</label>
<input type="tel" id="course-mobile" name="mobile" required class="form-control">
</div>
</div>

<div class="booking-form__grid booking-form__grid--two">
<div class="booking-form__field">
<label for="course-email" class="form-label">Email</label>
<input type="email" id="course-email" name="email" required class="form-control">
</div>

<div class="booking-form__field">
<label for="course-location" class="form-label">Location</label>
<input type="text" id="course-location" name="location" required class="form-control">
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Which trimester are you currently in?</label>
<div class="booking-choice-group booking-choice-group--trimester">
  <input class="booking-choice__input" type="radio" name="trimester" value="1st Trimester" id="course-trim1" required>
  <label class="booking-choice booking-choice--pill" for="course-trim1">1st Trimester</label>

  <input class="booking-choice__input" type="radio" name="trimester" value="2nd Trimester" id="course-trim2">
  <label class="booking-choice booking-choice--pill" for="course-trim2">2nd Trimester</label>

  <input class="booking-choice__input" type="radio" name="trimester" value="3rd Trimester" id="course-trim3">
  <label class="booking-choice booking-choice--pill" for="course-trim3">3rd Trimester</label>
</div>
</div>

<div class="booking-form__section">
<label class="form-label booking-form__section-label">Choose your course</label>
<div class="booking-choice-grid">
  <input class="booking-choice__input" type="radio" name="session" value="Pregnancy Wellness" id="course-sess1" required>
  <label class="booking-choice booking-choice--card" for="course-sess1">
    <span class="booking-choice__title">Pregnancy Wellness</span>
    <span class="booking-choice__meta">Gentle guidance for pregnancy, movement, nutrition, and mental readiness.</span>
  </label>

  <input class="booking-choice__input" type="radio" name="session" value="Preparing for Birth" id="course-sess2">
  <label class="booking-choice booking-choice--card" for="course-sess2">
    <span class="booking-choice__title">Preparing for Birth</span>
    <span class="booking-choice__meta">Labour preparation, comfort techniques, and confidence for birth.</span>
  </label>

  <input class="booking-choice__input" type="radio" name="session" value="Breastfeeding Preparation" id="course-sess3">
  <label class="booking-choice booking-choice--card" for="course-sess3">
    <span class="booking-choice__title">Breastfeeding Preparation</span>
    <span class="booking-choice__meta">Latch, feeding rhythms, and early breastfeeding support.</span>
  </label>

  <input class="booking-choice__input" type="radio" name="session" value="Fourth Trimester Care" id="course-sess4">
  <label class="booking-choice booking-choice--card" for="course-sess4">
    <span class="booking-choice__title">Fourth Trimester Care</span>
    <span class="booking-choice__meta">Postpartum recovery and newborn care for the first tender weeks.</span>
  </label>

  <input class="booking-choice__input" type="radio" name="session" value="Pregnancy to Parenthood Complete Package" id="course-sess5">
  <label class="booking-choice booking-choice--card" for="course-sess5">
    <span class="booking-choice__title">Pregnancy to Parenthood Complete Package</span>
    <span class="booking-choice__meta">Comprehensive support across pregnancy, birth, feeding, and early parenting.</span>
  </label>
</div>
</div>

<div class="booking-form__actions">
<button type="submit" data-enquiry-submit class="btn btn_primary booking-form__submit"><span>Book My Course</span><span aria-hidden="true" class="booking-form__submit-icon">→</span></button>
</div>
</form>
<div data-enquiry-status class="booking-form__status" style="display: none;"></div>
</div>
