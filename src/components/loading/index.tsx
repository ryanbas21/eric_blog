import * as React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Loading = () => (
	<Segment>
		<Dimmer active>
			<Loader />
		</Dimmer>
	</Segment>
);

export default Loading;
