# `GC.track`

Tracking and analytics. Measuring progression through a
user flow with experiments. Think of a directed graph
containing stages of a game: start screen, tutorials,
levels, quit, etc.; this tells you where you lose users as
the progress from node to node. It's tempting to want to
collect a bunch of random data, but you should think about
what you're trying to measure, then, using level and user
flow markers, figure out how to measure it; that way you get
a pertinent directed graph.

## Methods

* __getTracker__ ---Returns the `Tracker` singleton instance
  used to store the data about the current experiment. (You
  probably won't need to use this.)
	1. @return `{Tracker}`

### Experiments

* __setExperiment (name, group)__ ---Set the current experiment and test group.
	1. @param `{string} name` ---Experiment name.
	2. @param `{string} group` ---Experiment test group.

* __getExperiment ()__ ---Return the name and group of the current experiment.
	1. @return `{object}`
	   * `{string} experimentName`
	   * `{string} experimentGroup`

* __clearExperiment ()__ ---Clear the current experiment.

### User tracking

* __newUserFlow (stepName, stepNumber)__ ---Establish marker
  points to track a user's progression in a flow.
  Only tracks new users.
	1. @param `{string} name` ---Marker name.
	2. @param `{number} number` ---Value must be from 0 to 12.

### Level tracking

The original api had these parameters as: *Level (number,
name). These have been swapped to make the name optional,
but, for now, the old order is still supported for backwards
compatibility.

* __startLevel (number, name)__ ---Once a level has been
  started, there are four possible outcomes: a user may finish
  the level, fail it, retry it, or quit the game.
	1. @param `{number} number` ---Level number.
	2. @param `{string=} name` ---Optional level name.

* __finishLevel (number, name)__
	1. @param `{number} number` ---Level number.
	2. @param `{string=} name` ---Optional level name.

* __failLevel (number, name)__
	1. @param `{number} number` ---Level number.
	2. @param `{string=} name` ---Optional level name.

* __retryLevel (number, name)__
	1. @param `{number} number` ---Level number.
	2. @param `{string=} name` ---Optional level name.

* __quitLevel (number, name)__
	1. @param `{number} number` ---Level number.
	2. @param `{string=} name` ---Optional level name.

### Custom tracking

* __count (key, value)__ ---Create a counter that spans
  time; or, update the value of an existing counter. You will
  want to think about creating a good namespace for the key name.
	1. @param `{string|array} key` ---The key to increment, or a list of keys.
	2. @param `{number} value` ---Add value to key, or subtract if passed a negative number.


## Usage

~~~

var difficulty_group = get_random_group(['sparse_enemies', 'medium_enemies', 'lotsa_enemies']);

GC.track.setExperiment('difficulty-experiment', difficulty_group);

// In game level 1 ...
GC.track.startLevel(1, 'rumble-in-the-jungle');

// Within a level, track how many power-ups a user needs.
// But beware, this probably doesn't help you measure anything.
if (use_potion) {
	GC.track.count('powerups', 1);
	//...
}

// Track what step a user is at in the game, this is used to
// determine user flow through a game graph, and where you're losing them.
if (tutorial_screen0) {
	GC.track.newUserFlow('tutorial-start', 1);
}
if (tutorial_screen2) {
	GC.track.newUserFlow('tutorial-halfway', 2);
}
if (tutorial_screen5 && click_end_button) {
	GC.track.newUserFlow('tutorial-finish', 3);
}

// Once a level has started, a user can finish, fail, retry, or quit; track accordingly.
if (level_done) {
	GC.track.finishLevel(1);
} else if (level_fail) {
	GC.track.failLevel(1);
} else {
	//...
}
~~~
