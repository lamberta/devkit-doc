# GC.scores

The default global leaderboard records a single high score
per user per game.

### GC.scores.get (opts, callback)
1. `opts {object}`
	* `type {string} = 'everyone'` ---Options are `'me'`, `'friends'`, or `'everyone'`.
	* `leaderboard {string} = 'default'`
2. `callback {function(err, res)}`
3. Return: `{string}` ---Return the leaderboard type or `null`.

### GC.scores.post (opts [, callback])
1. `opts {object}`
	* `replace {boolean} = false` ---If `true`, replace the score even if old score is higher.
	* `leaderboard {string} = 'default'` ---Name of the leaderboard to post score to.
	* `score {number}` ---Score to post.
	* `data {*}` ---Data to post with score.
2. `callback {function(err, res)}` ---Optional callback to run after asynchronous POST operation.

Post a new score. By default, overwrite the old score if
this one is higher.


## Class: Leaderboard

### leaderboard.id
1. `{string} = 'default'`

### leaderboard.name

### leaderboard.description

### leaderboard.me

### leaderboard.friends

### leaderboard.everyone


## Example: Posting a score

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
