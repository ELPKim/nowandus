# Security Policy

## Supported Versions

Currently, the latest version on the `main` branch is supported for security updates.

## Reporting a Vulnerability

If you discover a potential security vulnerability (such as a leaked API key or insecure data handling), please do not report it publicly via GitHub Issues.

Instead, please send an email to: **alsrlwkdrn@gmail.com** (as identified from git history).

We will respond to your report within 48 hours and work with you to resolve the issue as quickly as possible.

## Best Practices in this Repository

- **API Keys**: All API keys (World News, Exchange Rates) must be stored in GitHub Secrets and NEVER hardcoded in the codebase.
- **Environment Variables**: Scripts use `os.environ.get()` to access keys safely during GitHub Actions runs.
- **Client-side Data**: No sensitive keys are sent to the client's browser. All data fetching requiring keys is done on the server-side (GitHub Actions).
