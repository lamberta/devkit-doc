# `GC.scores`

The default global leaderboard records a single high score
per user per game.

## Methods

* __get (opts, callback)__
	1. @param `{object} opts`
		* __type__ `{string} = 'everyone'` ---Options are `'me'`, `'friends'`, or `'everyone'`.
		* __leaderboard__ `{string} = 'default'`
	2. @param `{function(err, res)} callback`
	3. @return `{string|null}` ---Return the leaderboard type or `null`.

* __post (opts, callback)__ ---Post a new score. By default, overwrite the old score if this one is higher.
	1. @param `{object} opts`
		* __replace__ `{boolean} = false` ---If `true`, replace the score even if old score is higher.
		* __leaderboard__ `{string} = 'default'` ---Name of the leaderboard to post score to.
		* __score__ `{number}` ---Score to post.
		* __data__ `{*}` ---Data to post with score.
	2. @param `{function=} callback(err, res)` ---Optional callback to run after asynchronous POST operation.


## Usage:

~~~

GC.scores.post({
	score: 23,
	data: {a: 3, b: 'test'},
	replace: true,
	leaderboard: 'default'
}, function (err, res) {
	if (err) { throw err; }
});
~~~


# `Leaderboard`

## Properties

* __id__ `{string} = 'default'`
* __name__
* __description__
* __me__
* __friends__
* __everyone__
