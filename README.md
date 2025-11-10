# 📚 My Book Collection App

Aplikasi Single Page Application (SPA) sederhana untuk mengelola koleksi buku pribadi. Pengguna dapat menambah, melihat, memfilter, dan mengedit status buku (Mau Beli, Dimiliki, Sedang Dibaca, Selesai Dibaca).

---

## 📖 Deskripsi Singkat
Aplikasi ini berfungsi sebagai **pengelola daftar tugas pribadi (To-Do List)**.  
Data akan disimpan di browser agar tidak hilang saat halaman di-refresh.  
Proyek ini dibuat menggunakan JavaScript modern dengan fitur **ES6+** seperti `class`, `arrow function`, `template literals`, dan `async/await`.

---

## ⚙️ Fitur Aplikasi
✅ Penyimpanan Lokal
✅ CRUD Sederhana  
✅ Filter Status  
✅ Statistik Real-time 
✅ Responsive Layout 

---

## 💻 Instalasi dan Menjalankan
| Fitur | Contoh Implementasi |
|-------|----------------------|
| **let & const** | Digunakan untuk deklarasi variabel dan objek (`const taskManager = new TaskManager();`) |
| **Arrow Function** | `saveToLocalStorage = () => {}`, `addTask = (text) => {}`, `deleteTask = (id) => {}` |
| **Template Literals** | `taskList.innerHTML = taskManager.tasks.map(task => \`<li>...</li>\`).join('');` |
| **Async/Await** | Pada fungsi `editTask()` dan `deleteTask()` yang menggunakan `await new Promise(...)` |
| **Classes** | `class Task` dan `class TaskManager` digunakan untuk mengatur data dan logika aplikasi |

---

## 📂 Struktur Folder

Folder
  index.html
  script.js
  style.css
  
