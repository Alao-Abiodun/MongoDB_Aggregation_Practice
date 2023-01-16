## MONGODB AGGREAGATION PRACTICE

### Aggregation involves processing data to give you a useful answer. In this this exercise, you will analyze a collection users and plan type choose by the user.

### The users collection has the following documents:

```
{
    "_id" : ObjectId("5a0a1f521b52e9f979d7c0fa"),
    "name" : "John Smith",
    "email" : "
    "plan" : "premium",
    "age" : 27,
    "state" : "CA"
}
```

### The plan collection has the following documents:

```
{
    "_id" : ObjectId("5a0a1f521b52e9f979d7c0fb"),
    "name" : "premium",
    "price" : 100,
    "storage" : 1000,
    "support" : true,
    "upgrades" : 5
}
```

### The users collection has the following documents:

```
{
    "_id" : ObjectId("5a0a1f521b52e9f979d7c0fc"),
    "name" : "Jane Doe",
    "email" : "
    "plan" : "basic",
    "age" : 33,
    "state" : "NY"
}
```

### The plan collection has the following documents:

```
{
    "_id" : ObjectId("5a0a1f521b52e9f979d7c0fd"),
    "name" : "basic",
    "price" : 0,
    "storage" : 500,
    "support" : false,
    "upgrades" : 2
}
```



