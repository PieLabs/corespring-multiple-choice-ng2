class Choice {
  label: String;
  value: String;
}

export class Config {
  prompt: string;
  choiceMode: string;
  keyMode: string;
  disabled: boolean;
  choices: Array<Choice>;
}