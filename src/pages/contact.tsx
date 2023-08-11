import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
import { getLayout } from '@/components/layouts/layout';
import { formatAddress } from '@/lib/format-address';
import { getIcon } from '@/lib/get-icon';
import isEmpty from 'lodash/isEmpty';
import * as socialIcons from '@/components/icons/social';
import Seo from '@/components/seo/seo';
import { useSettings } from '@/framework/settings';
export { getStaticProps } from '@/framework/general.ssr';

export const ContactPage = () => {
  const { t } = useTranslation('common');
  const { settings }: any = useSettings();
  return (
    <>
      <Seo title={'Contact'} url={'contact'} />
      <div className="w-full bg-gray-100">
        <div className="mx-auto flex w-full max-w-7xl flex-col py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
          {/* sidebar */}
          <div className="order-2 w-full shrink-0 bg-light p-5 md:order-1 md:w-72 lg:w-96">
            <div className="mb-8 flex w-full items-center justify-center overflow-hidden">
              <h2 className="text-2xl">
                Y<span style={{ color: '#CF2828' }}>our Spiritual R</span>
                evolution LLP
              </h2>
            </div>

            <div className="mb-8 flex flex-col">
              <span className="item-center mb-3 flex gap-4 font-semibold text-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                {t('text-address')}
              </span>
              <span className="text-sm text-body">
                <p className="">
                  Your Spiritual Revolution LLP
                  <br /> 318, Gemstar Commercial Complex,
                  <br /> Ram Chandra Lane Extension, Kanch Pada,
                  <br /> Malad West, Mumbai 400064, India.{' '}
                </p>
              </span>
            </div>

            <div className="mb-8 flex flex-col">
              <span className="mb-3 flex items-center gap-4 font-semibold text-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {t('text-phone')}
              </span>
              <span className="text-sm text-body">
                <a style={{ color: '#333333' }} href="tel:+918591706800">
                  +918591706800
                </a>
              </span>
            </div>
            {settings?.contactDetails?.website && (
              <div className="mb-8 flex flex-col">
                <span className="mb-3 flex items-center gap-4 font-semibold text-heading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  Email
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-body">
                    <a
                      style={{ color: '#333333' }}
                      href="mailto:amitt@YourSpiritualRevolution.org"
                    >
                      amitt@YourSpiritualRevolution.org{' '}
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Contact form */}
          <div className="order-1 mb-8 w-full bg-light p-5 md:order-2 md:mb-0 md:p-8 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-9 rtl:lg:mr-9">
            <h1 className="mb-7 font-body text-xl font-bold text-heading md:text-2xl">
              We'd love to hear from you!
            </h1>
            <ContactForm />
          </div>
        </div>
        <div className="w-full bg-white py-12 2xl:px-32">
          <iframe
            className="h-[350px] w-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=Your%20Spiritual%20Revolution&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Your Spiritual Revolution"
            aria-label="Your Spiritual Revolution"
          >
            <a
              style={{ color: '#333333' }}
              href="mailto:amitt@YourSpiritualRevolution.org"
            >
              amitt@YourSpiritualRevolution.org{' '}
            </a>
          </iframe>
        </div>
      </div>
    </>
  );
};
ContactPage.getLayout = getLayout;
export default ContactPage;
