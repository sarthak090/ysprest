import type { CreateContactUsInput } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useContact } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import CountryCode from '../ui/forms/country-code';

const contactFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  subject: yup.string().required('error-subject-required'),
  description: yup.string().required('error-description-required'),
});
const ContactForm = () => {
  const { t } = useTranslation('common');
  const { mutate, isLoading } = useContact();

  function onSubmit(values: CreateContactUsInput) {
    mutate(values);
  }

  return (
    <Form<CreateContactUsInput>
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label={t('text-name')}
              {...register('name')}
              variant="outline"
              error={t(errors.name?.message!)}
            />
            <Input
              label={t('text-email')}
              {...register('email')}
              type="email"
              variant="outline"
              error={t(errors.email?.message!)}
            />
          </div>
          {/* <Input
            label={t('text-subject')}
            {...register('subject')}
            variant="outline"
            className="my-6"
            error={t(errors.subject?.message!)}
          /> */}
          <div className="mt-3 grid grid-cols-2 gap-8">
            <div className="grid">
              <label htmlFor="">Country Code *</label>
              <CountryCode />
            </div>
            <div className="grid">
              <label htmlFor="">Mobile No. *</label>
              <input
                placeholder="Enter Your Number"
                type="email"
                className="mt-2 rounded-lg border   px-4 py-2 outline-none"
              />
            </div>
          </div>

          <div className="mt-3  gap-3">
            <div className="grid">
              <label htmlFor="">What You Want To Know? *</label>

              <select
                {...register('subject')}
                className="mt-2 rounded-lg border   px-4 py-2 outline-none"
              >
                <option value="Integral Healing Package">
                  Integral Healing Package
                </option>
                <option value="Aura and Chakra Healing">
                  Aura and Chakra Healing
                </option>
                <option value="Reiki Healing">Reiki Healing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <TextArea
            label={`Message`}
            {...register('description')}
            variant="outline"
            className="my-6"
            error={t(errors.description?.message!)}
          />

          <Button loading={isLoading} disabled={isLoading}>
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
