import { Source_Serif_4, DM_Sans } from "next/font/google";

const chatSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-chat-sans",
  display: "swap",
});

const chatSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-chat-serif",
  display: "swap",
});

export default function ChatLayout({ children }) {
  return (
    <div
      className={`${chatSans.variable} ${chatSerif.variable} chat-claude min-h-dvh h-dvh w-full overflow-hidden bg-[var(--chat-bg)] text-[var(--chat-text)]`}
    >
      {children}
    </div>
  );
}
