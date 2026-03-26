import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const platforms = ['Twitch', 'YouTube', 'Kick', 'Other'];
const followerRanges = [
  '1,000 - 5,000',
  '5,000 - 10,000',
  '10,000 - 50,000',
  '50,000 - 100,000',
  '100,000+',
];

interface FormData {
  name: string;
  email: string;
  platform: string;
  followers: string;
  profileUrl: string;
  telegram: string;
  description: string;
}

const initial: FormData = {
  name: '',
  email: '',
  platform: '',
  followers: '',
  profileUrl: '',
  telegram: '',
  description: '',
};

export default function ApplicationForm() {
  const { ref, isInView } = useInView(0.1);
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useI18n();
  const f = t.streamersPage.form;

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-application-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg bg-[#0a0a12] border border-white/10 text-white font-poppins text-sm focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20';

  if (submitted) {
    return (
      <section id="apply" ref={ref} className="py-24 relative overflow-hidden">
        <MiniOctopus className="absolute -bottom-4 -left-4 w-24 h-24 opacity-10" flip />
        <div className="section-divider" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <div className="card rounded-2xl p-12">
            <CheckCircle size={48} className="text-brand-pink mx-auto mb-4" />
            <h3 className="font-poppins font-bold text-2xl text-white mb-3">
              {f.successTitle}
            </h3>
            <p className="font-poppins text-sm text-white/50 mb-6">
              {f.successBody}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm(initial);
              }}
              className="btn-secondary px-6 py-3 rounded-lg font-poppins text-sm font-medium text-white/80"
            >
              {f.submitAnother}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -bottom-4 -left-4 w-24 h-24 opacity-10" flip />
      <div className="section-divider" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {f.title} <span className="gradient-text">{f.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/40 max-w-lg mx-auto">
            {f.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`card rounded-2xl p-8 space-y-5 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-poppins text-xs text-white/40 mb-2">
                {f.fullName}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder={f.namePlaceholder}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="block font-poppins text-xs text-white/40 mb-2">
                {f.emailAddress}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@email.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-poppins text-xs text-white/40 mb-2">
                {f.primaryPlatform}
              </label>
              <select
                required
                value={form.platform}
                onChange={(e) => set('platform', e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="" disabled>
                  {f.selectPlatform}
                </option>
                {platforms.map((p) => (
                  <option key={p} value={p} className="bg-[#0a0a12]">
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-poppins text-xs text-white/40 mb-2">
                {f.followerCount}
              </label>
              <select
                required
                value={form.followers}
                onChange={(e) => set('followers', e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="" disabled>
                  {f.selectRange}
                </option>
                {followerRanges.map((r) => (
                  <option key={r} value={r} className="bg-[#0a0a12]">
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-poppins text-xs text-white/40 mb-2">
              {f.profileUrl}
            </label>
            <input
              type="text"
              required
              value={form.profileUrl}
              onChange={(e) => set('profileUrl', e.target.value)}
              placeholder="https://twitch.tv/yourchannel"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block font-poppins text-xs text-white/40 mb-2">
              {f.telegramHandle}
            </label>
            <input
              type="text"
              value={form.telegram}
              onChange={(e) => set('telegram', e.target.value)}
              placeholder="@yourhandle"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block font-poppins text-xs text-white/40 mb-2">
              {f.describeContent}
            </label>
            <textarea
              rows={4}
              required
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
              placeholder={f.contentPlaceholder}
              className={`${inputClasses} resize-none`}
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="font-poppins text-sm text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 btn-primary py-3.5 rounded-lg font-poppins text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {isSubmitting ? 'Submitting...' : f.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
}
