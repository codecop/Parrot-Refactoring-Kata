# Baseline Analysis - Parrot Refactoring

## 1. Project Introduction

This project focuses on refactoring the legacy Parrot Python code (Python/parrot.py).
The objective is to improve the internal design of the code while preserving its external behavior.

## 2. Identified Code Smells

| No. | Code Smell | Where | Fowler Refactoring Technique |
|-----|------------|-------|------------------------------|
| 1 | Type Code | ParrotType enum and self._type | Replace Type Code with Subclasses |
| 2 | Switch Statements | match self._type in speed() | Replace Conditional with Polymorphism |
| 3 | Duplicated Switch | same match self._type again in cry() | Replace Conditional with Polymorphism |
| 4 | Magic Numbers | 12.0, 9.0, 24.0 | Replace Magic Number with Symbolic Constant |
| 5 | Temporary Field | number_of_coconuts, voltage, nailed are used by only some parrot types | Push Down Field |
| 6 | Trivial Methods Returning Constants | _base_speed(), _load_factor() | Inline Method |

## 3. Characterization Tests

Characterization tests record the existing behavior of the legacy code.
The existing 11 tests in test_parrot.py pass before refactoring (11 passed).
These tests ensure that the program produces the same results before and after refactoring.
All tests should pass before and after every refactoring.

## 4. Refactoring Objectives

- Replace magic numbers with named constants.
- Extract small methods from speed() and cry().
- Replace the type code with subclasses (EuropeanParrot, AfricanParrot, NorwegianBlueParrot).
- Replace the match statements with polymorphism and add a factory function.
- Preserve existing behavior.

## 5. Conclusion

Baseline analysis identifies the existing code smells and provides a plan for improving the internal design of the Parrot project.
