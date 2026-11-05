# Database Design

## SQL vs NoSQL
SQL databases use relational tables and support joins and transactions. NoSQL is a broad category including document, key-value, wide-column and graph stores. Choose based on access patterns and consistency needs, not fashion.

## Schema design
Start with the queries the application needs. Define entities, ownership, relationships, constraints and indexes.

## Normalization
Organizes relational data to reduce duplication and update anomalies.

## Denormalization
Duplicates or precomputes data to make reads faster, while increasing write and consistency complexity.

## Indexing
Indexes speed up selected reads but consume storage and add write overhead. Index fields used in filters, joins and sorts. Check query plans.

## Replication
Maintains copies of data for availability and read scaling. Replicas can lag behind the primary.

## Sharding
Partitions data across machines. A good shard key distributes load evenly and avoids hot partitions.

## Transactions
A transaction groups operations into an all-or-nothing unit. Understand isolation levels and retry behavior.

## MongoDB example
```js
db.users.createIndex({ email: 1 }, { unique: true });
db.orders.createIndex({ userId: 1, createdAt: -1 });
```
