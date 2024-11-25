# CMS System Design

## Objective
Design a type-safe Content Management System (CMS) using TypeScript. The system should include the following components:

1. **Content Structure**: Define a base interface for content, then extend it to support different content types, such as Articles and Products.
2. **Content Operations**: Implement generic types to support operations like create, read, update, and delete (CRUD) for various content types.
3. **Access Control**: Design a role-based access control (RBAC) system to manage user permissions (admin, editor, viewer) with respect to different content operations.
4. **Validation System**: Create a validation framework for content, allowing both basic and composite validators for various content types.
5. **Versioning**: Implement versioning for content to track changes and maintain history over time.

## Requirements
- Use advanced TypeScript features like generics, type aliases, and interfaces to ensure a scalable and maintainable design.
- Ensure type safety across the system for various content types, user roles, and permissions.
- Support basic content operations such as creation, reading, updating, and deletion.
- Implement validation and versioning mechanisms for content.
