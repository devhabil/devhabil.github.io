---
title: "OrgSync"
tagline: "Distributed HR Microservices System"
summary: "A distributed HR platform decomposed into independently deployable microservices — employee, attendance, and payroll domains communicating through service discovery and clean REST contracts."
techStack: ["Java", "Spring Boot", "Spring Cloud", "Eureka"]
keyFeatures:
  - "Service discovery powered by Netflix Eureka for resilient, location-transparent inter-service communication"
  - "Domain-driven service boundaries separating employee, attendance, and payroll concerns"
  - "Spring Cloud configuration management and gateway-style request routing"
  - "Highly normalized relational schemas per service, keeping data ownership strict and auditable"
heroImage: "/images/projects/orgsync.svg"
heroImageAlt: "Mockup of the OrgSync employee management dashboard"
github_link: "https://github.com/devhabil/OrgSync"
order: 1
---

## Overview

OrgSync is a distributed HR management system designed to replace a single monolithic HR tool with a set of focused, independently deployable services. The platform covers the core domains of workforce operations — employee master data, attendance tracking, and payroll processing — each implemented as its own Spring Boot service with its own database schema.

The goal of the project was to prove that an HR system used by a growing organization could scale horizontally without sacrificing data integrity. Every service owns its tables exclusively, and no service ever reaches into another service's database.

## Architecture

The system is built around **domain-driven service boundaries**:

- **Employee Service** — the system of record for employee profiles, organizational units, and employment status.
- **Attendance Service** — ingests check-in/check-out events and computes attendance summaries per period.
- **Payroll Service** — consumes approved attendance summaries and generates payroll runs.

All three services register themselves with **Netflix Eureka**, the discovery server at the center of the topology. Instead of hard-coded hosts, services resolve each other through logical names, which makes the deployment topology flexible — instances can be scaled up or down and the rest of the system adapts without configuration changes.

**Spring Cloud** ties the platform together: centralized configuration bootstrap, client-side load balancing across discovered instances, and declarative REST clients for inter-service calls. Each service exposes a versioned REST contract, so consumers evolve independently of providers.

## Engineering Highlights

The most interesting challenge was defining the communication model between payroll and attendance. Payroll needs attendance summaries, but it must never block on attendance availability. The services therefore agree on an explicit, versioned REST contract with defensive timeouts and idempotent retry semantics on the payroll side.

Database schemas were designed to **third normal form** with explicit foreign keys and check constraints at the database level — not only in application code — so that invalid state is rejected even by manual interventions.

## Outcome

The result is an HR platform where each domain can be developed, tested, and deployed in isolation. Adding a new HR capability (for example, leave management) means adding a new service that registers with Eureka — not modifying a monolith — which keeps the change surface small and reviewable.
