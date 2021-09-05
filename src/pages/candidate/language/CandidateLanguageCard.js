import React, { useEffect, useState } from "react";
import { Button, Card, Rating } from "semantic-ui-react";
import LanguageService from "../../../services/languageService";

export default function CandidateLanguageCard(props) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const languageService = new LanguageService();
    languageService
      .getAllByCvId(36)
      .then((result) => setLanguages(result.data.data))
      .catch((e) => console.log(e));
  }, []);

  const setFieldValues = (language) => {
    props.setFieldValue("languageName", language.languageName);
    props.setFieldValue("languageLevel", language.languageLevel);
    props.setFieldValue("id", language.id);
  };
  return (
    <Card.Group>
      {languages.map((language) => (
        <Card key={language.id} fluid>
          <Card.Content>
            <Button inverted icon="delete" color="red" floated="right"></Button>
            <Button
              inverted
              icon="edit"
              color="green"
              floated="right"
              onClick={() => {
                props.setLangOpen(true);
                setFieldValues(language);
              }}
            ></Button>
            <Card.Header>{language.languageName}</Card.Header>
            <Card.Content>
              <Rating
                rating={language.languageLevel}
                maxRating={5}
                disabled
                icon="star"
                size="small"
              />
            </Card.Content>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
