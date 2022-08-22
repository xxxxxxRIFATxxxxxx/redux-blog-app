import React from 'react';

const Blog = ({blog, filterHandler}) => {
    const {title, category, blogImage, author, authorImage, readTime, created} = blog;

    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={blogImage}
                    alt={title}
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p 
                        className="text-sm font-medium text-indigo-600 cursor-pointer"
                        onClick={() => filterHandler(category)}
                    >
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={authorImage}
                            alt={author}
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={() => filterHandler(author)}
                        >
                            {author}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16">
                                {created}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {readTime} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;