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

<div data-enquiry-form data-form-type="course-enquiry" data-whatsapp-prefix="New Course Enquiry" data-success-message="Success! Your enquiry has been sent.">
<form data-enquiry-form-element class="needs-validation">
<!-- Honeypot -->
<input type="text" name="hp_field" style="display:none" tabindex="-1" autocomplete="off">

<div class="mb-3">
<label for="name" class="form-label fw-bold">Name *</label>
<input type="text" id="course-name" name="name" required class="form-control">
</div>

<div class="mb-3">
<label for="mobile" class="form-label fw-bold">Mobile *</label>
<input type="tel" id="course-mobile" name="mobile" required class="form-control">
</div>

<div class="mb-3">
<label for="email" class="form-label fw-bold">Email *</label>
<input type="email" id="course-email" name="email" required class="form-control">
</div>

<div class="mb-3">
<label for="location" class="form-label fw-bold">Location *</label>
<input type="text" id="course-location" name="location" required class="form-control">
</div>

<div class="mb-3">
<label class="form-label fw-bold d-block">Which trimester are you currently in? *</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="trimester" value="1st Trimester" id="course-trim1">
  <label class="form-check-label" for="course-trim1">1st Trimester</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="trimester" value="2nd Trimester" id="course-trim2">
  <label class="form-check-label" for="course-trim2">2nd Trimester</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" name="trimester" value="3rd Trimester" id="course-trim3">
  <label class="form-check-label" for="course-trim3">3rd Trimester</label>
</div>
</div>

<div class="mb-4">
<label class="form-label fw-bold d-block">Session *</label>
<div class="form-check">
  <input class="form-check-input" type="radio" name="session" value="Pregnancy Wellness" id="course-sess1" required>
  <label class="form-check-label" for="course-sess1">Pregnancy Wellness</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="session" value="Preparing for Birth" id="course-sess2">
  <label class="form-check-label" for="course-sess2">Preparing for Birth</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="session" value="Breastfeeding Preparation" id="course-sess3">
  <label class="form-check-label" for="course-sess3">Breastfeeding Preparation</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="session" value="Fourth Trimester (Postpartum & Newborn Care)" id="course-sess4">
  <label class="form-check-label" for="course-sess4">Fourth Trimester (Postpartum & Newborn Care)</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="session" value="Pregnancy to Parenthood Package" id="course-sess5">
  <label class="form-check-label" for="course-sess5">Pregnancy to Parenthood Package</label>
</div>
</div>

<div class="d-flex gap-3 mt-4 flex-wrap">
<button type="submit" data-enquiry-submit class="btn btn_primary py-2 px-4">Submit via Email</button>
<!-- <button type="button" data-enquiry-whatsapp class="btn btn-outline-success py-2 px-4">Send via WhatsApp</button> -->
</div>
</form>
<div data-enquiry-status class="mt-3 p-3 rounded" style="display: none;"></div>
</div>
