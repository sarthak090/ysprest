import type { CreateHelearInput } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useContact } from '@/framework/user';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const healerFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  phone_no: yup.string().required('Phone No is required for contact'),
  healing_service: yup.string().required('Select Healing Services'),
  message: yup.string().required('error-description-required'),
});
const HealerForm = ({ services, healer }: any) => {
  const { t } = useTranslation('common');
  const { mutate, isLoading } = useContact();

  function onSubmit(values: CreateHelearInput) {
    console.log(values, healer);
    fetch('/api/healerform', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ ...values, healer_details: { name: healer } }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => toast.success('Message sent sucessfully'))
      .catch((err) => toast.error('There is some error please try again'));
  }

  return (
    <Form<CreateHelearInput>
      onSubmit={onSubmit}
      validationSchema={healerFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1  ">
            <Input
              label={t('text-name')}
              {...register('name')}
              variant="outline"
              error={t(errors.name?.message!)}
            />
          </div>
          <Input
            label={`Phone no`}
            {...register('phone_no')}
            variant="outline"
            className="my-6"
            error={t(errors.phone_no?.message!)}
          />
          <div {...register('healing_service')}>
            <label htmlFor="">Healing Service*</label>
            <select className="w-full">
              {services.map((service: any) => (
                <option>{service}</option>
              ))}
            </select>
          </div>

          <TextArea
            label={`Issue For Which Healing is Required*            `}
            {...register('message')}
            variant="outline"
            className="my-6"
            error={t(errors.message?.message!)}
          />

          <Button loading={isLoading} disabled={isLoading}>
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default HealerForm;
