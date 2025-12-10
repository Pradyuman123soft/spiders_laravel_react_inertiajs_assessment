# 🎫 Ticket Management System (Laravel + React + Inertia.js)

A full-stack Ticket Management System built using Laravel, React, and Inertia.js.
Supports Admin Panel, User Dashboard, ticket creation, assignment, status updates, and file uploads.

---

## 🚀 Features

### Admin
- Create new tickets  
- Assign tickets to users  
- Update ticket details  
- View all tickets with statuses  
- Protected admin routes using middleware  
- File upload support  

### User
- View only assigned tickets  
- Update ticket status  
- Download ticket files  
- Clean and simple UI  

### System
- Laravel + React + Inertia.js architecture  
- MySQL database  
- Role-based authentication  
- Ticket & Ticket Assignment relationships  

---

## 🛠 Tech Stack

Backend: Laravel   
Frontend: React + Inertia.js  
Auth: Laravel Breeze (React)  
Database: MySQL  
Storage: Laravel Public Disk  

---

## 📦 Installation

1. Clone Repo
git clone (https://github.com/Pradyuman123soft/spiders_laravel_react_inertiajs_assessment.git)
cd spiders_laravel_react_inertiajs_assessment

2. Install PHP dependencies
composer install

3. Install JavaScript dependencies
npm install

4. Configure .env
cp .env.example .env

Update database:

DB_DATABASE=tickets  
DB_USERNAME=root  
DB_PASSWORD=

Generate key:
php artisan key:generate

5. Run migrations
php artisan migrate

6. Start servers
Backend → php artisan serve  
Frontend → npm run dev  

---

## 🔐 Authentication & Roles

Uses Laravel Breeze (React).

Admin routes:
Route::middleware(['auth', 'admin'])->group(function () {
    // admin
});

User route:
Route::get('/user/dashboard', ...);

---

## 🔗 Model Relationships

### Ticket.php
public function assignments() {
    return $this->hasMany(TicketAssignment::class, 'ticket_id', 'ticket_id');
}

### TicketAssignment.php
public function ticket() {
    return $this->belongsTo(Ticket::class, 'ticket_id', 'ticket_id');
}

---

## 📤 File Upload & Download

Upload:
$path = $request->file('file')->store('tickets', 'public');

Download (React):
<a href={`/storage/${t.file}`} download>Download</a>

---

## 📁 Project Structure

app/
  Models/
    Ticket.php
    TicketAssignment.php
  Http/Controllers/
    AdminController.php
    TicketController.php
    UserController.php

resources/js/Pages/
  Admin/
  Users/
  Components/
  Layouts/

---


## 👤 Author
Pradyuman Chauhan
