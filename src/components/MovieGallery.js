import React, { useState, useEffect } from "react";

const MovieGallery = ({ movies }) => {
  //   const [currentMovies, setCurrentMovies] = useState(["", "", ""]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(40);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the movies based on the search query
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate the index of the last movie on the current page
  const lastIndex = currentPage * moviesPerPage;
  // Calculate the index of the first movie on the current page
  const firstIndex = lastIndex - moviesPerPage;
  // Get the movies to display on the current page
  const currentMovies = filteredMovies.slice(firstIndex, lastIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  // Create an array of page numbers to use for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const maxPageNumbers = 5;

  // Determine the start and end page numbers based on the current page
  let startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
  let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

  // Adjust the start and end page numbers if there are not enough pages to show
  if (endPage - startPage + 1 < maxPageNumbers) {
    if (startPage === 1) {
      endPage = Math.min(maxPageNumbers, totalPages);
    } else {
      startPage = Math.max(endPage - maxPageNumbers + 1, 1);
    }
  }
  const handleClick = (e) => {
    console.log(e.target.id);
    setCurrentPage(parseInt(e.target.id));
  };

  return (
    <div className="rounded-xl">
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3">
        <h1 class="flex justify-start font-bold text-2xl ml-5 mt-5">
          Browse Movie Inventory
        </h1>
        <hr style={{ backgroundColor: "#515152", borderColor: "#515152" }}></hr>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative rounded-md shadow-sm w-full max-w-md">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input block w-full pl-10 sm:text-sm sm:leading-5 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out rounded-l-md"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 15A6.75 6.75 0 1 1 8.25 2a6.75 6.75 0 0 1 0 13.5zm7.1-1.43a1 1 0 0 1-1.42 1.42l-3.3-3.29a5.25 5.25 0 1 1 .62-.62l3.29 3.29zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-40 opacity-100">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div class="m-5 p-3 gap-2">
          {totalPages > 1 && (
            <div>
              {startPage !== 1 && (
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-2 rounded-md font-medium text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out ${
                    startPage === currentPage
                      ? "bg-gray-200"
                      : "bg-white border-gray-300"
                  }`}
                >
                  1
                </button>
              )}
              {startPage > 2 && <span class="m-1 p-1">...</span>}
              {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
                <button
                  key={startPage + i}
                  onClick={() => setCurrentPage(startPage + i)}
                  className={`px-3 m-1 py-2 rounded-md font-medium text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out ${
                    startPage + i === currentPage
                      ? "bg-gray-200"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {startPage + i}
                </button>
              ))}
              {endPage < totalPages - 1 && <span class="m-1 p-1">...</span>}
              {endPage !== totalPages && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  class={`px-3 py-2 rounded-md font-medium text-black hover:text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out ${
                    totalPages === currentPage
                      ? "bg-gray-200"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {totalPages}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <img
        class="h-48 w-full object-cover"
        src={movie.poster}
        alt={movie.title}
      />
      <div class="px-4 py-3 border-t border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {movie.title}
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {movie.description}
        </p>
        <div class="mt-2 flex grid grid-cols-2 items-center justify-between">
            <p>Rated: {movie.rating}</p>
            <p>Released: {movie.release_year}</p>
        </div>
        <div class="mt-3 flex grid grid-cols-3 items-center justify-between">
          <p class="text-sm leading-5 text-gray-500">{movie.category}</p>
          <p class="text-sm leading-5 text-gray-500">{movie.language}</p>
          <p class="text-sm leading-5 text-gray-500">{movie.length} mins</p>
        </div>
      </div>
    </div>
  );
};

export default MovieGallery;
