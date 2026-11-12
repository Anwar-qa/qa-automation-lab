# Test Design

## 1. What is a test for?

A test checks that build quality

## 2. The test pyramid

- Unit test: a specific function
- API test: to test the backend 
- UI test: to test the front end

Why the shape matters: unit and API tests are fast and cheap, so I write many. UI tests are slow and break easily, so I write few.
