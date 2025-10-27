# 🧭 Personal Dashboard - Daftar Tugas

Aplikasi **Personal Dashboard sederhana** untuk mengelola daftar tugas harian.  
Pengguna dapat menambah, mengedit, dan menghapus tugas secara interaktif, dan semua data akan tersimpan secara **lokal** menggunakan `localStorage`.

---

## 📖 Deskripsi Singkat
Aplikasi ini berfungsi sebagai **pengelola daftar tugas pribadi (To-Do List)**.  
Data akan disimpan di browser agar tidak hilang saat halaman di-refresh.  
Proyek ini dibuat menggunakan JavaScript modern dengan fitur **ES6+** seperti `class`, `arrow function`, `template literals`, dan `async/await`.

---

## ⚙️ Fitur Aplikasi
✅ Tambah tugas baru  
✅ Edit tugas yang sudah ada  
✅ Hapus tugas dari daftar  
✅ Data otomatis tersimpan di **localStorage**  
✅ Tampilan sederhana dan mudah digunakan  
✅ Menggunakan fitur modern ES6+  

---

## 🧩 Fitur ES6+ yang Diimplementasikan
| Fitur | Contoh Implementasi |
|-------|----------------------|
| **let & const** | Digunakan untuk deklarasi variabel dan objek (`const taskManager = new TaskManager();`) |
| **Arrow Function** | `saveToLocalStorage = () => {}`, `addTask = (text) => {}`, `deleteTask = (id) => {}` |
| **Template Literals** | `taskList.innerHTML = taskManager.tasks.map(task => \`<li>...</li>\`).join('');` |
| **Async/Await** | Pada fungsi `editTask()` dan `deleteTask()` yang menggunakan `await new Promise(...)` |
| **Classes** | `class Task` dan `class TaskManager` digunakan untuk mengatur data dan logika aplikasi |

---

## 🖼️ Screenshot Aplikasi
Tampilan utama aplikasi:

![Screenshot Dashboard](./screenshot.png)

> 💡 **Catatan:** Ganti `screenshot.png` dengan nama file tangkapan layar aplikasi kamu (letakkan di folder yang sama dengan README).

---

## 📂 Struktur Folder
