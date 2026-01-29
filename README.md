<div align="center">

# ⚡ Automated Firebase CI/CD Pipeline
### Enterprise-Grade DevOps Automation for Serverless Applications

![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

## 📖 Overview
This project demonstrates a **secure, production-ready DevOps pipeline** for deploying a serverless application. It moves beyond basic deployment to include security auditing, conditional build logic, and automated verification.

### 🏗️ System Architecture
The application leverages a serverless architecture to ensure high availability and zero maintenance.

![System Architecture](https://mermaid.ink/img/Z3JhcGggTFIKICAgIFVzZXIoKFVzZXIpKSAtLT58SFRUUFN8IENETlsiRmlyZWJhc2UgSG9zdGluZzxici8+KEZyb250ZW5kKSJdCiAgICBVc2VyIC0tPnxQT1NUIC9zZW5kbWFpbHwgRnVuY1siQ2xvdWQgRnVuY3Rpb248YnIvPihCYWNrZW5kKSJdCiAgICAKICAgIHN1YmdyYXBoIFNlY3VyaXR5IExheWVyCiAgICBGdW5jIC0tPnxWZXJpZnl8IFJlY2FwdGNoYVtHb29nbGUgcmVDQVBUQ0hBXQogICAgZW5kCiAgICAKICAgIHN1YmdyYXBoIEV4dGVybmFsIFNlcnZpY2VzCiAgICBGdW5jIC0tPnxEaXNwYXRjaHwgU2VuZEdyaWRbU2VuZEdyaWQgQVBJXQogICAgZW5kCiAgICAKICAgIHN0eWxlIENETiBmaWxsOiNmZmVjYjMsc3Ryb2tlOiNmZjZmMDAKICAgIHN0eWxlIEZ1bmMgZmlsbDojZTFmNWZlLHN0cm9rZTojMDI3N2JkCiAgICBzdHlsZSBSZWNhcHRjaGEgZmlsbDojZjVmNWY1LHN0cm9rZTojYmRiZGJkCiAgICBzdHlsZSBTZW5kR3JpZCBmaWxsOiNlOGY1ZTksc3Ryb2tlOiMyZTdkMzI=)

---

## 🚀 CI/CD Pipeline Logic
The core value of this repository is the **GitHub Actions Workflow** (`.github/workflows/firebase-functions-deploy.yml`), which orchestrates the entire software lifecycle.

![CI/CD Pipeline](https://mermaid.ink/img/Z3JhcGggVEQKICAgIFB1c2hbQ29kZSBQdXNoXSAtLT4gUGFyYWxsZWx7UnVuIGluIFBhcmFsbGVsfQogICAgCiAgICBzdWJncmFwaCBDSSBbQ29udGludW91cyBJbnRlZ3JhdGlvbl0KICAgICAgICBQYXJhbGxlbCAtLT4gTGludCgiTGludGluZyAmIFN0eWxlIikKICAgICAgICBQYXJhbGxlbCAtLT4gQXVkaXQoIlNlY3VyaXR5IEF1ZGl0IikKICAgICAgICBQYXJhbGxlbCAtLT4gVGVzdCgiVW5pdCBUZXN0cyIpCiAgICBlbmQKCiAgICBMaW50ICYgQXVkaXQgJiBUZXN0IC0tPiBDaGVja3tBbGwgUGFzcz99CiAgICAKICAgIENoZWNrIC0tIE5vIC0tPiBGYWlsWyLinYwgU3RvcCBQaXBlbGluZSJdCiAgICBDaGVjayAtLSBZZXMgLS0+IEJ1aWxkWyJCdWlsZCAmIE9wdGltaXplIEFzc2V0cyJdCgogICAgc3ViZ3JhcGggQ0QgW0NvbnRpbnVvdXMgRGVwbG95bWVudF0KICAgICAgICBCdWlsZCAtLT4gRW52e0JyYW5jaD99CiAgICAgICAgRW52IC0tIE1haW4gLS0+IFByb2RbIvCfmoAgRGVwbG95IFByb2R1Y3Rpb24iXQogICAgICAgIEVudiAtLSBQUiAtLT4gUHJldmlld1si8J+RgCBEZXBsb3kgUHJldmlldyBDaGFubmVsIl0KICAgIGVuZAogICAgCiAgICBQcm9kIC0tPiBWZXJpZnlbIvCfj6UgSGVhbHRoIENoZWNrIl0KICAgIFZlcmlmeSAtLT4gTm90aWZ5WyLwn5SUIERpc2NvcmQgTm90aWZpY2F0aW9uIl0KCiAgICBzdHlsZSBDSSBmaWxsOiNmOWZiZTcsc3Ryb2tlOiM4Mjc3MTcsc3Ryb2tlLWRhc2hhcnJheTogNSA1CiAgICBzdHlsZSBDRCBmaWxsOiNlM2YyZmQsc3Ryb2tlOiMwZDQ3YTEKICAgIHN0eWxlIFZlcmlmeSBmaWxsOiNmY2U0ZWMsc3Ryb2tlOiM4ODBlNGY=)

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🧠 Smart Deployment** | Detects changes in `functions/` vs `public/` to only deploy what changed. |
| **🛡️ Security Gates** | Fails build on `npm audit` vulnerabilities or invalid secrets. |
| **👀 PR Previews** | Automatically deploys a temporary live link for every Pull Request. |
| **🤖 Bot Integration** | Comments on PRs with preview links & notifies Discord on status. |
| **🧪 Self-Healing** | Runs post-deploy `curl` health checks to verify site availability. |

---

## 📂 Project Structure

```bash
├── .github/workflows/   # ⚙️ CI/CD Definitions
├── functions/           # ⚡ Backend (Cloud Functions)
│   ├── index.js         #    - API Logic
│   └── package.json     #    - Backend Dependencies
├── public/              # 🎨 Frontend (Hosting)
├── test/                # 🧪 Automated Tests
├── firebase.json        # ☁️ Infrastructure Config
└── package.json         # 📦 Project Root
```

## 🛠️ Configuration

To replicate this pipeline, set these **GitHub Secrets**:

*   🔑 `FIREBASE_SERVICE_ACCOUNT_PROD`: Service Account JSON.
*   📧 `SENDGRID_API_KEY`: Email service API key.
*   🤖 `RECAPTCHA_SECRET`: Google reCAPTCHA secret.
*   🔔 `DISCORD_WEBHOOK`: URL for status notifications.

---
<div align="center">
  <sub>Designed & Built by <b>Tyler Fortune</b></sub>
</div>
