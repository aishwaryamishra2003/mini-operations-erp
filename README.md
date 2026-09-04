# Mini Operations ERP

A full-stack Operations ERP application that manages Inventory, Work Orders, Internal Transfers, and Customer Reservations.

## Live Demo

### Frontend
https://mini-operation-erp.vercel.app/

### Backend API
https://mini-operations-erp-a6ps.onrender.com

### GitHub Repository
https://github.com/aishwaryamishra2003/mini-operations-erp

---

## Features

- JWT Authentication
- Inventory Management
- Work Order Management
- Internal Transfers
- Customer Reservations
- Dashboard Analytics
- REST APIs
- PostgreSQL Database

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT
- Sequelize ORM

### Database
- PostgreSQL

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Database Schema

### Users

| Column | Type |
|----------|----------|
| id | Integer (PK) |
| email | String |
| password | String |
| role | String |

### Inventory

| Column | Type |
|----------|----------|
| id | Integer (PK) |
| itemName | String |
| sku | String |
| quantity | Integer |
| location | String |

### WorkOrders

| Column | Type |
|----------|----------|
| id | Integer (PK) |
| itemName | String |
| location | String |
| requiredQty | Integer |
| shortageQty | Integer |
| status | String |

### Transfers

| Column | Type |
|----------|----------|
| id | Integer (PK) |
| itemName | String |
| quantity | Integer |
| sourceLocation | String |
| destinationLocation | String |
| status | String |

### Reservations

| Column | Type |
|----------|----------|
| id | Integer (PK) |
| customerName | String |
| itemName | String |
| quantity | Integer |
| status | String |

### Relationships

- Users create and manage Work Orders.
- Inventory items can be transferred between locations.
- Inventory items can be reserved for customers.
- Transfers and Reservations affect available inventory quantity.

## Installation

### Clone Repository

```bash
git clone https://github.com/aishwaryamishra2003/mini-operations-erp.git
