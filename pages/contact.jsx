import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../lib/api';

export default function Contact() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false,
    },
    // Form Validation:
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, 'Cannot exceed 30 characters')
        .required('Please enter your name.'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required.'),
      subject: Yup.string()
        .max(100, 'Maximum 100 characters')
        .required('Subject is required'),
      message: Yup.string()
        .max(250, 'Maximum 250 characters')
        .required('Message is required.'),
    }),
    // Handle Form Submit:
    onSubmit: async (values) => {
      formik.setValues({ ...values, isLoading: true });
      console.log('TEST', formik.values);
      await sendContactForm(formik.values);
      formik.setValues({ ...values, isLoading: false });
      router.push({ pathname: '/messagesent', query: values });
    },
  });

  return (
    <>
      <Layout title='Contact'>
        <main className='w-full h-screen flex justify-center bg-offwhite1  mt-16'>
          <div className='w-[450px] rounded-xl p-10 h-fit mt-7 bg-offwhite1 shadow-form'>
            <h1 className='text-3xl font-bold flex justify-center mb-6'>
              Contact
            </h1>
            {/* ============================================================ */}
            {/* ==========<<< Form Field >>>================================ */}
            {/* ============================================================ */}
            <form
              onSubmit={formik.handleSubmit}
              className='flex flex-col justify-center items-start w-full'
            >
              {/* ============================================================ */}
              {/* ==========<<< Name Field >>>================================ */}
              {/* ============================================================ */}
              <label className='font-semibold  ml-1 flex' htmlFor='name'>
                Name:
                <p className='font-light ml-2  text-red-500   '>
                  {formik.touched.name && formik.errors.name}
                </p>
              </label>
              <div className='w-full h-10 pl-6 my-2 rounded-lg bg-offwhite1 shadow-input focus-within:shadow-focus'>
                <input
                  type='text'
                  name='name'
                  required
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder='Please provide your contact name'
                  onBlur={formik.handleBlur}
                  className='bg-[#ecf0f3]  pr-6 w-full border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              {/* ============================================================ */}
              {/* ==========<<< Email Field >>>=============================== */}
              {/* ============================================================ */}
              <label className='font-semibold ml-1 flex' htmlFor='email'>
                Email:{' '}
                <p className='font-light ml-2  text-red-500   '>
                  {formik.touched.email && formik.errors.email}
                </p>
              </label>
              <div className='w-full h-10 pl-6 my-2 rounded-lg bg-offwhite1 shadow-input focus-within:shadow-focus'>
                <input
                  type='email'
                  name='email'
                  required
                  value={formik.values.email}
                  autoComplete='off'
                  onChange={formik.handleChange}
                  placeholder='example@mail.com'
                  onBlur={formik.handleBlur}
                  className='bg-[#ecf0f3] pr-6 w-full border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              {/* ============================================================ */}
              {/* ==========<<< Subject Field >>>============================= */}
              {/* ============================================================ */}
              <label className='font-semibold ml-1 flex' htmlFor='subject'>
                Subject:
                <p className='font-light ml-2  text-red-500   '>
                  {formik.touched.subject && formik.errors.subject}
                </p>
              </label>
              <div className='w-full h-10 pl-6 my-2 rounded-lg bg-offwhite1 shadow-input focus-within:shadow-focus'>
                <input
                  type='text'
                  name='subject'
                  required
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  placeholder='Workshop, Cookies, Baking Supplies, ...'
                  onBlur={formik.handleBlur}
                  className='bg-[#ecf0f3]  pr-6 w-full border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              {/* ============================================================ */}
              {/* ==========<<< Message Field >>>============================= */}
              {/* ============================================================ */}
              <label className='font-semibold ml-1 flex' htmlFor='message'>
                Message:
                <p className='font-light ml-2  text-red-500   '>
                  {formik.touched.message && formik.errors.message}
                </p>
              </label>
              <div className='w-full h-48  pl-6 my-4 rounded-lg bg-offwhite1 shadow-input focus-within:shadow-focus'>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  required
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='bg-[#ecf0f3]  w-full h-44 py-2 border-none outline-none mt-1 bg-opacity-0 pr-6 resize-none overflow-hidden'
                />
              </div>
              {/* =============================================================== */}
              {/* ==========<<< Submit Button >>>================================ */}
              {/* =============================================================== */}
              <div className='self-center mt-2'>
                <button
                  type='submit'
                  className={`${
                    formik.isValid ? 'bg-blue-500' : 'bg-gray-400'
                  } text-blue-50 px-8 py-2 rounded-full font-medium`}
                >
                  {formik.values.isLoading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
}
