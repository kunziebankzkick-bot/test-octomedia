import { useState } from 'react';
import { Send, Mail, Send as TelegramIcon, Check, Calendar, Clock, Calendar as AvailabilityIcon, Headphones } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import MiniOctopus from './MiniOctopus';
import { useI18n } from '../i18n/context';

export default function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -bottom-4 -right-4 w-24 h-24 opacity-12" flip />
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/50 max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="card rounded-2xl p-6 space-y-4 mb-6">
              <h3 className="font-poppins font-semibold text-base text-white mb-2">{t.contact.formTitle}</h3>
              <div>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-white/10 text-white font-poppins text-sm focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-white/10 text-white font-poppins text-sm focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-white/10 text-white font-poppins text-sm focus:outline-none focus:border-brand-purple transition-colors resize-none placeholder:text-white/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 btn-primary py-3 rounded-lg font-poppins text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                {isSubmitting ? 'Sending...' : t.contact.sendButton}
              </button>
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm font-poppins text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm font-poppins text-center">
                  Failed to send message. Please try again or email us directly.
                </div>
              )}
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-pink/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-brand-purple/20 rounded-xl p-6 hover:border-brand-purple/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-brand-purple/20 transition-all duration-300">
                    <Mail size={20} className="text-brand-pink" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white mb-1.5">{t.contact.businessEmail}</h3>
                  <p className="font-poppins text-xs text-white/50 mb-3">{t.contact.businessEmailDesc}</p>
                  <a href="mailto:contact@octomediagroup.com" className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-purple transition-colors text-xs font-medium break-all">
                    contact@octomediagroup.com
                  </a>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-pink/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-brand-purple/20 rounded-xl p-6 hover:border-brand-purple/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-brand-purple/20 transition-all duration-300">
                    <TelegramIcon size={20} className="text-brand-pink" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white mb-1.5">{t.contact.telegramSupport}</h3>
                  <p className="font-poppins text-xs text-white/50 mb-3">{t.contact.telegramDesc}</p>
                  <a href="https://t.me/OctoMediaGroup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-purple transition-colors text-xs font-medium">
                    @OctoMediaGroup
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="card-highlight rounded-2xl p-6 sm:p-8 h-full flex flex-col mb-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Calendar size={22} className="text-brand-pink" />
                <h3 className="font-poppins font-semibold text-lg text-white">{t.contact.bookTitle}</h3>
              </div>

              <p className="font-poppins text-sm text-white/50 mb-4 sm:mb-6">{t.contact.bookDesc}</p>

              <p className="font-poppins text-xs text-white/30 uppercase tracking-wider mb-3 sm:mb-4">{t.contact.discussLabel}</p>
              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-8 lg:flex-1">
                {t.contact.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <Check size={14} className="text-brand-pink mt-0.5 flex-shrink-0" />
                    <span className="font-poppins text-sm text-white/60">{topic}</span>
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/contact-octomediagroup/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 btn-primary py-3.5 rounded-lg font-poppins text-sm font-medium text-white">
                <Calendar size={14} />
                {t.contact.scheduleButton}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Clock, label: t.contact.responseTime, value: t.contact.responseTimeValue },
                { icon: AvailabilityIcon, label: t.contact.availability, value: t.contact.availabilityValue },
                { icon: Headphones, label: t.contact.supportType, value: t.contact.supportTypeValue },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-pink" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-poppins text-xs text-white/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-poppins font-medium text-sm text-white truncate">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
