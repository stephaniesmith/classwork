Review
===

* `npm i && npm test` ftw!

* `// eslint-disable-line` is least informative option. Prefer:
    * File rule override: 
        > `/* eslint new-cap: off */`
    * turning off specific eslint rules in `.eslintrc`

* Security issues
    * leaky security info `hash`
    * letting users set their own role

* `/me` routes

* `GET` `/` should use query

* Put full setup instructions
    * `.env`

* don't use aggregate for find