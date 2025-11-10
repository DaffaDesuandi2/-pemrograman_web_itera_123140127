import React from 'react';
import { useBooks } from '../../context/BookContext';
import styles from './BookFilter.module.css'


function BookFilter() {
    const { filter, setFilter } = useBooks();

    // Daftar status untuk filter
    const statusOptions = [
        { key: 'semua', label: 'Semua Buku' },
        { key: 'beli', label: 'Mau Beli' },
        { key: 'milik', label: 'Sudah Dimiliki' },
        { key: 'baca', label: 'Sedang Dibaca' },
        { key: 'selesai', label: 'Selesai Dibaca' },
    ];

    return (
        <div className={styles.filterContainer}>
            <p>Filter Status:</p>
            <div>
                {statusOptions.map((option) => (
                    <button
                        key={option.key}
                        onClick={() => setFilter(option.key)}
                        style={{
                            margin: '5px',
                            padding: '10px 15px',
                            border: '1px solid #ccc',
                            backgroundColor: filter === option.key ? '#007bff' : '#f8f8f8',
                            color: filter === option.key ? 'white' : 'black',
                            cursor: 'pointer',
                            borderRadius: '5px',
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BookFilter;