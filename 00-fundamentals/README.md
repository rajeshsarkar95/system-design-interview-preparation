# System Design Fundamentals

System design is the process of defining the architecture, components, interfaces, data flow and trade-offs of a software system.

## Functional requirements
What the system must do. Example: a chat app must let users send and receive messages.

## Non-functional requirements
How well the system must work: availability, latency, scalability, reliability, security, consistency and maintainability.

## Scalability
The ability to handle growth in users, traffic or data.
- Vertical scaling: add CPU/RAM to one machine.
- Horizontal scaling: add more machines/instances.

## Availability and reliability
Availability measures whether a service is accessible. Reliability concerns whether it operates correctly over time. Redundancy, health checks, failover and graceful degradation help.

## Latency and throughput
- Latency: time taken for one operation.
- Throughput: operations or requests completed per unit time.

## CAP theorem
During a network partition, a distributed data store must trade off between consistency and availability. Partition tolerance is assumed in a distributed system.

## Interview checklist
Clarify requirements, estimate scale, design APIs/data, draw architecture, identify bottlenecks, explain failure handling and discuss trade-offs.
