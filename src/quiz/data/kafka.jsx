export const questions = [
  {
    id: 1,
    category: "Kafka Basics",
    question: "What is Kafka primarily used for?",
    code: null,
    options: [
      "Database storage",
      "Distributed messaging and event streaming",
      "Authentication service",
      "Web server routing"
    ],
    correct: 1,
    explanation: "Kafka is designed for real-time event streaming and message publishing."
  },
  {
    id: 2,
    category: "Producer",
    question: "Which Kafka producer config ensures idempotent message delivery?",
    code: null,
    options: [
      "acks=0",
      "retries=0",
      "enable.idempotence=true",
      "max.in.flight.requests=10"
    ],
    correct: 2,
    explanation: "Enabling idempotence ensures exactly-once delivery by preventing duplicate writes during retries."
  },
  {
    id: 3,
    category: "Consumer Groups",
    question: "What is the purpose of a Kafka Consumer Group?",
    code: null,
    options: [
      "To publish messages",
      "To configure retention policies",
      "To allow load-balanced message consumption",
      "To manage partition keys"
    ],
    correct: 2,
    explanation: "Consumer groups ensure that multiple consumers can divide the partitions of a topic among themselves."
  },
  {
    id: 4,
    category: "Broker",
    question: "What is the role of a Kafka Broker?",
    code: null,
    options: [
      "To group multiple consumers",
      "To route HTTP requests",
      "To manage message storage and delivery",
      "To manage user authentication"
    ],
    correct: 2,
    explanation: "A broker receives messages from producers, stores them, and serves consumers."
  },
  {
    id: 5,
    category: "Partition",
    question: "Why are Kafka topics divided into partitions?",
    code: null,
    options: [
      "To reduce disk usage",
      "To simplify code",
      "To allow parallel processing and scalability",
      "To enable data encryption"
    ],
    correct: 2,
    explanation: "Partitions allow Kafka to scale horizontally and provide high throughput."
  },
  {
    id: 6,
    category: "Consumer",
    question: "What ensures at-least-once message delivery in Kafka consumers?",
    code: null,
    options: [
      "Offset commit",
      "Topic retention",
      "Producer retries",
      "Partition replication"
    ],
    correct: 0,
    explanation: "At-least-once delivery is ensured when consumers manually or automatically commit offsets."
  },
  {
    id: 7,
    category: "Producer",
    question: "Which config controls the number of times a producer retries a failed send?",
    code: null,
    options: [
      "linger.ms",
      "batch.size",
      "retries",
      "max.poll.records"
    ],
    correct: 2,
    explanation: "The 'retries' config sets how many times the producer will retry on failure."
  },
  {
    id: 8,
    category: "Kafka Basics",
    question: "What happens if a Kafka topic has more consumers than partitions?",
    code: null,
    options: [
      "Some consumers will be idle",
      "All consumers receive all messages",
      "Producer fails to send",
      "Partitions merge automatically"
    ],
    correct: 0,
    explanation: "Each partition can be read by only one consumer in a group, so extra consumers are idle."
  },
  {
    id: 9,
    category: "Topic",
    question: "What is the default behavior when producing to a non-existent topic in Kafka?",
    code: null,
    options: [
      "Producer throws an error",
      "Kafka auto-creates the topic",
      "Topic gets dropped",
      "Message is sent to a default topic"
    ],
    correct: 1,
    explanation: "If auto.topic.create is enabled, Kafka creates the topic automatically."
  },
  {
    id: 10,
    category: "Retention",
    question: "How can you configure Kafka to delete messages after a specific time?",
    code: null,
    options: [
      "Set 'message.timeout.ms'",
      "Use 'retention.ms' topic config",
      "Enable 'log.cleaner.enable'",
      "Use 'log.segment.bytes'"
    ],
    correct: 1,
    explanation: "The 'retention.ms' setting defines how long messages are kept in a topic."
  },
  {
    id: 11,
    category: "Offset",
    question: "What is Kafka's offset?",
    code: null,
    options: [
      "The size of the message",
      "A unique identifier for a consumer",
      "The byte size of a partition",
      "A position of a message within a partition"
    ],
    correct: 3,
    explanation: "Offsets identify each message’s position in a partition."
  },
  {
    id: 12,
    category: "Replication",
    question: "Why does Kafka replicate topic partitions?",
    code: null,
    options: [
      "To compress messages",
      "To ensure message ordering",
      "For fault tolerance",
      "To limit throughput"
    ],
    correct: 2,
    explanation: "Replication ensures availability even if a broker fails."
  },
  {
    id: 13,
    category: "Broker",
    question: "How does Kafka maintain high availability of data?",
    code: null,
    options: [
      "Using batch processing",
      "Using leader election and replication",
      "By encrypting messages",
      "By using Zookeeper as the broker"
    ],
    correct: 1,
    explanation: "Kafka uses partition leaders and replicas to ensure availability."
  },
  {
    id: 14,
    category: "Zookeeper",
    question: "What is the role of Zookeeper in Kafka (before KRaft)?",
    code: null,
    options: [
      "Manage producers",
      "Monitor topics",
      "Coordinate brokers and store metadata",
      "Store messages"
    ],
    correct: 2,
    explanation: "Zookeeper handles metadata and broker coordination."
  },
  {
    id: 15,
    category: "KRaft",
    question: "What is KRaft mode in Kafka?",
    code: null,
    options: [
      "Kafka-RabbitMQ fusion",
      "Kafka with Kubernetes",
      "Kafka without Zookeeper",
      "Kafka in Raft-based replication"
    ],
    correct: 2,
    explanation: "KRaft mode removes the dependency on Zookeeper."
  },
  {
    id: 16,
    category: "Throughput",
    question: "Which setting can improve Kafka producer throughput?",
    code: null,
    options: [
      "Reduce retries",
      "Set linger.ms > 0",
      "Disable batching",
      "Use fewer partitions"
    ],
    correct: 1,
    explanation: "Setting linger.ms allows batching which improves throughput."
  },
  {
    id: 17,
    category: "Latency",
    question: "Which config affects Kafka producer latency?",
    code: null,
    options: [
      "linger.ms",
      "acks",
      "batch.size",
      "All of the above"
    ],
    correct: 3,
    explanation: "All these configurations impact message delivery latency."
  },
  {
    id: 18,
    category: "Security",
    question: "Which is not a valid Kafka security mechanism?",
    code: null,
    options: [
      "SASL",
      "SSL",
      "OAuth",
      "JWT"
    ],
    correct: 3,
    explanation: "JWT is not natively supported; OAuth via SASL is preferred."
  },
  {
    id: 19,
    category: "Monitoring",
    question: "Which tool is commonly used for Kafka monitoring?",
    code: null,
    options: [
      "Prometheus",
      "Postman",
      "Git",
      "Eclipse"
    ],
    correct: 0,
    explanation: "Prometheus is often used to monitor Kafka metrics."
  },
  {
    id: 20,
    category: "Retention",
    question: "What happens when a Kafka topic exceeds retention period?",
    code: null,
    options: [
      "It crashes",
      "It archives data",
      "Old messages are deleted",
      "New messages are rejected"
    ],
    correct: 2,
    explanation: "Messages older than retention.ms are deleted automatically."
  }
];
