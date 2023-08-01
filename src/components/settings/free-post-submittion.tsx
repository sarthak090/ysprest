import type { CreateGuestFreeSubmittion } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useContact } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Uploader from '../ui/forms/uploader';
import Tiptap from '../texteditor/Tiptap';
import { useState } from 'react';
const categories = [
  'Spirituality',
  'Health & Wellness',
  'Holistic Lifestyle',
  'Alternative Therapies',
  'Crystals & Gemstones ',
  'Human Psychology',
  'Science and Spirituality',
  'Meditation and Yoga',
  'Self-Help & Self Development',
  'Beauty & Jewelry',
  'Home Decor',
  'Spiritual Arts',
  'Spiritual Books & Magazines',
  'Mysticism',
  'Spiritual Enlightenment',
  'Mind-Body Dualism',
];

const guestSubmittionFormSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email_address: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  phone_number: yup.string().required('Phone number is required'),
  company_name: yup.string().required('Company name is required'),
  post_categories: yup.string().required('Post categories are required'),
  uploaded_article_file_link: yup
    .mixed()
    .required('Please select a file')
    .label('File'),

  uploaded_profile_picture_link: yup
    .mixed()
    .required('Please select a file')
    .label('File'),
  // post_content: yup.string().required('Post content is required'),

  author_bio: yup.string().required('Author bio is required'),
});
const FreePostSubmittion = ({ healer }: any) => {
  const { t } = useTranslation('common');
  const [html, setHTml] = useState('');

  function onSubmit(values: CreateGuestFreeSubmittion) {
    fetch('/api/free-guest-post', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ...values,
        post_content: html,
        uploaded_article_file_link: values?.uploaded_article_file_link[0]?.name,
        uploaded_profile_picture_link:
          values?.uploaded_profile_picture_link[0]?.name,
      }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) =>
        toast.success(
          `Free guest post article has been sent successfully.
         `
        )
      )
      .catch((err) => toast.error('There is some error please try again'));
  }

  return (
    <Form<CreateGuestFreeSubmittion>
      onSubmit={onSubmit}
      validationSchema={guestSubmittionFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1  ">
            <Input
              label={`First Name *`}
              {...register('first_name')}
              variant="outline"
              className="!text-white"
              error={t(errors.first_name?.message!)}
            />
          </div>
          <Input
            label={`Last Name`}
            {...register('last_name')}
            variant="outline"
            className=" my-6 !text-white"
            error={t(errors.last_name?.message!)}
          />
          <Input
            label={`Company Name            `}
            {...register('company_name')}
            variant="outline"
            className="my-6 !text-white"
            error={t(errors.company_name?.message!)}
          />
          <Input
            label={`Email Address`}
            {...register('email_address')}
            variant="outline"
            className="my-6 !text-white"
            error={t(errors.email_address?.message!)}
          />
          <Input
            label={`Mobile No`}
            {...register('phone_number')}
            variant="outline"
            className="my-6 !text-white"
            error={t(errors.phone_number?.message!)}
          />

          <div {...register('post_categories')}>
            <label htmlFor="">Post Category </label>
            <select required className="mt-3 w-full">
              {categories.map((service: any) => (
                <option>{service}</option>
              ))}
            </select>
          </div>
          <div className="my-6 grid">
            <label htmlFor="" className="mb-2">
              {' '}
              Upload Article
            </label>
            <input type="file" {...register('uploaded_article_file_link')} />
          </div>

          <div className="my-6">
            <label htmlFor="">
              Post Content
              <span className="ml-2 text-xs">
                (The article can be up to 500-600 words){' '}
              </span>
            </label>
            <Tiptap onChange={setHTml} value={html} />
            {errors.post_content?.message! && (
              <p className="mt-2 text-xs text-red-500">
                {errors.post_content?.message!}
              </p>
            )}
          </div>

          <div className="my-6 mt-16 grid">
            <label className="mb-2">
              Profile Picture
              <span className="ml-2 text-xs">
                {' '}
                (Only jpg, png & webp files are allowed.)
              </span>
            </label>
            <input type="file" {...register('uploaded_profile_picture_link')} />
          </div>

          <TextArea
            label={`Author Bio (Bio can be up to 50-70 words) `}
            {...register('author_bio')}
            variant="outline"
            className="my-6 text-white"
            error={t(errors.author_bio?.message!)}
          />
          <Button
            className="mb-4 w-full bg-black text-white"
            loading={false}
            disabled={false}
          >
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default FreePostSubmittion;
