import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kingswood Public School",
  description: "Kingswood Public School is affiliated with the CBSE board and is dedicated to fostering excellence in education from nursery through to 8th grade. Operated with a commitment to holistic learning and managed by a team of experienced educators, Kingswood Public School aims to nurture students intellectual and personal growth. The institution is guided by a philosophy of quality education, blending modern teaching methods with strong ethical values to prepare students for a bright future.",
};

import { Roboto,Permanent_Marker } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const permanent_marker = Permanent_Marker({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${permanent_marker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
