import "../globals.css";
import Navigation from "../../component/Navigation";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={` ${roboto.variable} ${workSans.variable} `}>
      <Navigation />
      {children}
    </div>
  );
}
