import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

interface CreateProps {
	onReply: (a: React.ChangeEvent<HTMLInputElement>) => void;
	replyChange: (a: React.ChangeEvent<HTMLInputElement>) => void;
}
const CreateComment: React.SFC<CreateProps> = ({ onReply, replyChange }) => (
	<Form>
		<Form.TextArea data-testid="textbox" onChange={replyChange} />
		<Button
			onClick={onReply}
			id="submit"
			content="Add Reply"
			labelPosition="left"
			icon="edit"
			primary
		/>
	</Form>
);

export default CreateComment;
