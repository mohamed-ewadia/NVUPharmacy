import { UserRound } from "lucide-react";
import { motion } from "motion/react";

const contact = {
  name: "ENG/Mohamed Ewaida",
  phone: "01033117802",
  whatsapp: "https://wa.me/201033117802"
};

export function ContactCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -16, y: 16 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.35, duration: 0.45 }}
      className="fixed bottom-4 left-4 z-40 w-[calc(100%-2rem)] max-w-[20rem] rounded-2xl border border-white/15 bg-white/10 p-3 text-white shadow-2xl backdrop-blur-xl"
      aria-label="Contact information"
    >
      <div>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 transition hover:bg-white/20"
          aria-label={`Contact ${contact.name} on WhatsApp at ${contact.phone}`}
        >
          <UserRound className="shrink-0 text-cyan-200" size={18} />
          <span className="min-w-0 break-words font-bold">{contact.name}</span>
        </a>
      </div>
    </motion.aside>
  );
}
