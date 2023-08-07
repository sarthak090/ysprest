import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useMemo } from 'react';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useCart } from '@/store/quick-cart/cart.context';
import usePrice from '@/lib/use-price';
import Link from 'next/link';

const Search = dynamic(() => import('@/components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  const { totalUniqueItems, total } = useCart();
  const { price: totalPrice } = usePrice({
    amount: total,
  });
  const { show, hideHeaderSearch } = useHeaderSearch();
  // const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

  // useEffect(() => {
  //   if (!isHomePage) {
  //     hideHeaderSearch();
  //   }
  // }, [isHomePage]);
  const isFlattenHeader = useMemo(
    () => !show && isHomePage && layout !== 'modern',
    [show, isHomePage, layout]
  );
  return (
    <header
      className={cn('site-header-with-search h-14 md:h-16 lg:h-22', {
        'lg:!h-auto': isFlattenHeader,
      })}
    >
      <div className="fixed z-[60] w-full bg-[#166AB4] px-8 py-2 ">
        <div className="flex justify-between">
          <div className="flex gap-2 text-white">
            <div>
              <a href="tel:+918591706800">+91- 8591706800</a>
            </div>
            <div>
              <a href="mailto:amitt@YourSpiritualRevolution.org">
                | amitt@YourSpiritualRevolution.org
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-8 text-white">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <Link href={'/profile'}>Login</Link>
              </div>
              <div className="flex items-center gap-2">
                <Link href={'/cart'}>My Cart </Link> -{' '}
                <span className=" ml-2">{totalPrice}</span>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'fixed top-8 z-50 flex h-14 w-full transform-gpu items-center justify-evenly border-b border-border-200 bg-light px-4 py-5 shadow-sm transition-transform duration-300 md:h-16 lg:h-22 lg:px-8',
          {
            'lg:absolute lg:border-0 lg:bg-transparent lg:shadow-none':
              isFlattenHeader,
          }
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Logo
            className={`${
              !isMultilangEnable ? 'mx-auto  lg:mx-0' : 'ltr:ml-0 rtl:mr-0'
            }`}
          />

          {isMultilangEnable ? (
            <div className="ltr:ml-auto rtl:mr-auto lg:hidden">
              <LanguageSwitcher />
            </div>
          ) : (
            ''
          )}
        </div>
        {/* {isHomePage ? (
          <>
            {(show || layout === 'modern') && (
              <div className="mx-auto hidden w-full overflow-hidden px-10 lg:block xl:w-11/12 2xl:w-10/12">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}

            {displayMobileHeaderSearch && (
              <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}
          </>
        ) : null} */}
        <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
          <StaticMenu />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <li>
              {' '}
              <Search label={t('text-search-label')} variant="minimal" />
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
