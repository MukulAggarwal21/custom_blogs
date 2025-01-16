import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Share2, MessageCircle } from 'lucide-react';
import Comment from '../Comment/Comment';
import ShareDialog from '../ShareDialog/ShareDialog';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
        replies: []
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const handleAddReply = (parentId, replyText) => {
    const addReplyToComment = (comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), {
            id: Date.now(),
            text: replyText,
            replies: []
          }]
        };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply => addReplyToComment(reply))
        };
      }
      return comment;
    };

    setComments(comments.map(comment => addReplyToComment(comment)));
  };

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{post.body}</p>
        
        <div className="flex gap-2">
          <Button
            variant={liked ? "default" : "outline"}
            size="sm"
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-1"
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            {liked ? 'Liked' : 'Like'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowShareDialog(true)}
            className="flex items-center gap-1"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1"
          >
            <MessageCircle className="h-4 w-4" />
            Comments ({comments.length})
          </Button>
        </div>

        {showComments && (
          <div className="mt-4">
            <div className="flex gap-2 mb-4">
              <Input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1"
              />
              <Button onClick={handleAddComment}>
                Comment
              </Button>
            </div>
            
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onAddReply={handleAddReply}
              />
            ))}
          </div>
        )}

        <ShareDialog
          open={showShareDialog}
          onOpenChange={setShowShareDialog}
          postTitle={post.title}
        />
      </CardContent>
    </Card>
  );
};

export default Post;