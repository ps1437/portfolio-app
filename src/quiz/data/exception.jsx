export const questions = [
  {
    id: 1,
    category: "Exception Basics",
    question: "Which class is the superclass of all exceptions in Java?",
    code: null,
    options: ["Throwable", "Exception", "RuntimeException", "Error"],
    correct: 0,
    explanation: "All exceptions and errors in Java inherit from the Throwable class."
  },
  {
    id: 2,
    category: "Exception Hierarchy",
    question: "Which of the following is an unchecked exception?",
    code: null,
    options: ["IOException", "SQLException", "NullPointerException", "InterruptedException"],
    correct: 2,
    explanation: "NullPointerException is a subclass of RuntimeException, which is unchecked."
  },
  {
    id: 3,
    category: "Try-Catch",
    question: "What happens if an exception is thrown but not caught?",
    code: null,
    options: [
      "Program continues as normal",
      "The program crashes with a stack trace",
      "The JVM rethrows the exception",
      "Compilation error occurs"
    ],
    correct: 1,
    explanation: "If an exception is not caught, the JVM terminates the program and prints a stack trace."
  },
  {
    id: 4,
    category: "Multiple Catch Blocks",
    question: "Which catch block is executed if multiple catch blocks match?",
    code: `try {
    throw new IllegalArgumentException("Invalid");
} catch (RuntimeException e) {
    System.out.println("Runtime");
} catch (IllegalArgumentException e) {
    System.out.println("IllegalArg");
}`,
    options: [
      "IllegalArg",
      "Runtime",
      "Both",
      "Compilation error"
    ],
    correct: 3,
    explanation: "IllegalArgumentException is a subclass of RuntimeException, so the more specific block must come first. Otherwise, it causes a compile-time error."
  },
  {
    id: 5,
    category: "Checked vs Unchecked",
    question: "Which is a checked exception?",
    code: null,
    options: [
      "ArithmeticException",
      "IOException",
      "IllegalStateException",
      "ArrayIndexOutOfBoundsException"
    ],
    correct: 1,
    explanation: "IOException is a checked exception that must be handled or declared."
  },
  {
    id: 6,
    category: "Custom Exceptions",
    question: "How do you create a custom checked exception?",
    code: null,
    options: [
      "Extend Throwable",
      "Extend RuntimeException",
      "Extend Exception",
      "Extend Error"
    ],
    correct: 2,
    explanation: "Custom checked exceptions should extend Exception but not RuntimeException."
  },
  {
    id: 7,
    category: "Finally Block",
    question: "Does the finally block always execute?",
    code: null,
    options: [
      "Yes, always",
      "No, if System.exit is called",
      "No, if exception is thrown",
      "Only if exception is caught"
    ],
    correct: 1,
    explanation: "finally always executes except when the JVM exits (e.g., System.exit())."
  },
  {
    id: 8,
    category: "Throws Keyword",
    question: "What is the purpose of the throws keyword?",
    code: null,
    options: [
      "To handle exceptions",
      "To suppress exceptions",
      "To declare an exception might be thrown",
      "To catch runtime exceptions"
    ],
    correct: 2,
    explanation: "throws is used to declare that a method might throw a checked exception."
  },
  {
    id: 9,
    category: "Throw Keyword",
    question: "Which of these is valid for throw statement?",
    code: null,
    options: [
      "throw new IOException();",
      "throw IOException;",
      "throw IOException();",
      "throw new IOException;"
    ],
    correct: 0,
    explanation: "Only throw new IOException(); is syntactically correct."
  },
  {
    id: 10,
    category: "Exception Propagation",
    question: "What is exception propagation?",
    code: null,
    options: [
      "Exception caught at method where it occurred",
      "Exception passed up the call stack until caught",
      "Exception ignored silently",
      "All exceptions are converted to runtime"
    ],
    correct: 1,
    explanation: "If not caught, the exception moves up the call stack until caught."
  },
  {
    id: 11,
    category: "RuntimeException",
    question: "Which of these is a subclass of RuntimeException?",
    code: null,
    options: ["IOException", "SQLException", "ArithmeticException", "InterruptedException"],
    correct: 2,
    explanation: "ArithmeticException is an unchecked exception under RuntimeException."
  },
  {
    id: 12,
    category: "Exception Matching",
    question: "Which catch block is used when subclass and superclass are both present?",
    code: `try {
    throw new IndexOutOfBoundsException();
} catch (IndexOutOfBoundsException e) {
    System.out.println("Index");
} catch (RuntimeException e) {
    System.out.println("Runtime");
}`,
    options: [
      "Index",
      "Runtime",
      "Both",
      "Compilation error"
    ],
    correct: 0,
    explanation: "IndexOutOfBoundsException is more specific, so that block is chosen."
  },
  {
    id: 13,
    category: "Try with Resources",
    question: "What is the advantage of try-with-resources?",
    code: null,
    options: [
      "Automatically handles exceptions",
      "Automatically closes resources",
      "Ignores exceptions",
      "Faster exception handling"
    ],
    correct: 1,
    explanation: "try-with-resources auto-closes any resource implementing AutoCloseable."
  },
  {
    id: 14,
    category: "AutoCloseable",
    question: "Which interface must a class implement to use try-with-resources?",
    code: null,
    options: ["Serializable", "Closeable", "AutoCloseable", "Cloneable"],
    correct: 2,
    explanation: "Classes must implement AutoCloseable for try-with-resources."
  },
  {
    id: 15,
    category: "Suppressed Exceptions",
    question: "What happens if both try and finally throw exceptions?",
    code: null,
    options: [
      "Only try exception is shown",
      "Only finally exception is shown",
      "Both are shown, finally suppressed",
      "Both are shown, try suppressed"
    ],
    correct: 3,
    explanation: "If both throw, finally's exception is shown, try's is suppressed."
  },
  {
    id: 16,
    category: "Errors vs Exceptions",
    question: "Which is true about Error class?",
    code: null,
    options: [
      "It's a checked exception",
      "Should be caught in code",
      "Indicates serious problems like JVM crash",
      "Extends Exception"
    ],
    correct: 2,
    explanation: "Error indicates critical issues (e.g., OutOfMemoryError) and shouldn't be caught."
  },
  {
    id: 17,
    category: "NullPointerException",
    question: "What causes a NullPointerException?",
    code: `String s = null;
System.out.println(s.length());`,
    options: [
      "s is not initialized",
      "s points to empty string",
      "s is null, accessing method on null causes NPE",
      "Compiler error"
    ],
    correct: 2,
    explanation: "Accessing a method or field on null causes NullPointerException."
  },
  {
    id: 18,
    category: "StackOverflowError",
    question: "What leads to StackOverflowError?",
    code: `public void recurse() {
    recurse();
}`,
    options: [
      "Memory leak",
      "Infinite recursion",
      "Large object allocation",
      "Too many variables"
    ],
    correct: 1,
    explanation: "Infinite recursion leads to stack memory exhaustion – StackOverflowError."
  },
  {
    id: 19,
    category: "ArrayIndexOutOfBounds",
    question: "What is the cause of ArrayIndexOutOfBoundsException?",
    code: `int[] arr = {1, 2, 3};
System.out.println(arr[3]);`,
    options: [
      "Array is null",
      "Index 3 is out of bounds (valid: 0-2)",
      "arr is not initialized",
      "No elements in array"
    ],
    correct: 1,
    explanation: "Valid indices are 0 to 2, accessing arr[3] throws exception."
  },
  {
    id: 20,
    category: "Catch or Declare Rule",
    question: "What must be done for checked exceptions?",
    code: null,
    options: [
      "Must be caught or declared with throws",
      "Must be ignored",
      "Can’t be declared",
      "Converted to unchecked"
    ],
    correct: 0,
    explanation: "Java requires checked exceptions to be caught or declared in method signature."
  },
  {
  id: 21,
  category: "Finally Block",
  question: "What will be the output of the following code?",
  code: `public int test() {
    try {
        return 1;
    } finally {
        return 2;
    }
}`,
  options: [
    "1",
    "2",
    "Compilation error",
    "Exception is thrown"
  ],
  correct: 1,
  explanation: "finally overrides the return from try block. So the method returns 2."
},
{
  id: 22,
  category: "Finally Block",
  question: "Which statement is true about finally block?",
  code: null,
  options: [
    "finally block executes only when exception occurs",
    "finally block never executes if exception is caught",
    "finally block executes always unless JVM exits",
    "finally block executes only in try-with-resources"
  ],
  correct: 2,
  explanation: "finally is designed to always execute, even if exception is not thrown."
},
{
  id: 23,
  category: "Finally Block",
  question: "What is the output?",
  code: `public static void main(String[] args) {
    try {
        throw new RuntimeException("Try");
    } finally {
        System.out.println("Finally executed");
    }
}`,
  options: [
    "Nothing is printed",
    "Only exception is thrown",
    "Finally executed",
    "Compile-time error"
  ],
  correct: 2,
  explanation: "finally block executes even if an exception is thrown."
},
{
  id: 24,
  category: "Finally Block",
  question: "What is the behavior of System.exit() in try-finally?",
  code: `try {
    System.exit(0);
} finally {
    System.out.println("Finally block");
}`,
  options: [
    "Finally block is executed",
    "Finally block is skipped",
    "Compilation error",
    "RuntimeException occurs"
  ],
  correct: 1,
  explanation: "System.exit(0) shuts down the JVM immediately; finally block won’t execute."
},
{
  id: 25,
  category: "Inheritance & Exceptions",
  question: "Which method override is valid?",
  code: `class Parent {
    void m() throws IOException {}
}

class Child extends Parent {
    @Override
    void m() throws FileNotFoundException {} 
}`,
  options: [
    "Compilation error",
    "Valid override - more specific checked exception",
    "Only unchecked exceptions allowed",
    "Throws clause must be removed"
  ],
  correct: 1,
  explanation: "Child class can throw same or more specific checked exceptions."
},
{
  id: 26,
  category: "Inheritance & Exceptions",
  question: "Can child class throw unchecked exception while parent does not?",
  code: null,
  options: [
    "Yes, only if it overrides method",
    "No, must match parent signature",
    "Only checked exceptions are allowed in override",
    "Only if declared with @ThrowsUnchecked"
  ],
  correct: 0,
  explanation: "Child can throw unchecked exceptions even if parent does not."
},
{
  id: 27,
  category: "Inheritance & Exceptions",
  question: "Which override is **invalid**?",
  code: `class A {
    void foo() throws Exception {}
}

class B extends A {
    void foo() throws Throwable {}
}`,
  options: [
    "Valid override",
    "Invalid - Throwable is broader than Exception",
    "Invalid - Throwable can't be thrown",
    "Valid if foo() is private"
  ],
  correct: 1,
  explanation: "You cannot override with broader checked exceptions. Throwable is broader than Exception."
},
{
  id: 28,
  category: "Inheritance & Exceptions",
  question: "Which exception method can be removed in subclass?",
  code: `class Animal {
    void eat() throws IOException {}
}

class Dog extends Animal {
    void eat() {}
}`,
  options: [
    "Compilation error",
    "eat() must throw IOException",
    "Valid override without exception",
    "Must throw RuntimeException instead"
  ],
  correct: 2,
  explanation: "A subclass can override and remove checked exceptions from parent method."
},
 {
    id: 29,
    category: "Miscellaneous",
    question: "What is the default value of an int variable in a class?",
    code: null,
    options: [
      "0",
      "null",
      "undefined",
      "Throws error"
    ],
    answer: "0"
  },
  {
    id: 30,
    category: "Miscellaneous",
    question: "Which one is not a valid Java keyword?",
    code: null,
    options: [
      "instanceof",
      "native",
      "volatile",
      "unsigned"
    ],
    answer: "unsigned"
  },
  {
    id: 31,
    category: "Miscellaneous",
    question: "What is the output of the following code?",
    code: `
String s1 = "hello";
String s2 = new String("hello");
System.out.println(s1 == s2);
    `,
    options: [
      "true",
      "false",
      "Compilation error",
      "Runtime error"
    ],
    answer: "false"
  },
  {
    id: 32,
    category: "Miscellaneous",
    question: "Which Java feature allows multiple methods with the same name but different parameters?",
    code: null,
    options: [
      "Overloading",
      "Overriding",
      "Abstraction",
      "Encapsulation"
    ],
    answer: "Overloading"
  }



];
