import { useTheme } from 'next-themes';
import React from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme(); // setTheme'in doğru yazımı

  return (
    <header className='flex items-center justify-between text-white px-6 py-4 h-16 mt-12 bg-transparent '>
      <span className="text-lg font-bold">My Portfolio</span> {/* Başlık veya logo ekleyebilirsiniz */}
      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Parantezlerin doğru kullanımı
        className='px-6 py-2 bg-pink-600 text-white rounded-md font-mono uppercase'
      >
        {theme === "dark" ? "Light" : "Dark"} {/* Buton metnini dinamik olarak ayarlama */}
      </button>
    </header>
  );
}

export default Header;