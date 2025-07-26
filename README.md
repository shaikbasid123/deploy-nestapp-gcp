# deploy-nestapp-gcp

I have created a simple NestJS application\
It is running on my private external IP address in kubernetes cluster\

Architecture:
| Tier     | Tech              | Cluster Location | Notes                                               |
| -------- | ----------------- | ---------------- | --------------------------------------------------- |
| Frontend | Angular (SPA)     | Public Subnet    | Exposed via LoadBalancer                            |
| Backend  | NestJS (Node.js)  | Private Subnet   | Connects securely to Cloud SQL over VPC             |
| Database | Cloud SQL (MySQL) | Private IP       | No public IP, connected via private VPC peering     |
| Infra    | Terraform         | GCS backend      | Remote state with locking enabled via Cloud Storage |

Security Considerations:

. Cloud SQL uses private IP only, no external exposure\
. Backend deployed to private GKE subnet\
. port:3306 (MySQL) only from backend subnet\
. HTTP(S) only to frontend\
. Secrets (e.g., DB credentials) are managed using Kubernetes Secrets, not hardcoded in code or images\
. terraform state is protected with locking in GCS to prevent corruption\

Cost Optimization Measures:

. Small instance types used\
. e2-medium for GKE\
. db-f1-micro for MySQL\
. Minimal disk sizes (20GB) for nodes\
. Separate frontend/backend clusters to reduce load costs\
Since Iam using free trail cloud platform I have used required resources\

Secret Management:

. DB Credentials, GCP Credentials are stored in GitHub Secrets\
 -Used in backend deployment YAML\
 -Used in GitHub Actions CI/CD Pipeline\

Backup Strategy:

We can able to perform Cloud SQL backups via Terraform\


