# Deploying to Netlify

The repository is `mehdee-waseem/spotscholars`. Netlify builds it automatically from GitHub.

## First-time setup (5 minutes)

1. Log in at [app.netlify.com](https://app.netlify.com).
2. **Add new site → Import an existing project → GitHub**.
3. Pick **mehdee-waseem/spotscholars** (if it isn't listed, click *Configure the Netlify app on GitHub* and give it access to this repo).
4. Netlify reads `netlify.toml`, so the settings are already filled in:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
5. Click **Deploy**. After about a minute you get a URL like `random-name.netlify.app`.
6. **Site configuration → Change site name** → `spotscholars` gives you `spotscholars.netlify.app` (if it's free).

## Every update after that

```
edit files → git commit → git push   (or edit directly on github.com)
        ↓
Netlify sees the push → builds → site is live in ~1 minute
```

Check progress under **Deploys** in Netlify. If a build fails, open it and read the log — it names the file and line.

## Contact form emails

The contact form uses Netlify Forms, which turns on automatically.

1. After the first deploy, open **Forms** in Netlify — you should see a form called `contact`. (If not, go to **Forms → Enable form detection** and redeploy.)
2. **Forms → Form notifications → Add notification → Email notification** → `spotscholars@gmail.com`.

Messages then arrive in your Gmail and are also listed in Netlify. The free plan includes 100 submissions per month.

## Custom domain (optional)

Buy a domain (e.g. `spotscholars.com`), then **Domain management → Add a domain** in Netlify and follow its DNS instructions. HTTPS is set up automatically.

## Check the API

After deploying, open `https://<your-site>.netlify.app/api/health` — you should see `{"ok":true,...}`.
