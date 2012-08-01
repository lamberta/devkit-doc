# GC.track

Tracking and analytics. Measuring progression through a
user flow with experiments. Think of a directed graph
containing stages of a game: start screen, tutorials,
levels, quit, etc.; this tells you where you lose users as
the progress from node to node. It's tempting to want to
collect a bunch of random data, but you should think about
what you're trying to measure, then, using level and user
flow markers, figure out how to measure it; that way you get
a pertinent directed graph.

### GC.track.getTracker ()
1. Return: `{Tracker}`

Returns the `Tracker` singleton instance used to store the
data about the current experiment. (You probably won't need
to use this.)

### GC.track.setExperiment (name, group)
1. `name {string}` ---Experiment name.
2. `group {string}` ---Experiment test group.

Set the current experiment and test group.

### GC.track.getExperiment ()
1. Return: `{object}`
	* `experimentName {string}`
	* `experimentGroup {string}`

Return the name and group of the current experiment.

### GC.track.clearExperiment ()

Clear the current experiment.

### GC.track.newUserFlow (stepName, stepNumber)
1. `stepName {string}` ---Marker name.
2. `stepNumber {number}` ---Value must be from 0 to 12.

Establish marker points to track a user's progression in a
flow. Only tracks new users.
  
### GC.track.startLevel (number [, name])
1. `number {number}` ---Level number.
2. `name {string}` ---Level name. Optional.

Once a level has been started, there are four possible
outcomes: a user may finish the level, fail it, retry it, or
quit the game.

### GC.track.finishLevel (number [, name])
1. `number {number}` ---Level number.
2. `name {string}` ---Level name. Optional.

### GC.track.failLevel (number [, name])
1. `number {number}` ---Level number.
2. `name {string}` ---Level name. Optional.

### GC.track.retryLevel (number [, name])
1. `number {number}` ---Level number.
2. `name {string}` ---Level name. Optional.

### GC.track.quitLevel (number [, name])
1. `number {number}` ---Level number.
2. `name {string}` ---Level name. Optional.

### GC.track.funnelStep (funnelName, stepName, stepNumber)
1. `funnelName {string}` --- Funnel Name.
2. `stepName {string}` --- Name of the step for this funnel.
3. `stepNumber {stepNumber}` --- Number of the step for this funnel.

### GC.track.custom  (eventName, eventPayload)
1. `eventName {string}` --- Name of this event.
2. `eventPayload {json}` --- a json map with strings as values for the payload (ie. {key1: "value1", key2: "value2", ...})

### GC.track.count (key, value)
1. `key {string}` ---The key to increment.
2. `value {number}` ---Add value to key, or subtract if passed a negative number.

Create a counter that spans time; or, update the value of an
existing counter. You will want to think about creating a
good namespace for the key name.

### GC.track.count (keyList, value)
1. `keyList {array}` ---A list of keys to increment.
2. `value {number}` ---Add value to key, or subtract if passed a negative number.

## Example: Track a level

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
