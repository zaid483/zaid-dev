// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "../schema/loginSchema";

// export default function LoginForm() {
//   const [countries, setCountries] = useState([]);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=name")
//       .then((res) => res.json())
//       .then((data) => setCountries(data.map((c) => c.name.common).sort()));
//   }, []);

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   const inputClass = (error) =>
//     `w-full px-4 py-2 border rounded-lg outline-none focus:ring-2
//      ${
//        error
//          ? "border-red-500 focus:ring-red-300 placeholder-red-500"
//          : "border-gray-300 focus:ring-blue-300"
//      }`;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
//       >
//         <h2 className="text-2xl font-semibold text-center text-blue-950">
//           Login
//         </h2>

//         {/* Email */}
//         <div>
//           <input
//             {...register("email")}
//             placeholder="Email"
//             className={inputClass(errors.email)}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         {/* Password */}
//         <div>
//           <input
//             type="password"
//             {...register("password")}
//             placeholder="Password"
//             className={inputClass(errors.password)}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.password.message}
//             </p>
//           )}
//         </div>

//         {/* Phone */}
//         <div>
//           <input
//             {...register("phone")}
//             placeholder="Phone number"
//             className={inputClass(errors.phone)}
//           />
//           {errors.phone && (
//             <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
//           )}
//         </div>

//         {/* Country (Dynamic) */}
//         <div>
//           <input
//             list="countries"
//             {...register("country")}
//             placeholder="Country"
//             className={inputClass(errors.country)}
//           />

//           <datalist id="countries">
//             {countries.map((country) => (
//               <option key={country} value={country} />
//             ))}
//           </datalist>

//           {errors.country && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.country.message}
//             </p>
//           )}
//         </div>

//         {/* Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="px-4 bg-blue-950 text-white py-2 rounded-lg font-medium
//                      hover:bg-blue-900 transition duration-200"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import { useEffect } from "react";

// export default function Timer() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     // 🧹 CLEANUP
//     return () => {
//       clearInterval(timer);
//       console.log("Timer stopped");
//     };
//   }, []);

//   return <h1>Timer Running</h1>;
// }
// import { useEffect, useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// export default function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if (!res.ok) {
//           throw new Error("Failed to fetch posts");
//         }

//         const data = await res.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <ClipLoader size={50} color="#2563eb" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Posts</h2>

//       {posts.map((post) => (
//         <p key={post.id} className="mb-2">
//           {post.title}
//         </p>
//       ))}
//     </div>
//   );
// }
// import { useState } from "react";
// import axios from "axios";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const pdata = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await axios.post("https://dummyjson.com/products/add", {
//         title,
//         price,
//       });

//       console.log(res.data);
//       setMessage("done");
//       setTitle("");
//       setPrice("");
//     } catch (err) {
//       setMessage("filaed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={pdata}
//         className="bg-white p-6 rounded-xl shadow w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Create Product (POST)
//         </h1>

//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//           required
//         />

//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           {loading ? "Creating..." : "Create"}
//         </button>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/pos");
        setPosts(res.data); // ✅ data already JSON
        console.log(res.status); // 200, 201, etc.
      } catch (err) {
        setError("Failed to fetch posts");
        console.log(err.response?.status); // ✅ correct
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>

      {posts.map((post) => (
        <div key={post.id} className="border-b py-2">
          {post.title}
        </div>
      ))}
    </div>
  );
}
