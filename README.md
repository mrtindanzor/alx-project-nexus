# Consensus

## Project Overview

**Consensus** is a real-time polling application built for the **ALX Project Nexus**.  
The application allows users to create polls, vote on them, and view live results as votes are submitted.

The project emphasizes:
- real-time communication
- clear separation of responsibilities
- feature-driven code organization
- guaranteed data availability during server rendering

---

## Where Polls Are Displayed

Polls are **not listed globally** in the application.

Poll data is displayed **only in two places**:
1. **Poll Voting Page**
2. **Poll Results Page**

There is no general poll listing page.

---

## Application Behavior (Case by Case)

### 1. Creating a Poll (New Poll Feature)

- Polls are created using a **REST API**
- The REST endpoint is responsible only for poll creation
- After a poll is successfully created:
  - a **poll voting link** is displayed
  - a **poll results link** is displayed
- These links are **conditionally rendered** on the same page
- No automatic redirection occurs
- Users can copy and share both links

---

### 2. Fetching a Poll (Vote & Results Features)

- Poll data is fetched using **GraphQL**
- GraphQL is used **only for reading poll data**
- Each page fetches only the data required for that poll

Used in:
- Poll Voting Page
- Poll Results Page

---

### 3. Voting on a Poll (Voting Feature)

- Votes are sent using **WebSockets**
- Voting does not use REST or GraphQL mutations
- Votes are transmitted to the server in real time

---

### 4. Viewing Live Results (Results Feature)

- The results page listens for **WebSocket events**
- When a vote is cast:
  - the server broadcasts updated results
  - all connected clients receive the update instantly
  - the UI updates without a page refresh

---

## Real-Time Data Flow

1. User creates a poll via REST
2. Vote and results links are conditionally rendered
3. Users open the Vote or Results page
4. Poll data is fetched via GraphQL
5. A WebSocket connection is established
6. Votes are sent through WebSockets
7. Updated results are broadcast to all clients

---

## State Management (React Query)

**React Query** is used to manage server state:

- GraphQL queries are cached
- Queries are prefetched on the server
- WebSocket updates are merged into the query cache

This ensures:
- consistent data across pages
- minimal network requests
- predictable UI updates

---

## Server Rendering & Prefetching

- Poll queries are **prefetched during server rendering**
- Vote and Results pages always render with data available
- Prevents loading gaps and improves performance

---

## Feature-Driven Architecture

The project is organized by **features**, not by file types.

Each feature owns:
- its UI components
- its data fetching logic
- its real-time update handling (where applicable)

Core features include:
- New Poll
- Poll Voting
- Poll Results

---

## Git Workflow & Code Quality

This project uses a **GitHub Actions workflow** to enforce code quality during development.

### Pull Request Checks

- Every pull request targeting the `main` branch triggers a **linter workflow**
- The workflow runs automatically to validate code before merging

The checks include:
- dependency installation
- linting
- build verification

This ensures:
- consistent code style
- early detection of errors
- stable main branch

---

## Technologies Used

- React
- REST API (poll creation)
- GraphQL (poll fetching, read-only)
- WebSockets (voting and live updates)
- React Query (server state management)
- GitHub Actions (pull request validation)
- Feature-driven architecture

---

## Project Goal

This project demonstrates:
- correct separation of REST, GraphQL, and WebSockets
- real-time data synchronization
- server-safe data fetching
- enforced code quality through CI
- scalable frontend structure

---

## Project Name

**Consensus** represents collective decision-making through live participation.
