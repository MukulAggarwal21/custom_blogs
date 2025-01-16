import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import CreatePostDialog from '../CreatePostDialog/CreatePostDialog';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data.slice(0, 5)); 
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        setLoading(false);
    };

    const handleCreatePost = async (postData) => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    ...postData,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = await response.json();

            setPosts([{ ...data, id: Date.now() }, ...posts]);
            setShowCreateDialog(false);
        } catch (error) {
            console.error('Error creating post:', error);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Posts</h1>
                <div className="flex gap-2">
                    <Button onClick={fetchPosts} disabled={loading}>
                        Fetch Posts
                    </Button>
                    <Button
                        onClick={() => setShowCreateDialog(true)}
                        variant="default"
                        className="flex items-center gap-1"
                    >
                        <Plus className="h-4 w-4" />
                        Create Post
                    </Button>
                </div>
            </div>

            <CreatePostDialog
                open={showCreateDialog}
                onOpenChange={setShowCreateDialog}
                onCreatePost={handleCreatePost}
                loading={loading}
            />

            {loading && posts.length === 0 ? (
                <Loader />
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>)
}

export default Posts;