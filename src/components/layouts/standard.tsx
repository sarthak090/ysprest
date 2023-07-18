import Banner from '@/components/banners/banner';
import Categories from '@/components/categories/categories';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import { healingServicesHomeData } from '@/seed/home';
import HeadingBanner from '../ui/HedingBanner';
import YTEmbed from '../home/YTEmbed';
import ChooseUs from '../home/ChooseUs';
import HealYour from '../home/HealYour';
import { Grid } from '../products/grid';
import FeatureBlog from '../home/FeatureBlog';
import { useModalAction } from '../ui/modal/modal.context';

export default function Standard({ variables }: HomePageProps) {
  const { openModal } = useModalAction();

  function onModalClick(data: any) {
    openModal('HOME_HEALING_POPUP', data);
  }
  return (
    <section className="bg-white">
      <Banner layout="standard" variables={variables.types} />

      <Categories layout="standard" variables={variables.categories} />
      <main className="flex-1 ">
        <HeadingBanner title="Top Deals" />
        <ProductGridHome
          className=" my-8 px-4"
          variables={variables.products}
        />
        <HeadingBanner title="Best Selling Products" />
        <div className="lg:my-8">
          <Grid products={variables.bestSelllerProducts.data} />
        </div>
        <div className="mt-9 grid gap-6 px-4 lg:gap-8">
          <YTEmbed />

          <div className="">
            <HeadingBanner title="Blog" />
          </div>
          <p className="text-center text-green-600">
            We help spiritual seekers with our valuable insight and knowledge
            globally with the help of our magazines and blogs.
          </p>

          <FeatureBlog posts={variables.posts} />
          <button
            style={{
              backgroundImage:
                'linear-gradient(90deg, #166AB4 0%, #34BAFF 100%)',
            }}
            className="text-md group my-6 mx-auto flex h-7 items-center justify-between rounded bg-gray-100   px-12 text-white   transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-12 md:text-xl"
          >
            <span className="flex-1 ">View All Blogs</span>
          </button>
          <div className="">
            <HeadingBanner title="Why Choose Us?" />
          </div>
          <ChooseUs />

          <div className="">
            <HeadingBanner title="Heal Your Inner Self And Infuse Positivity In Your Life" />
          </div>
          <HealYour />
          <div className=" grid grid-cols-4 gap-8">
            {healingServicesHomeData.map((data) => (
              <div
                className="flex flex-col items-center justify-center"
                onClick={() => onModalClick({ ...data })}
              >
                <img
                  src={data.img}
                  width={150}
                  height={200}
                  className="cursor-pointer transition-all
                 delay-150 hover:scale-105"
                />
                <div className="text-md mt-2 cursor-pointer text-blue-600 hover:underline">
                  {data.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 mb-20">
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2023/07/EvolvMe-July-Desktop-Image.png" />
          </div>
        </div>
      </main>
    </section>
  );
}
