
  export const questions = [
    {
      id: 1,
      category: "Thread Basics",
      question: "Which method is used to start a thread in Java?",
      code: null,
      options: [
        "run()",
        "start()",
        "execute()",
        "begin()"
      ],
      correct: 1,
      explanation: "start() method is used to begin thread execution. It internally calls run() method."
    },
    {
      id: 2,
      category: "Thread States",
      question: "What will be the output when this code runs?",
      code: `Thread t = new Thread(() -> {
    System.out.println("Thread: " + Thread.currentThread().getState());
});
System.out.println("Before start: " + t.getState());
t.start();
t.join();
System.out.println("After join: " + t.getState());`,
      options: [
        "Before start: NEW\nThread: RUNNABLE\nAfter join: TERMINATED",
        "Before start: RUNNABLE\nThread: NEW\nAfter join: TERMINATED",
        "Before start: NEW\nThread: RUNNING\nAfter join: BLOCKED",
        "Before start: WAITING\nThread: RUNNABLE\nAfter join: NEW"
      ],
      correct: 0,
      explanation: "Thread starts in NEW state, becomes RUNNABLE when started, and TERMINATED after completion."
    },
    {
      id: 3,
      category: "Synchronization",
      question: "What is the main purpose of synchronized keyword?",
      code: null,
      options: [
        "To make methods run faster",
        "To prevent race conditions by ensuring thread-safe access",
        "To create new threads",
        "To terminate threads"
      ],
      correct: 1,
      explanation: "synchronized prevents race conditions by ensuring only one thread can access the synchronized block/method at a time."
    },
    {
      id: 4,
      category: "Lock Levels",
      question: "Guess the output: What happens with instance-level locks?",
      code: `class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
        System.out.println("Count: " + count);
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();

Thread t1 = new Thread(() -> c1.increment());
Thread t2 = new Thread(() -> c2.increment());
t1.start(); t2.start();`,
      options: [
        "Both threads will be blocked and wait for each other",
        "Only one thread will execute at a time",
        "Both threads can execute simultaneously",
        "Compilation error will occur"
      ],
      correct: 2,
      explanation: "Each object (c1, c2) has its own intrinsic lock, so both threads can run in parallel."
    },
    {
      id: 5,
      category: "Static Synchronization",
      question: "What will happen with class-level synchronization?",
      code: `class StaticCounter {
    private static int count = 0;
    public static synchronized void increment() {
        count++;
        System.out.println("Static Count: " + count);
    }
}

Thread t1 = new Thread(() -> StaticCounter.increment());
Thread t2 = new Thread(() -> StaticCounter.increment());
t1.start(); t2.start();`,
      options: [
        "Both threads execute simultaneously, possible race condition",
        "Only one thread executes at a time, output will be: 1, 2",
        "Compilation error",
        "Both threads will deadlock"
      ],
      correct: 1,
      explanation: "Static synchronized methods lock on the class object, ensuring sequential execution."
    },
    {
      id: 6,
      category: "Wait/Notify",
      question: "Which method must be called before wait()?",
      code: null,
      options: [
        "notify()",
        "synchronized block acquisition",
        "Thread.sleep()",
        "interrupt()"
      ],
      correct: 1,
      explanation: "wait() can only be called from within a synchronized block or method."
    },
    {
      id: 7,
      category: "Deadlock",
      question: "Predict the output: Will this code cause deadlock?",
      code: `Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -> {
    synchronized(lock1) {
        System.out.println("T1: Got lock1");
        synchronized(lock2) {
            System.out.println("T1: Got lock2");
        }
    }
});

Thread t2 = new Thread(() -> {
    synchronized(lock2) {
        System.out.println("T2: Got lock2");
        synchronized(lock1) {
            System.out.println("T2: Got lock1");
        }
    }
});`,
      options: [
        "Both threads complete successfully",
        "Potential deadlock - threads may hang forever",
        "T1 always completes first",
        "Compilation error"
      ],
      correct: 1,
      explanation: "Classic deadlock scenario: T1 holds lock1 waiting for lock2, T2 holds lock2 waiting for lock1."
    },
    {
      id: 8,
      category: "ThreadPool",
      question: "Which ExecutorService creates unlimited threads?",
      code: null,
      options: [
        "Executors.newFixedThreadPool(10)",
        "Executors.newSingleThreadExecutor()",
        "Executors.newCachedThreadPool()",
        "Executors.newScheduledThreadPool(5)"
      ],
      correct: 2,
      explanation: "newCachedThreadPool() creates new threads as needed and reuses previously constructed threads when available."
    },
    {
      id: 9,
      category: "Atomic Classes",
      question: "What will be the final value?",
      code: `AtomicInteger counter = new AtomicInteger(0);

// 1000 threads each incrementing 100 times
for (int i = 0; i < 1000; i++) {
    new Thread(() -> {
        for (int j = 0; j < 100; j++) {
            counter.incrementAndGet();
        }
    }).start();
}
// After all threads complete`,
      options: [
        "Less than 100,000 due to race conditions",
        "Exactly 100,000",
        "More than 100,000",
        "Unpredictable value"
      ],
      correct: 1,
      explanation: "AtomicInteger provides lock-free thread-safe operations, ensuring exactly 100,000."
    },
    {
      id: 10,
      category: "Volatile",
      question: "What does volatile keyword guarantee?",
      code: null,
      options: [
        "Atomicity of operations",
        "Visibility and ordering of variables",
        "Thread synchronization",
        "Prevention of deadlocks"
      ],
      correct: 1,
      explanation: "volatile ensures visibility of changes across threads and prevents instruction reordering."
    },
    {
      id: 11,
      category: "Custom Locks",
      question: "Predict the output with custom locks:",
      code: `class CustomLockExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();
    
    public void method1() {
        synchronized(lock1) {
            System.out.println("Method1");
        }
    }
    
    public void method2() {
        synchronized(lock2) {
            System.out.println("Method2");
        }
    }
}

CustomLockExample obj = new CustomLockExample();
Thread t1 = new Thread(() -> obj.method1());
Thread t2 = new Thread(() -> obj.method2());`,
      options: [
        "T2 waits for T1 to complete",
        "Both methods can execute simultaneously",
        "Deadlock occurs",
        "Only T1 executes"
      ],
      correct: 1,
      explanation: "Different custom locks (lock1, lock2) are independent, allowing parallel execution."
    },
    {
      id: 12,
      category: "ReentrantLock",
      question: "What's the advantage of ReentrantLock over synchronized?",
      code: null,
      options: [
        "Better performance in all cases",
        "Automatic lock release",
        "tryLock() with timeout and interruptible locking",
        "No advantages"
      ],
      correct: 2,
      explanation: "ReentrantLock provides tryLock(), lockInterruptibly(), and timeout features that synchronized doesn't have."
    },
    {
      id: 13,
      category: "Producer-Consumer",
      question: "Which is best for producer-consumer pattern?",
      code: null,
      options: [
        "ArrayList with synchronized",
        "Vector",
        "BlockingQueue",
        "HashMap"
      ],
      correct: 2,
      explanation: "BlockingQueue is specifically designed for producer-consumer patterns with built-in blocking operations."
    },
    {
      id: 14,
      category: "CountDownLatch",
      question: "What will happen with CountDownLatch?",
      code: `CountDownLatch latch = new CountDownLatch(3);

// Thread 1
new Thread(() -> {
    System.out.println("Task 1 done");
    latch.countDown();
}).start();

// Thread 2  
new Thread(() -> {
    System.out.println("Task 2 done");
    latch.countDown();
}).start();

// Main thread
latch.await();
System.out.println("All tasks completed");`,
      options: [
        "\"All tasks completed\" prints immediately",
        "Main thread waits forever",
        "Main thread waits until 3 countDown() calls",
        "Compilation error"
      ],
      correct: 2,
      explanation: "Main thread waits at await() until latch count reaches zero (3 countDown() calls needed)."
    },
    {
      id: 15,
      category: "Memory Model",
      question: "What can happen without proper synchronization?",
      code: `class SharedData {
    private boolean flag = false;
    private int value = 0;
    
    // Thread 1
    public void writer() {
        value = 42;
        flag = true;
    }
    
    // Thread 2
    public void reader() {
        if (flag) {
            System.out.println(value);
        }
    }
}`,
      options: [
        "Always prints 42",
        "May print 0, 42, or nothing due to visibility issues",
        "Compilation error",
        "Always prints 0"
      ],
      correct: 1,
      explanation: "Without synchronization, visibility and ordering issues can cause unexpected results."
    },
    {
      id: 16,
      category: "CyclicBarrier",
      question: "How does CyclicBarrier differ from CountDownLatch?",
      code: null,
      options: [
        "No difference",
        "CyclicBarrier is reusable, CountDownLatch is one-time use",
        "CountDownLatch is faster",
        "CyclicBarrier doesn't block threads"
      ],
      correct: 1,
      explanation: "CyclicBarrier can be reset and reused, while CountDownLatch is single-use."
    },
    {
      id: 17,
      category: "Thread Interruption",
      question: "What happens when interrupt() is called?",
      code: `Thread t = new Thread(() -> {
    try {
        Thread.sleep(5000);
        System.out.println("Sleep completed");
    } catch (InterruptedException e) {
        System.out.println("Interrupted!");
    }
});
t.start();
Thread.sleep(1000);
t.interrupt();`,
      options: [
        "\"Sleep completed\" is printed",
        "\"Interrupted!\" is printed",
        "Nothing is printed",
        "Both messages are printed"
      ],
      correct: 1,
      explanation: "interrupt() causes InterruptedException in sleep(), breaking out of sleep early."
    },
    {
      id: 18,
      category: "Semaphore",
      question: "What does Semaphore(2) allow?",
      code: null,
      options: [
        "Only 1 thread access",
        "Unlimited thread access", 
        "Maximum 2 threads access simultaneously",
        "Exactly 2 threads total"
      ],
      correct: 2,
      explanation: "Semaphore(2) allows maximum 2 threads to acquire permits simultaneously."
    },
    {
      id: 19,
      category: "Future and CompletableFuture",
      question: "What's the output of this CompletableFuture?",
      code: `CompletableFuture<Integer> future = CompletableFuture
    .supplyAsync(() -> 10)
    .thenApply(x -> x * 2)
    .thenApply(x -> x + 5);
    
System.out.println(future.get());`,
      options: [
        "10",
        "20", 
        "25",
        "15"
      ],
      correct: 2,
      explanation: "Chain: 10 → (10*2=20) → (20+5=25)"
    },
    {
      id: 20,
      category: "Fork/Join",
      question: "What is work-stealing in Fork/Join framework?",
      code: null,
      options: [
        "Threads steal work from other threads' queues when idle",
        "Framework steals CPU time",
        "Memory is stolen from other processes",
        "It prevents thread creation"
      ],
      correct: 0,
      explanation: "Work-stealing allows idle threads to take tasks from busy threads' work queues for load balancing."
    },
    {
      id: 21,
      category: "ReadWriteLock",
      question: "What's the advantage of ReadWriteLock?",
      code: `ReadWriteLock lock = new ReentrantReadWriteLock();

// Multiple readers
public void read() {
    lock.readLock().lock();
    try {
        // Read data
    } finally {
        lock.readLock().unlock();
    }
}

// Single writer  
public void write() {
    lock.writeLock().lock();
    try {
        // Write data
    } finally {
        lock.writeLock().unlock();
    }
}`,
      options: [
        "No advantage over synchronized",
        "Multiple readers can read simultaneously, but writes are exclusive",
        "Only one reader allowed at a time",
        "Writers have priority over readers always"
      ],
      correct: 1,
      explanation: "ReadWriteLock allows concurrent reads but ensures exclusive write access."
    },
    {
      id: 22,
      category: "Thread Safety",
      question: "Which collection is thread-safe?",
      code: null,
      options: [
        "ArrayList",
        "HashMap",
        "ConcurrentHashMap",
        "LinkedList"
      ],
      correct: 2,
      explanation: "ConcurrentHashMap is designed for concurrent access with high performance."
    },
    {
      id: 23,
      category: "Lock Ordering",
      question: "How to prevent deadlock in this scenario?",
      code: `// Two accounts transferring money
public void transfer(Account from, Account to, int amount) {
    synchronized(from) {
        synchronized(to) {
            from.debit(amount);
            to.credit(amount);
        }
    }
}`,
      options: [
        "Use timeout locks",
        "Order locks by account ID or hash code",
        "Use single global lock",
        "Cannot be prevented"
      ],
      correct: 1,
      explanation: "Consistent lock ordering (by ID/hash) prevents circular wait condition causing deadlock."
    },
    {
      id: 24,
      category: "Thread Local",
      question: "What does ThreadLocal provide?",
      code: null,
      options: [
        "Global variables shared by all threads",
        "Variables that are local to each thread",
        "Synchronized access to variables", 
        "Automatic thread creation"
      ],
      correct: 1,
      explanation: "ThreadLocal provides thread-confined variables - each thread has its own independent copy."
    },
    {
      id: 25,
      category: "Liveness Issues",
      question: "What is livelock?",
      code: null,
      options: [
        "Threads are blocked forever",
        "Threads keep changing state but make no progress",
        "Too many threads are created",
        "Threads finish too quickly"
      ],
      correct: 1,
      explanation: "Livelock occurs when threads continuously change state in response to other threads but make no progress."
    },
    {
      id: 26,
      category: "Mixed Synchronization",
      question: "Predict the output with mixed locks:",
      code: `class MixedSync {
    public synchronized void method1() {
        System.out.println("Method1");
    }
    
    public static synchronized void method2() {
        System.out.println("Method2"); 
    }
}

MixedSync obj = new MixedSync();
Thread t1 = new Thread(() -> obj.method1());
Thread t2 = new Thread(() -> MixedSync.method2());`,
      options: [
        "T2 waits for T1",
        "Both methods can run simultaneously",
        "T1 waits for T2",
        "Deadlock occurs"
      ],
      correct: 1,
      explanation: "Instance method locks on 'this', static method locks on class - different locks, parallel execution possible."
    },
    {
      id: 27,
      category: "Performance",
      question: "Which is generally faster for high contention?",
      code: null,
      options: [
        "synchronized",
        "ReentrantLock",
        "Atomic classes",
        "volatile variables"
      ],
      correct: 2,
      explanation: "Atomic classes use lock-free algorithms (CAS) which perform better under high contention."
    },
    {
      id: 28,
      category: "Exception Handling",
      question: "What happens if exception occurs in synchronized block?",
      code: `public synchronized void method() {
    System.out.println("Before exception");
    throw new RuntimeException("Error!");
    System.out.println("After exception");
}`,
      options: [
        "Lock is never released",
        "Lock is automatically released",
        "Other threads are notified",
        "Program terminates"
      ],
      correct: 1,
      explanation: "JVM automatically releases intrinsic locks when thread exits synchronized block/method, even due to exception."
    },
    {
      id: 29,
      category: "Coordination",
      question: "Which is best for one-time event signaling?",
      code: null,
      options: [
        "CyclicBarrier",
        "CountDownLatch", 
        "Semaphore",
        "synchronized block"
      ],
      correct: 1,
      explanation: "CountDownLatch is perfect for one-time events like 'wait for all initialization to complete'."
    },
    {
      id: 30,
      category: "Complex Output",
      question: "What's the most likely output pattern?",
      code: `class ComplexSync {
    private static int x = 0;
    private int y = 0;
    
    public synchronized void instanceMethod() {
        y++;
        System.out.println("Instance: y=" + y);
    }
    
    public static synchronized void staticMethod() {
        x++;
        System.out.println("Static: x=" + x);
    }
}

ComplexSync obj1 = new ComplexSync();
ComplexSync obj2 = new ComplexSync();

// 4 threads running simultaneously
Thread t1 = new Thread(() -> obj1.instanceMethod());
Thread t2 = new Thread(() -> obj2.instanceMethod()); 
Thread t3 = new Thread(() -> ComplexSync.staticMethod());
Thread t4 = new Thread(() -> ComplexSync.staticMethod());`,
      options: [
        "All methods execute sequentially",
        "Instance methods can run in parallel, static methods are sequential",
        "Static methods can run in parallel, instance methods are sequential", 
        "Complete parallel execution"
      ],
      correct: 1,
      explanation: "Different objects have different instance locks (parallel), but static methods share class lock (sequential)."
    }
  ];