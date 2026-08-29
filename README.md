# ♟️ Chess Game & Personally Trained Chess Engine

A chess game built from scratch, featuring a personally trained chess engine, online multiplayer, and a computer-vision input mode where moves are made by writing algebraic notation on paper and showing it to a camera.

**Estimated Timeline:** 1–2 years

---

## 🎯 Project Vision

The goal is to build a complete chess platform from scratch, starting with a fully functional local chess game and gradually expanding it into an online multiplayer platform with an AI opponent and a unique computer-vision input system.

The project will be developed incrementally, with each phase building on the previous one.

---

# 🛠️ Development Roadmap

## Phase 1 — Core Chess Game

**Goal:** Build a complete and reliable chess foundation.

This phase must be completed before moving to the advanced features.

### 1. Board & Game State

* Represent the chess board using an 8×8 grid
* Track piece positions and colors
* Maintain the current game state
* Track whose turn it is

### 2. Move Generation

* Implement legal movement for all chess pieces
* Pawn movement and captures
* Knight movement
* Bishop movement
* Rook movement
* Queen movement
* King movement

### 3. Special Chess Rules

* Implement castling
* Implement en passant
* Implement pawn promotion

### 4. Game Validation

* Detect check
* Detect checkmate
* Detect stalemate
* Prevent illegal moves

### 5. Game Management

* Implement move history
* Implement undo functionality
* Maintain captured pieces
* Support restarting a game

### 6. Local Chess UI

* Build a basic chess board interface
* Allow two humans to play on the same screen
* Display legal moves
* Display the current turn
* Display game-ending states

**Phase 1 Completion Goal:**
A fully playable two-player chess game running locally with correct chess rules.

---

# 🤖 Phase 2 — Basic AI Opponent

**Goal:** Introduce a computer-controlled opponent and create the first single-player version of the game.**

### 1. Chess AI Foundation

* Implement the Minimax algorithm
* Add Alpha-Beta pruning
* Connect the AI to the existing legal move generator

### 2. Board Evaluation

* Implement material-based evaluation
* Add positional evaluation
* Implement piece-square tables

### 3. Difficulty System

* Implement adjustable search depth
* Create different difficulty levels
* Test AI response time

### 4. AI Testing

* Play against the AI
* Playtest against friends
* Identify weak positions and incorrect decisions
* Improve evaluation and search performance

**Phase 2 Completion Goal:**
A playable single-player chess game where a human can compete against the computer at multiple difficulty levels.

---

# 🌐 Phase 3 — Online Multiplayer

**Goal:** Allow two players to play chess against each other online in real time.**

### 1. Backend

* Set up the backend server
* Implement WebSocket communication
* Create game/session management

### 2. Matchmaking

* Create a game using a room code
* Allow another player to join using the room code
* Implement basic matchmaking/queue functionality

### 3. Real-Time Gameplay

* Synchronize moves between both players
* Synchronize board state
* Validate moves on the server
* Keep both clients synchronized

### 4. Connection Handling

* Handle player disconnections
* Handle reconnections
* Prevent invalid or duplicate moves
* Maintain game state during temporary connection loss

### 5. Spectator Mode

* Add basic spectator functionality
* Allow spectators to view an ongoing game

**Phase 3 Completion Goal:**
Two players can successfully create/join a game and play a complete chess match online in real time.

---

# 📷 Phase 4 — Computer Vision Input Mode

**Goal:** Introduce the project's main differentiating feature: playing chess by writing algebraic notation on paper and showing it to a camera.**

This system will work as a standalone input method connected to the existing chess move validator.

### 1. Camera Pipeline

* Set up camera capture
* Capture images/video frames
* Process the camera input

### 2. Handwriting Recognition

* Implement handwriting recognition
* Recognize algebraic chess notation
* Support notation such as `Nf3` and `exd5`

### 3. Move Processing

* Convert recognized handwriting into text
* Parse the notation into a chess move
* Send the move to the existing move validator
* Validate the move against legal moves

### 4. Error Handling

* Detect ambiguous recognition
* Handle incorrectly recognized notation
* Add a confirmation step before making uncertain moves

### 5. Real-World Testing

* Test different handwriting styles
* Test different lighting conditions
* Test different camera angles
* Improve recognition accuracy

**Phase 4 Completion Goal:**
A player can write a chess move on paper, show it to a camera, and have the system recognize and execute the move correctly.

---

# 🧠 Phase 5 — Engine Upgrade

**Stretch Goal**

**Goal:** Move beyond the basic Minimax-based AI and explore self-play training approaches.**

This phase will only begin after Phases 1–4 are stable and working.

### 1. Research

* Research self-play training approaches
* Study AlphaZero-style approaches
* Study Leela-style approaches

### 2. Architecture Decision

* Decide between a full neural-network chess engine
* Or an improved heuristic/search-based engine
* Determine realistic project scope

### 3. Training Pipeline

* Set up the training environment
* Implement the required training pipeline
* Generate training games through self-play

### 4. Benchmarking

* Benchmark the upgraded engine
* Compare it against the Phase 2 engine
* Analyze playing strength and performance

**Phase 5 Completion Goal:**
A significantly improved chess engine trained or optimized using advanced approaches and benchmarked against the original AI.

---

# 👥 Collaboration

This project is being developed collaboratively by:

### Muhammad Shoaib ul Hassan

### Muhammad Umar Khan

> Responsibilities may evolve as the project grows and different phases require different areas of focus.

---

# 📅 Development Strategy

The project will follow a sequential development approach:

**Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5**

Each phase should reach a stable and demonstrable state before the next major phase begins.

### Core Principle

> **Build it → Test it → Improve it → Move to the next phase.**

The project should remain playable and demoable throughout development rather than waiting until the end for a complete product.

---

# ⚠️ Important Notes

* Phase 1 is the foundation of the entire project and must be reliable.
* The existing legal move validator should be reused wherever possible.
* Phase 4 should not be started until Phases 1–3 are working end to end.
* Computer vision is expected to be the most experimental and time-consuming component.
* The engine upgrade in Phase 5 is intentionally treated as a stretch goal.
* Every major phase should produce something functional that can be tested and demonstrated.

---

# 🏁 Final Goal

Build a complete chess platform from scratch that combines:

**♟️ Chess Game**
→ **🤖 AI Opponent**
→ **🌐 Online Multiplayer**
→ **📷 Computer Vision Input**
→ **🧠 Personally Trained Chess Engine**

**Estimated Timeline:** 1–2 years
