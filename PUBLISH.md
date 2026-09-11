# Publishing the site — one checklist

Follow this top to bottom. Every step ends with a **✓ You should see** so you can confirm it worked before moving on.

If something doesn't match, stop and tell me the step number.

**Nothing here touches your current site.** ishajainlab.com keeps showing the Wix site all the way through Step 12. The switch happens at Step 13. If you stop before then, nothing is broken.

---

## What you need

- The `jainlab-site` folder (the one this file is in)
- The login for wherever ishajainlab.com is registered — GoDaddy, Namecheap, Cloudflare, wherever you pay for it
- About 30 minutes today, 10 minutes tomorrow

You do **not** need to install anything or use the command line.

---

# Part 1 — Put the site online

### Step 1. Make a GitHub account

Go to **[github.com/signup](https://github.com/signup)**.

Use a lab email, not a personal one, so the site doesn't belong to one person.

For the username, pick something like **`ishajainlab`** or **`jainlabucsf`**. Write down exactly what you chose — you'll need it three times.

> **✓ You should see:** you're logged in at github.com.

---

### Step 2. Make a repository

A repository is just a folder that lives on GitHub.

1. Click the **+** in the top-right corner → **New repository**
2. **Repository name:** type your username, then `.github.io`
   So if your username is `ishajainlab`, type exactly: **`ishajainlab.github.io`**
3. Select **Public**
4. Do **not** tick "Add a README file"
5. Click **Create repository**

> **Why the odd name?** A repo named exactly `yourname.github.io` is served from the top level of the address. Any other name puts the site in a subfolder, and a few links would break while you're testing. This detail saves a lot of confusion later.

> **✓ You should see:** a mostly empty page with setup instructions.

---

### Step 3. Show hidden files on your Mac

One file in the folder starts with a dot, which makes Finder hide it. If it doesn't get uploaded, some pages break.

Open the `jainlab-site` folder in Finder and press **Cmd + Shift + .** (period).

> **✓ You should see:** a faded file called **`.nojekyll`** appear.

---

### Step 4. Upload the files

1. On your empty repository page, click the link **uploading an existing file**
2. Open the `jainlab-site` folder in Finder
3. Press **Cmd + A** to select everything inside it
4. Drag it all into the browser window

**Select the contents, not the folder itself.** You want `index.html` and the rest sitting at the top level — not a folder called `jainlab-site` containing them.

Now wait. There are around 115 files, including 75 photos. The page shows a count as it goes.

> **✓ You should see:** roughly 115 files listed, including `.nojekyll`.

---

### Step 5. Save the upload

Scroll to the bottom and click the green **Commit changes** button.

> **✓ You should see:** your repository, now listing `index.html`, `assets`, `images`, `data` and the rest.

---

### Step 6. Turn on the website

1. Click **Settings** (along the top of the repository, with a gear icon)
2. In the left sidebar, scroll down and click **Pages**
3. Under "Build and deployment" → **Source**, choose **Deploy from a branch**
4. Under **Branch**, choose **main** and leave the folder as **/ (root)**
5. Click **Save**

> **✓ You should see:** a message that your site is being built.

---

### Step 7. Wait, then look at it

Wait about 2 minutes, then refresh that Settings → Pages screen.

> **✓ You should see:** "Your site is live at **https://YOURNAME.github.io/**"

Click it.

**Your website is now on the internet.** It's at a temporary GitHub address — ishajainlab.com is still showing Wix, untouched.

---

# Part 2 — Check it before connecting the domain

### Step 8. Click through everything

On the temporary address, check:

- [ ] All 6 tabs load: Research, Team, Publications, Datasets, Gallery, Contact
- [ ] The Team page shows **23 people, each with a photo** — nobody showing just initials
- [ ] The Gallery shows photos, and arrow keys move between them
- [ ] On Research, the Oxygen and Vitamins tabs switch colour
- [ ] On Publications, search and the filter buttons work
- [ ] Open it on your phone

### Step 9. Send it to Isha

Share the temporary link with Isha and the lab. It's far easier to fix things now than after the domain moves.

**Tell me about anything wrong and I'll fix it.** Then re-upload just the changed file (Step 16 explains how).

---

# Part 3 — Connect ishajainlab.com

Only once Part 2 looks right.

### Step 10. Tell GitHub the domain

1. In your repository: **Settings → Pages**
2. Find **Custom domain**
3. Type: **`www.ishajainlab.com`**
4. Click **Save**

> **✓ You should see:** a warning that the domain isn't set up yet. That's expected — you do that next.

---

### Step 11. Open your domain settings

Log in wherever ishajainlab.com is registered. Look for **DNS**, **DNS Records**, or **Manage DNS**.

> **✓ You should see:** a table of records with types like A, CNAME, MX, TXT.

---

### Step 12. Remove the old Wix records

Delete any **A**, **AAAA**, or **CNAME** records whose Name is **`@`** or **`www`**.

> ⚠️ **Do not touch MX records.** Those are email. Deleting them stops lab email from working.
>
> Leave TXT records alone too.

---

### Step 13. Add five new records

Add these one at a time. Every registrar words it slightly differently, but they all ask for Type, Name, and Value.

| # | Type | Name | Value |
|---|---|---|---|
| 1 | A | `@` | `185.199.108.153` |
| 2 | A | `@` | `185.199.109.153` |
| 3 | A | `@` | `185.199.110.153` |
| 4 | A | `@` | `185.199.111.153` |
| 5 | CNAME | `www` | `YOURNAME.github.io` |

For record 5, use the username from Step 1, and **end it at `.github.io`** — no repository name, no `https://`, no trailing slash.

> **✓ You should see:** five new rows in your DNS table.

---

### Step 14. Wait

DNS changes take anywhere from 15 minutes to a full day. There is nothing to do but wait.

Check by visiting **www.ishajainlab.com** now and then.

> **✓ You should see:** eventually, your new site. Until then you'll see the old Wix one — that's normal, not a mistake.

---

### Step 15. Turn on the padlock

Once the new site appears at your domain:

1. **Settings → Pages**
2. Tick **Enforce HTTPS**

If the box is greyed out, come back in a few hours — GitHub is still issuing your security certificate. This is normal and can take up to 24 hours.

> **✓ You should see:** a padlock in the address bar at www.ishajainlab.com.

**You're live.**

---

# Part 4 — After it's live

### Step 16. How to change things from now on

Tell me what to change, I edit the file, and you upload just that one file:

1. In your repository, click into the `data` folder and click the file
2. Click the **pencil** icon
3. Paste in the new contents
4. Click **Commit changes**

The site updates in about a minute.

> **One thing to ask me for:** after any content change, say **"re-run the pre-render."** The site builds its content in the browser, which visitors see fine — but search engines read the raw file, and that copy needs refreshing. Forgetting doesn't break anything visible; it just means Google sees slightly old text.

---

### Step 17. Get into Google

Wait until Step 15 is done.

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. **Add property** → choose **Domain** → enter `ishajainlab.com`
3. It gives you a TXT record — add it at your registrar, same place as Step 13
4. Click **Verify**
5. In the sidebar click **Sitemaps**, type `sitemap.xml`, click **Submit**
6. At the top, use **URL Inspection**: paste `https://www.ishajainlab.com/` and click **Request indexing**

That last step gets you into Google in days instead of weeks.

**Optional, 2 minutes:** do the same at [bing.com/webmasters](https://www.bing.com/webmasters) — it can import from Google in one click. Bing also feeds DuckDuckGo and several AI assistants.

---

### Step 18. Ask for links

Email Gladstone and Arc communications and ask them to point their links at the new site. Links from institution websites carry real weight with Google, and both already link to you.

---

### Step 19. Cancel Wix

Wait a week first.

Cancel the **Wix plan**. Do **not** cancel your domain registration — that's separate, it stays where it is, and cancelling it is the one mistake that's genuinely painful to undo.

---

# If something goes wrong

**Pages look like plain text, no colours or layout**
`.nojekyll` didn't upload. In your repo: **Add file → Create new file**, name it `.nojekyll`, leave it empty, **Commit changes**.

**Team photos missing / people showing initials**
The `images` folder didn't fully upload. Upload just that folder again.

**"Domain's DNS record could not be retrieved"**
DNS hasn't caught up. Wait a few hours, then click the retry button on that message.

**Site works at the github.io address but not your domain**
Check record 5 from Step 13. The value must be `YOURNAME.github.io` with nothing after it.

**Enforce HTTPS is greyed out**
Normal. Up to 24 hours.

**You uploaded the folder instead of its contents**
The repo will show a single `jainlab-site` folder. Tell me and I'll walk you through fixing it — it's a two-minute cleanup.

---

## Still stuck?

There's a simpler option if GitHub becomes frustrating: **[app.netlify.com/drop](https://app.netlify.com/drop)** — drag the whole folder onto that page and it's live in about 30 seconds, no account needed to start. You lose the change history that makes GitHub worth it, but it works, and you can connect the same domain afterwards.

Tell me where you got stuck and I'll get you unstuck.
