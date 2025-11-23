# blossom

Utility that helps with the [blossom word game](https://www.merriam-webster.com/games/blossom-word-game).

## Install

```
curl -sL https://raw.githubusercontent.com/joshuacox/blossom/refs/heads/main/bootstrap.sh | bash
```

## Usage

```
./blossom CENTER_LETTER PETAL_LETTERS
```

e.g.

```
./blossom e sombody
```

You can also specify the bonus letter last i.e.

```
./blossom e sombody m
```

You can specify a path to the dictionary like this:

```
DICTIONARY=/path/to/english/dictionary ./blossom CENTER_LETTER PETAL_LETTERS
```
