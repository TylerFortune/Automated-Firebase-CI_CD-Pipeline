<div align="center">

# ⚡ Automated Firebase CI/CD Pipeline
### Enterprise-Grade DevOps Automation for Serverless Applications

![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

## 📖 Overview
I developed this repository to showcase a **secure, production-ready DevOps pipeline** for deploying serverless applications. My goal was to move beyond basic deployment by architecting a system that prioritizes security auditing, high-performance execution, and automated verification.

As an IT Project Manager and Developer, I designed this workflow to handle the complexities of modern software delivery—ensuring that every line of code is validated, optimized, and securely deployed without manual intervention.

### 🏗️ My System Architecture
I leverage a serverless architecture to guarantee high availability and eliminate maintenance overhead. 

![System Architecture](https://mermaid.ink/img/Z3JhcGggTFIKICAgIFVzZXIoKFVzZXIpKSAtLT58SFRUUFN8IENETlsiRmlyZWJhc2UgSG9zdGluZzxici8+KEZyb250ZW5kKSJdCiAgICBVc2VyIC0tPnxQT1NUIC9zZW5kbWFpbHwgRnVuY1siQ2xvdWQgRnVuY3Rpb248YnIvPihCYWNrZW5kKSJdCiAgICAKICAgIHN1YmdyYXBoIFNlY3VyaXR5IExheWVyCiAgICBGdW5jIC0tPnxWZXJpZnl8IFJlY2FwdGNoYVtHb29nbGUgcmVDQVBUQ0hBXQogICAgZW5kCiAgICAKICAgIHN0eWxlIENETiBmaWxsOiNmZmVjYjMsc3Ryb2tlOiNmZjZmMDAKICAgIHN0eWxlIEZ1bmMgZmlsbDojZTFmNWZlLHN0cm9rZTojMDI3N2JkCiAgICBzdHlsZSBSZWNhcHRjaGEgZmlsbDojZjVmNWY1LHN0cm9rZTojYmRiZGJk)

---

## 🚀 My CI/CD Pipeline Logic
The core value of this project lies in the **GitHub Actions Workflow** (`.github/workflows/firebase-functions-deploy.yml`). I've orchestrated this pipeline to handle the entire software lifecycle with a focus on **speed and integrity**.

![CI/CD Pipeline](https://mermaid.ink/img/Z3JhcGggVEQKICAgIFB1c2hbQ29kZSBQdXNoXSAtLT4gUGFyYWxsZWx7UnVuIGluIFBhcmFsbGVsfQogICAgCiAgICBzdWJncmFwaCBDSSBbQ29udGludW91cyBJbnRlZ3JhdGlvbl0KICAgICAgICBQYXJhbGxlbCAtLT4gTGludCgiTGludGluZyAmIFN0eWxlIikKICAgICAgICBQYXJhbGxlbCAtLT4gQXVkaXQoIlNlY3VyaXR5IEF1ZGl0IikKICAgICAgICBQYXJhbGxlbCAtLT4gVGVzdCgiVW5pdCBUZXN0cyIpCiAgICBlbmQKCiAgICBMaW50ICYgQXVkaXQgJiBUZXN0IC0tPiBDaGVja3tBbGwgUGFzcz99CiAgICAKICAgIENoZWNrIC0tIE5vIC0tPiBGYWlsWSLinYwgU3RvcCBQaXBlbGluZSJdCiAgICBDaGVjayAtLSBZZXMgLS0+IEJ1aWxkWyJCdWlsZCAmIE9wdGltaXplIEFzc2V0cyJdCgogICAgc3ViZ3JhcGggQ0QgW0NvbnRpbnVvdXMgRGVwbG95bWVudF0KICAgICAgICBCdWlsZCAtLT4gRW52e0JyYW5jaD99CiAgICAgICAgRW52IC0tIE1haW4gLS0+IFByb2RbIvCfmoAgRGVwbG95IFByb2R1Y3Rpb24iXQogICAgICAgIEVudiAtLSBQUiAtLT4gUHJldmlld1si8J+RgCBEZXBsb3kgUHJldmlldyBDaGFubmVsIl0KICAgIGVuZAogICAgCiAgICBQcm9kIC0tPiBWZXJpZnlbIvCfj6UgSGVhbHRoIENoZWNrIl0KICAgIFZlcmlmeSAtLT4gTm90aWZ5WyLwn5SUIERpc2NvcmQgTm90aWZpY2F0aW9uIl0KCiAgICBzdHlsZSBDSSBmaWxsOiNmOWZiZTcsc3Ryb2tlOiM4Mjc3MTcsc3Ryb2tlLWRhc2hhcnJheTogNSA1CiAgICBzdHlsZSBDRCBmaWxsOiNlM2YyZmQsc3Ryb2tlOiMwZDQ3YTEKICAgIHN0eWxlIFZlcmlmeSBmaWxsOiNmY2U0ZWMsc3Ryb2tlOiM4ODBlNGY=)

---

## ✨ Key Features I've Implemented

| Feature | My Logic |
| :--- | :--- |
| **🧠 Smart Deployment** | I use change detection to deploy only modified components (`functions/` or `public/`), saving minutes per run. |
| **🛡️ Security Gates** | I've integrated `npm audit` and secret validation to block vulnerable code from reaching production. |
| **👀 PR Previews** | I've automated the deployment of unique preview links for every Pull Request to facilitate rapid code review. |
| **🤖 Bot Integration** | My pipeline communicates status updates to Discord and provides direct preview links in PR comments. |
| **🧪 Self-Healing** | I've added post-deployment `curl` health checks to ensure the live site is functional before closing the workflow. |

---

## 🛠️ Configuration

To replicate my pipeline, you will need to configure these **GitHub Secrets**:

*   🔑 `FIREBASE_SERVICE_ACCOUNT_PROD`: Your Firebase Service Account JSON.
*   🤖 `RECAPTCHA_SECRET`: Your Google reCAPTCHA secret key.
*   🔔 `DISCORD_WEBHOOK`: Your Discord channel webhook URL for notifications.

For a deep dive into my architectural choices and performance optimizations, please see [CONSTRUCTION.md](./CONSTRUCTION.md).

---
<div align="center">
  <sub>Designed & Built by <b>Tyler Fortune</b></sub>
</div>
