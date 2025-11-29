from abc import ABC, abstractmethod

# Abstract Class
class LibraryItem(ABC):
    """
    Kelas abstrak dasar untuk semua item di perpustakaan (Buku, Majalah, dll.).
    Menerapkan konsep Inheritance.
    """
    _item_id_counter = 1000  # Protected class attribute

    def __init__(self, title, author_or_publisher, year):
        # Encapsulation: Menggunakan atribut protected
        self._title = title
        self._author_or_publisher = author_or_publisher
        self._year = year
        self._item_id = LibraryItem._item_id_counter
        LibraryItem._item_id_counter += 1

    # Property Decorator: Untuk mengakses dan memodifikasi _title dengan kontrol
    @property
    def title(self):
        """Getter untuk _title."""
        return self._title

    @title.setter
    def title(self, new_title):
        """Setter untuk _title dengan validasi sederhana."""
        if isinstance(new_title, str) and len(new_title) > 0:
            self._title = new_title
        else:
            print("Judul harus berupa string tidak kosong.")

    def get_id(self):
        """Method publik untuk mendapatkan ID item."""
        return self._item_id

    # Method Abstrak (Harus diimplementasikan oleh subclass)
    @abstractmethod
    def display_info(self):
        """Menampilkan detail spesifik item. Menerapkan Polymorphism."""
        pass

    @abstractmethod
    def get_type(self):
        """Mengembalikan tipe item (Buku/Majalah)."""
        pass

# Subclass 1: Book
class Book(LibraryItem):
    """Subclass untuk Buku, mewarisi dari LibraryItem."""
    def __init__(self, title, author, year, isbn):
        super().__init__(title, author, year)
        self.__isbn = isbn  # Encapsulation: Atribut private

    def display_info(self):
        """Implementasi display_info untuk Buku (Polymorphism)."""
        return (f"[{self.get_type()}] ID: {self.get_id()} | Judul: {self.title} | "
                f"Penulis: {self._author_or_publisher} | Tahun: {self._year} | ISBN: {self.__isbn}")

    def get_type(self):
        """Implementasi get_type untuk Buku."""
        return "Buku"

# Subclass 2: Magazine
class Magazine(LibraryItem):
    """Subclass untuk Majalah, mewarisi dari LibraryItem."""
    def __init__(self, title, publisher, year, issue_number):
        super().__init__(title, publisher, year)
        self._issue_number = issue_number

    def display_info(self):
        """Implementasi display_info untuk Majalah (Polymorphism)."""
        return (f"[{self.get_type()}] ID: {self.get_id()} | Judul: {self.title} | "
                f"Penerbit: {self._author_or_publisher} | Tahun: {self._year} | Edisi: {self._issue_number}")

    def get_type(self):
        """Implementasi get_type untuk Majalah."""
        return "Majalah"
    
class Library:
    """
    Kelas untuk mengelola koleksi item perpustakaan.
    """
    def __init__(self):
        # Encapsulation: Menggunakan atribut private untuk koleksi
        self.__collection = []

    def add_item(self, item):
        """Menambahkan item (Book atau Magazine) ke dalam koleksi."""
        if isinstance(item, LibraryItem):
            self.__collection.append(item)
            print(f"\n✅ Item '{item.title}' (ID: {item.get_id()}) berhasil ditambahkan.")
        else:
            print("\n❌ Item yang ditambahkan harus merupakan turunan dari LibraryItem.")

    def display_all_items(self):
        """Menampilkan daftar semua item dalam koleksi."""
        if not self.__collection:
            print("\n🚨 Koleksi perpustakaan kosong.")
            return

        print("\n=== DAFTAR SEMUA ITEM PERPUSTAKAAN ===")
        for item in self.__collection:
            # Polymorphism: Memanggil display_info yang berbeda untuk setiap tipe item
            print(item.display_info())
        print("=======================================")

    def search_item(self, keyword):
        """Mencari item berdasarkan Judul (case-insensitive) atau ID."""
        found_items = []
        keyword = str(keyword).lower()
        
        for item in self.__collection:
            # Cek berdasarkan ID (perlu konversi int karena ID disimpan sebagai int)
            if keyword.isdigit() and item.get_id() == int(keyword):
                found_items.append(item)
                break # ID unik, hentikan pencarian

            # Cek berdasarkan Judul
            if keyword in item.title.lower():
                found_items.append(item)
        
        print(f"\n=== HASIL PENCARIAN ('{keyword}') ===")
        if found_items:
            for item in found_items:
                print(item.display_info())
        else:
            print("Tidak ada item yang ditemukan.")
        print("=======================================")
        return found_items
    
# 1. Inisialisasi Perpustakaan
perpustakaan = Library()

# 2. Membuat Objek Item (Book dan Magazine)
buku1 = Book("Python Crash Course", "Eric Matthes", 2019, "978-1593279288")
majalah1 = Magazine("National Geographic", "NatGeo Society", 2024, 456)
buku2 = Book("Clean Code", "Robert C. Martin", 2008, "978-0132350884")

# 3. Menambahkan Item ke Perpustakaan
perpustakaan.add_item(buku1)
perpustakaan.add_item(majalah1)
perpustakaan.add_item(buku2)

# 4. Menampilkan Semua Item (Demonstrasi Polymorphism)
perpustakaan.display_all_items()

# 5. Demonstrasi Property Decorator (Encapsulation)
print(f"\nJudul asli Buku 1: {buku1.title}")
buku1.title = "Python for Dummies"  # Menggunakan setter
print(f"Judul baru Buku 1: {buku1.title}")

# 6. Mencari Item
print("\n--- PENCARIAN ---")
# Cari berdasarkan Judul (sebagian)
perpustakaan.search_item("clean")

# Cari berdasarkan ID (ambil ID Majalah yang baru ditambahkan)
majalah_id = majalah1.get_id()
perpustakaan.search_item(majalah_id)