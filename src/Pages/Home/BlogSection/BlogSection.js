import React from "react";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "10 Tips for Buying a Used Laptop",
      image:
        "https://1.bp.blogspot.com/-pXdFfZf_LuU/X2ikI37moiI/AAAAAAAAE8o/m7dOebFfNyIN3ldqLCpK_nzI7UUOX7EewCLcBGAsYHQ/s16000/New%2Bor%2BUsed%2BLaptop%2BBuying%2BGuide%2B2020%2B_%2BFacts%2Babout%2BLaptops%2BPrice%2Bin%2BBangladesh%2B%255BTutorial%2BVideo%255D.jpg",
      date: "June 15, 2023",
      author: "John Doe",
    },
    {
      id: 2,
      title: "The Latest Laptop Trends of 2023",
      image:
        "https://businesstech.co.za/news/wp-content/uploads/2022/11/Header-FirstShop.jpg",
      date: "July 2, 2023",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "How to Maintain Your Laptop for Longevity",
      image:
        "https://dlcdnwebimgs.asus.com/files/media/19af88dd-5ead-4d5c-88aa-4362accb79bd/v1/assets/image/proart/article_cover.jpg",
      date: "August 10, 2023",
      author: "Alex Johnson",
    },
  ];

  return (
    <section className="py-10 mt-28 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Blog/Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-100 rounded-lg shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-2">{article.date}</p>
                <p className="text-gray-600 mb-4">By {article.author}</p>
                <a
                  href={`/articles/${article.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
