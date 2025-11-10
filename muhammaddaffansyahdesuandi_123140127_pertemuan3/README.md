# 📚 My Book Collection App

Aplikasi Single Page Application (SPA) sederhana untuk mengelola koleksi buku pribadi. Pengguna dapat menambah, melihat, memfilter, dan mengedit status buku (Mau Beli, Dimiliki, Sedang Dibaca, Selesai Dibaca).

---


## ⚙️ Fitur Aplikasi
✅ Penyimpanan Lokal
✅ CRUD Sederhana  
✅ Filter Status  
✅ Statistik Real-time 
✅ Responsive Layout 

---
Jika Anda ingin menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**
    ```bash
     git clone [URL_REPOSITORY_ANDA] cd my-book-collection-app
    ```

2.  **Instal Dependensi:**
    ```bash
    npm install #atau yarn install
    ```

3.  **Menjalankan Aplikasi:**
    ```bash
    npm start # atau yarn start
    ```

## 🔧 Teknologi React yang Digunakan
| Fitur | penjelasan |
|-------|----------------------|
| **Hooks (useState, useEffect)** | Digunakan untuk mengelola state komponen lokal (misalnya, isFormOpen) dan efek samping (misalnya, hook useLocalStorage). |
| **React Context API** | Manajemen state global untuk data buku (BookContext). Ini memungkinkan komponen seperti BookList, BookForm, dan BookFilter mengakses dan mengubah daftar buku (books, filteredBooks) tanpa prop drilling. |
| **Custom Hooks (useLocalStorage, useBooks, useBookStats)s** | Logika yang kompleks (interaksi dengan Local Storage, pengambilan data context, dan perhitungan statistik) dienkapsulasi menjadi custom hooks untuk modularitas dan reusabilitas. |
| **Conditional Rendering** | Digunakan di komponen Home.jsx untuk menampilkan atau menyembunyikan BookForm (mode Tambah atau Edit) berdasarkan state (isFormOpen atau editingBook). |
| **CSS Modules** | Digunakan untuk styling setiap komponen (misalnya, Home.module.css) untuk mencegah konflik class name secara global. |

---

Berikut adalah screenshot dari tampilan aplikasi:

**Halaman Beranda**
![Tampilan Halaman Beranda](./Screenshot/beranda2.png)

**Halaman beranda**
![Tampilan Halaman Sesudah diisi buku](./Screenshot/beranda2.png)
  
