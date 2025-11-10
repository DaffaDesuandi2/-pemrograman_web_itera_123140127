import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import styles from './BookForm.module.css'; 

function BookForm({ onClose }) {
    const { addbook } = useBooks(); 

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState('beli'); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if (!title.trim() || !author.trim()) {
            alert('Judul dan Penulis tidak boleh kosong!');
            return;
        }

        addbook({ title, author, status });
        
        setTitle('');
        setAuthor('');
        setStatus('beli');

        if (onClose) {
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3>Tambah Buku Baru</h3>
            <label className={styles.label}>
               <span className={styles.labelText}>Judul:</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                <span className={styles.labelText}>Penulis:</span>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
               <span className={styles.labelText}>Status:</span>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="beli">Mau Beli</option>
                    <option value="milik">Sudah Dimiliki</option>
                    <option value="baca">Sedang Dibaca</option>
                    <option value="selesai">Selesai Dibaca</option>
                </select>
            </label>
            <button type="submit" className={styles.submitButton}>Tambah Buku</button>
        </form>
    );
}

export default BookForm;