import React, { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import GridBackground from "./GridBackground"
import { Github, Linkedin } from "lucide-react"
import axios from "axios"
import BasicToast from "./smoothui/basic-toast"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showToast, setShowToast] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  try {
    const formData = new FormData()
    formData.append("name", formState.name)
    formData.append("email", formState.email)
    formData.append("message", formState.message)

    const response = await axios.post("/api/send-email", formData)
    const data = await response.data
    if (data.success) {
      setSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setShowToast(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  } catch (error) {
    console.error(error)
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-24 md:py-48 px-6 bg-background overflow-hidden"
    >
      <GridBackground opacity={0.15} size={50} />

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 w-fit"
            >
              Get in Touch
            </motion.div>

            <motion.h3
              variants={fadeUp}
              custom={1}
              className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8"
            >
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-muted-foreground">
                COLLABORATE?
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-muted-foreground max-w-md mb-12"
            >
              Have a project in mind or just want to chat? Drop me a message and let's build something exceptional together.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex gap-4">
              {["GitHub", "LinkedIn"].map((label) => {
                const href = label === "GitHub" 
                  ? "https://github.com/Pujan1306" 
                  : "https://linkedin.com/in/pujan-mestry";
                  
                return (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-3 flex items-center gap-2 rounded-2xl bg-card border border-border text-[11px] font-bold tracking-widest uppercase hover:border-emerald-500/50"
                >
                  {label === "GitHub" && <Github />}
                  {label === "LinkedIn" && <Linkedin />}
                  {label}
                </motion.a>
                )}
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-(--card)/40 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl overflow-hidden"
            >
              {["name", "email"].map((field) => (
                <motion.input
                  key={field}
                  whileFocus={{ scale: 1.01 }}
                  type={field === "email" ? "email" : "text"}
                  required
                  placeholder={field === "email" ? "pujanmestry@example.com" : "Pujan Mestry"}
                  value={formState[field as keyof typeof formState]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormState({ ...formState, [field]: e.target.value })
                  }
                  className="w-full bg-(--background)/50 border border-border rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500/20"
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={4}
                required
                placeholder="How can I help you?"
                value={formState.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-(--background)/50 border border-border rounded-2xl px-6 py-4 resize-none"
              />

              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-5 rounded-2xl font-black tracking-[0.2em] uppercase"
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-emerald-500 flex flex-col items-center justify-center text-white"
                  >
                    <h4 className="text-3xl font-black mb-2">Thank You!</h4>
                    <p className="opacity-80">I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <BasicToast
            message="Message sent successfully!"
            type="success"
            duration={3000}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Contact
