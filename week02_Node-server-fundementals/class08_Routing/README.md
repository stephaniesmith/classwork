# Class 06 Promises and Body Parser

## Questions, Feedback
* `chai-http 4.x` [breaking change](https://github.com/chaijs/chai-http/releases)
    * Semver!
* add `npm-debug.log` to `.gitignore`
* ?
	
## Today's Learning Objectives

1. Use "Routes" to isolated logic for specific resources
1. Recognize REST pattern of CRUD
1. Create a highly-organized and layered Data API Server App

## Agenda

### REST CRUD

method | path
---|---
`GET` |     `/resources`
`GET` |     `/resources/:id`
`POST` |    `/resources`
`PUT` |     `/resources/:id`
`DELETE` |  `/resources/:id`

### Parsing Routes

1. Method then Resource, or
1. **Resource then Method**

### Dictionary/Map

* Traditional Object
* `Map`

### Recursive Processing

* Routes are listening functions
    * Recursive
* Part of Http Logic vs Pure Functions

### Structure

* Routes
* Models