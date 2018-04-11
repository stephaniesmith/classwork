# Class 06 Promises and Body Parser

## Questions, Feedback
* `chai-http 4.x` [breaking change](https://github.com/chaijs/chai-http/releases)
* add `npm-debug.log` to `.gitignore`
* ?
	
## Today's Learning Objectives

1. Use "Routes" to isolated logic for specific resources
1. Recognize REST pattern of CRUD

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

* Method then Resource, or
* Resource then Method

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