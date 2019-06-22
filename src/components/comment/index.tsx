import React, { useState } from 'react';
import { Comment } from 'semantic-ui-react';
import CommentHeader from './commentHeader.tsx';
import CreateComment from './createComment.tsx';
import { thunkify, curry, pipe, propOr, map, concat } from 'ramda';

const onReply = thunkify(function(commentsState, setComments): void {
	const date = new Date(Date.now()).toString();
	const { comments, commentText } = commentsState;
	setComments({
		comments: concat(
			[
				{
					date,
					content: commentText
				}
			],
			comments
		),
		commentText: ''
	});
});

const replyChange = curry(function(
	commentsState,
	setComments,
	e: React.FormEvent<HTMLTextAreaElement>
) {
	const commentText = e.currentTarget.value;
	setComments({ ...commentsState, commentText });
});

interface CommentProps {
	styles?: { comments: any };
}

interface CommentData {
	content: string;
	date: string;
}
interface CommentState {
	comments: CommentData[];
	content: string;
	commentText: string;
	date: Date | String;
}
const Comments: React.SFC<CommentProps> = (props) => {
	const [commentsState, setComments] = useState<CommentState>({
		comments: [],
		commentText: '',
		content: '',
		date: ''
	});
	const renderComments = pipe(
		propOr([], 'comments'),
		map((comment: CommentData) => (
			<CurrentComments
				user={'anon'}
				key={content + date}
				date={comment.date}
				content={comment.content}
				replyChange={replyChange(commentsState, setComments) as any}
				onReply={onReply(commentsState, setComments)}
			/>
		))
	);
	const { date, content } = commentsState;
	return (
		<Comment className={props.styles.comments}>
			<CommentHeader />
			{renderComments(commentsState)}
			<CreateComment
				commentText={commentsState.commentText}
				replyChange={replyChange(commentsState, setComments) as any}
				onReply={() => onReply(commentsState, setComments)}
			/>
		</Comment>
	);
};
export default Comments;
