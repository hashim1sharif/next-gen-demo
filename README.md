## Cloud-Native Application Deployment using AWS ECS and Fargate

# Project Overview:

This project demonstrates a containerized web application deployment using Amazon ECS (Elastic Container Service) with AWS Fargate for serverless compute. The architecture leverages Amazon ECR for container image storage, AWS Secrets Manager for secure credential management, and Amazon RDS for MySQL as the backend database.
The infrastructure is designed for high availability, scalability, and security, spread across multiple Availability Zones within a VPC (Virtual Private Cloud).

The solution eliminates the need for manual server provisioning, allowing applications to scale automatically and securely handle workloads in a production-ready environment.


# Key Objectives

Containerization and Image Management

Build Docker images using a defined Dockerfile.

Store and manage container images securely in Amazon Elastic Container Registry (ECR).

Serverless Container Deployment

Deploy containers on AWS Fargate to remove the need for EC2 instance management.

Define tasks and services using ECS task definitions for seamless orchestration.

High Availability and Scalability

Use multiple Availability Zones (AZ A & B) for fault tolerance and redundancy.

Ensure consistent application performance under variable load.

Secure Networking Architecture

Separate public, application, and data subnets for security and traffic control.

Utilize NAT gateways and ENIs (Elastic Network Interfaces) for controlled internet access.

Secure Secrets and Configuration Management

Integrate AWS Secrets Manager to store database credentials and sensitive configurations.

Use environmental variables for dynamic runtime configuration.

Database Reliability

Deploy Amazon RDS MySQL in a master–slave configuration for high availability and data redundancy.

Simplified Operations and Maintenance

Centralized monitoring and logging via ECS and CloudWatch (optional).

Automate updates and rollbacks through ECS service management.

# Architecture Diagram