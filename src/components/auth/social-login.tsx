import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useSocialLogin } from '@/framework/user';
import { useCustomerId } from '@/lib/hooks/user-customer';
import { useToken } from '@/lib/hooks/use-token';
import { useAtom } from 'jotai';
import { authorizationAtom } from '@/store/authorization-atom';
import { useModalAction } from '../ui/modal/modal.context';

const SocialLogin = () => {
  const [_, setAuthorized] = useAtom(authorizationAtom);

  const { setToken } = useToken();
  const { setCustomerId } = useCustomerId();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { mutate: socialLogin, error } = useSocialLogin();
  const { openModal, closeModal } = useModalAction();

  async function fetchCustomerByEmail(email: string) {
    if (email) {
      try {
        const url =
          process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
          `customer-details?email=${email}`;

        fetch(url)
          .then((r) => r.json())
          .then((customer_info) => {
            setCustomerId(customer_info.id);
            setAuthorized(true);
            closeModal();
          })
          .catch((err) => {
            // setServerError('Error While Fetching Customer Details');
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }
  useEffect(() => {
    // is true when valid social login access token and provider is available in the session
    // but not authorize/logged in
    if (session?.access_token && session?.provider && session.user?.email) {
      fetchCustomerByEmail(session.user?.email);
      // socialLogin({
      //   provider: session.provider as string,
      //   access_token: session.access_token as string,
      // });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  return <div>{error}</div>;
};

export default SocialLogin;
