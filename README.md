# Droppable Sample Demo App

A sample React + TypeScript + Vite application designed to showcase Droppable's AI-powered development features. This demo app provides an easy way to test Droppable without connecting your own GitHub repository.

## 🚀 What is Droppable?

Droppable is an AI-powered platform that lets you make instant changes to your web applications by simply describing what you want. Point, click, and tell Claude AI what to change—no traditional developer handoffs needed.

## ✨ Features of This Demo

- **React + TypeScript + Vite** - Modern frontend development stack
- **Pre-configured Widget** - Droppable widget ready for AI interactions
- **Sample UI Components** - Components ready for AI-powered modifications
- **Easy Deployment** - One-click environment creation in Droppable dashboard

## 🎯 Getting Started with Droppable

1. Login to your Droppable dashboard
2. Click the **"🎯 Deploy Sample Demo"** button on the Environments page
3. Wait for automatic deployment (~30 seconds)
4. Click **"Open"** to view your deployed app
5. Start experimenting with AI-powered code modifications!

That's it! No GitHub connection, no repository setup, no manual configuration needed.

## 🤖 Using the Droppable Widget

Once your environment is running, you can:

1. **Click the widget** to open the AI chat interface
2. **Click 📍** to enter element selection mode
3. **Select any element** on the page by clicking it
4. **Describe changes** in natural language (e.g., "Make this button blue and add a hover effect")
5. **Watch Claude modify your code** in real-time!

### Example AI Prompts to Try

- "Change the background color to a dark theme"
- "Add a loading spinner to the button"
- "Make the header sticky when scrolling"
- "Add a gradient border to the card"
- "Change the font to something more modern"

## 🐛 Troubleshooting

### Widget Not Appearing

If the Droppable widget doesn't show up in your deployed app:

**Cause**: The widget script is missing from `index.html`.

**Solution**: Make sure this script tag is included in your `index.html` before the closing `</body>` tag:

```html
<script src="https://widget.droppable.ai/droppable-widget.min.js"></script>
```

The widget should appear automatically once the script is loaded.

### 503 Service Unavailable Error

If you see a 503 error when accessing your deployed environment:

**Cause**: Vite needs to listen on all network interfaces (not just localhost) to be accessible from HAProxy in multi-container deployments.

**Solution**: The run command has been updated to include `--host 0.0.0.0`. If you deployed before this fix:
1. Go to **Environment Settings**
2. Update the **Run Command** to: `npm run dev -- --host 0.0.0.0 --port $PORT --strictPort`
3. Click **Save & Restart**

Alternatively, just delete and redeploy the sample demo for the latest configuration.

### Vite Host Check Error (403 Forbidden)

If you get 403 errors when accessing through a proxy:

**Solution**: The `vite.config.ts` includes `allowedHosts` configuration. Make sure your domain is listed:

```typescript
server: {
  allowedHosts: [".env.droppable.ai", 'localhost'],
}
```

Add your custom domain if needed.
