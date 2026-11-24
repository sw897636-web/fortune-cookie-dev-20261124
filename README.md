# Fortune Cookie Wisdom for Developers

![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)
![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/sw897636-web/fortune-cookie-dev-20261124/rank.svg)
![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/sw897636-web/fortune-cookie-dev-20261124/reward.svg)

One original fortune-cookie line for a software developer, entered in the
[Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
bounty on [make.fun](https://make.fun).

## The line

> Tonight you will search for the log line you deleted last week for being too noisy.

83 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```
