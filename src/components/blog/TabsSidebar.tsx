import { BlogPost } from '@/types';
import { useState } from 'react';
import SideBarPostsGrid from './SideBarPostsGrid';

const TabsSidebar = ({
  details,
}: {
  details: {
    latest: BlogPost[];
    trending: BlogPost[];
    popular: BlogPost[];
  };
}) => {
  const [activeTab, setActiveTab] = useState('latest');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  if (details == undefined) {
    return <></>;
  }

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'latest':
        return (
          <SideBarPostsGrid heading="Latest Blogs" posts={details.latest} />
        );
      case 'trending':
        return (
          <SideBarPostsGrid
            heading="Trending Blogs
            "
            posts={details.trending}
          />
        );
      case 'popular':
        return (
          <SideBarPostsGrid
            heading="Popular Blogs
            "
            posts={details.popular}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-4 rounded-xl border">
      <ul
        className="    grid list-none grid-cols-3   rounded-tr-xl rounded-tl-xl  border-t bg-[#EAEAEA]      "
        id="myTab"
        role="tablist"
      >
        <li className="nav-item rounded-tl-xl " role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'latest' ? 'active   bg-white ' : 'bg-[#EAEAEA]'
            }  rounded-tl-xl    border-gray-400 py-2 px-8`}
            id="latest-tab"
            data-bs-toggle="tab"
            data-bs-target="#latest"
            type="button"
            role="tab"
            aria-controls="latest"
            aria-selected={activeTab === 'latest'}
            onClick={() => handleTabClick('latest')}
          >
            Latest
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'trending' ? 'active bg-white' : ' bg-[#EAEAEA]'
            }   border-gray-400 py-2 px-8`}
            id="trending-tab"
            data-bs-toggle="tab"
            data-bs-target="#trending"
            type="button"
            role="tab"
            aria-controls="trending"
            aria-selected={activeTab === 'trending'}
            onClick={() => handleTabClick('trending')}
          >
            Trending
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === 'popular' ? 'active bg-white' : 'bg-[#EAEAEA]'
            }   border-gray-400 py-2 px-8`}
            id="popular-tab"
            data-bs-toggle="tab"
            data-bs-target="#popular"
            role="tab"
            aria-controls="popular"
            aria-selected={activeTab === 'popular'}
            onClick={() => handleTabClick('popular')}
          >
            Popular
          </button>
        </li>
      </ul>

      <div className="tab-content  " id="myTabContent">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default TabsSidebar;
