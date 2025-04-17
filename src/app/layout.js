import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./componants/Header";
import { ThemeProvider } from "next-themes";
import {fuchsia} from "tailwindcss"
import Script from "next/script";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio", // "portfolyo" yerine "Portfolio" yazımını tercih edebilirsiniz
  description: "I am Arzu GÜL. I am a frontend developer.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        
        <div className="min-h-screen relative z-10 px-3  overflow-hidden "> {/* "relativez-10" yerine "relative z-10" */}
          <div className="w-full relative  ">
           
            
          <ThemeProvider attribute="class">
            {children}
            </ThemeProvider>
          </div>
          
        </div>

        
      </body>
    </html>
  );
}