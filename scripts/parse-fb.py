import re
import json

file_path = 'scripts/fb-success.html'

try:
    with open(file_path, 'r', encoding='utf-8') as file:
        html = file.read()
        
    print(f"Read HTML of length {len(html)}")
    
    # Search for any URLs
    urls = re.findall(r'https?://[^\s"\'>]+', html)
    print(f"Found {len(urls)} URLs in HTML")
    
    # Filter for mp4, png, jpg, webp, and clean them
    media_urls = []
    for u in urls:
        # replace escaped slashes like \/
        clean_url = u.replace('\\/', '/')
        # remove anything after quotes or backslashes
        clean_url = re.split(r'\\|"|\'|>|<|;', clean_url)[0]
        if any(ext in clean_url.lower() for ext in ['.mp4', '.png', '.jpg', '.jpeg', '.webp', 'scontent.fhan', 'fbcdn.net/v/']):
            media_urls.append(clean_url)
            
    print(f"Found {len(media_urls)} media URLs:")
    for m in sorted(list(set(media_urls)))[:100]:
        print("  -", m)
        
    # Search for anything containing "bee" or "english" case-insensitively
    matches = re.findall(r'.{0,100}bee.{0,100}', html, re.IGNORECASE)
    print(f"\nFound {len(matches)} matches for 'bee':")
    for match in sorted(list(set(matches)))[:50]:
        print("  -", match.strip())
        
except Exception as e:
    print("Error:", e)
