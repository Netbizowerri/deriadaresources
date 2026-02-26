import { useForm } from 'react-hook-form';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';

type ContactFormValues = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
};

export default function ContactPage() {
  const { formspreeEndpoint } = useSite();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formspreeEndpoint;

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <Seo title="Contact" description="Contact Deriada for product orders and logistics inquiries." />
      <h1 className="text-4xl font-bold text-brand-primary">Contact Us</h1>
      <p className="mt-3 text-brand-dark/80">We value partnerships and inquiries. Contact Deriada Global Resources Limited for product orders, export documentation, import services, and logistics solutions.</p>

      <form className="mt-8 grid gap-5 rounded-2xl bg-white p-6 shadow" onSubmit={handleSubmit(onSubmit)}>
        <input className="rounded border p-3" placeholder="Full Name" {...register('fullName', { required: 'Full Name is required' })} />
        {errors.fullName && <span className="text-sm text-red-600">{errors.fullName.message}</span>}

        <input className="rounded border p-3" placeholder="Company Name" {...register('companyName', { required: 'Company Name is required' })} />
        <input className="rounded border p-3" type="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
        <input className="rounded border p-3" placeholder="Phone" {...register('phone', { required: 'Phone is required' })} />
        <select className="rounded border p-3" {...register('serviceRequired', { required: 'Service is required' })}>
          <option value="">Service Required</option>
          <option>Export Services</option>
          <option>Import Services</option>
          <option>Logistics Services</option>
        </select>
        <textarea className="rounded border p-3" rows={5} placeholder="Message" {...register('message', { required: 'Message is required', minLength: 15 })} />
        {errors.message && <span className="text-sm text-red-600">Please enter at least 15 characters.</span>}

        <button className="rounded bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-brand-secondary" type="submit">
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
