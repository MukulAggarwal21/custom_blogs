import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle } from 'lucide-react';

const Comment = ({ comment, onAddReply, depth = 0 }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      onAddReply(comment.id, replyText);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  const maxDepth = 3; // Maximum nesting level

  return (
    <div className={`ml-${depth * 4} mt-2`}>
      <div className="bg-gray-50 p-3 rounded-lg">
        <div className="flex items-start gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-gray-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-900">{comment.text}</p>
            {depth < maxDepth && (
              <div className="mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowReplyInput(!showReplyInput)}
                >
                  Reply
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showReplyInput && (
        <div className="mt-2 flex gap-2">
          <Input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1"
          />
          <Button size="sm" onClick={handleSubmitReply}>
            Reply
          </Button>
        </div>
      )}
      
      {comment.replies?.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          onAddReply={onAddReply}
          depth={depth + 1}
        />
      ))}
    </div>
  );
};

export default Comment;