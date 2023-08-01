import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HealerCard({ healer }: any) {
  const healer_therapies = Object.keys(healer.x_metadata.healer_therapies)
    .map((key) => {
      if (healer.x_metadata.healer_therapies[key] === 'true') {
        return key;
      }
    })
    .filter((t) => t !== undefined);
  return (
    <>
      <div className="rounded-2xl border p-4 shadow-xl " key={healer.id}>
        {healer.x_metadata.healing_membership !== 'Free Member' && (
          <div className="flex justify-end ">
            <p className="flex items-center gap-1 rounded-sm bg-[#DCB900] p-1 text-xs text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Premium Memeber
            </p>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <Image
            className="rounded-full object-contain"
            width={100}
            height={100}
            alt={healer.title.rendered}
            src={healer.x_featured_media_large}
          />
        </div>
        <div className="my-2 text-center font-semibold">
          <p className="text-[24px]">{healer.title.rendered}</p>
        </div>
        <div className="my-2 text-center text-sm font-semibold text-[#39598F]">
          {healer_therapies.map((service, idx) => (
            <span className="p-1 text-[14px]  ">
              {service} {healer_therapies.length !== idx + 1 ? ' ,' : ''}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={`/healer-profile/${healer.slug}`}>
            <button className="rounded-full bg-[#053560] px-4 py-2 text-white outline-none">
              View Full Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
