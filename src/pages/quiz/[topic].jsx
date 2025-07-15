"use client";

import QuizMaster from '../../quiz/components/QuizMaster';
import { questions as kafkaQuestions } from '../../quiz/data/kafka';
import { questions as threadQuestions } from '../../quiz/data/multithread';
import { questions as exceptionQuestions } from '../../quiz/data/exception';

const quizMap = {
    kafka: {
        title: "Kafka Quiz",
        subTitle: "Test your knowledge of Kafka concepts and features",
        questions: kafkaQuestions
    },
    threads: {
        title: "Java Multithreading Quiz",
        subTitle: "Test your knowledge of Java concurrency and multithreading concepts",
        questions: threadQuestions
    },

    exceptions: {
        title: "Java Exceptions Quiz",
        subTitle: "Test your knowledge of Exceptions in Java",
        questions: exceptionQuestions
    },


};

export default function QuizPage({ query }) {
    const topic = query.topic;
    const quiz = quizMap[topic];

    if (!quiz) {
        return <div className="text-white p-4">Quiz not found</div>;
    }

    return (
        <QuizMaster
            title={quiz.title}
            subTitle={quiz.subTitle}
            questions={quiz.questions}
        />
    );
}

QuizPage.getInitialProps = ({ query }) => {
    return { query };
};
