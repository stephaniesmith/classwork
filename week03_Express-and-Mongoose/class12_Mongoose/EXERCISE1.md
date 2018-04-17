## Schema

* Company
    * `name` - String
    * `description` - String
    * `type` - String
    * `address`
        * `street` - String
        * `city` - String
        * `zip` - String
        * `state` - String
    * `size` - Number
    * `founded` - Date
    * `isHip` - Boolean
    * `keywords` - Array of Strings

1. Write Test
    * Create model with all required fields (should pass `validate`)
1. Model
    1. Write Schema
    1. Export Model (give singular name `'Company'`)
1. Profit!