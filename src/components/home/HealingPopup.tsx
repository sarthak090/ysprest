import { useModalAction } from '@/components/ui/modal/modal.context';
import Link from 'next/link';

export default function HealingPopup({ data }: any) {
  const { closeModal } = useModalAction();
  if (!data) {
    return <></>;
  }
  return (
    <div className="flex justify-center">
      <div className="w-1/2  rounded-2xl bg-white py-8 px-10">
        <div className="float-right">
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-red-600 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div>
          <h1 className="mb-8 text-center text-[34px] font-bold">
            {data.name}
          </h1>
        </div>
        <div className="grid grid-cols-1">
          <div
            className=" "
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>

        <div onClick={closeModal} className="flex justify-center">
          <Link href={data.href}>
            <button
              style={{
                fontSize: '18px',

                fill: ' #FFFFFF',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                backgroundImage:
                  'linear-gradient(90deg, #2457C5 61%, #34BAFF 100%)',
                padding: '15px 60px 15px 60px',
                borderRadius: '5px',
              }}
              className="item-center mt-8 flex gap-4"
            >
              Get Started{' '}
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
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
