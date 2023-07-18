import type { HealerRegistration } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useContact } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const guestSubmittionFormSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email_address: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('country is required'),
  city: yup.string().required('City is required'),
  address: yup.string().required('Address is required'),
  shortBio: yup
    .string()
    .test('word-count', 'Short Bio must be at most 1000 words', (value) => {
      if (value) {
        const words = value.trim().split(/\s+/);
        return words.length <= 1000;
      }
      return true; // Allow empty value
    }),
  countryCode: yup.string().required('Country Code is required'),
  whatsappNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'WhatsApp Number must be a 10-digit number')
    .required('WhatsApp Number is required'),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Mobile Number must be a 10-digit number')
    .required('Mobile Number is required'),
  uploaded_profile_picture_link: yup
    .mixed()
    .required('Please select a file')
    .label('File'),
});
const HealerRegistrationForm = () => {
  const { t } = useTranslation('common');

  function onSubmit(values: HealerRegistration) {
    fetch('/api/healer-registration-form', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ...values,
        uploaded_profile_picture_link:
          values?.uploaded_profile_picture_link[0]?.name,
      }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('Registration email has been send successfully');
      })
      .catch((err) => toast.error('There is some error please try again'));
  }

  return (
    <Form<HealerRegistration>
      onSubmit={onSubmit}
      validationSchema={guestSubmittionFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1  ">
            <Input
              label={`First Name`}
              {...register('first_name')}
              variant="outline"
              error={t(errors.first_name?.message!)}
            />
          </div>
          <Input
            label={`Last Name`}
            {...register('last_name')}
            variant="outline"
            className="my-6"
            error={t(errors.last_name?.message!)}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 ">
            <Input
              label={`Country Code`}
              {...register('countryCode')}
              variant="outline"
              className="col-span-4 my-6"
              error={t(errors.countryCode?.message!)}
            />
            <Input
              label={`Mobile Number `}
              {...register('mobileNumber')}
              variant="outline"
              className="col-span-8 my-6"
              error={t(errors.mobileNumber?.message!)}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 ">
            <Input
              label={`Country Code`}
              {...register('countryCode')}
              variant="outline"
              className="col-span-4 my-6"
              error={t(errors.countryCode?.message!)}
            />
            <Input
              label={` Whatsapp Number
              `}
              {...register('whatsappNumber')}
              variant="outline"
              className="col-span-8 my-6"
              error={t(errors.whatsappNumber?.message!)}
            />
          </div>
          <Input
            label={`Email Address`}
            {...register('email_address')}
            variant="outline"
            className="my-6"
            error={t(errors.email_address?.message!)}
          />
          <div className="my-6 grid">
            <label htmlFor="" className="mb-2">
              {' '}
              Profile Picture
            </label>
            <input type="file" {...register('uploaded_profile_picture_link')} />
          </div>
          <Input
            label={`Country 
            `}
            {...register('country')}
            variant="outline"
            className="my-6"
            error={t(errors.country?.message!)}
          />

          <Input
            label={`State  
            `}
            {...register('state')}
            variant="outline"
            className="my-6"
            error={t(errors.state?.message!)}
          />

          <Input
            label={`City   `}
            {...register('city')}
            variant="outline"
            className="my-6"
            error={t(errors.city?.message!)}
          />
          <Input
            label={`Address   `}
            {...register('address')}
            variant="outline"
            className="my-6"
            error={t(errors.address?.message!)}
          />

          <TextArea
            label={`Short Bio

            `}
            {...register('shortBio')}
            variant="outline"
            className="my-6"
            error={t(errors.shortBio?.message!)}
          />

          <Button className="mb-4 w-full" loading={false} disabled={false}>
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default HealerRegistrationForm;
