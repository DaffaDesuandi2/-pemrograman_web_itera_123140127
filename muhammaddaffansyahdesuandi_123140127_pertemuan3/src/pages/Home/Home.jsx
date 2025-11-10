// fileName: Home.js
import React, { useState } from 'react';
import BookForm from '../../components/Bookform/BookForm';
import BookList from '../../components/Booklist/BookList';
import BookFilter from '../../components/Bookfilter/BookFilter';
import useBookStats from '../../hooks/usebookstats';
import styles from './Home.module.css'; 

// Komponen kecil untuk menampilkan statistik buku
const StatsDisplay = () => {
    const stats = useBookStats(); 

    return (
        <div className={styles.statsContainer}>
            <h4 className={styles.statsTitle}>Ringkasan Koleksi</h4>
            <div className={styles.statsGrid}>
                <p className={styles.statItem}>Total: <strong>{stats.totalBooks}</strong></p>
                <p className={styles.statItem}>Selesai Dibaca: <strong>{stats.read}</strong></p>
                <p className={styles.statItem}>Dimiliki: <strong>{stats.owned}</strong></p>
                {stats.totalBooks > 0 && (
                    <p className={styles.statItem}>Persentase Baca: <strong>{stats.readPercentage}%</strong></p>
                )}
            </div>
        </div>
    );
};


function Home() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className={styles.homeContainer}>

            <div className={styles.sidebar}>
                
                <button 
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className={`${styles.toggleFormButton} ${isFormOpen ? styles.closeButton : styles.openButton}`}
                >
                    {isFormOpen ? '✖ Tutup Form' : '+ Tambah '}
                </button>

                {isFormOpen && (
                    <div className={styles.formSection}>
                        <BookForm onClose={() => setIsFormOpen(false)} /> 
                    </div>
                )}
            
                 <StatsDisplay />
            </div>
            <main className={styles.main}>
                <header className={styles.header}>
                <h1>📚 My Book Collection App</h1>
                <p>Kelola daftar buku yang ingin kamu beli, miliki, dan baca.</p>
                </header>

            <div>
                <BookFilter />
                <hr className={styles.divider} />
                <BookList /> 
            </div>
            </main>
            
                
            
        </div>
    );
}

export default Home;