import { signIn } from 'next-auth/react';
import Logo from '@/components/ui/logo';
import Alert from '@/components/ui/alert';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { GoogleIcon } from '@/components/icons/google';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { Form } from '@/components/ui/forms/form';
import { useLogin } from '@/framework/user';
import type { LoginUserInput } from '@/types';
import { AnonymousIcon } from '@/components/icons/anonymous-icon';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { useToken } from '@/lib/hooks/use-token';
import { useState } from 'react';
import { useCustomerId } from '@/lib/hooks/user-customer';
import Api from '@/config/WooCommerce';
const loginFormSchema = yup.object().shape({
  username: yup.string().required('error-username-required'),
  password: yup.string().required('error-password-required'),
});
function LoginForm() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { openModal, closeModal } = useModalAction();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { setToken } = useToken();
  const { setCustomerId } = useCustomerId();
  let [serverError, setServerError] = useState<string | null>(null);
  let [isLoading, setIsLoading] = useState<Boolean | any>(false);

  // const isCheckout = router.pathname.includes('checkout');
  // const { mutate: login, isLoading, serverError, setServerError } = useLogin();
  async function loginToWp({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT + `token`;
    const formData = { username, password };
    try {
      setIsLoading(true);
      const data = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((r) => r.json());
      setIsLoading(false);

      if (data.code && data.data.status) {
        setServerError(data.message);
        return;
      }
      await fetchCustomerByEmail(data.user_email);
      return console.log(data);
      if (data.token) {
        setToken(data.token);

        await fetchCustomer(data.user_nicename);

        return;
      }
    } catch (err) {
      console.log(`err`, err);
    }
  }

  async function fetchCustomer(userName: string) {
    if (userName) {
      try {
        const url =
          process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
          `customer-info/${userName}`;
        fetch(url)
          .then((r) => r.json())
          .then((customer_info) => {
            setCustomerId(customer_info.id);
            setAuthorized(true);
            closeModal();
          })
          .catch((err) => {
            setServerError('Error While Fetching Customer Details');
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }
  async function fetchCustomerByEmail(email: string) {
    if (email) {
      try {
        Api.get(`customers?email=${email}`).then((resp) => console.log(resp));
        // fetch(url)
        //   .then((r) => r.json())
        //   .then((customer_info) => {
        //     setCustomerId(customer_info.id);
        //     setAuthorized(true);
        //     closeModal();
        //   })
        //   .catch((err) => {
        //     setServerError('Error While Fetching Customer Details');
        //     console.log(err);
        //   });
      } catch (err) {
        console.log(err);
      }
    }
  }

  function onSubmit({ username, password }: LoginUserInput) {
    loginToWp({ password, username });
  }

  return (
    <>
      <Alert
        variant="error"
        message={serverError && t(serverError)}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label={`Username`}
              {...register('username')}
              type="text"
              variant="outline"
              className="mb-5"
              error={t(errors.username?.message!)}
            />
            <PasswordInput
              label={t('text-password')}
              {...register('password')}
              error={t(errors.password?.message!)}
              variant="outline"
              className="mb-5"
              forgotPageRouteOnClick={() => openModal('FORGOT_VIEW')}
            />
            <div className="mt-8">
              <Button
                className="h-11 w-full sm:h-12"
                loading={isLoading}
                disabled={isLoading}
              >
                {t('text-login')}
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* //===============// */}
      <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4">
          {t('text-or')}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4">
        <Button
          className="!bg-social-google !text-light hover:!bg-social-google-hover"
          disabled={isLoading}
          onClick={() => {
            signIn('google');
          }}
        >
          <GoogleIcon className="h-4 w-4 ltr:mr-3 rtl:ml-3" />
          {t('text-login-google')}
        </Button>

        {/* {isCheckout && (
          <Button
            className="h-11 w-full !bg-pink-700 !text-light hover:!bg-pink-800 sm:h-12"
            disabled={isLoading}
            onClick={() => router.push(Routes.checkoutGuest)}
          >
            <AnonymousIcon className="h-6 text-light ltr:mr-2 rtl:ml-2" />
            {t('text-guest-checkout')}
          </Button>
        )} */}
        <Button
          className="h-11 w-full !bg-pink-700 !text-light hover:!bg-pink-800 sm:h-12"
          disabled={isLoading}
          onClick={() => router.push(Routes.checkoutGuest)}
        >
          <AnonymousIcon className="h-6 text-light ltr:mr-2 rtl:ml-2" />
          {t('text-guest-checkout')}
        </Button>
      </div>
      <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
      </div>
      <div className="text-center text-sm text-body sm:text-base">
        {t('text-no-account')}{' '}
        <button
          onClick={() => openModal('REGISTER')}
          className="font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1"
        >
          {t('text-register')}
        </button>
      </div>
    </>
  );
}

export default function LoginView() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>

      <p className="mt-4 mb-8 text-center text-sm text-body sm:mt-5 sm:mb-10 md:text-base">
        Login with your username & password
      </p>

      <LoginForm />
    </div>
  );
}
