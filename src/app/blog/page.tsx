import React from "react";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  // Featured articles with Pexels images
  const featuredArticles = [
    {
      id: 1,
      title: "Evening Beach Walks",
      description: "Explore the serenity of evening strolls by the sea.",
      category: "Travel Tips",
      imageUrl:
        "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg",
      date: "May 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Local Markets to Visit",
      description: "A guide to the vibrant local markets nearby.",
      category: "Local Guides",
      imageUrl:
        "https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg",
      date: "April 28, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Dining Experiences",
      description: "Discover our culinary delights and dining experiences.",
      category: "Dining",
      imageUrl: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg",
      date: "April 10, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Hotel Updates",
      description: "Latest updates and news from our hotel.",
      category: "Hotel Updates",
      imageUrl:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      date: "March 22, 2024",
      readTime: "4 min read",
    },
  ];

  // Latest posts with Pexels images
  const latestPosts = [
    {
      id: 5,
      title: "10 Tips for Solo Travelers",
      author: "Jane Doe",
      imageUrl:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
      date: "June 5, 2024",
      category: "Travel Tips",
    },
    {
      id: 6,
      title: "Top 5 Attractions In Our City",
      author: "John Smith",
      imageUrl:
        "https://images.pexels.com/photos/2385562/pexels-photo-2385562.jpeg",
      date: "May 28, 2024",
      category: "Local Guides",
    },
    {
      id: 7,
      title: "Hotel Renovations: What to Expect",
      author: "Mark Taylor",
      imageUrl:
        "https://images.pexels.com/photos/2333332/pexels-photo-2333332.jpeg",
      date: "May 20, 2024",
      category: "Hotel Updates",
    },
    {
      id: 8,
      title: "Culinary Journey: Local Cuisine",
      author: "Emily White",
      imageUrl:
        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      date: "May 12, 2024",
      category: "Dining",
    },
    {
      id: 9,
      title: "A Traveler's Diary: Guest Experiences",
      author: "Sarah Johnson",
      imageUrl:
        "https://images.pexels.com/photos/9572697/pexels-photo-9572697.jpeg",
      date: "April 30, 2024",
      category: "Travel Stories",
    },
    {
      id: 10,
      title: "Eco-Friendly Travel Tips",
      author: "Alex Green",
      imageUrl:
        "https://images.pexels.com/photos/751088/pexels-photo-751088.jpeg",
      date: "April 18, 2024",
      category: "Travel Tips",
    },
  ];

  const categories = [
    "All Articles",
    "Travel Tips",
    "Local Guides",
    "Dining",
    "Hotel Updates",
    "Travel Stories",
  ];

  return (
    <div className="font-sans bg-white">
      {/* Blog Hero Section */}
      <div className="font-sans bg-white">
        {/* Blog Hero Section */}
        <div className="relative h-96 w-full rounded-b-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg"
            alt="Hotel Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0  bg-black/20">
            {/* Full-width blur overlay */}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="max-w-3xl bg-white/10 p-8 rounded-xl border border-white/20 shadow-xl flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                The Grand Hotel Blog
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
                Discover travel tips, local attractions, and guest experiences
                from our luxury hotel.
              </p>
              <div className="mt-8 text-center">
                <Button className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg flex items-center gap-2">
                  <Mail size={18} />
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Articles
          </h2>
          <div className="hidden md:flex space-x-2">
            {categories.slice(0, 5).map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              className="relative rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-full h-96">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="flex justify-between items-start">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {article.category}
                    </span>
                    <span className="text-white text-sm bg-black/30 px-2 py-1 rounded">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-white/90">{article.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-white/70 text-sm">
                      {article.date}
                    </span>
                    <button className="text-white font-medium flex items-center group-hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Blog Posts Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Latest Blog Posts
            </h2>
            <button className="text-blue-600 font-medium hover:underline flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    By <span className="font-semibold">{post.author}</span>
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Banner */}
      <div className="relative w-full h-96 my-16 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg"
            alt="Newsletter Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20">
          {/* This div creates the full-width blur overlay */}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <div className="max-w-2xl  p-8 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-white text-lg mb-8 drop-shadow-md">
              Get exclusive travel tips, special offers, and the latest hotel
              updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-gray-800 placeholder-gray-500 shadow-sm"
              />
              <button className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg font-medium">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/90 text-sm mt-4 drop-shadow-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Tags</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Luxury Travel",
            "Beach",
            "City Guide",
            "Food",
            "Wellness",
            "Adventure",
            "Family",
            "Romantic",
            "Business",
            "Spa",
          ].map((tag, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
