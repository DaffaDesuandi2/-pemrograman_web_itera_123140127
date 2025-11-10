// fileName: usebookstats.js (Perbaikan)
import { useBooks } from '../context/BookContext';

const useBookStats = () => {
  const { books } = useBooks();

  const totalBooks = books.length;
  const read = books.filter(b => b.status === 'selesai').length; 
  const owned = books.filter(b => b.status === 'milik').length;
  const wishlist = books.filter(b => b.status === 'beli').length;

  return {
    totalBooks,
    read, 
    owned,
    wishlist,
    readPercentage: totalBooks > 0 ? ((read / totalBooks) * 100).toFixed(2) : 0,
  };
};

export default useBookStats;