# WeatherWatch - Real-time Weather Dashboard

## Project Overview

**WeatherWatch** is a web application that provides real-time weather information for any city around the world. The app is built with HTML, CSS, and JavaScript, and fetches data from the OpenWeatherMap API. It demonstrates modern DevOps practices such as containerization with Docker, orchestration using Kubernetes, automated CI/CD with GitHub Actions, and monitoring with Prometheus and Grafana.

## Features

- **Real-time weather updates**: Displays the current weather, temperature, and humidity for any city.
- **Dynamic background**: Changes the background color based on the weather conditions (e.g., sunny, rainy, cloudy).
- **Fully containerized**: The app is containerized with Docker for easy deployment.
- **Kubernetes orchestration**: Deployed using Kubernetes for high availability and scalability.
- **Automated CI/CD**: Automatically builds and deploys the app using GitHub Actions.
- **Monitoring**: Prometheus and Grafana are integrated for application health monitoring.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap API
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube or cloud services like AWS EKS, Azure AKS, GCP GKE)
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus and Grafana
- **Cloud**: DockerHub (for hosting container images)

---

## Prerequisites

Before you begin, ensure you have the following tools installed:

- **Docker**: [Install Docker](https://www.docker.com/products/docker-desktop)
- **Minikube** (or a cloud Kubernetes cluster): [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
- **Kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- **GitHub Account**: For setting up the CI/CD pipeline.
- **OpenWeatherMap API Key**: [Sign up at OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to obtain an API key.

---

## Getting Started

### 1. Clone the Repository

Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

