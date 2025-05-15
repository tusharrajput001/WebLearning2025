import { useState } from "react"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMsg('');

        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method:'POST',
                headers: {'Content-type' : 'application/json'},
                body : JSON.stringify({title}),
            });

            const data = await res.json();
            setResponseMsg(`Post created with ID ${data.id}`);
        }
        catch(error){
            setResponseMsg('Failed to create post');
        }
        finally{
            setLoading(false);
        }
    };

    return(
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Submitting...' : 'Create Post'}
      </button>
      {responseMsg && <p>{responseMsg}</p>}
    </form>
        
    )
}

export default CreatePost;