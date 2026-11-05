import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { socials } from '../components/Footer';
import { LINKS } from '../lib/links';
import { Check } from '../components/Icons';

// Submissions are handled by Netlify Forms (see the hidden form in index.html).
// They appear in Netlify → Site → Forms, and can be emailed to you automatically.
const encode = data => new URLSearchParams(data).toString();

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', country: '', topic: 'Question', message: '' });
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form })
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to SpotScholars">
        Ask a question, suggest a scholarship we're missing, or ask for help with your application.
      </PageHeader>
      <div className="container-x grid gap-8 py-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="card p-6 sm:p-8">
          {status === 'sent' ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-600"><Check width={28} height={28} /></div>
              <h2 className="mt-4 text-xl font-bold">Message sent</h2>
              <p className="mt-2 text-slate-500">Thanks, {form.name.split(' ')[0] || 'friend'}. We'll reply by email.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <input type="hidden" name="form-name" value="contact" />
              <label className="text-sm font-medium text-navy-900">Name
                <input required className="input mt-1" value={form.name} onChange={set('name')} autoComplete="name" />
              </label>
              <label className="text-sm font-medium text-navy-900">Email
                <input required type="email" className="input mt-1" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>
              <label className="text-sm font-medium text-navy-900">Country
                <input className="input mt-1" value={form.country} onChange={set('country')} placeholder="e.g. Pakistan" />
              </label>
              <label className="text-sm font-medium text-navy-900">Topic
                <select className="input mt-1" value={form.topic} onChange={set('topic')}>
                  {['Question', 'Admissions help', 'Scholarship suggestion', 'Visa or housing', 'Partnership', 'Other'].map(t => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label className="text-sm font-medium text-navy-900 sm:col-span-2">Message
                <textarea required rows={6} className="input mt-1" value={form.message} onChange={set('message')} />
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
                {status === 'error' && <p className="text-sm text-red-600">Couldn't send — please email us at {LINKS.email}.</p>}
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-4">
          <div className="card p-6">
            <h2 className="text-lg font-bold">Find us</h2>
            <ul className="mt-4 space-y-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-navy-50">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white"><Icon width={18} height={18} /></span>
                    <span><span className="block font-semibold text-navy-900">{label}</span>
                      <span className="text-sm text-slate-500">{label === 'Email' ? LINKS.email : label === 'WhatsApp' ? 'Join the community' : '@spotscholars'}</span></span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={LINKS.linktree} target="_blank" rel="noreferrer" className="btn-ghost mt-4 w-full">All links</a>
          </div>
          <div className="rounded-2xl bg-navy p-6 text-navy-100">
            <h2 className="text-lg font-bold text-white">About SpotScholars</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Started by a Pakistani student in France who spent three years hunting for scholarships. Everything here is free — the goal is that no student gets stuck where we got stuck.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
