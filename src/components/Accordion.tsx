import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Accordion.module.css";
import { useRouter } from "next/router";
import { FlexRowContainer, Text } from "../styles/Global/Components";
import { Button } from "../styles/Global/Button";

export default function Accordion({ items }: { items?: any }) {
  const [opened, setOpened] = useState(-1);

  const [block, setBlock] = useState(3)
  const questionsBlock = items.slice(0, block)

  const [elems, setElems] = useState(questionsBlock);

  const loadMoreQuestions = () => {
    setBlock(prevState => prevState +10)
  }

  const questions = () => {
    setElems(questionsBlock)
  }

  useEffect(() => {
    questions()
  }, [elems, block])

  const toggleQuestion = (elem: any, index: number) => {
    if (opened === index) {
      return setOpened(-1);
    }
    setOpened(index);
  };

  return (
    <div className={styles["questions-wrapper"]}>
      <div className={styles["list-wrapper"]}>
        <div className={styles["question-list"]}>
          {
          elems.map((elem: any, index: number) => (
            <div
              key={index}
              className={styles["question-item"]}
              onClick={() => toggleQuestion(elem, index)}
            >
              <div
                className={`${styles["question-line"]} ${
                  opened === index ? styles["question-line-special"] : ""
                }`}
              >
                <div className={styles["question-text"]}>{elem.title}</div>
                <button
                  className={`${styles["question-button"]} ${
                    opened === index ? styles["question-button-rotated"] : ""
                  }`}
                >
                  <Image
                    src="/assets/icons/down.svg"
                    width={20}
                    height={20}
                    alt='Down Chevron'
                  />
                </button>
              </div>
              <div
                className={`${styles["question-detail"]} ${
                  opened === index
                    ? styles["question-detail-opened"]
                    : styles["question-detail-closed"]
                }`}
              >
                {elem.description}
              </div>
            </div>
          ))}
        </div>
        <FlexRowContainer mt>
          {
            items.length > block ? (
              <Button bgColor='#FFF' color='black' fw='bold' onClick={ loadMoreQuestions }>Cargar más preguntas</Button>
            ): (
              <Text>No hay más preguntas</Text>
            )
          }
        </FlexRowContainer>
      </div>
    </div>
  );
}
