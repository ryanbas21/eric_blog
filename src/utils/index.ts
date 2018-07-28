import {
	filter,
	add,
	map,
	curry,
	prop,
	compose,
	toLower,
	split,
	join
} from 'ramda';
import moment from 'moment';

export const inc = add(1);

export const derivePosts = map((post) => ({
	title: post.fields.title,
	content: post.fields.content,
	date: moment(post.sys.createdAt).format('lll'),
  id: post.sys.id
}));

export const titlesArray = map(prop('title'));
export const trace = (msg) => (val) => {
	console.log(`${msg}  ${val}`);
	return val;
};

export const inTitle = (query) => filter((title) => {
  return toLower(title).includes(toLower(query));
})

export const filterTitles = curry((query, state) =>
	compose(
		inTitle(query),
		titlesArray
	)(state)
);

export const toSlug = compose(
	toLower,
	join('-'),
	split(' ')
);

export const resultsArray = map(title => ({ title, description: '' }));
