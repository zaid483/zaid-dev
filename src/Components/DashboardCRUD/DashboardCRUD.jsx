import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";

/* Zod schema for validation */
const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  body: z.string().min(5, "Body must be at least 5 characters"),
  userId: z.number(),
});

export default function DashboardCRUD() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", body: "", userId: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPosts(res.data.slice(0, 10)); // first 10 posts
      } catch {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const validated = postSchema.parse({
        title: form.title,
        body: form.body,
        userId: Number(form.userId),
      });

      if (editingId) {
        const res = await axios.patch(
          `https://jsonplaceholder.typicode.com/posts/${editingId}`,
          validated,
        );
        setPosts(posts.map((p) => (p.id === editingId ? res.data : p)));
        setEditingId(null);
      } else {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          validated,
        );
        setPosts([res.data, ...posts]);
      }

      setForm({ title: "", body: "", userId: "" });
    } catch (err) {
      if (err instanceof z.ZodError) setError(err.errors[0].message);
      else setError("Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((p) => p.id !== id));
    } catch {
      setError("Failed to delete post");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, body: post.body, userId: post.userId });
    setEditingId(post.id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50">
        <ClipLoader size={60} color="#7c3aed" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-purple-600 drop-shadow-lg">
        CRUD Dashboard
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 bg-white p-6 rounded-2xl shadow-lg border border-purple-100 space-y-4 transition-transform transform hover:scale-105 duration-300"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
        />
        <input
          name="body"
          value={form.body}
          onChange={handleChange}
          placeholder="Body"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
        />
        <input
          name="userId"
          type="number"
          value={form.userId}
          onChange={handleChange}
          placeholder="User ID"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
        />
        <button
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {editingId ? "Update Post" : "Add Post"}
        </button>
        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}
      </form>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white border rounded-2xl shadow-md flex justify-between items-start transition transform hover:scale-[1.02] hover:shadow-xl duration-300"
          >
            <div>
              <h3 className="font-semibold text-lg text-purple-700">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-1">{post.body}</p>
              <p className="text-sm text-gray-400 mt-1">
                User ID: {post.userId}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="px-3 py-1 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 shadow-sm hover:shadow-md transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-sm hover:shadow-md transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
