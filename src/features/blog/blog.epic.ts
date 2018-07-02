import { from, pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { compose, merge, prop } from 'ramda';
import { savePosts, GET_POSTS } from './blog.reducer';
import { derivePosts, trace } from '../../utils/index';
import contentful from '../../utils/contentful-client';

const getPostsEpic = (action$) =>
	action$.ofType(GET_POSTS).pipe(
		mergeMap(() =>
			from(contentful.getEntries()).pipe(
        map(data => { console.log(data); return data; }),
        map(prop('items')),
				map(derivePosts),
				map(savePosts)
			)
		)
	);

export default getPostsEpic;
