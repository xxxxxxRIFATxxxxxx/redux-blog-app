import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from '../assets/search.svg';
import { filter } from '../redux/filters/actions';
import Blog from './Blog';

const Blogs = () => {
    const [searchText, setSearchText] = useState("");
    const blogs = useSelector((state) => state.blogs);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const searchBoxHandler = (e) => {
        let textTimeout;

        if (textTimeout) {
          clearTimeout(textTimeout);  
        };

        textTimeout = setTimeout(() => {
            setSearchText(e.target.value.toLowerCase());
        }, 1200);
    };

    const filterHandler = (value) => {
        dispatch(filter(value));
    };

    const filter_by_category_and_author = (blog) => {
      if (filters === "all") {
        return blog;
      }

      else {
        const blogAuthor = blog.author.toLowerCase();
        const blogCategory = blog.category.toLowerCase();

        if (blogAuthor === filters || blogCategory === filters) {
            return blog;
        };
      };
    };

    const filter_by_text = (blog) => {
        if (searchText === "") {
            return blog
        }

        else {
            const blogTitle = blog.title.toLowerCase();
            if (blogTitle.includes(searchText)) {
                return blog;
            };
        };
    };

    return (
    <>
        {/* Search Bar */}
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={searchBoxHandler}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={searchIcon}
                alt="Search"
            />
        </div>

        {/* Blog List */}
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>

                {/* card grid */}
                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    {
                        blogs
                        .filter(filter_by_text)
                        .filter(filter_by_category_and_author)
                        .map(blog => <Blog key={blog.id} blog={blog} filterHandler={filterHandler} />)
                    }
                    
                </div>
            </div>
        </section>
    </>
    );
};

export default Blogs;