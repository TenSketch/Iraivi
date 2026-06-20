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

<form name="course-enrollment-form" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="course-enrollment-form">
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

  <button type="submit" style="padding: 10px 20px; background-color: #6a5acd; color: white; border: none; cursor: pointer;">Submit</button>
</form>
