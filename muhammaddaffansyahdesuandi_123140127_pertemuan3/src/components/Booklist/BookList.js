import React from 'react';
import { useBooks } from '../../context/BookContext';
import styles from './BookList.module.css';

function BookList() {
   const { filteredBooks, deletebook } = useBooks();

    if (filteredBooks.length === 0) {
        return (
            <div className={styles.emptyList}>
                <p>🚀 Belum ada buku dalam daftar. Silakan tambahkan buku baru!</p>
            </div>
        );
    }

    const getStatusLabel = (statusKey) => {
        switch(statusKey) {
            case 'beli':
                return 'Mau Beli';
            case 'milik':
                return 'Sudah Dimiliki';
            case 'baca':
                return 'Sedang Dibaca';
            case 'selesai':
                return 'Selesai Dibaca';
            default:
                return 'Tidak Diketahui';
        }
    };

    return (
        <div className={styles.listContainer}>
            <h2>Koleksi Buku Anda ({filteredBooks.length})</h2>
            <div className={styles.bookGrid}>
                {filteredBooks.map((book) => (
                    <div key={book.id} className={styles.bookItem}>
                        <h3 className={styles.bookTitle}>{book.title}</h3>
                        <p className={styles.bookAuthor}>Oleh: {book.author}</p>
                        
                        <div className={`${styles.statusBadge} ${styles[book.status]}`}>
                            {getStatusLabel(book.status)}
                        </div>

                        <div className={styles.actions}>
                            <button 
                                onClick={() => deletebook(book.id)} 
                                className={styles.deleteButton}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;