import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    video_abs = os.path.abspath(r'C:\Users\shahv\.gemini\antigravity\brain\d5483b38-eddd-4338-90a8-f58e1414866a\.user_uploaded\media_1793337387477_010a903a.mp4')
    video_url = 'file:///' + video_abs.replace('\\', '/')
    os.makedirs('extracted_section3', exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 720})
        html_file = os.path.abspath('extracted_section3/player.html')
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(f'''<!DOCTYPE html>
<html>
<body style="margin:0; background:black; display:flex; justify-content:center; align-items:center; height:100vh;">
    <video id="vid" src="{video_url}" muted></video>
</body>
</html>''')
        
        await page.goto('file:///' + html_file.replace('\\', '/'))
        await page.wait_for_selector('#vid')
        
        duration = await page.evaluate('''() => new Promise(resolve => {
            const v = document.getElementById('vid');
            v.onloadedmetadata = () => resolve(v.duration);
            if (v.duration) resolve(v.duration);
            setTimeout(() => resolve(v.duration || 10), 2000);
        })''')
        print(f"Duration: {duration}")
        
        num_frames = 10
        for i in range(num_frames):
            t = (duration / (num_frames - 1)) * i if duration else i
            await page.evaluate(f'''() => new Promise(resolve => {{
                const v = document.getElementById('vid');
                v.currentTime = {t};
                v.onseeked = () => resolve();
                setTimeout(resolve, 500);
            }})''')
            await page.wait_for_timeout(250)
            frame_path = f'extracted_section3/frame_{i}.jpg'
            await page.screenshot(path=frame_path)
            print(f"Saved {frame_path} at {t:.2f}s")
            
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
