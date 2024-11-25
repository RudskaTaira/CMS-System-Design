import { Article } from '../content/Article';
import { Validator, ValidationResult } from './Validator';

export const articleValidator: Validator<Article> = {
  validate(data: Article): ValidationResult {
    const errors: string[] = [];
    if (!data.title) errors.push("The title must not be empty");
    if (!data.body) errors.push("The content body cannot be left blank");
    return { isValid: errors.length === 0, errors };
  },
};
