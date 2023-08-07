import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import Button from '@/components/ui/button';
import { useModalState } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import { Image } from '@/components/ui/image';
import FileInput from '@/components/ui/forms/file-input';
import RateInput from '@/components/ui/forms/rate-input';
import Label from '@/components/ui/forms/label';
import TextArea from '@/components/ui/forms/text-area';
import { useCreateReview, useUpdateReview } from '@/framework/review';
import { CreateReviewInput, MagzineDownloadInput } from '@/types';
import Input from '../ui/forms/input';
import CountryCode from '../ui/forms/country-code';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const reviewFormSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  contact: yup.string(),
  code: yup.string(),
});

export default function MagzineDownload({ bookLink }: { bookLink: string }) {
  const { t } = useTranslation('common');

  const { isLoading: creating } = useCreateReview();
  const [countryCode, setCountryCode] = useState('India (+91)');
  const router = useRouter();

  const { updateReview, isLoading } = useUpdateReview();

  const onSubmit = (
    values: Omit<
      MagzineDownloadInput,
      'product_id' | 'shop_id' | 'order_id' | 'variation_option_id'
    >
  ) => {
    const allValues = {
      ...values,
      code: countryCode,
    };

    fetch('/api/magzine-form', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ...allValues,
        page_url: window.location.href,
      }), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        router.push(bookLink);
      })
      .catch((err) => toast.error('There is some error please try again'));
  };
  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light md:h-auto md:min-h-0 md:max-w-[590px] md:rounded-xl">
      <div className="p-7">
        <Form<MagzineDownloadInput>
          onSubmit={onSubmit}
          validationSchema={reviewFormSchema}
          useFormProps={{
            defaultValues: {
              email: '',
              contact: '',
              code: '',
              name: '',
            },
          }}
        >
          {({ register, control, formState: { errors } }) => (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-5">
                  <Label className="mb-2">Name</Label>
                  <div className="w-auto">
                    <Input
                      {...register('name')}
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <Label className="mb-2">Email</Label>
                  <div className="w-auto">
                    <Input
                      {...register('email')}
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <Label className="mb-2">Country Code</Label>
                  <div className="w-auto">
                    <CountryCode
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      //   {...register('code')}
                      className="mt-1 w-[250px]"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <Label className="mb-2">Phone</Label>
                  <div className="w-auto">
                    <Input
                      {...register('contact')}
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="h-11 w-full sm:h-12"
                  loading={isLoading || creating}
                  disabled={isLoading || creating}
                >
                  {t('text-submit')}
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
