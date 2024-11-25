import { Product } from '../content/Product';
import { Validator, ValidationResult } from './Validator';

export const productValidator: Validator<Product> = {
  validate(data: Product): ValidationResult {
    const errors: string[] = [];
    if (!data.name) errors.push("The name cannot be empty");
    if (data.price <= 0) errors.push("The price must be greater than zero");
    return { isValid: errors.length === 0, errors };
  },
};
