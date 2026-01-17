# Patient Management React Application

This React application includes **three main pages**, structured according to **best practices for CRUD applications**.

---

## 1. Default Dashboard (`/`)

- This is the **main dashboard page**.  
- When the page loads, it calls the **backend API** (`/api/v1/patient`) to fetch existing patient data.  
- All patient records are displayed in a **table**, and users can perform **inline edit** or **delete** operations.

---

## 2. Demo Dashboard (`/demo`)

- This page displays a **demo dashboard** with **mock data**.  
- It allows developers to **run and test the frontend functionality** without connecting to the backend API.  
- Useful for **UI testing** and **test cases**.

---

## 3. Create Patient Page (`/create-patient`)

- This is a **separate page** for creating a new patient.  
- Follows **best practices**: creating a patient does **not interfere with the dashboard**.  
- After adding a new patient, users are **redirected back to the main dashboard**.

---


