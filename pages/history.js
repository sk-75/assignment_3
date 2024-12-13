// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//   const [arr, setArr] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/api/history", { method: "GET" });
//       const data = await res.json();
//       setArr(data);
//     };
//     fetchData();
//   }, []);  // Empty dependency array ensures this runs only once, when the component mounts

//   return (
//     <div>
//       <ul>
//         {arr.map((obj, index) => (
//           <li key={index}>{obj}</li>  // Provide a unique key for each list item
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/history", { method: "GET" });
      const data = await res.json();
      setArr(data);
    };
    fetchData();
  }, []);  // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">History</div>
            <ul className="space-y-2">
              {arr.map((obj, index) => (
                <li 
                  key={index}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 ease-in-out"
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span>
                    <span>{obj}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

