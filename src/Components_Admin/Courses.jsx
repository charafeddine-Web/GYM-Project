import React, { useState, useEffect } from 'react';
import './courses.css'; // Your custom styles here

// Sample data for fitness courses
const sampleCourses = [
  { id: 1, title: 'Yoga for Beginners', date: '2024-09-10', video: 'https://example.com/fitness-video1.mp4', image: 'https://example.com/fitness-image1.jpg' },
  { id: 2, title: 'HIIT Workout', date: '2024-08-20', video: 'https://example.com/fitness-video2.mp4', image: 'https://example.com/fitness-image2.jpg' },
  { id: 3, title: 'Strength Training 101', date: '2024-09-05', video: 'https://example.com/fitness-video3.mp4', image: 'https://example.com/fitness-image3.jpg' },
];

// Pagination settings
const ITEMS_PER_PAGE = 2;

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    setCourses(sampleCourses);
  }, []);

  // Filter courses by name
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter courses by date
  const dateFilteredCourses = dateFilter ? filteredCourses.filter(course => new Date(course.date).toLocaleDateString() === dateFilter) : filteredCourses;

  // Sort courses by date
  const sortedCourses = [...dateFilteredCourses].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Change page
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-900 rounded-t-xl shadow-lg">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          {/* Filter and Sort Section */}
          <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center'>
            <div className='flex flex-row justify-center items-center'>
              <h2 className="text-lg font-semibold mb-2 text-white">Filter by Date </h2>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className='flex flex-row justify-center items-center'>
              <h2 className="text-lg font-semibold mb-2 text-white">Sort by </h2>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
        <div className="relative mt-6 lg:mt-0">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search by course name..."
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-6 overflow-auto bg-gray-50">
        {/* Courses Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {paginatedCourses.map(course => (
            <div
              key={course.id}
              className="course-card bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mb-4">Date: {new Date(course.date).toLocaleDateString()}</p>

              {/* Display the image */}
              <div className="course-image mb-4">
                <img src={course.image} alt={course.title} className="rounded-lg shadow-sm w-full h-48 object-cover" />
              </div>

              {/* Display the video */}
              <div className="course-video">
                <video controls className="w-full rounded-lg shadow-md bg-gray-200">
                  <source src={course.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination flex justify-center items-center space-x-4 mt-8">
          <button
            className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">Page {currentPage} of {totalPages}</span>
          <button
            className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
