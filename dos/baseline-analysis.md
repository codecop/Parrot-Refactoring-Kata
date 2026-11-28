# Baseline Analysis – Parrot Refactoring

## 1. Project Introduction

This project focuses on refactoring the legacy Parrot Python code.

The objective is to improve the internal design of the code while preserving its external behavior.

## 2. Identified Code Smells

| No. | Code Smell | Fowler Refactoring Technique |
|---|---|---|
| 1 | Type Code | Replace Type Code with Subclasses |
| 2 | Complex Conditional Logic | Replace Conditional with Polymorphism |
| 3 | Long Method | Extract Method |
| 4 | Duplicated Code | Extract Method |
| 5 | Poor Class Responsibilities | Extract Class |

## 3. Characterization Tests

Characterization tests record the existing behavior of the legacy code.

These tests ensure that the program produces the same results before and after refactoring.

All tests should pass before and after every refactoring.

## 4. Refactoring Objectives

- Improve code readability.
- Reduce complex conditional logic.
- Apply inheritance and polymorphism.
- Improve code organization.
- Preserve existing behavior.

## 5. Conclusion

Baseline analysis identifies existing code smells and provides a plan for improving the internal design of the Parrot project.
