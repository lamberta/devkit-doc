# Getting Started with Git

## Intro

### Getting around

Even though the *git utility* has many features, only a few
commands are needed to start working. And since it's
a very popular revision control system, there's plenty of
[documentation](http://git-scm.com/documentation) about it,
and [GitHub](http://help.github.com/)---the popular
web-based hosting service we use to manage our git projects.

If you have tab-completion set up in your shell, list
available git commands with:

`$ git <tab>`

To see a git command's usage:

`$ git command -h`

And to see a git command's manual page:

`$ man git-command`

To see the differences between the working branch and the
last commit, and to display a list of additional commands
needed to unstage a file:

`$ git status`

To list branches, or to list *all* branches (including remotes):

`$ git branch`<br/>
`$ git branch -a`

Please read the GitHub help for [managing remote branches](http://help.github.com/remotes/);
it's confusing to see a list of old branches that no one knows anything about.

Once a file has been committed, git may act funny when you
move it around. Even though git normally resolves discrepancies
on its own, it's worth understanding how these commands work:

`$ git mv file`<br/>
`$ git rm file`


## Workflow

### Required reading

* [A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)
* [GitHub Help: Pull Requests](http://help.github.com/send-pull-requests/)
  
### The hard part

The complications with git are not so much how to use it,
but how to use it when collaborating with other
people. Work-flow is not something enforced by the tool, but
by the people using it. As such, check with your project leader
to make sure everyone is on the same page, obviously, that
direction supersedes any advice given here.

### Adding a feature

Since branching is easy with git, generally, a new feature is
added by creating a new branch and merging it back.

~~~

# create a new myfeature branch from the current branch (probably master)
$ git checkout -b myfeature

# ...hack, hack, hack...
$ git add file
$ git commit -m "A message about the changes made."
# ...rinse, repeat...

# switch back to main branch (or where you want to merge to)
$ git checkout master
# update branch to include changes
$ git merge myfeature

# remove the feature branch
$ git branch -d myfeature
~~~

### Working with others

Now we'll look at a more real-life example of adding a new
feature to the *develop* branch. Remember, *origin*  is just
a name for a branch, there's nothing inherently special
about it other than the convention to point it at the
GitHub remote repository.

~~~

# create myfeature branch from the develop branch
$ git checkout -b myfeature develop

# ...hack, hack, hack...
$ git add file
$ git commit -m "A message about the changes made."
# ...rinse, repeat...

# switch back to develop
$ git checkout develop

# update from remote (this is basically a git pull)
$ git fetch origin
$ git merge origin/develop
# develop branch is now up-to-date

# switch back to feature branch
$ git checkout myfeature

# update feature branch
$ git merge develop
# ...handle merge conflicts manually or use 'git mergetool'...

# if long-standing feature, push feature branch to remote for safekeeping
$ git push origin myfeature

# and optionally, to remove the feature branch
$ git checkout develop
$ git branch -d myfeature

~~~

### Pull requests on GitHub

While the git tool has its own command for code management,
`git request-pull`, this process is quite a bit easier using
GitHub's *pull request* mechanism.

~~~

# create a new feature branch
git checkout -b myfeature

# ...hack, hack, hack...
git add file
git commit -m "A message about the changes made."
# ...rinse, repeat...

# push to github
git push origin myfeature
~~~

To issue a *pull request* on GitHub, navigate to the
repository page---make sure you're on the feature branch you
wish to merge---and click __Pull Request__.

Make sure you:
* Enter a meaningful message about your changes.
* Check the repository:branch *from* and *to* (to change these, click __Change Commits__).
* Preview.
* Click __Send Pull Request__


## Git Tips

### Colors

Here is Billy's `~/.gitconfig`, featuring his famous recipe for git console colors:

~~~

[user]
  name = Johnny Game Closure
  email = you@gameclosure.com

[apply]
  whitespace = nowarn

[color]
  branch = auto
  diff = auto
  status = auto

[color "branch"]
  current = yellow bold
  local = cyan bold
  remote = green bold

[color "diff"]
  meta = yellow bold
  frag = magenta bold
  old = red bold
  new = green bold

[color "status"]
  added = yellow bold
  changed = green bold
  untracked = cyan
~~~
